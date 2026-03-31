import { notFound } from "next/navigation";
import { Libre_Baskerville, Playfair_Display } from "next/font/google";
import BlogPostPageClient from "@/components/blog/BlogPostPageClient";
import {
  getBlogPostBySlug,
  getBlogSlugsForStaticParams,
} from "@/components/blog/blogPosts";

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

export async function generateStaticParams() {
  return getBlogSlugsForStaticParams();
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) {
    return { title: "Article | King Moving Services" };
  }
  return {
    title: `${post.title} | King Moving Services`,
    description: post.description,
    openGraph: {
      title: `${post.title} | King Moving Services`,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <div
      className={`${blogHeadingFont.variable} ${blogBodyFont.variable} blog-page-fonts overflow-hidden`}
    >
      <BlogPostPageClient post={post} />

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
            .blog-page-fonts .blog-category-pill,
            .blog-page-fonts .blog-article-p,
            .blog-page-fonts time {
              font-family: var(--font-blog-body), serif;
            }
            .blog-page-fonts .blog-body-link {
              font-family: var(--font-blog-body), serif;
            }
          `,
        }}
      />
    </div>
  );
}
