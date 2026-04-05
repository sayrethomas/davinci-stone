import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import graniteData from "@/data/materials/granite.json";
import quartzData from "@/data/materials/quartz.json";

const materialsMap: Record<string, typeof graniteData> = {
  granite: graniteData,
  quartz: quartzData,
};

const heroImages: Record<string, string> = {
  granite: "/images/kitchen/DSC_0098.jpg",
  quartz: "/images/kitchen/quartz2.jpg",
};

export function generateStaticParams() {
  return Object.keys(materialsMap).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const mat = materialsMap[params.slug];
  if (!mat) return {};
  return {
    title: `${mat.name} Countertops | DaVinci Stone`,
    description: mat.description,
  };
}

export default function MaterialPage({
  params,
}: {
  params: { slug: string };
}) {
  const mat = materialsMap[params.slug];
  if (!mat) notFound();

  return (
    <div className="min-h-screen bg-cream">
      {/* Hero banner */}
      <div className="relative h-[50vh] min-h-[400px] overflow-hidden">
        <Image
          src={heroImages[params.slug] || heroImages.granite}
          alt={`${mat.name} countertop surface`}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="relative z-10 h-full flex flex-col justify-end max-w-5xl mx-auto px-6 pb-12">
          <Link
            href="/#materials"
            className="text-cream/60 hover:text-gold text-sm tracking-wider uppercase mb-4 transition-colors inline-flex items-center gap-2"
          >
            <span>&larr;</span> All Materials
          </Link>
          <h1 className="font-serif text-5xl md:text-7xl text-cream">
            {mat.name}
          </h1>
          <p className="text-cream/70 text-xl font-light mt-3 max-w-lg">
            {mat.headline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-16">
          {/* Description */}
          <div className="md:col-span-2 space-y-6">
            <p className="text-warm-gray text-lg leading-relaxed font-light">
              {mat.longDescription}
            </p>

            {/* CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/#visualizer"
                className="px-6 py-3 bg-gold text-charcoal text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors text-center"
              >
                Visualize This Material
              </a>
              <Link
                href="/request"
                className="px-6 py-3 border border-charcoal/20 text-charcoal text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors text-center"
              >
                Request a Measurement
              </Link>
            </div>
          </div>

          {/* Properties */}
          <div className="bg-white p-8 space-y-5">
            <h3 className="font-serif text-xl text-charcoal">Properties</h3>
            {Object.entries(mat.properties).map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-charcoal/10 pb-3">
                <span className="text-warm-gray text-sm capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </span>
                <span className="text-charcoal text-sm font-medium">
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Color swatches */}
        <div className="mt-16">
          <h3 className="font-serif text-2xl text-charcoal mb-8">
            Available Colors
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
            {mat.colors.map((color) => (
              <div key={color.name} className="group text-center">
                <div
                  className="aspect-square rounded-sm border border-charcoal/10 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg"
                  style={{ backgroundColor: color.hex }}
                />
                <p className="text-charcoal text-xs mt-3 tracking-wider">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer nav */}
      <div className="bg-charcoal py-8 px-6">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <span className="font-serif text-xl text-cream">DaVinci</span>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Stone
            </span>
          </Link>
          <Link
            href="/#materials"
            className="text-cream/60 hover:text-gold text-sm tracking-wider transition-colors"
          >
            View All Materials
          </Link>
        </div>
      </div>
    </div>
  );
}
