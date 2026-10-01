"use client";

import Image from "next/image";
import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";

export function Connect() {
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
    <section className="bg-[linear-gradient(180deg,#ffffff_0%,#ffffff_78%,#fff4e6_100%)]">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 lg:grid-cols-[280px_1fr] lg:py-24">
        <Image
          src="/images/connect-image.png"
          alt=""
          width={220}
          height={180}
          className="mx-auto h-auto w-44 sm:w-44"
        />
        <form onSubmit={onSubmit} className="min-w-0 border-t border-[#d7dde3] pt-8 lg:border-t-0 lg:border-l lg:pt-0 lg:pl-10">
          <h2 className="max-w-xl font-heading text-4xl leading-tight text-navy sm:text-5xl">
            Connect With <span className="text-teal">Leading</span> Book Publishers in USA Today
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <input
              name="fullName"
              required
              placeholder="Full Name"
              className="h-12 rounded-full border border-[#d5dbe1] px-5 outline-none focus:border-teal"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email*"
              className="h-12 rounded-full border border-[#d5dbe1] px-5 outline-none focus:border-teal"
            />
          </div>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex max-w-md items-start gap-3 text-xs leading-relaxed text-[#66707a]">
              <input type="checkbox" required className="mt-1 accent-navy" />
              <span>
                We will add your info to our CRM for contacting you regarding your request.
                For more info please consult our privacy policy.
              </span>
            </label>
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-12 shrink-0 items-center gap-3 rounded-lg bg-navy px-5 text-sm font-medium text-white disabled:opacity-70"
            >
              {pending ? "Sending..." : "Subscribe"}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-xs">
                ↗
              </span>
            </button>
          </div>
          {error ? (
            <p className="mt-4 text-sm text-red-700" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-4 text-sm text-navy" role="status">
              You are on the list.
            </p>
          ) : null}
        </form>
      </div>
    </section>
  );
}
