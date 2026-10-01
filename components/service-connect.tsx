"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import { submitLead } from "@/lib/submit-lead";

export function ServiceConnect({
  title = "Connect With Leading Book Publishers in USA Today",
  image = "/images/editing-desk.jpg",
}: {
  title?: string;
  image?: string;
}) {
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
      await submitLead(form, title);
      form.reset();
      setSent(true);
    } catch {
      setError("We could not send that just now. Please email info@amzselfpub.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 hidden w-[46%] lg:block">
        <Image
          src={image}
          alt=""
          fill
          sizes="46vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black from-0% via-black via-[32%] to-transparent to-[72%]" />
      </div>
      <div className="relative mx-auto grid max-w-6xl px-5 py-14 sm:px-8 lg:grid-cols-[minmax(0,1fr)_40%] lg:py-16">
        <form onSubmit={onSubmit} className="lg:pr-12">
          <h2 className="max-w-xl font-heading text-4xl leading-tight sm:text-5xl">{title}</h2>
          <div className="mt-8 grid gap-4 sm:max-w-xl sm:grid-cols-2">
            <input
              name="fullName"
              required
              placeholder="Full Name"
              className="h-12 rounded-full border border-white/40 bg-transparent px-5 text-white outline-none placeholder:text-white/80 focus:border-white"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email*"
              className="h-12 rounded-full border border-white/40 bg-transparent px-5 text-white outline-none placeholder:text-white/80 focus:border-white"
            />
          </div>
          <div className="mt-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <label className="flex max-w-md items-start gap-3 text-xs leading-relaxed text-white/90">
              <input type="checkbox" required className="mt-1 accent-white" />
              <span>
                We will add your info to our CRM for contacting you regarding your request. For more
                info please consult our privacy policy.
              </span>
            </label>
            <button
              type="submit"
              disabled={pending}
              className="inline-flex h-12 shrink-0 items-center gap-3 rounded-lg bg-brand px-5 text-sm font-medium text-white transition hover:bg-[#e58612] disabled:opacity-70"
            >
              {pending ? "Sending..." : "Subscribe"}
              <span className="flex h-6 w-6 items-center justify-center rounded-full border border-white/70 text-xs">
                ↗
              </span>
            </button>
          </div>
          {error ? (
            <p className="mt-4 text-sm" role="alert">
              {error}
            </p>
          ) : null}
          {sent ? (
            <p className="mt-4 text-sm" role="status">
              You are on the list.
            </p>
          ) : null}
        </form>
        <div className="hidden lg:block" />
      </div>
      <div aria-hidden="true" className="relative h-64 lg:hidden">
        <Image src={image} alt="" fill sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black from-0% via-black/40 via-[22%] to-transparent" />
      </div>
    </section>
  );
}
