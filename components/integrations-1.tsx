import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import * as React from "react";
import {
  Gemini,
  Replit,
  MagicUI,
  VSCodium,
  MediaWiki,
  GooglePaLM,
} from "@/components/logos";
import Image from "next/image";

export default function IntegrationsSection() {
  return (
    <section id="technologies">
      <div className="py-32">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Seamless Integration with Leading Technologies
            </h2>
            <p className="text-muted-foreground mt-6">
              Enhance performance, speed, and reliability with smooth
              connectivity across industry-standard tools.
            </p>
          </div>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <IntegrationCard
              title="ReactJS"
              description="A popular JavaScript library for building fast, interactive UIs. Trusted for its component-based architecture and large community support.
"
              link="https://react.dev/"
              image="/images/react.png"
            ></IntegrationCard>

            <IntegrationCard
              title="NextJS"
              description="A React framework for server-side rendering and static sites.
Boosts performance, SEO, and scalability for modern web apps."
              link="https://nextjs.org/docs"
              image="/images/nextjs.png"
            ></IntegrationCard>

            <IntegrationCard
              title="NodeJS"
              description="JavaScript runtime for building fast, scalable backend applications.
Handles high traffic efficiently and has a huge ecosystem of modules."
              link="https://nodejs.org/docs/latest/api"
              image="/images/nodejs.png"
            ></IntegrationCard>

            <IntegrationCard
              title="Python"
              description="Versatile programming language for web, data, and automation.
Easy to learn, reliable, and widely used in enterprise projects."
              link="https://docs.python.org"
              image="/images/python.png"
            ></IntegrationCard>

            <IntegrationCard
              title="PostgreSQL"
              description="Open-source relational database for structured data storage.
Known for stability, security, and advanced querying capabilities."
              link="https://www.postgresql.org/docs"
              image="/images/postgresql.png"
            ></IntegrationCard>

            <IntegrationCard
              title="AWS"
              description="Cloud platform offering computing, storage, and AI services.
Highly reliable, scalable, and trusted by top enterprises worldwide."
              image="/images/awslogo.png"
              link="https://docs.aws.amazon.com"
            ></IntegrationCard>
          </div>
        </div>
      </div>
    </section>
  );
}

const IntegrationCard = ({
  title,
  description,
  image,
  link = "https://github.com/meschacirung/cnblocks",
}: {
  title: string;
  description: string;
  image: string;
  link?: string;
}) => {
  return (
    <Card className="p-6">
      <div className="relative">
        <div className="flex items-center">
          <div className="bg-linear-to-tr from-emerald-400 to-emerald-600 p-[2px] rounded-full w-14 h-14 flex items-center justify-center">
            <div className="bg-white p-2 rounded-full flex items-center justify-center overflow-hidden">
              <Image
                src={image}
                alt={title}
                width={44}
                height={44}
                preload={true}
                className="object-cover"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2 py-6">
          <h3 className="text-base font-medium">{title}</h3>
          <p className="text-muted-foreground line-clamp-3 text-sm">
            {description}
          </p>
        </div>

        <div className="flex gap-3 border-t border-dashed pt-6">
          <Button
            asChild
            variant="secondary"
            size="sm"
            className="gap-1 pr-2 shadow-none"
          >
            <Link href={link}>
              Learn More
              <ChevronRight className="ml-0 !size-3.5 opacity-50" />
            </Link>
          </Button>
        </div>
      </div>
    </Card>
  );
};
