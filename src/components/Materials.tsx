"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import graniteData from "@/data/materials/granite.json";
import quartzData from "@/data/materials/quartz.json";

const materialImages: Record<string, string> = {
  granite: "/images/kitchen/DSC_0098.jpg",
  quartz: "/images/kitchen/quartz2.jpg",
};

const materials = [graniteData, quartzData];

export default function Materials() {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <section id="materials" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
            Selection
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3">
            Our Stone Collection
          </h2>
          <p className="text-warm-gray mt-4 max-w-xl mx-auto text-lg font-light">
            Each slab is hand-selected for quality, beauty, and character.
            Explore our curated collection.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {materials.map((mat, i) => {
            const isExpanded = expanded === mat.slug;

            return (
              <motion.div
                key={mat.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, delay: i * 0.15 }}
              >
                <button
                  onClick={() =>
                    setExpanded(isExpanded ? null : mat.slug)
                  }
                  className="block w-full text-left group relative overflow-hidden"
                >
                  <div className="aspect-[16/10] relative">
                    <Image
                      src={materialImages[mat.slug]}
                      alt={`${mat.name} countertop`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/95 via-charcoal/60 to-charcoal/30" />

                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                      <h3 className="font-serif text-2xl sm:text-3xl text-cream">
                        {mat.name}
                      </h3>
                      <p className="text-cream/70 mt-2 text-sm font-light max-w-sm">
                        {mat.description}
                      </p>

                      <div className="mt-5 flex items-center gap-2 text-gold text-sm tracking-[0.2em] uppercase">
                        <span>
                          {isExpanded
                            ? "Hide Collection"
                            : "Explore Collection"}
                        </span>
                        <span
                          className={`transition-transform duration-300 ${
                            isExpanded ? "rotate-90" : "group-hover:translate-x-2"
                          }`}
                        >
                          &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                </button>

                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-3 pt-4">
                        {mat.slabs.map((slab) => (
                          <div key={slab.name} className="group/slab">
                            <div className="aspect-square relative overflow-hidden bg-light-gray">
                              <Image
                                src={slab.src}
                                alt={slab.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover/slab:scale-110"
                                sizes="(max-width: 768px) 33vw, 150px"
                              />
                            </div>
                            <p className="text-charcoal text-xs mt-2 tracking-wider text-center font-light">
                              {slab.name}
                            </p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
