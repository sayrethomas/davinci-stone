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
  {
    id: 19,
    category: "kitchen" as const,
    label: "Black Marble Waterfall Island",
    src: "/images/kitchen/aa.jpeg",
  },
  {
    id: 20,
    category: "kitchen" as const,
    label: "White Quartz Waterfall Edge",
    src: "/images/kitchen/aaaa.jpeg",
  },
  {
    id: 21,
    category: "kitchen" as const,
    label: "Quartz Island with Pendant Lights",
    src: "/images/kitchen/acx.jpeg",
  },
  {
    id: 22,
    category: "kitchen" as const,
    label: "Modern Quartz Kitchen",
    src: "/images/kitchen/j.jpeg",
  },
  {
    id: 23,
    category: "kitchen" as const,
    label: "Granite with Tile Backsplash",
    src: "/images/kitchen/counter11.JPG",
  },
  {
    id: 24,
    category: "kitchen" as const,
    label: "Granite Peninsula with Sink",
    src: "/images/kitchen/counter12.JPG",
  },
  {
    id: 25,
    category: "kitchen" as const,
    label: "Quartz Island with Bar Seating",
    src: "/images/kitchen/counter5.jpg",
  },
  {
    id: 26,
    category: "kitchen" as const,
    label: "Quartz Wet Bar Counter",
    src: "/images/kitchen/counter6.jpg",
  },
  {
    id: 27,
    category: "kitchen" as const,
    label: "Dark Quartz with LED Accent",
    src: "/images/kitchen/counter7.jpg",
  },
  {
    id: 28,
    category: "kitchen" as const,
    label: "Designer Kitchen Island",
    src: "/images/kitchen/counter8.jpg",
  },
  {
    id: 29,
    category: "kitchen" as const,
    label: "Rustic Granite Kitchen",
    src: "/images/kitchen/13kitchen.jpg",
  },
  {
    id: 30,
    category: "kitchen" as const,
    label: "Granite Island with Rustic Cabinets",
    src: "/images/kitchen/1kitchen.jpg",
  },
  {
    id: 31,
    category: "kitchen" as const,
    label: "Large Quartz Kitchen Island",
    src: "/images/kitchen/2-1.jpg",
  },
  {
    id: 32,
    category: "kitchen" as const,
    label: "Dual-Tone Kitchen Design",
    src: "/images/kitchen/2kitchen.jpg",
  },
  {
    id: 33,
    category: "bathroom" as const,
    label: "Granite Single Vanity",
    src: "/images/bathroom/a.jpeg",
  },
  {
    id: 34,
    category: "bathroom" as const,
    label: "Dark Cabinet Granite Vanity",
    src: "/images/bathroom/aa.jpeg",
  },
  {
    id: 35,
    category: "bathroom" as const,
    label: "White Quartz Vanity Install",
    src: "/images/bathroom/aaa.jpeg",
  },
  {
    id: 36,
    category: "bathroom" as const,
    label: "Quartz Vanity with Accent Wall",
    src: "/images/bathroom/aaa copy.jpeg",
  },
  {
    id: 37,
    category: "bathroom" as const,
    label: "L-Shaped Double Vanity",
    src: "/images/bathroom/aaaaa.jpeg",
  },
  {
    id: 38,
    category: "bathroom" as const,
    label: "Rustic Marble Vanity Top",
    src: "/images/bathroom/ab.jpeg",
  },
  {
    id: 39,
    category: "bathroom" as const,
    label: "Quartz Vanity with Arched Mirror",
    src: "/images/bathroom/counter.jpg",
  },
  {
    id: 40,
    category: "bathroom" as const,
    label: "Quartz Laundry Room Counter",
    src: "/images/bathroom/counter2.jpg",
  },
  {
    id: 41,
    category: "bathroom" as const,
    label: "Quartz Double Vanity",
    src: "/images/bathroom/counter4.jpg",
  },
  {
    id: 42,
    category: "bathroom" as const,
    label: "Quartz Powder Room Vanity",
    src: "/images/bathroom/counter9.jpg",
  },
  {
    id: 43,
    category: "bathroom" as const,
    label: "Quartz Bar with Wine Cooler",
    src: "/images/bathroom/counter10.JPG",
  },
  {
    id: 44,
    category: "bathroom" as const,
    label: "Natural Granite Vanity",
    src: "/images/bathroom/counter13.JPG",
  },
  {
    id: 45,
    category: "bathroom" as const,
    label: "Gray Cabinet Quartz Vanity",
    src: "/images/bathroom/IMG_8359.jpeg",
  },
  {
    id: 46,
    category: "bathroom" as const,
    label: "Quartz Vanity with Round Mirror",
    src: "/images/bathroom/IMG_8360.jpeg",
  },
  {
    id: 47,
    category: "bathroom" as const,
    label: "Quartz Bar with Tile Backsplash",
    src: "/images/bathroom/IMG_8369.jpeg",
  },
  {
    id: 48,
    category: "bathroom" as const,
    label: "Quartz Vanity with Gold Mirror",
    src: "/images/bathroom/IMG_8377.jpeg",
  },
  {
    id: 49,
    category: "kitchen" as const,
    label: "White Quartz Kitchen Island",
    src: "/images/kitchen/kk.jpeg",
  },
  {
    id: 50,
    category: "bathroom" as const,
    label: "Dark Cabinet L-Shaped Vanity",
    src: "/images/bathroom/oo.jpeg",
  },
  {
    id: 51,
    category: "bathroom" as const,
    label: "Double Vanity with Dark Cabinets",
    src: "/images/bathroom/1.jpg",
  },
  {
    id: 52,
    category: "bathroom" as const,
    label: "Granite Double Vanity with Shower",
    src: "/images/bathroom/3.jpg",
  },
  {
    id: 53,
    category: "bathroom" as const,
    label: "Granite Powder Room with Mosaic",
    src: "/images/bathroom/4.jpg",
  },
  {
    id: 54,
    category: "bathroom" as const,
    label: "Designer Double Vanity",
    src: "/images/bathroom/6.jpg",
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
