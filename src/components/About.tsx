"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-[4/5] relative overflow-hidden bg-light-gray">
              <Image
                src="/images/kitchen/slider14.jpg"
                alt="DaVinci Stone craftsmanship"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Gold accent block */}
            <div className="absolute -bottom-4 right-0 w-32 h-32 bg-gold/10 -z-10" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
              Our Story
            </span>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3 leading-tight">
              Family Owned.
              <br />
              Craft Driven.
            </h2>

            <div className="mt-8 space-y-5 text-warm-gray text-base leading-relaxed font-light">
              <p>
                We are a family owned and operated stone fabricator based in
                Boise, Idaho. For over a decade, we&apos;ve been transforming
                homes across the Treasure Valley with the natural beauty of
                granite, quartz, and engineered stone.
              </p>
              <p>
                The elegance, luxury, and subtle convenience of natural stone
                can turn an ordinary kitchen into a culinary heaven and a
                bathroom into an oasis escape. At DaVinci Stone, we believe
                every home deserves that transformation.
              </p>
              <p>
                From hand-selecting each slab to the precision of our
                fabrication and installation, we take care of every detail so
                you can simply revel in the luxury.
              </p>
            </div>

            {/* Trust signals */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-10 sm:mt-12 pt-8 border-t border-charcoal/10">
              <div>
                <div className="font-serif text-3xl text-charcoal">10+</div>
                <div className="text-warm-gray text-xs tracking-[0.15em] uppercase mt-1">
                  Years in Business
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-charcoal">1000+</div>
                <div className="text-warm-gray text-xs tracking-[0.15em] uppercase mt-1">
                  Slabs Installed
                </div>
              </div>
              <div>
                <div className="font-serif text-3xl text-charcoal">100%</div>
                <div className="text-warm-gray text-xs tracking-[0.15em] uppercase mt-1">
                  Satisfaction
                </div>
              </div>
            </div>

            {/* Customer quote */}
            <blockquote className="mt-10 pl-5 border-l-2 border-gold">
              <p className="text-charcoal/70 italic text-sm leading-relaxed">
                &ldquo;DaVinci Stone transformed our kitchen beyond what we
                imagined. The attention to detail and quality of craftsmanship
                is unmatched. We couldn&apos;t be happier.&rdquo;
              </p>
              <cite className="text-warm-gray text-xs mt-2 block not-italic tracking-wider">
                &mdash; Satisfied Homeowner, Boise ID
              </cite>
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
