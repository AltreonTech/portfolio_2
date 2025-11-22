import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl space-y-6 text-center">
          <h1 className="text-center text-4xl font-semibold lg:text-5xl">
            Custom Software Solutions, Priced for Every Stage
          </h1>
          <p>
            Whether you need a static site, a fullstack web app, or ongoing
            maintenance, we offer plans designed to grow with your business.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:mt-20 md:grid-cols-3">
          {/* Static Site / MVP Plan */}
          <Card>
            <CardHeader>
              <CardTitle className="font-medium">MVP / Static Site</CardTitle>

              <span className="my-3 block text-2xl font-semibold">$499</span>

              <CardDescription className="text-sm">
                One-time delivery
              </CardDescription>
              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="">Request Quote</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Custom Landing Page or MVP",
                  "Responsive Design",
                  "Basic SEO Optimization",
                  "1 Deployment Environment",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Fullstack Plan */}
          <Card className="relative transform scale-105 border-2 border-primary/20 shadow-lg">
            <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">
              Popular
            </span>

            <CardHeader className="pb-8">
              <CardTitle className="font-medium text-lg">
                Fullstack Development
              </CardTitle>

              <span className="my-4 block text-3xl font-bold">$2,499</span>

              <CardDescription className="text-sm text-muted-foreground">
                Complete custom web application with full-stack capabilities
              </CardDescription>

              <Button asChild className="mt-6 w-full">
                <Link href="">Request Quote</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Frontend + Backend Development",
                  "Database Integration",
                  "API Development & Integration",
                  "Responsive & Scalable Architecture",
                  "1 Month Support & Maintenance",
                  "Basic Security Features",
                  "Version Control & Deployment",
                  "Custom Features as Required",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Maintenance / Enterprise Plan */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle className="font-medium">
                Maintenance & Enterprise
              </CardTitle>

              <span className="my-3 block text-2xl font-semibold">
                Starting $999 / mo
              </span>

              <CardDescription className="text-sm">
                Ongoing support
              </CardDescription>

              <Button asChild variant="outline" className="mt-4 w-full">
                <Link href="">Request Quote</Link>
              </Button>
            </CardHeader>

            <CardContent className="space-y-4">
              <hr className="border-dashed" />

              <ul className="list-outside space-y-3 text-sm">
                {[
                  "Regular Updates & Bug Fixes",
                  "24/7 Monitoring & Support",
                  "Performance Optimization",
                  "Security Audits",
                  "Scalable Cloud Hosting",
                  "Custom Feature Enhancements",
                  "Dedicated Account Manager",
                  "Monthly Reporting & Analytics",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="size-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
