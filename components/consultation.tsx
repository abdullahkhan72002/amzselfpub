"use client";

import { FormEvent, useEffect, useId, useState } from "react";
import { createContext, useContext } from "react";
import { CONTACT_EMAIL, PHONE_NUMBER, PHONE_TEL } from "@/lib/contact";
import { submitLead } from "@/lib/submit-lead";

const ConsultationContext = createContext<{ open: () => void } | null>(null);

export function useConsultation() {
  const value = useContext(ConsultationContext);
  if (!value) {
    throw new Error("Consultation popup is not available.");
  }
  return value;
}

export function ConsultButton({
  className,
  children,
  onClick,
}: {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
}) {
  const { open } = useConsultation();
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onClick?.();
        open();
      }}
    >
      {children}
    </button>
  );
}

export function ConsultationProvider({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <ConsultationContext.Provider value={{ open: () => setOpen(true) }}>
      {children}
      {open ? <ConsultationDialog titleId={titleId} onClose={() => setOpen(false)} /> : null}
    </ConsultationContext.Provider>
  );
}

function ConsultationDialog({ titleId, onClose }: { titleId: string; onClose: () => void }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [pending, setPending] = useState(false);
  const fieldClass =
    "h-12 w-full rounded-xl border border-black/10 bg-white px-4 font-sans text-base text-ink outline-none placeholder:text-placeholder focus:border-brand";

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setError("");
    setSent(false);
    setPending(true);
    try {
      await submitLead(form, "Free Consultation Popup");
      form.reset();
      setSent(true);
    } catch {
      setError("We could not send that just now. Please email info@amzselfpub.com.");
    } finally {
      setPending(false);
    }
  }

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center p-3 sm:items-center sm:p-6">
      <button type="button" className="absolute inset-0 bg-black/60" aria-label="Close consultation form" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 flex max-h-[min(92vh,820px)] w-full max-w-[920px] flex-col overflow-hidden rounded-[24px] bg-white shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 z-10 flex size-10 items-center justify-center rounded-full bg-white text-2xl leading-none text-black shadow-sm transition hover:bg-[#fff4e6] sm:top-4 sm:right-4"
          aria-label="Close"
        >
          ×
        </button>
        <div className="grid overflow-y-auto md:grid-cols-2">
          <div className="bg-[#161616] px-6 py-8 text-white sm:px-8 sm:py-10 md:py-12">
            <p className="font-sans text-sm font-semibold tracking-[0.14em] text-brand uppercase">Free consultation</p>
            <h2 id={titleId} className="mt-3 font-tinos text-[32px] leading-[1.15] font-bold sm:text-[40px]">
              Tell us about your book
            </h2>
            <p className="mt-4 font-sans text-[15px] leading-relaxed text-white/80 sm:text-base">
              Share the genre, where the manuscript stands, and what you want help with. A publishing expert will follow up with a clear scope.
            </p>
            <ul className="mt-6 space-y-3 font-sans text-[15px] text-white/90">
              <li>You keep the rights and the royalties.</li>
              <li>One team from editing through release.</li>
              <li>Nothing starts until you approve the scope.</li>
            </ul>
            <div className="mt-8 space-y-3 border-t border-white/15 pt-6 font-sans text-[15px]">
              <p>
                <span className="block text-xs tracking-wide text-white/60 uppercase">Phone</span>
                <a href={`tel:${PHONE_TEL}`} className="mt-1 inline-block text-lg font-medium text-white hover:text-brand">
                  {PHONE_NUMBER}
                </a>
              </p>
              <p>
                <span className="block text-xs tracking-wide text-white/60 uppercase">Email</span>
                <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 inline-block break-all text-lg font-medium text-white hover:text-brand">
                  {CONTACT_EMAIL}
                </a>
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} className="flex flex-col px-6 py-8 sm:px-8 sm:py-10 md:py-12">
            <h3 className="font-heading text-[28px] leading-tight font-bold text-ink">Start your consultation</h3>
            <p className="mt-2 font-sans text-[15px] leading-relaxed text-[#5c6570]">
              Leave your phone number and email and we will get back to you.
            </p>
            <div className="mt-6 flex flex-col gap-3.5">
              <label className="sr-only" htmlFor="consult-name">
                Name
              </label>
              <input id="consult-name" name="name" required placeholder="Name" autoComplete="name" className={fieldClass} />
              <label className="sr-only" htmlFor="consult-phone">
                Phone Number
              </label>
              <input id="consult-phone" name="phone" type="tel" required placeholder="Phone Number" autoComplete="tel" className={fieldClass} />
              <label className="sr-only" htmlFor="consult-email">
                Email Address
              </label>
              <input id="consult-email" name="email" type="email" required placeholder="Email Address" autoComplete="email" className={fieldClass} />
              <label className="sr-only" htmlFor="consult-message">
                Write A Message
              </label>
              <textarea id="consult-message" name="message" required placeholder="Write A Message" className={`${fieldClass} h-28 py-3`} />
            </div>
            <button
              type="submit"
              disabled={pending}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-[10px] bg-brand px-6 font-sans text-base font-medium text-white transition hover:bg-[#e58612] disabled:opacity-70"
            >
              {pending ? "Sending..." : "Submit"}
            </button>
            {error ? (
              <p className="mt-3 font-sans text-sm text-red-700" role="alert">
                {error}
              </p>
            ) : null}
            {sent ? (
              <p className="mt-3 font-sans text-sm text-ink" role="status">
                Thanks. A publishing expert will be in touch.
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </div>
  );
}
