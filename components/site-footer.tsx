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

export function SiteFooter() {
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <Image
            src="/images/logo-mark-white.png"
            alt="AMZ Self Pub"
            width={81}
            height={88}
            className="h-20 w-auto"
          />
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/90">
            Get An Idea. Get Published. Get Fame. Get Paid. Get Away And Explore.
          </p>
        </div>

        <nav aria-label="Footer" className="md:text-center">
          <h2 className="font-sans text-sm font-bold text-teal">Menu</h2>
          <ul className="mt-4 space-y-3 text-sm">
            {menu.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-teal">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="md:text-right">
          <h2 className="font-sans text-sm font-bold text-teal">Contact</h2>
          <address className="mt-4 space-y-3 text-sm not-italic leading-relaxed">
            <p>12508 Center St, South Gate, CA 90280, United States</p>
            <p>
              <a href="tel:4564812546664" className="hover:text-teal">
                4564812546664
              </a>
            </p>
            <p>
              <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-teal">
                {CONTACT_EMAIL}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-white/20 px-5 py-5 text-sm sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>Powered By amzselfpub . All rights reserved.</p>
        <p>
          <a href="/terms-and-conditions" className="text-teal">
            Terms & Conditions
          </a>
          <span className="px-2 text-white/50">|</span>
          <a href="/privacy-policy" className="text-teal">
            Privacy Policy
          </a>
          <span className="px-2 text-white/50">|</span>
          <a href="/return-and-refund" className="text-teal">
            Return & Refund
          </a>
        </p>
      </div>
    </footer>
  );
}
