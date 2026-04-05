import { siteConfig } from "@/config";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-cream/10 py-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="font-serif text-xl text-cream tracking-wide">
              DaVinci
            </span>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Stone
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-cream/40 text-xs tracking-wider">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-gold transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a href="/request" className="hover:text-gold transition-colors">
              Free Measurement
            </a>
          </div>

          <div className="text-cream/30 text-xs">
            &copy; {new Date().getFullYear()} DaVinci Stone. All rights
            reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
