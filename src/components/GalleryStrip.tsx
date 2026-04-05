"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const galleryItems = [
  {
    id: 1,
    category: "kitchen" as const,
    label: "Custom Kitchen Countertop",
    src: "/images/kitchen/1kitchen-1.jpg",
  },
  {
    id: 2,
    category: "bathroom" as const,
    label: "Elegant Bathroom Vanity",
    src: "/images/bathroom/4bath-1.jpg",
  },
  {
    id: 3,
    category: "kitchen" as const,
    label: "Granite Kitchen Island",
    src: "/images/kitchen/3kitchen-1.jpg",
  },
  {
    id: 4,
    category: "bathroom" as const,
    label: "Master Bath Stone Vanity",
    src: "/images/bathroom/3bath-1.jpg",
  },
  {
    id: 5,
    category: "kitchen" as const,
    label: "Modern Kitchen Remodel",
    src: "/images/kitchen/5kitchen-1.jpg",
  },
  {
    id: 6,
    category: "kitchen" as const,
    label: "Full Kitchen Transformation",
    src: "/images/kitchen/DSC_0098.jpg",
  },
  {
    id: 7,
    category: "bathroom" as const,
    label: "Spa-Inspired Bathroom",
    src: "/images/bathroom/1bath-1.jpg",
  },
  {
    id: 8,
    category: "kitchen" as const,
    label: "Quartz Kitchen Countertop",
    src: "/images/kitchen/quartz2.jpg",
  },
  {
    id: 9,
    category: "kitchen" as const,
    label: "Contemporary Kitchen Design",
    src: "/images/kitchen/slider14.jpg",
  },
  {
    id: 10,
    category: "bathroom" as const,
    label: "Custom Bathroom Countertop",
    src: "/images/bathroom/2bath-1.jpg",
  },
  {
    id: 11,
    category: "kitchen" as const,
    label: "Luxury Kitchen Stone Work",
    src: "/images/kitchen/36th-and-hill-kitchen-2_15495475092_o.jpg",
  },
  {
    id: 12,
    category: "bathroom" as const,
    label: "Granite Bathroom Surface",
    src: "/images/bathroom/7-1.jpg",
  },
  {
    id: 13,
    category: "kitchen" as const,
    label: "Kitchen Countertop Installation",
    src: "/images/kitchen/7kitchen-1.jpg",
  },
  {
    id: 14,
    category: "bathroom" as const,
    label: "Stone Bathroom Detail",
    src: "/images/bathroom/8-1.jpg",
  },
  {
    id: 15,
    category: "kitchen" as const,
    label: "Premium Kitchen Surface",
    src: "/images/kitchen/4kitchen.jpg",
  },
  {
    id: 16,
    category: "bathroom" as const,
    label: "Bathroom Vanity Top",
    src: "/images/bathroom/9-2.jpg",
  },
  {
    id: 17,
    category: "kitchen" as const,
    label: "Classic Kitchen Granite",
    src: "/images/kitchen/6kitchen.jpg",
  },
  {
    id: 18,
    category: "bathroom" as const,
    label: "Elegant Bath Stone",
    src: "/images/bathroom/5.jpg",
  },
];

type Filter = "all" | "kitchen" | "bathroom";

const NAV_PAUSE_MS = 3000;

