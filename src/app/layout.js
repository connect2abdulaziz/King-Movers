import { Plus_Jakarta_Sans, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-heading",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "King Moving Services",
  description: "Professional moving services website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusJakarta.variable} ${openSans.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

