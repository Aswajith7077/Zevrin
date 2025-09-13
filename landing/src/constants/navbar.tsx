import { ContentType } from "@/types/navbar.type";
import { FaCrown } from "react-icons/fa";
import { GiCutDiamond } from "react-icons/gi";
import { FaStar } from "react-icons/fa";
import { IoMdPricetags } from "react-icons/io";
import { FaLink } from "react-icons/fa";
import { MdGroups } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import { IoIosChatbubbles } from "react-icons/io";
import { BiSolidOffer } from "react-icons/bi";
import { FaAward } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa";
import { TiFlash } from "react-icons/ti";
import { BsStars } from "react-icons/bs";
import { FaEuroSign } from "react-icons/fa6";

const contents: ContentType[] = [
  {
    title: "Credits",
    type: "single_image_column",
    subcontents: [
      {
        title: "Buyer Scoring",
        url: "/credits/buyer-scoring",
        icon: <IoMdPricetags size={36} className="flex-shrink-0" />,
        description:
          "View your buyer score and how it affects your shopping experience.",
      },
      {
        title: "Dealer Scoring",
        url: "/credits/dealer-scoring",
        icon: <FaEuroSign size={36} className="flex-shrink-0" />,
        description:
          "View your dealer score and how it affects your selling experience.",
      },
      {
        title: "Nex Offers",
        url: "/credits/nex-offers",
        icon: <BiSolidOffer size={36} className="flex-shrink-0" />,
        description:
          "Get exclusive offers and discounts based on your shopping habits.",
      },
    ],
  },
  {
    title: "Pricing",
    type: "double_column",
    subcontents: [
      {
        title: "Free",
        url: "/subscriptions",
        icon: <FaBookmark size={24} className="w-[11%]" />,
        description: "Free plan for individuals with basic features.",
      },
      {
        title: "Basic",
        url: "/subscriptions",
        icon: <FaStar size={28} className="w-[10%]" />,
        description: "Basic plan for small businesses.",
      },
      {
        title: "Pro",
        url: "/subscriptions",
        icon: <TiFlash size={36} />,
        description: "Pro plan for individuals with additional features.",
      },
      {
        title: "Platinum",
        url: "/subscriptions",
        icon: <FaCrown size={48} />,
        description:
          "Premium plan for large businesses with advanced features.",
      },
      {
        title: "Premium",
        url: "/subscriptions",
        icon: <GiCutDiamond size={36} />,
        description: "Premium plan for individuals with full features.",
      },
    ],
  },
  {
    title: "Dealers",
    type: "double_column",

    subcontents: [
      {
        title: "Featured Dealers",
        url: "/dealers/featured",
        icon: <BsStars size={36} />,
        description: "Explore our featured dealers for the best deals.",
      },
      {
        title: "Top Rated",
        url: "/dealers/top-rated",
        icon: <FaAward size={36} />,
        description: "Explore our top-rated dealers for the best deals.",
      },
      {
        title: "Connections",
        url: "/dealers/connections",
        icon: <FaLink size={36} />,
        description: "Find connections with other dealers and buyers.",
      },
      {
        title: "Promotions",
        url: "/dealers/promotions",
        icon: <IoMdPricetags size={36} />,
        description: "Get a chance to display banners and promotions.",
      },
    ],
  },
  {
    title: "Help",
    type: "single_image_column",
    subcontents: [
      {
        title: "FAQs",
        url: "/help/faqs",
        icon: <IoIosChatbubbles size={36} className="flex-shrink-0" />,
        description:
          "Frequently asked questions about our services and features.",
      },
      {
        title: "Contact Us",
        url: "/help/contact",
        icon: <RiCustomerService2Fill size={30} className="w-[20%]" />,
        description: "For any inquiries or support, please reach out to us.",
      },
      {
        title: "Support",
        url: "/help/support",
        icon: <MdGroups size={36} className="flex-shrink-0" />,
        description:
          "Get assistance with our community or through our support channels.",
      },
    ],
  },
];

export { contents };
