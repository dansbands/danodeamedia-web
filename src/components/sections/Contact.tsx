"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./Contact.module.css";

type FormValues = {
  name: string;
  email: string;
  message: string;
  company: string; // honeypot
};

export function Contact() {
  const [status, setStatus] = useState<
    | { state: "idle" }
    | { state: "submitting" }
    | { state: "success" }
    | { state: "error"; message: string }
  >({ state: "idle" });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: { name: "", email: "", message: "", company: "" },
  });

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ state: "submitting" });

    // Honeypot: treat as success without sending.
    if (values.company.trim().length > 0) {
      setStatus({ state: "success" });
      reset();
      return;
    }

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });

      const json = (await res.json()) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setStatus({ state: "error", message: json.error || "Something went wrong." });
        return;
      }

      setStatus({ state: "success" });
      reset();
    } catch {
      setStatus({ state: "error", message: "Network error. Please try again." });
    }
  });

  return (
    <section id="contact" className={styles.section} aria-label="Contact">
      <div className={styles.inner}>
        <header className={styles.header}>
          <h2 className={styles.title}>Contact</h2>
          <p className={styles.subtitle}>Send a note. I usually respond within a day.</p>
        </header>

        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.row}>
            <label className={styles.label}>
              Name
              <input
                className={styles.input}
                {...register("name", { required: true, minLength: 2 })}
                autoComplete="name"
              />
              {errors.name ? <span className={styles.error}>Please enter your name.</span> : null}
            </label>
            <label className={styles.label}>
              Email
              <input
                className={styles.input}
                {...register("email", { required: true })}
                autoComplete="email"
                inputMode="email"
              />
              {errors.email ? <span className={styles.error}>Please enter a valid email.</span> : null}
            </label>
          </div>

          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              rows={6}
              {...register("message", { required: true, minLength: 10 })}
            />
            {errors.message ? (
              <span className={styles.error}>Please enter a message (10+ chars).</span>
            ) : null}
          </label>

          {/* Honeypot: hidden field for bots */}
          <div className={styles.honeypot} aria-hidden="true">
            <label>
              Company
              <input tabIndex={-1} autoComplete="off" {...register("company")} />
            </label>
          </div>

          <div className={styles.actions}>
            <button className={styles.button} type="submit" disabled={status.state === "submitting"}>
              {status.state === "submitting" ? "Sending…" : "Send"}
            </button>
            {status.state === "success" ? (
              <p className={styles.success} role="status">
                Message sent.
              </p>
            ) : null}
            {status.state === "error" ? (
              <p className={styles.errorText} role="alert">
                {status.message}
              </p>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
}
