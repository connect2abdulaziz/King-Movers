import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import BlogPageClient from "@/components/blog/BlogPageClient";

const blogHeadingFont = Playfair_Display({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-blog-heading",
});

const blogBodyFont = Libre_Baskerville({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-blog-body",
});

export const metadata = {
  title: "Blog | King Moving Services",
  description:
    "Moving tips, packing guides, and relocation advice from King Moving Services — trusted movers in Scottsdale and across Arizona.",
  openGraph: {
    title: "Blog | King Moving Services",
    description:
      "Moving tips, packing guides, and relocation advice from King Moving Services.",
  },
};

export default function BlogPage() {
  return (
    <div
      className={`${blogHeadingFont.variable} ${blogBodyFont.variable} blog-page-fonts overflow-hidden`}
    >
      <BlogPageClient />

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .blog-page-fonts h1,
            .blog-page-fonts h2,
            .blog-page-fonts h3,
            .blog-page-fonts h4,
            .blog-page-fonts h5,
            .blog-page-fonts h6 {
              font-family: var(--font-blog-heading), serif;
            }
            .blog-page-fonts p,
            .blog-page-fonts li,
            .blog-page-fonts label,
            .blog-page-fonts small,
            .blog-page-fonts .blog-card-desc,
            .blog-page-fonts .blog-category-pill {
              font-family: var(--font-blog-body), serif;
            }
          `,
        }}
      />
    </div>
  );
}
