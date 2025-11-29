"use client";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import emailjs from "@emailjs/browser";
import Link from "next/link";
import { useState, useRef, useEffect } from "react";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID || "";
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "";
  const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY || "";

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    setIsSubmitting(true);
    setSubmitStatus("");

    emailjs
      .sendForm(serviceId, templateId, formRef.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          setSubmitStatus("Message sent successfully!");
          formRef.current?.reset();
        },
        () => {
          setSubmitStatus("Failed to send message. Please try again.");
        }
      )
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="py-32">
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
              <p className="mt-3 text-sm">+91 9992932517</p>
            </div>
          </div>
          <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
            <div>
              <h3 className="mb-3 text-lg font-semibold">Project Manager</h3>
              <Link
                href="mailto:press@tailus.io"
                className="text-lg text-blue-600 hover:underline dark:text-blue-400"
              >
                vishal.panchal@altreon.tech
              </Link>
              <p className="mt-3 text-sm">+91 9992932517</p>
            </div>
          </div>
        </div>

        <div className="h-2 border-x bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)]"></div>
        <form
          ref={formRef}
          onSubmit={sendEmail}
          className="border px-4 py-12 lg:px-0 lg:py-24"
        >
          <Card className="mx-auto max-w-lg p-8">
            <h3 className="text-xl font-semibold">
              Let&apos;s get you to the right place
            </h3>
            <p className="text-sm">
              Reach out to our team! We&apos;re eager to learn more about how
              you plan to make your presence over internet.
            </p>

            <hr />

            {submitStatus && (
              <div
                className={`mt-4 p-3 rounded ${
                  submitStatus.includes("successfully")
                    ? "bg-green-100 text-green-700 border border-green-300"
                    : "bg-red-100 text-red-700 border border-red-300"
                }`}
              >
                {submitStatus}
              </div>
            )}

            <div className="**:[&>label]:block mt-8 space-y-6 *:space-y-3">
              <div>
                <Label htmlFor="name" className="space-y-2">
                  Full name
                </Label>
                <Input type="text" id="name" name="name" required />
              </div>
              <div>
                <Label htmlFor="email" className="space-y-2">
                  Email
                </Label>
                <Input type="email" id="email" name="email" required />
              </div>
              <div>
                <Label htmlFor="country" className="space-y-2">
                  Country
                </Label>
                <Input type="text" id="country" name="country" required />
              </div>
              <div>
                <Label htmlFor="msg" className="space-y-2">
                  Tell us your Requirements
                </Label>
                <Textarea id="msg" name="message" rows={3} />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Submit"}
              </Button>
            </div>
          </Card>
        </form>
      </div>
    </section>
  );
}
