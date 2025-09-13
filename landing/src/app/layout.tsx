import Navbar from "@/components/Navbar";
import { appname } from "@/constants/app";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: appname,
  description: "Landing page for " + appname,
};

const RootLayout = ({children}:{children: React.ReactNode}) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={openSans.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main>
             <Navbar />
              {children}
              <Footer />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
