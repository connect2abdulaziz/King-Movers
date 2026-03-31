import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import AboutPageClient from "@/components/about/AboutPageClient";

const aboutHeadingFont = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-about-heading",
});

const aboutBodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-about-body",
});

export const metadata = {
  title: "About Us | King Moving Services",
  description:
    "Learn about King Moving Services — your trusted partner for residential, commercial, and long-distance moving. Over 7 years of reliable relocation experience.",
};

export default function AboutPage() {
  return (
    <div
      className={`${aboutHeadingFont.variable} ${aboutBodyFont.variable} about-page-fonts overflow-hidden`}
    >
      <AboutPageClient />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .about-page-fonts h1,
            .about-page-fonts h2,
            .about-page-fonts h3,
            .about-page-fonts h4,
            .about-page-fonts h5,
            .about-page-fonts h6 {
              font-family: var(--font-about-heading), serif;
            }
            .about-page-fonts p,
            .about-page-fonts li,
            .about-page-fonts label,
            .about-page-fonts small {
              font-family: var(--font-about-body), serif;
            }
          `,
        }}
      />
    </div>
  );
}
