"use client";

import { Loader2 } from "lucide-react";
import { type FormEvent, useState } from "react";

import { Button } from "@/components/ui/button";
import type { UiDictionary } from "@/content/ui/types";

const CONTACT_API_URL = process.env.NEXT_PUBLIC_CONTACT_API_URL;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Status = "idle" | "sending" | "success" | "error";

type FieldErrors = {
  name?: string;
  email?: string;
  message?: string;
};

const fieldClass =
  "w-full rounded-sm border border-border bg-surface px-3 py-2.5 text-sm text-foreground placeholder:text-dim transition-colors focus:border-border-strong aria-[invalid=true]:border-border-strong";

const labelClass = "font-mono text-sm text-muted-foreground";

const errorClass = "mt-1.5 font-mono text-xs text-foreground";

interface ContactFormProps {
  messages: UiDictionary["contact"]["form"];
}

export function ContactForm({ messages }: ContactFormProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});

  function validate(): FieldErrors {
    const next: FieldErrors = {};
    if (name.trim().length < 2) {
      next.name = messages.errors.name;
    }
    if (!EMAIL_PATTERN.test(email.trim())) {
      next.email = messages.errors.email;
    }
    if (message.trim().length < 10) {
      next.message = messages.errors.message;
    }
    return next;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!CONTACT_API_URL) {
      setStatus("error");
      return;
    }

    setStatus("sending");

    try {
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message, company }),
      });

      if (response.status === 200 || response.status === 204) {
        setStatus("success");
        setName("");
        setEmail("");
        setMessage("");
        setCompany("");
        setErrors({});
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  const sending = status === "sending";

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      <div>
        <label htmlFor="name" className={labelClass}>
          {messages.name}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          maxLength={120}
          autoComplete="name"
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? "name-error" : undefined}
          placeholder={messages.namePlaceholder}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.name && (
          <p id="name-error" className={errorClass}>
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          {messages.email}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          maxLength={200}
          autoComplete="email"
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? "email-error" : undefined}
          placeholder={messages.emailPlaceholder}
          className={`mt-2 ${fieldClass}`}
        />
        {errors.email && (
          <p id="email-error" className={errorClass}>
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          {messages.message}
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          maxLength={5000}
          rows={5}
          aria-invalid={errors.message ? true : undefined}
          aria-describedby={errors.message ? "message-error" : undefined}
          placeholder={messages.messagePlaceholder}
          className={`mt-2 resize-y ${fieldClass}`}
        />
        {errors.message && (
          <p id="message-error" className={errorClass}>
            {errors.message}
          </p>
        )}
      </div>

      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-9999px",
          width: 1,
          height: 1,
          overflow: "hidden",
        }}
      >
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <Button type="submit" size="lg" disabled={sending}>
          {sending ? (
            <>
              <Loader2 className="animate-spin" />
              {messages.sending}
            </>
          ) : (
            messages.submit
          )}
        </Button>

        <p
          role="status"
          aria-live="polite"
          className="font-mono text-sm text-muted-foreground"
        >
          {status === "success" && messages.success}
          {status === "error" && messages.error}
        </p>
      </div>
    </form>
  );
}
