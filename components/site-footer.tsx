import Image from "next/image";
import Link from "next/link";
import { CONTACT_EMAIL } from "@/components/hero-actions";

const menu = [
  { href: "/", label: "Home" },
  { href: "/about-us", label: "About Us" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/contact-us", label: "Contact Us" },
];

const phone = "4564812546664";

export function SiteFooter() {
  return (
    <footer className="bg-black text-white">
      <div className="mx-auto w-full max-w-[1140px] px-5 pt-[78px] pb-[89px]">
        <div className="grid grid-cols-1 gap-10 border-b border-white pb-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:pb-12">
          <div>
            <Image
              src="/images/home/imgGroup1.svg"
              alt="AMZ Self Pub"
              width={157}
              height={96}
              unoptimized
              className="h-[73px] w-[119px]"
            />
            <p className="mt-5 max-w-[230px] font-sans text-[15px] leading-[22px]">
              Get An Idea. Get Published. Get Fame. Get Paid. Get Away And Explore.
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="font-sans text-lg font-bold text-brand">Menu</h2>
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
            <h2 className="font-sans text-lg font-bold text-brand">Contact</h2>
            <address className="mt-3 space-y-3 font-sans text-[15px] leading-[22px] not-italic">
              <p>12508 Center St, South Gate, CA 90280, United States</p>
              <p>
                <a href={`tel:${phone}`} className="transition-colors hover:text-brand">
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
