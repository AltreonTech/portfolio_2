"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Link from "next/link";

type FAQItem = {
  id: string;
  icon: IconName;
  question: string;
  answer: string;
};

export default function FAQsThree() {
  const faqItems: FAQItem[] = [
    {
      id: "item-1",
      icon: "clock",
      question: "What are your business hours?",
      answer:
        "Our development and support team is available Monday through Friday from 9:00 AM to 8:00 PM EST. We also offer flexible consultation hours for international clients. Emergency support requests can be scheduled outside regular hours on demand.",
    },
    {
      id: "item-2",
      icon: "credit-card",
      question: "How do project payments work?",
      answer:
        "We typically work on milestone-based payments or monthly retainers depending on project scope. Payment schedules are agreed upon in advance, and clients can make payments securely via credit card, bank transfer, or online payment gateways.",
    },
    {
      id: "item-3",
      icon: "truck",
      question: "How long does it take to complete a project?",
      answer:
        "Project timelines vary depending on complexity and scope. Small projects can take 2–4 weeks, while larger custom solutions may take several months. We provide a detailed project plan and timeline during the proposal stage and keep clients updated throughout development.",
    },
    {
      id: "item-4",
      icon: "globe",
      question: "Do you offer global or remote support?",
      answer:
        "Yes, we provide support and consultations for clients worldwide. Our team communicates via email, video calls, and chat, and we adjust working hours to accommodate clients in different time zones whenever possible.",
    },
    {
      id: "item-5",
      icon: "package",
      question: "How do I track project progress?",
      answer:
        "Clients have access to a project management dashboard where they can track milestones, deliverables, and progress in real time. Regular status updates are also provided via email or video meetings according to the agreed schedule.",
    },
  ];

  return (
    <section id="faqs" className="bg-muted dark:bg-background py-20">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:gap-16">
          <div className="md:w-1/3">
            <div className="sticky top-20">
              <h2 className="mt-4 text-3xl font-bold">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mt-4">
                Can't find what you're looking for? Contact our{" "}
                <Link
                  href="#"
                  className="text-primary font-medium hover:underline"
                >
                  customer support team
                </Link>
              </p>
            </div>
          </div>
          <div className="md:w-2/3">
            <Accordion type="single" collapsible className="w-full space-y-2">
              {faqItems.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={item.id}
                  className="bg-background shadow-xs rounded-lg border px-4 last:border-b"
                >
                  <AccordionTrigger className="cursor-pointer items-center py-5 hover:no-underline">
                    <div className="flex items-center gap-3">
                      <div className="flex size-6">
                        <DynamicIcon
                          name={item.icon}
                          className="m-auto size-4"
                        />
                      </div>
                      <span className="text-base">{item.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-5">
                    <div className="px-9">
                      <p className="text-base">{item.answer}</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
