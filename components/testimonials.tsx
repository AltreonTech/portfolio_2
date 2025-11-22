import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  image: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Jonathan Yombo",
    role: "CTO, FinTech Startup",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    quote:
      "Altreon delivered exactly what we needed. Their team understood our requirements and built a solution that scaled with our business.",
  },
  {
    name: "Yves Kalume",
    role: "Founder, E-Commerce Platform",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "Working with Altreon was seamless. They turned our idea into a fully functional platform quickly and efficiently.",
  },
  {
    name: "Yucel Faruksahan",
    role: "Product Manager, SaaS Company",
    image: "https://randomuser.me/api/portraits/men/7.jpg",
    quote:
      "The custom solution Altreon built for us has transformed how we operate daily. The quality and attention to detail are exceptional.",
  },
  {
    name: "Anonymous Client",
    role: "CEO, Tech Startup",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "We had very specific requirements for our software. Altreon guided us through the process and delivered a solution that exceeded expectations.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Lead Engineer, Logistics Platform",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    quote:
      "Altreon made complex software development look easy. Their professionalism and expertise helped us launch faster than we imagined.",
  },
  {
    name: "Oketa Fred",
    role: "Fullstack Developer, HealthTech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "The Altreon team is incredible. Their components and architecture choices made building our platform efficient and robust.",
  },
  {
    name: "Zeki",
    role: "Founder, AI Startup",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
    quote:
      "Altreon’s solutions empowered our team to focus on innovation rather than infrastructure. Their software is scalable and reliable.",
  },
  {
    name: "Joseph Kitheka",
    role: "CTO, EdTech Company",
    image: "https://randomuser.me/api/portraits/men/9.jpg",
    quote:
      "Working with Altreon transformed our development workflow. Their team is professional, responsive, and their solutions are top-notch.",
  },
  {
    name: "Khatab Wedaa",
    role: "Founder, SaaS Platform",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
    quote:
      "Altreon delivered elegant, maintainable software that helped us launch our platform faster than we expected.",
  },
  {
    name: "Rodrigo Aguilar",
    role: "Product Owner, Mobile App",
    image: "https://randomuser.me/api/portraits/men/11.jpg",
    quote:
      "Altreon made the entire development process smooth and stress-free. Their solutions are practical, reliable, and scalable.",
  },
  {
    name: "Eric Ampire",
    role: "Software Architect, Enterprise Solutions",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
    quote:
      "Altreon’s templates and custom solutions allowed us to deliver a polished product to our clients quickly. Highly recommend their expertise.",
  },
  {
    name: "Roland Tubonge",
    role: "CEO, Startup Incubator",
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    quote:
      "Even with complex requirements, Altreon delivered a solution that worked flawlessly. Their team is professional, skilled, and reliable.",
  },
];

const chunkArray = (
  array: Testimonial[],
  chunkSize: number
): Testimonial[][] => {
  const result: Testimonial[][] = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    result.push(array.slice(i, i + chunkSize));
  }
  return result;
};

const testimonialChunks = chunkArray(
  testimonials,
  Math.ceil(testimonials.length / 3)
);

export default function WallOfLoveSection() {
  return (
    <section id="testimonials">
      <div className="py-16 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold">Wall of Love ❤️</h2>
            <p className="mt-6">Loved by founders. Trusted by businesses.</p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3">
            {testimonialChunks.map((chunk, chunkIndex) => (
              <div key={chunkIndex} className="space-y-3">
                {chunk.map(({ name, role, quote, image }, index) => (
                  <Card key={index}>
                    <CardContent className="grid grid-cols-[auto_1fr] gap-3 pt-6">
                      <Avatar className="size-9">
                        <AvatarImage
                          alt={name}
                          src={image}
                          loading="lazy"
                          width="120"
                          height="120"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <h3 className="font-medium">{name}</h3>

                        <span className="text-muted-foreground block text-sm tracking-wide">
                          {role}
                        </span>

                        <blockquote className="mt-3">
                          <p className="text-gray-700 dark:text-gray-300">
                            {quote}
                          </p>
                        </blockquote>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
