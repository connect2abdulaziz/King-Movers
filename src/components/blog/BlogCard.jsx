import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ post, className = "" }) {
  return (
    <article
      id={post.slug}
      className={`group flex flex-col overflow-hidden rounded-2xl border border-primary/12 bg-background shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/15 ${className}`}
    >
      <Link href={`/blog/${post.slug}`} className="relative block aspect-16/10 shrink-0 overflow-hidden">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </Link>
      <div className="flex flex-1 flex-col p-5 md:p-6">
        <span className="blog-category-pill inline-flex self-start rounded-full bg-accent/25 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-foreground">
          {post.category}
        </span>
        <h2 className="blog-card-title mt-3 text-xl font-bold leading-snug text-foreground md:text-2xl">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/70 focus-visible:ring-offset-2 rounded"
          >
            {post.title}
          </Link>
        </h2>
        <p className="blog-card-desc mt-2 line-clamp-3 flex-1 text-[15px] leading-relaxed text-foreground/72 md:text-base">
          {post.description}
        </p>
        <Link
          href={`/blog/${post.slug}`}
          className="mt-4 inline-flex w-fit items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-primary/90"
        >
          Read More
          <span aria-hidden>→</span>
        </Link>
      </div>
    </article>
  );
}
