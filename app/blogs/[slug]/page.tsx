import { HeroHeader } from "@/components/header";
import { getBlogBySlug, getAllBlogs } from "@/lib/blog";
import { notFound } from "next/navigation";
import Image from "next/image";
import { MDXContent } from "./mdx-content";

interface BlogPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Generate static params for all blog posts
export async function generateStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for each blog post
export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    return {
      title: "Blog Not Found",
    };
  }

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <HeroHeader />
      <div className="min-h-screen bg-background">
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <article className="space-y-6">
              {/* Hero Image */}
              {post.image && (
                <div className="relative w-full flex justify-center aspect-[16/9] overflow-hidden flex items-start">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={1536}
                    height={1024}
                    className="h-full w-auto object-left rounded-xl"
                    preload={true}
                  />
                </div>
              )}

              {/* Blog Header */}
              <header className="space-y-4">
                <h1 className="text-4xl font-bold text-foreground">
                  {post.title}
                </h1>
                {post.excerpt && (
                  <p className="text-lg text-muted-foreground">
                    {post.excerpt}
                  </p>
                )}
                <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                  {post.author && <span>By {post.author}</span>}
                  <span>•</span>
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* Blog Content */}
              <div className="max-w-none">
                <MDXContent content={post.content} />
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  );
}
