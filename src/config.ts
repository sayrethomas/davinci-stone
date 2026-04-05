export const siteConfig = {
  name: "DaVinci Stone",
  tagline: "Dream the Ultimate Dream",
  subTagline: "Visualize your space — then let us build it.",
  phone: "208.375.6555",
  phoneHref: "tel:+12083756555",
  email: "info@davincistoneidaho.com",
  address: {
    street: "11522 W. Fairview Ave",
    city: "Boise",
    state: "ID",
    zip: "83713",
    full: "11522 W. Fairview Ave, Boise, ID 83713",
    mapEmbedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2885.5!2d-116.3!3d43.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54ae542dcb91f5f9%3A0x1b972bf0b56e981c!2s11522+W+Fairview+Ave%2C+Boise%2C+ID+83713!5e0!3m2!1sen!2sus!4v1700000000000",
  },
  hours: "Mon–Fri 9:00 AM – 5:00 PM | Sat by Appointment",
  // TODO: Replace with actual AI visualizer tool URL
  visualizerUrl: "https://your.renvision.build/r/acme?embed=1",
  social: {
    facebook: "https://www.facebook.com/davincistoneidaho",
  },
  nav: [
    { label: "Home", href: "#hero" },
    { label: "Visualizer", href: "#visualizer" },
    { label: "Our Work", href: "#gallery" },
    { label: "Materials", href: "#materials" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
} as const;
