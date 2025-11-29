"use client";
import Link from "next/link";
import { Logo } from "@/components/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import React from "react";
import { cn } from "@/lib/utils";
import { IoVideocam } from "react-icons/io5";

const menuItems = [
  { name: "Projects", href: "/#projects" },
  { name: "Testimonials", href: "/#testimonials" },
  { name: "Pricing", href: "/#pricing" },
  { name: "Contact Us", href: "/#contact" },
];

export const HeroHeader = () => {
  const [menuState, setMenuState] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <header>
      <nav
        data-state={menuState && "active"}
        className="fixed z-20 w-full px-2"
      >
        <div
          className={cn(
            "mx-auto mt-2 max-w-6xl px-6 transition-all duration-300 lg:px-12",
            isScrolled &&
              "bg-background/50 max-w-4xl rounded-2xl border backdrop-blur-lg lg:px-5"
          )}
        >
          <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 lg:gap-0 lg:py-4">
            <div className="flex w-full justify-between lg:w-auto">
              <Link
                href="/"
                aria-label="home"
                className="flex items-center space-x-2"
              >
                <span className="font-semibold text-xl text-white">
                  Altreon
                </span>
              </Link>

              <button
                onClick={() => setMenuState(!menuState)}
                aria-label={menuState == true ? "Close Menu" : "Open Menu"}
                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden"
              >
                <Menu className="in-data-[state=active]:rotate-180 in-data-[state=active]:scale-0 in-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                <X className="in-data-[state=active]:rotate-0 in-data-[state=active]:scale-100 in-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
              </button>
            </div>

            <div className="absolute inset-0 m-auto hidden size-fit lg:block">
              <ul className="flex gap-8 text-sm">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="text-muted-foreground hover:text-accent-foreground block duration-150"
                      onClick={(e) => {
                        // If we're already on the home page, prevent default and smooth scroll
                        if (window.location.pathname === "/") {
                          e.preventDefault();
                          const element = document.querySelector(
                            item.href.split("#")[1]
                              ? "#" + item.href.split("#")[1]
                              : item.href
                          );
                          if (element) {
                            element.scrollIntoView({
                              behavior: "smooth",
                              block: "start",
                            });
                          }
                        }
                        // If we're on a different page, let Next.js handle the navigation normally
                      }}
                    >
                      <span>{item.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-background in-data-[state=active]:block lg:in-data-[state=active]:flex mb-6 hidden w-full flex-wrap items-center justify-end space-y-8 rounded-3xl border p-6 shadow-2xl shadow-zinc-300/20 md:flex-nowrap lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:bg-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent">
              <div className="lg:hidden">
                <ul className="space-y-6 text-base">
                  {menuItems.map((item, index) => (
                    <li key={index}>
                      <Link
                        href={item.href}
                        className="text-muted-foreground hover:text-accent-foreground block duration-150"
                        onClick={(e) => {
                          // If we're already on the home page, prevent default and smooth scroll
                          if (window.location.pathname === "/") {
                            e.preventDefault();
                            const element = document.querySelector(
                              item.href.split("#")[1]
                                ? "#" + item.href.split("#")[1]
                                : item.href
                            );
                            if (element) {
                              element.scrollIntoView({
                                behavior: "smooth",
                                block: "start",
                              });
                            }
                          }
                          // Close mobile menu
                          setMenuState(false);
                        }}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit">
                {/* <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className={cn(isScrolled && "lg:hidden")}
                >
                  <Link href="#">
                    <span>Login</span>
                  </Link>
                </Button> */}
                {/* <Button
                  size="sm"
                  className={cn(isScrolled ? "lg:hidden" : "cursor-pointer")}
                >
                  <IoVideocam className="inline mr-1 size-4" />
                  <span className="text-primary-foreground font-medium">
                    Book a Call
                  </span>
                </Button> */}
                <Button
                  size="sm"
                  className={cn("lg:inline-flex cursor-pointer")}
                >
                  <IoVideocam className="inline mr-1 size-4" />
                  <Link
                    href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ1xMBKsWF2wJtkZvURpFo3yypaK82aAnF_gS3HrMeGQEsdRfMIdHbcQe4T9SQZ5JtBGamc4urMw"
                    target="blank"
                  >
                    <span className="text-primary-foreground font-medium">
                      Book a Call
                    </span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
