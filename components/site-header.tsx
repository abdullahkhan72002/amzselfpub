"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { services } from "@/lib/services";

const links = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services", mega: true },
  { href: "/contact-us", label: "Contact Us" },
];

function isActive(pathname: string, href: string, mega?: boolean) {
  if (href === "/") return pathname === "/";
  if (pathname === href) return true;
  if (!mega) return false;
  return services.some((service) => pathname === `/${service.slug}`);
}

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const pathname = usePathname();

  function closeAll() {
    setOpen(false);
    setServicesOpen(false);
  }

  return (
    <header
      className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur"
      onMouseLeave={() => setServicesOpen(false)}
    >
      <div className="mx-auto flex w-full max-w-[1140px] items-center justify-between gap-4 px-5 py-3">
        <Link href="/" className="shrink-0" onClick={closeAll} aria-label="AMZ Self Pub home">
          <Image
            src="/images/home/AMZ.png"
            alt="AMZ Self Pub"
            width={4930}
            height={2942}
            className="h-14 w-auto sm:h-16"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-4 font-inter text-[13px] font-medium tracking-[1.6px] text-black lg:flex xl:text-sm">
          {links.map((link, index) => {
            const active = isActive(pathname, link.href, link.mega);
            return (
              <span key={link.href} className="flex items-center gap-4">
                {index > 0 ? <span className="text-[#d1d1d1]">|</span> : null}
                {link.mega ? (
                  <Link
                    href={link.href}
                    className={active ? "font-extrabold text-brand" : "transition hover:text-brand"}
                    aria-expanded={servicesOpen}
                    onMouseEnter={() => setServicesOpen(true)}
                    onFocus={() => setServicesOpen(true)}
                  >
                    {link.label.toUpperCase()}
                  </Link>
                ) : (
                  <Link href={link.href} className={active ? "font-extrabold text-brand" : "transition hover:text-brand"}>
                    {link.label.toUpperCase()}
                  </Link>
                )}
              </span>
            );
          })}
        </nav>

        <Link
          href="/contact-us"
          className="hidden h-11 min-w-[150px] items-center justify-center rounded-[10px] bg-brand px-6 text-base font-medium text-white transition hover:bg-[#e8851a] lg:inline-flex"
        >
          Get Started
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-black/10 lg:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="flex flex-col gap-1.5">
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
            <span className="block h-0.5 w-5 bg-ink" />
          </span>
        </button>
      </div>

      {servicesOpen ? (
        <div className="absolute inset-x-0 top-full hidden border-t border-black/5 bg-white shadow-[0_18px_40px_rgba(0,0,0,0.1)] lg:block">
          <div className="mx-auto max-w-[1140px] px-5 py-6">
            <div className="grid grid-cols-2 gap-2 xl:grid-cols-4">
              {services.map((service) => {
                const href = `/${service.slug}`;
                const active = pathname === href;
                return (
                  <Link
                    key={service.slug}
                    href={href}
                    className={`rounded-xl px-4 py-3 ${active ? "bg-[#fff4e8]" : "hover:bg-[#fff8f0]"}`}
                    onClick={() => setServicesOpen(false)}
                  >
                    <span className={`block text-sm font-semibold ${active ? "text-brand" : "text-black"}`}>
                      {service.nav}
                    </span>
                    <span className="mt-1 line-clamp-2 block text-xs leading-relaxed text-[#5c6570]">
                      {service.description}
                    </span>
                  </Link>
                );
              })}
            </div>
            <Link
              href="/services"
              className="mt-4 inline-flex text-sm font-semibold text-brand"
              onClick={() => setServicesOpen(false)}
            >
              View all services
            </Link>
          </div>
        </div>
      ) : null}

      {open ? (
        <nav className="max-h-[75vh] overflow-y-auto border-t border-black/5 px-5 py-4 lg:hidden">
          <ul className="flex flex-col gap-3 text-sm font-medium tracking-wide">
            {links.map((link) => {
              const active = isActive(pathname, link.href, link.mega);
              return (
                <li key={link.href}>
                  {link.mega ? (
                    <>
                      <button
                        type="button"
                        className={`flex w-full items-center justify-between ${active ? "font-extrabold text-brand" : "text-black"}`}
                        aria-expanded={servicesOpen}
                        onClick={() => setServicesOpen((value) => !value)}
                      >
                        {link.label.toUpperCase()}
                        <span aria-hidden="true">{servicesOpen ? "−" : "+"}</span>
                      </button>
                      {servicesOpen ? (
                        <ul className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {services.map((service) => {
                            const href = `/${service.slug}`;
                            return (
                              <li key={service.slug}>
                                <Link
                                  href={href}
                                  className={`block rounded-lg bg-[#fff8f0] px-3 py-2 normal-case tracking-normal ${
                                    pathname === href ? "font-semibold text-brand" : "text-[#111]"
                                  }`}
                                  onClick={closeAll}
                                >
                                  {service.nav}
                                </Link>
                              </li>
                            );
                          })}
                        </ul>
                      ) : null}
                    </>
                  ) : (
                    <Link
                      href={link.href}
                      className={active ? "font-extrabold text-brand" : "text-black"}
                      onClick={closeAll}
                    >
                      {link.label.toUpperCase()}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact-us"
            className="mt-4 inline-flex rounded-[10px] bg-brand px-6 py-3 text-base font-medium text-white"
            onClick={closeAll}
          >
            Get Started
          </Link>
        </nav>
      ) : null}
    </header>
  );
}
