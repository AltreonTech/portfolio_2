import Card3dDemo from "./project-card";
import { getAllBlogs } from "@/lib/blog";

export default function Projects() {
  const blogs = getAllBlogs();
  return (
    <section id="projects" className="py-12 md:py-20">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center">
          <h2 className="text-4xl font-semibold leading-1.5">Proof of Work</h2>
          <p>
            Here are the solutions we’ve shipped that helped startups launch
            faster and scale smarter.
          </p>
        </div>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3 md:justify-center mx-auto max-w-6xl px-6 mt-16">
        {blogs.map((blog, index) => (
          <Card3dDemo
            title={blog.title}
            description={blog.excerpt || ""}
            image={blog.image}
            link={`/blogs/${blog.slug}`}
            key={index}
          />
        ))}
      </div>
    </section>
  );
}
