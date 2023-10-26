import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "@/components/navigation";
import localFont from "@next/font/local";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const greycliff = localFont({
  src: [
    {
      path: "../../public/fonts/GreycliffCF-Medium.otf",
      weight: "400",
    },
    {
      path: "../../public/fonts/GreycliffCF-Bold.otf",
      weight: "700",
    },
  ],
  variable: "--font-greycliff",
});

export const metadata: Metadata = {
  title: "Spredo - spreading joy on your sandwiches.",
  description:
    "Here at Spredo we offer variety of choices and mess-free sandwich making experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${greycliff.variable} font-sans bg-bread`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
