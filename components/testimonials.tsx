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
    name: "Rajesh Ahuja",
    role: "MD, Cermaic Premiers Ltd",
    image: "/images/test-men1.jpg",
    quote:
      "Altreon delivered exactly what we needed. Their team understood our requirements and built a solution that scaled with our business.",
  },
  {
    name: "Yves Kalume",
    role: "Manager, E-Commerce Platform",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    quote:
      "Working with Altreon was seamless. They turned our idea into a fully functional platform quickly and efficiently.",
  },
  {
    name: "Md. Fukraann",
    role: "Sales Head, Lahauri Bakery",
    image: "/images/test-men3.jpg",
    quote:
      "The custom solution Altreon built for us has transformed how we operate daily. The quality and attention to detail are exceptional.",
  },
  {
    name: "David Ochelang",
    role: "Founder, Banana Chips",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    quote:
      "We had very specific requirements for our MVP. Altreon guided us through the process and delivered a solution that exceeded expectations.",
  },
  {
    name: "Shekinah Tshiokufila",
    role: "Engineer, Logistics Platform",
    image: "/images/test-women6.jpg",
    quote:
      "Altreon made complex software development look easy. Their professionalism and expertise helped us launch faster than we imagined.",
  },
  {
    name: "Jenneh Fred",
    role: "Fullstack Developer, HealthTech",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    quote:
      "The Altreon team is incredible. Their components and architecture choices made building our platform efficient and robust.",
  },
  {
    name: "SHeik Munyua",
    role: "Founder, AI Startup",
    image: "/images/test-men5.jpeg",
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
    name: "Mani Thapa",
    role: "Founder, SaaS Platform",
    image: "/images/test-girl4.jpg",
    quote:
      "Altreon delivered elegant, maintainable software that helped us launch our platform faster than we expected.",
  },
  {
    name: "Vyashi Arula",
    role: "Product Owner, Mobile App",
    image: "/images/test-gril2.jpg",
    quote:
      "Altreon made the entire development process smooth and stress-free. Their solutions are practical, reliable, and scalable.",
  },
  {
    name: "jehn doude",
    role: "Project Head, Driving School",
    image: "https://randomuser.me/api/portraits/women/9.jpg",
    quote:
      "Working with Altreon made our development process smooth and stress-free. Their practical and reliable solutions helped us scale quickly.",
  },
  {
    name: "PiKChau Bror",
    role: "CTO, Cosmetics Brand",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
    quote:
      "Altreon simplified a complex project and delivered practical, scalable solutions that improved our launch timeline and overall stability.",
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
