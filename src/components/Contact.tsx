"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { siteConfig } from "@/config";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  message: string;
}

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    // TODO: Wire up to Resend / Formspree / API route
    console.log("Contact form submitted:", data);
    // Simulate submission
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-charcoal">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm tracking-[0.3em] uppercase font-light">
            Get in Touch
          </span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream mt-3">
            Contact Us
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-gold"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="font-serif text-2xl text-cream">Thank You</h3>
                <p className="text-cream/60 mt-2 font-light">
                  We&apos;ll be in touch within one business day.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Full Name"
                    className="w-full bg-transparent border-b border-cream/20 text-cream py-3 placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors text-sm"
                  />
                  {errors.name && (
                    <span className="text-red-400 text-xs mt-1">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <input
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email",
                        },
                      })}
                      type="email"
                      placeholder="Email"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors text-sm"
                    />
                    {errors.email && (
                      <span className="text-red-400 text-xs mt-1">
                        {errors.email.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      {...register("phone")}
                      type="tel"
                      placeholder="Phone (optional)"
                      className="w-full bg-transparent border-b border-cream/20 text-cream py-3 placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <select
                    {...register("projectType")}
                    className="w-full bg-transparent border-b border-cream/20 text-cream/60 py-3 focus:border-gold focus:outline-none transition-colors text-sm appearance-none"
                  >
                    <option value="" className="bg-charcoal">
                      Project Type
                    </option>
                    <option value="kitchen" className="bg-charcoal">
                      Kitchen Countertops
                    </option>
                    <option value="bathroom" className="bg-charcoal">
                      Bathroom Vanity
                    </option>
                    <option value="fireplace" className="bg-charcoal">
                      Fireplace Surround
                    </option>
                    <option value="other" className="bg-charcoal">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <textarea
                    {...register("message")}
                    rows={4}
                    placeholder="Tell us about your project..."
                    className="w-full bg-transparent border-b border-cream/20 text-cream py-3 placeholder:text-cream/30 focus:border-gold focus:outline-none transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gold text-charcoal font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors duration-300 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <div>
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Visit Our Showroom
                </h3>
                <p className="text-cream/80 font-light">
                  {siteConfig.address.full}
                </p>
              </div>
              <div>
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Call Us
                </h3>
                <a
                  href={siteConfig.phoneHref}
                  className="text-cream text-2xl font-serif hover:text-gold transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </div>
              <div>
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase mb-2">
                  Hours
                </h3>
                <p className="text-cream/80 font-light">{siteConfig.hours}</p>
              </div>
            </div>

            {/* Map */}
            <div className="aspect-[4/3] w-full overflow-hidden">
              <iframe
                src={siteConfig.address.mapEmbedUrl}
                className="w-full h-full border-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DaVinci Stone Location"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
