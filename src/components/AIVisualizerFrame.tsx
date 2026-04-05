"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";

export default function AIVisualizerFrame() {
  const [loaded, setLoaded] = useState(false);

  return (
    <section id="visualizer" className="relative bg-charcoal py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
            AI-Powered
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-3">
            Visualize Your Dream Space
          </h2>
          <p className="text-cream/60 mt-4 max-w-xl mx-auto text-lg font-light">
            Upload a photo of your kitchen or bathroom and see how our stone
            selections transform your space — instantly.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full rounded-sm overflow-hidden shadow-2xl"
          style={{ minHeight: "300px", height: "clamp(300px, 60vh, 800px)" }}
        >
          {/* Loading skeleton */}
          {!loaded && (
            <div className="absolute inset-0 bg-charcoal flex items-center justify-center">
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-2 border-gold/30 border-t-gold rounded-full animate-spin" />
                <span className="text-cream/50 text-sm tracking-wider">
                  Loading visualizer...
                </span>
              </div>
            </div>
          )}

          <iframe
            src={siteConfig.visualizerUrl}
            className="w-full h-full border-0"
            allow="camera; clipboard-write"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
            title="DaVinci Stone Space Visualizer"
            onLoad={() => setLoaded(true)}
          />
        </motion.div>

        <p className="text-center text-cream/40 text-xs mt-4 tracking-wider">
          AI suggestions are for inspiration — final results may vary based on
          lighting and material selection.
        </p>
      </div>
    </section>
  );
}
