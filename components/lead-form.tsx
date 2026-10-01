"use client";

import { FormEvent, useState } from "react";
import { submitLead } from "@/lib/submit-lead";

type LeadFormProps = {
  id?: string;
  title: string;
  subtitle?: string;
  tone?: "panel" | "plain";
  align?: "center" | "left";
  theme?: "light" | "onDark";
  submitLabel?: string;
};

export function LeadForm({
  id,
  title,
  subtitle = "Discuss your project with our publishing expert",
  tone = "panel",
  align = "center",
  theme = "light",
  submitLabel = "Submit",
}: LeadFormProps) {
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
    <form
      id={id}
      onSubmit={onSubmit}
      className={
        tone === "panel"
          ? "rounded-[2rem] bg-form px-6 py-8 sm:px-8 sm:py-10"
          : "px-0 py-0"
      }
    >
      <h2
        className={`font-heading text-3xl leading-tight sm:text-4xl ${align === "center" ? "text-center" : "text-left"} ${theme === "onDark" ? "text-white" : "text-ink"}`}
      >
        {title}
      </h2>
      <p className={`mt-2 text-base ${align === "center" ? "text-center" : "text-left"} ${theme === "onDark" ? "text-white" : "text-black"}`}>
        {subtitle}
      </p>

      <div className="mt-6 flex flex-col gap-4">
        <label className="sr-only" htmlFor={`${id}-name`}>
          Name
        </label>
        <input
          id={`${id}-name`}
          name="name"
          required
          placeholder="Name"
          className="h-14 rounded-xl border border-black/10 bg-white px-4 text-base text-ink outline-none placeholder:text-placeholder focus:border-teal"
        />
        <label className="sr-only" htmlFor={`${id}-phone`}>
          Phone Number
        </label>
        <input
          id={`${id}-phone`}
          name="phone"
          required
          placeholder="Phone Number"
          className="h-14 rounded-xl border border-black/10 bg-white px-4 text-base text-ink outline-none placeholder:text-placeholder focus:border-teal"
        />
        <label className="sr-only" htmlFor={`${id}-email`}>
          Email Address
        </label>
        <input
          id={`${id}-email`}
          name="email"
          type="email"
          required
          placeholder="Email Address"
          className="h-14 rounded-xl border border-black/10 bg-white px-4 text-base text-ink outline-none placeholder:text-placeholder focus:border-teal"
        />
        <label className="sr-only" htmlFor={`${id}-message`}>
          Write A Message
        </label>
        <textarea
          id={`${id}-message`}
          name="message"
          required
          placeholder="Write A Message"
          rows={4}
          className="rounded-xl border border-black/10 bg-white px-4 py-4 text-base text-ink outline-none placeholder:text-placeholder focus:border-teal"
        />
      </div>

      <button
        type="submit"
        disabled={pending}
        className={`mt-6 flex h-12 min-w-36 items-center justify-center rounded-lg bg-teal px-8 text-base font-medium text-white transition hover:bg-[#e58612] disabled:opacity-70 ${align === "center" ? "mx-auto" : ""}`}
      >
        {pending ? "Sending..." : submitLabel}
      </button>
      {error ? (
        <p className={`mt-4 text-sm text-red-700 ${align === "center" ? "text-center" : ""}`} role="alert">
          {error}
        </p>
      ) : null}
      {sent ? (
        <p className="mt-4 text-center text-sm text-navy" role="status">
          Thanks. A publishing expert will be in touch.
        </p>
      ) : null}
    </form>
  );
}
