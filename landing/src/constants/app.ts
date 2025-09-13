const appname: string = process.env.NEXT_PUBLIC_APP_NAME || "Unnamed";
const LogoIcon = "/ZevrinIcon.svg";

const navigationURLs = {
  home: "/",
  about: "/about-us",
  features: "/features",
  pricing: "/pricing",
  contact: "/contact",
  login: process.env.NEXT_PUBLIC_LOGIN_URL || "/login",
  dashboard: process.env.NEXT_PUBLIC_DASHBOARD_URL || "/dashboard",
  documentation: process.env.NEXT_PUBLIC_DOCUMENTATION_URL || "/documentation",
};

export { appname, LogoIcon, navigationURLs };
