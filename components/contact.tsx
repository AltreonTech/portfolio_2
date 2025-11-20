import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import Link from "next/link";

export default function ContactSection() {
  return (
    <section className="py-32">
      <div className="mx-auto max-w-4xl px-4 lg:px-0">
        <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
          Contact Us
        </h1>

        <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h2 className="mb-3 text-lg font-semibold">Office Contact</h2>
              <Link
                href="mailto:hello@tailus.io"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                info@altreon.tech
              </Link>
              <p className="mt-3 text-sm">+91 7667008758</p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Sales Manager</h3>
              <Link
                href="mailto:press@tailus.io"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                vishal.panchal@altreon.tech
              </Link>
              <p className="mt-3 text-sm">+91 7988256361</p>
            </div>
          </div>
        </div>

        <div className="h-2 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
        <form action="" className="border px-4 py-12 lg:px-0 lg:py-24">
          <Card className="mx-auto max-w-lg p-8">
            <h3 className="text-xl font-semibold">
              Let's get you to the right place
            </h3>
            <p className="text-sm">
              Reach out to our team! We’re eager to learn more about how you
              plan to make your presence over internet.
            </p>

            <hr />

            <div className="**:[&>label]:block mt-8 space-y-6 *:space-y-3">
              <div>
                <Label htmlFor="name" className="space-y-2">
                  Full name
                </Label>
                <Input type="text" id="name" required />
              </div>
              <div>
                <Label htmlFor="email" className="space-y-2">
                  Email
                </Label>
                <Input type="email" id="email" required />
              </div>
              <div>
                <Label htmlFor="country" className="space-y-2">
                  Country
                </Label>
                <Input type="email" id="email" required />
              </div>
              <div>
                <Label htmlFor="msg" className="space-y-2">
                  Tell us your Requirements
                </Label>
                <Textarea id="msg" rows={3} />
              </div>
              <Button>Submit</Button>
            </div>
          </Card>
        </form>
      </div>
    </section>
  );
}
