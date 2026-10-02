"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";

export function HomeConnect() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSent(false);
    setPending(true);
    try {
      await submitLead(form, "Connect With Leading Book Publishers");
      form.reset();
      setSent(true);
    } catch {
      setError("We could not send that just now. Please email info@amzselfpub.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-white">
      <div className="mx-auto flex w-full max-w-[1140px] flex-col items-center gap-8 px-5 py-[60px] xl:flex-row xl:items-center xl:gap-0 xl:py-[88px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          alt="AMZ Self Pub"
          src="/images/home/AMZ favicon.png"
          className="h-auto w-[min(100%,180px)] shrink-0 xl:w-[220px]"
        />

        <div className="relative hidden h-[200px] w-px shrink-0 xl:mx-12 xl:block" aria-hidden>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            alt=""
            src="/images/home/imgLine41.svg"
            className="absolute top-1/2 left-1/2 h-px w-[200px] max-w-none -translate-x-1/2 -translate-y-1/2 rotate-90"
          />
        </div>

        <form onSubmit={onSubmit} className="w-full min-w-0 xl:flex-1">
          <h2 className="font-tinos text-[32px] leading-[1.2] font-normal tracking-[-1px] text-black xl:text-[40px]">
            <span>Connect With </span>
            <span className="font-bold text-brand">Leading</span>
            <span> Book </span>
            <br />
            <span>Publishers in USA Today</span>
          </h2>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:gap-5">
            <div>
              <label className="sr-only" htmlFor="connect-publishers-name">
                Full Name
              </label>
              <input
                id="connect-publishers-name"
                name="name"
                required
                placeholder="Full Name"
                className="h-[50px] w-full rounded-[15px] border border-solid border-black bg-transparent px-5 font-sans text-base text-black outline-none placeholder:text-black focus:border-brand"
              />
            </div>
            <div>
              <label className="sr-only" htmlFor="connect-publishers-email">
                Email
              </label>
              <input
                id="connect-publishers-email"
                name="email"
                type="email"
                required
                placeholder="Email*"
                className="h-[50px] w-full rounded-[15px] border border-solid border-black bg-transparent px-5 font-sans text-base text-black outline-none placeholder:text-black focus:border-brand"
              />
            </div>
          </div>

          <div className="mt-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between xl:gap-6">
            <div className="flex min-w-0 flex-1 items-start gap-2">
              <input
                id="connect-publishers-consent"
                name="consent"
                type="checkbox"
                required
                className="mt-0.5 size-[22px] shrink-0 appearance-none rounded-[8px] border border-solid border-black bg-white checked:border-black checked:bg-black"
              />
              <label htmlFor="connect-publishers-consent" className="font-sans text-[13px] leading-[1.45] text-black">
                We will add your info to our CRM for contacting you regarding your request. For more info please consult our{" "}
                <Link
                  href="/privacy-policy"
                  className="underline decoration-solid [text-underline-position:from-font]"
                  onClick={(event) => event.stopPropagation()}
                >
                  privacy policy.
                </Link>
              </label>
            </div>

            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-12 w-full shrink-0 items-center justify-center rounded-[15px] bg-black px-8 font-sans text-base font-medium text-white transition hover:bg-[#222] disabled:opacity-70 sm:w-auto"
            >
              {pending ? "Sending..." : "Subcribe"}
            </button>
          </div>

          {error ? (
            <p className="mt-4 text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-4 text-sm text-black" role="status">
              Thanks. A publishing expert will be in touch.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
