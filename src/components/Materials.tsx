"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import graniteData from "@/data/materials/granite.json";
import quartzData from "@/data/materials/quartz.json";

const materialImages: Record<string, string> = {
  granite: "/images/kitchen/DSC_0098.jpg",
  quartz: "/images/kitchen/quartz2.jpg",
};

const materials = [graniteData, quartzData];

export default function Materials() {
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
          {materials.map((mat, i) => (
            <motion.div
              key={mat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
            >
              <Link
                href={`/materials/${mat.slug}`}
                className="block group relative overflow-hidden"
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

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-8">
                    <h3 className="font-serif text-2xl sm:text-3xl text-cream">
                      {mat.name}
                    </h3>
                    <p className="text-cream/70 mt-2 text-sm font-light max-w-sm">
                      {mat.description}
                    </p>

                    {/* Color swatches */}
                    <div className="flex gap-2 mt-4">
                      {mat.colors.slice(0, 5).map((c) => (
                        <div
                          key={c.name}
                          className="w-6 h-6 rounded-full border border-cream/20"
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        />
                      ))}
                      {mat.colors.length > 5 && (
                        <span className="text-cream/50 text-xs self-center ml-1">
                          +{mat.colors.length - 5}
                        </span>
                      )}
                    </div>

                    <div className="mt-5 flex items-center gap-2 text-gold text-sm tracking-[0.2em] uppercase">
                      <span>Explore Collection</span>
                      <span className="transition-transform duration-300 group-hover:translate-x-2">
                        &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
