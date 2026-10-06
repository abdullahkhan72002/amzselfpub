import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL, PHONE_NUMBER, PHONE_TEL } from "@/components/hero-actions";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
];

const phone = PHONE_NUMBER;

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1140px] px-5 pt-[78px] pb-[89px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-12">
          <div>
            <Image
              src="/images/home/AMZ White.png"
              alt="AMZ Self Pub"
              width={4930}
              height={2942}
              className="h-16 w-auto sm:h-20"
            />
            <p className="mt-5 max-w-[230px] font-sans text-[15px] leading-[22px]">
              Get An Idea. Get Published. Get Fame. Get Paid. Get Away And Explore.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-heading text-lg font-bold text-brand">Menu</h2>
            <ul className="mt-3 space-y-3 font-sans text-[15px] leading-[22px]">
              {menu.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition-colors hover:text-brand">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h2 className="font-heading text-lg font-bold text-brand">Contact</h2>
            <address className="mt-3 space-y-3 font-sans text-[15px] leading-[22px] not-italic">
              <p>
                <a href={`tel:${PHONE_TEL}`} className="transition-colors hover:text-brand">
                  {phone}
                </a>
              </p>
              <p>
                <a href={`mailto:${CONTACT_EMAIL}`} className="transition-colors hover:text-brand">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </address>
          </div>

        </div>

        <div className="flex flex-col gap-3 pt-4 font-sans text-[13px] leading-[22px] sm:flex-row sm:items-center sm:justify-between sm:text-sm">
          <p>Powered By amzselfpub . All rights reserved.</p>
          <p>
            <Link href="/terms-and-conditions" className="text-brand transition-colors hover:underline">
              Terms &amp; Conditions
            </Link>
            <span> | </span>
            <Link href="/privacy-policy" className="transition-colors hover:text-brand">
              Privacy Policy
            </Link>
            <span> | </span>
            <Link href="/return-and-refund" className="transition-colors hover:text-brand">
              Return &amp; Refund
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
