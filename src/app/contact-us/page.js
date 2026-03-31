import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import ContactPageClient from "@/components/contact-us/ContactPageClient";

const contactHeadingFont = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-contact-heading",
});

const contactBodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-contact-body",
});

export const metadata = {
  title: "Contact Us | King Moving Services",
  description:
    "Contact King Moving Services for moving quotes, storage support, and relocation planning in Scottsdale and across Arizona.",
};

export default function ContactUsPage() {
  return (
    <div
      className={`${contactHeadingFont.variable} ${contactBodyFont.variable} contact-page-fonts overflow-hidden`}
    >
      <ContactPageClient />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .contact-page-fonts h1,
            .contact-page-fonts h2,
            .contact-page-fonts h3,
            .contact-page-fonts h4,
            .contact-page-fonts h5,
            .contact-page-fonts h6 {
              font-family: var(--font-contact-heading), serif;
            }
            .contact-page-fonts p,
            .contact-page-fonts li,
            .contact-page-fonts label,
            .contact-page-fonts small,
            .contact-page-fonts input,
            .contact-page-fonts textarea,
            .contact-page-fonts button,
            .contact-page-fonts a {
              font-family: var(--font-contact-body), serif;
            }
          `,
        }}
      />
    </div>
  );
}