export default function GalleryStrip() {
  const [filter, setFilter] = useState<Filter>("all");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [expanded, setExpanded] = useState(false);
  const pausedUntil = useRef(0);
  const posRef = useRef(0);

  const filtered =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((i) => i.category === filter);

  // Lazy auto-scroll — starts immediately, pauses when nav is used
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;
    posRef.current = 0;
    el.scrollLeft = 0;

    const tick = () => {
      // Only scroll once content is wide enough to loop
      const halfWidth = el.scrollWidth / 2;
      const now = Date.now();
      if (halfWidth > 0 && now > pausedUntil.current) {
        posRef.current += 0.4;
        if (posRef.current >= halfWidth) posRef.current = 0;
        el.scrollLeft = posRef.current;
      }
      animId = requestAnimationFrame(tick);
    };

    // Pause auto-scroll while user is touch-dragging
    const onTouchStart = () => {
      pausedUntil.current = Infinity;
    };
    const onTouchEnd = () => {
      // Resume after a short delay so user's flick settles
      setTimeout(() => {
        posRef.current = el.scrollLeft;
        pausedUntil.current = Date.now() + 1500;
      }, 300);
    };
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd);

    // Small delay so images load and scrollWidth is accurate
    const startTimer = setTimeout(() => {
      posRef.current = el.scrollLeft;
      animId = requestAnimationFrame(tick);
    }, 100);

    return () => {
      clearTimeout(startTimer);
      cancelAnimationFrame(animId);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [filter]);

  const navigate = useCallback(
    (direction: "left" | "right") => {
      const el = scrollRef.current;
      if (!el) return;
      // Pause auto-scroll
      pausedUntil.current = Date.now() + NAV_PAUSE_MS;
      // Calculate card width from actual first child
      const firstCard = el.firstElementChild as HTMLElement | null;
      const cardWidth = firstCard ? firstCard.offsetWidth + 20 : 320; // 20 = gap-5
      const delta = direction === "right" ? cardWidth : -cardWidth;
      el.scrollBy({ left: delta, behavior: "smooth" });
      // Sync posRef after the smooth scroll settles
      setTimeout(() => {
        posRef.current = el.scrollLeft;
      }, 400);
    },
    [],
  );

  return (
    <section id="gallery" className="py-14 md:py-28 bg-cream overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
            Portfolio
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-charcoal mt-3">
            Our Craftsmanship
          </h2>
        </motion.div>

        {/* Filter chips + nav arrows */}
        <div className="flex items-center justify-between mb-8 sm:mb-10 gap-4">
          <div className="flex gap-2 sm:gap-3 flex-wrap">
            {(["all", "kitchen", "bathroom"] as Filter[]).map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-3 sm:px-5 py-2 text-[10px] sm:text-xs tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-300 ${
                  filter === f
                    ? "bg-charcoal text-cream"
                    : "bg-transparent text-charcoal/60 border border-charcoal/20 hover:border-charcoal/40"
                }`}
              >
                {f === "all" ? "All Projects" : f}
              </button>
            ))}
          </div>

          {/* Nav arrows */}
          <div className="flex gap-2">
            <button
              onClick={() => navigate("left")}
              aria-label="Scroll gallery left"
              className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M10 3L5 8L10 13" />
              </svg>
            </button>
            <button
              onClick={() => navigate("right")}
              aria-label="Scroll gallery right"
              className="w-10 h-10 border border-charcoal/20 flex items-center justify-center text-charcoal/60 hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M6 3L11 8L6 13" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrolling gallery */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
        >
          {/* Double items for seamless scroll loop */}
          {[...filtered, ...filtered].map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="flex-shrink-0 w-[260px] sm:w-[300px] md:w-[400px] h-[200px] sm:h-[250px] md:h-[320px] relative group overflow-hidden bg-light-gray"
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 300px, 400px"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500 flex items-end">
                <div className="p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-gold text-xs tracking-[0.2em] uppercase">
                    {item.category}
                  </span>
                  <p className="text-cream text-sm mt-1 font-light">
                    {item.label}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Expand toggle */}
        {!expanded && (
          <div className="text-center mt-8">
            <button
              onClick={() => setExpanded(true)}
              className="text-charcoal/60 hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors duration-300"
            >
              See all projects
            </button>
          </div>
        )}

        {/* Expanded grid */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10"
          >
            {filtered.map((item) => (
              <div
                key={item.id}
                className="aspect-[4/3] relative group overflow-hidden bg-light-gray"
              >
                <Image
                  src={item.src}
                  alt={item.label}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/50 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                    <span className="text-gold text-xs tracking-[0.2em] uppercase">
                      {item.category}
                    </span>
                    <p className="text-cream text-xs mt-1">{item.label}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
}
