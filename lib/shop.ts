export interface CategoryOption {
  id: string;
  label: string;
}

export interface ReviewLengthOption {
  id: "short" | "medium" | "long";
  label: string;
  linesText: string;
}

export const SHOP_CONFIG = {
  name: "GHUNGROO FURNITURE ELECTRONICS",
  parentGroup: "घुंगरू इलेक्ट्रॉनिक्स / Ghungroo Electronics & Furniture Mall",
  marathiTagline: "Customer Is our first Priority",
  brandLine: "Furniture · Electronics · Appliances · TV · Fridge · Washing Machine",
  logoUrl: "/ghungroo-logo.png?v=nobg",

  // Contact & Location Details
  phone: "8087452248",
  phoneDisplay: "+91 80874 52248",
  whatsappNumber: "918087452248",
  whatsappMessage: "Hello Ghungroo Furniture Electronics!",

  // Google Review & Maps
  googlePlaceId: "ChIJl4HxyFq63TsRPIp4v_cpkFI",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJl4HxyFq63TsRPIp4v_cpkFI",
  directionsUrl: "https://maps.app.goo.gl/gR91zyejBeqRfLb27",
  mapCoordinates: {
    lat: 19.848265,
    lng: 73.990738,
  },
  // Satellite embed (5e1) at Devi Road / Apala Bazar, Sinnar
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1876.4!2d73.990738!3d19.848265!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddba5ac8f18197%3A0x529029f7bf788a3c!2sGhungroo%20Furniture%20Electronics!5e1!3m2!1sen!2sin!4v1730460000000!5m2!1sen!2sin",

  // Social Links
  socials: {
    instagram: "https://www.instagram.com/ghungroo_furniture_electronics",
    facebook: "https://www.facebook.com/share/1EyJiyzdtn/",
    whatsapp: "https://wa.me/918087452248",
  },

  // Address
  address:
    "Devi Rd, near Rock & Roll, opposite Apala Bazar, Samarth Nagar, Sinnar, Maharashtra 422103",

  categories: [
    { id: "all", label: "All" },
    { id: "furniture", label: "Great Furniture" },
    { id: "electronics", label: "Electronics" },
    { id: "staff", label: "Polite Staff" },
    { id: "quality", label: "Premium Quality" },
    { id: "pricing", label: "Best Price" },
    { id: "appliances", label: "Home Appliances" },
    { id: "service", label: "After Sales" },
    { id: "offers", label: "Deals & Offers" },
  ] as CategoryOption[],

  reviewLengths: [
    { id: "short", label: "1–2 Lines", linesText: "Short & Crisp" },
    { id: "medium", label: "2–3 Lines", linesText: "Balanced" },
    { id: "long", label: "4–5 Lines", linesText: "Detailed" },
  ] as ReviewLengthOption[],

  offerings: [
    "Sofas, beds & dining furniture",
    "LED TV, refrigerator & washing machine",
    "AC, fans & home theater",
    "Mobiles & accessories",
    "Easy EMI / finance options",
    "After-sales service & support",
  ],
};

export type ShopConfig = typeof SHOP_CONFIG;
