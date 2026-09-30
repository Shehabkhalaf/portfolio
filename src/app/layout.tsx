import type { Metadata } from "next";
import ScrollProgressTop from "./components/ScrollProgressTop";
import SiteFooter from "./components/SiteFooter";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shehab Khalaf | Backend Engineer",
  description: "Shehab Khalaf is a backend engineer in Cairo building reliable Laravel APIs, integrations, and scalable systems.",
  openGraph: {
    title: "Shehab Khalaf | Backend Engineer",
    description: "Laravel APIs, integrations, and reliable backend systems.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body className="min-h-full flex flex-col">
        {children}
        <SiteFooter />
        <ScrollProgressTop />
      </body>
    </html>
  );
}
