"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config";

interface MeasurementFormData {
  // Step 1
  name: string;
  email: string;
  phone: string;
  address: string;
  // Step 2
  projectType: string;
  material: string;
  estimatedSize: string;
  details: string;
  // Step 3
  preferredDate: string;
  preferredTime: string;
  howHeard: string;
}

export default function RequestMeasurement() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors, isSubmitting },
  } = useForm<MeasurementFormData>();

  const nextStep = async () => {
    const fieldsPerStep: Record<number, (keyof MeasurementFormData)[]> = {
      1: ["name", "email", "phone"],
      2: ["projectType"],
    };
    const valid = await trigger(fieldsPerStep[step]);
    if (valid) setStep((s) => s + 1);
  };

  const onSubmit = async (data: MeasurementFormData) => {
    // TODO: Wire up to Resend / Formspree / API route
    console.log("Measurement request:", data);
    await new Promise((r) => setTimeout(r, 1000));
    setSubmitted(true);
  };

  const inputClass =
    "w-full bg-transparent border-b border-charcoal/20 py-3 placeholder:text-warm-gray/50 focus:border-gold focus:outline-none transition-colors text-sm text-charcoal";

  if (submitted) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center max-w-md"
        >
          <div className="w-20 h-20 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-10 h-10 text-gold"
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
          <h1 className="font-serif text-4xl text-charcoal">
            Request Received
          </h1>
          <p className="text-warm-gray mt-4 font-light leading-relaxed">
            Thank you! We&apos;ll contact you within one business day to
            schedule your free measurement. In the meantime, feel free to
            explore our materials.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#materials"
              className="px-6 py-3 bg-gold text-charcoal text-sm font-semibold tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
            >
              Explore Materials
            </Link>
            <Link
              href="/"
              className="px-6 py-3 border border-charcoal/20 text-charcoal text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-charcoal py-6 px-6">
        <div className="max-w-3xl mx-auto flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3 group"
          >
            <span className="font-serif text-xl text-cream tracking-wide">
              DaVinci
            </span>
            <span className="text-gold text-xs tracking-[0.3em] uppercase">
              Stone
            </span>
          </Link>
          <a
            href={siteConfig.phoneHref}
            className="text-cream/60 hover:text-gold text-sm transition-colors"
          >
            {siteConfig.phone}
          </a>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
            Request a Free Measurement
          </h1>
          <p className="text-warm-gray mt-4 font-light">
            Tell us about your project and we&apos;ll come to you.
          </p>
        </motion.div>

        {/* Step indicator */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-semibold transition-colors ${
                  step >= s
                    ? "bg-gold text-charcoal"
                    : "bg-charcoal/10 text-charcoal/40"
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div
                  className={`w-12 h-[1px] transition-colors ${
                    step > s ? "bg-gold" : "bg-charcoal/10"
                  }`}
                />
              )}
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Step 1: Contact Info */}
          {step === 1 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Your Information
              </h2>
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Full Name *"
                  className={inputClass}
                />
                {errors.name && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.name.message}
                  </span>
                )}
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
                    placeholder="Email *"
                    className={inputClass}
                  />
                  {errors.email && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.email.message}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    {...register("phone", { required: "Phone is required" })}
                    type="tel"
                    placeholder="Phone *"
                    className={inputClass}
                  />
                  {errors.phone && (
                    <span className="text-red-500 text-xs mt-1">
                      {errors.phone.message}
                    </span>
                  )}
                </div>
              </div>
              <div>
                <input
                  {...register("address")}
                  placeholder="Project Address (optional)"
                  className={inputClass}
                />
              </div>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-4 bg-gold text-charcoal font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 2: Project Details */}
          {step === 2 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Project Details
              </h2>
              <div>
                <select
                  {...register("projectType", {
                    required: "Please select a project type",
                  })}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">Project Type *</option>
                  <option value="kitchen">Kitchen Countertops</option>
                  <option value="bathroom">Bathroom Vanity</option>
                  <option value="fireplace">Fireplace Surround</option>
                  <option value="outdoor">Outdoor Kitchen</option>
                  <option value="commercial">Commercial Project</option>
                  <option value="other">Other</option>
                </select>
                {errors.projectType && (
                  <span className="text-red-500 text-xs mt-1">
                    {errors.projectType.message}
                  </span>
                )}
              </div>
              <div>
                <select {...register("material")} className={`${inputClass} appearance-none`}>
                  <option value="">Preferred Material (optional)</option>
                  <option value="granite">Granite</option>
                  <option value="quartz">Quartz</option>
                  <option value="undecided">Not Sure Yet</option>
                </select>
              </div>
              <div>
                <input
                  {...register("estimatedSize")}
                  placeholder="Estimated square footage (optional)"
                  className={inputClass}
                />
              </div>
              <div>
                <textarea
                  {...register("details")}
                  rows={3}
                  placeholder="Additional details about your project..."
                  className={`${inputClass} resize-none`}
                />
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="px-8 py-4 border border-charcoal/20 text-charcoal text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-8 py-4 bg-gold text-charcoal font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors"
                >
                  Continue
                </button>
              </div>
            </motion.div>
          )}

          {/* Step 3: Schedule */}
          {step === 3 && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <h2 className="font-serif text-2xl text-charcoal mb-6">
                Schedule Your Visit
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="text-xs text-warm-gray tracking-wider uppercase block mb-2">
                    Preferred Date
                  </label>
                  <input
                    {...register("preferredDate")}
                    type="date"
                    className={inputClass}
                  />
                </div>
                <div>
                  <label className="text-xs text-warm-gray tracking-wider uppercase block mb-2">
                    Preferred Time
                  </label>
                  <select
                    {...register("preferredTime")}
                    className={`${inputClass} appearance-none`}
                  >
                    <option value="">Any time</option>
                    <option value="morning">Morning (9–12)</option>
                    <option value="afternoon">Afternoon (12–3)</option>
                    <option value="late">Late Afternoon (3–5)</option>
                  </select>
                </div>
              </div>
              <div>
                <select
                  {...register("howHeard")}
                  className={`${inputClass} appearance-none`}
                >
                  <option value="">How did you hear about us?</option>
                  <option value="google">Google Search</option>
                  <option value="referral">Friend / Referral</option>
                  <option value="social">Social Media</option>
                  <option value="drive-by">Drove By Showroom</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="pt-4 flex gap-4">
                <button
                  type="button"
                  onClick={() => setStep(2)}
                  className="px-8 py-4 border border-charcoal/20 text-charcoal text-sm tracking-[0.2em] uppercase hover:border-gold hover:text-gold transition-colors"
                >
                  Back
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-8 py-4 bg-gold text-charcoal font-semibold text-sm tracking-[0.2em] uppercase hover:bg-gold-light transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? "Submitting..." : "Submit Request"}
                </button>
              </div>
            </motion.div>
          )}
        </form>
      </div>
    </div>
  );
}
