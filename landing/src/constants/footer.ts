import { FooterContentType } from "@/types/footer.type";


const contents: FooterContentType[] = [
  {
    title: "Quick Links",
    links: [
      { name: "Home", url: "/" },
      { name: "Pricing", url: "/pricing" },
      { name: "About Us", url: "/about" },
      { name: "faq", url: "/faq" },
      { name: "Contact", url: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Deals & Promotions", url: "/deals" },
      { name: "Blog", url: "/blog" },
      { name: "Help Center", url: "/help" },
      { name: "Support", url: "/support" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", url: "/privacy" },
      { name: "Terms of Use", url: "/terms-of-use" },
      { name: "Terms of Service", url: "/terms" },
    ],
  },
];

export { contents };
