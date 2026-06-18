"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { contactPageContent } from "@/data";
import { cn } from "@/utils/cn";

const inputClass =
  "w-full border-0 border-b border-stone-200 bg-transparent py-3 text-sm text-heading placeholder:text-stone-400 focus:border-gold focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/40 focus-visible:ring-offset-2";

export function ContactForm() {
  const { form } = contactPageContent;
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="rounded-2xl bg-white p-8 shadow-[var(--shadow-soft)] md:p-10">
      <h2 className="type-display-lg text-primary-container">{form.title}</h2>

      {submitted ? (
        <p className="type-body-sm mt-8 text-body-muted" role="status">
          Thank you for your inquiry. Our concierge team will be in touch shortly.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="full-name" className="label-caps text-body-muted">
              {form.fullName.label}
            </label>
            <input
              id="full-name"
              name="fullName"
              type="text"
              required
              placeholder={form.fullName.placeholder}
              className={cn(inputClass, "mt-2")}
            />
          </div>

          <div>
            <label htmlFor="email" className="label-caps text-body-muted">
              {form.email.label}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={form.email.placeholder}
              className={cn(inputClass, "mt-2")}
            />
          </div>

          <div>
            <label htmlFor="subject" className="label-caps text-body-muted">
              {form.subject.label}
            </label>
            <select
              id="subject"
              name="subject"
              required
              defaultValue={form.subject.options[0]}
              className={cn(inputClass, "mt-2 cursor-pointer")}
            >
              {form.subject.options.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="message" className="label-caps text-body-muted">
              {form.message.label}
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              placeholder={form.message.placeholder}
              className={cn(inputClass, "mt-2 resize-none")}
            />
          </div>

          <button
            type="submit"
            className="type-btn mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-primary text-on-primary transition-colors hover:bg-primary-container [@media(hover:hover)]:hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2"
          >
            {form.submit}
            <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
          </button>
        </form>
      )}
    </div>
  );
}
