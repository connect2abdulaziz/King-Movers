import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import FaqPageClient from "@/components/faq/FaqPageClient";

const faqHeadingFont = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faq-heading",
});

const faqBodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-faq-body",
});

export const metadata = {
  title: "FAQ | King Moving Services",
  description:
    "Answers about local and long-distance moving, storage, and international relocations from King Moving Services — packing, timing, trucks, and more.",
};

export default function FaqPage() {
  return (
    <div
      className={`${faqHeadingFont.variable} ${faqBodyFont.variable} faq-page-fonts overflow-hidden`}
    >
      <FaqPageClient />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .faq-page-fonts h1,
            .faq-page-fonts h2,
            .faq-page-fonts h3,
            .faq-page-fonts h4,
            .faq-page-fonts h5,
            .faq-page-fonts h6 {
              font-family: var(--font-faq-heading), serif;
            }
            .faq-page-fonts p,
            .faq-page-fonts li,
            .faq-page-fonts label,
            .faq-page-fonts small,
            .faq-page-fonts .faq-answer {
              font-family: var(--font-faq-body), serif;
            }
            .faq-page-fonts .faq-question,
            .faq-page-fonts .faq-tab {
              font-family: var(--font-faq-heading), serif;
            }
            .faq-page-fonts .faq-toggle {
              font-family: var(--font-faq-heading), serif;
            }
          `,
        }}
      />
    </div>
  );
}
