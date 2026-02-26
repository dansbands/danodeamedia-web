"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "./Contact.module.css";

type FormValues = {
  firstName: string;
  lastName: string;
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
    defaultValues: { firstName: "", lastName: "", email: "", message: "", company: "" },
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
    <section id="contact" className={styles.smooth} aria-label="Contact">
      <div className={styles.contactOuter}>
        <div className={styles.contactInner}>
          <div className={styles.column1}>
            <h1>CONTACT</h1>
            <p>
              I hope you enjoyed my site. If you have any further questions, or have a position
              open, I would love to hear from you!
            </p>
          </div>

          <div className={styles.column2}>
            <form className={styles.contactForm} onSubmit={onSubmit}>
              <label>First Name:</label>
              <input
                className={styles.formControl}
                {...register("firstName", { required: true, minLength: 2 })}
                autoComplete="given-name"
                name="firstName"
              />
              {errors.firstName ? (
                <div className={styles.errorMessage}>First name is required.</div>
              ) : null}

              <label>Last Name:</label>
              <input
                className={styles.formControl}
                {...register("lastName", { required: true, minLength: 2 })}
                autoComplete="family-name"
                name="lastName"
              />
              {errors.lastName ? (
                <div className={styles.errorMessage}>Last name is required.</div>
              ) : null}

              <label>Email:</label>
              <input
                className={styles.formControl}
                type="email"
                {...register("email", { required: true })}
                autoComplete="email"
                inputMode="email"
                name="email"
              />
              {errors.email ? <div className={styles.errorMessage}>Email is required.</div> : null}

              <label>Message:</label>
              <textarea
                className={styles.formControl}
                {...register("message", { required: true, minLength: 10 })}
                name="message"
              />
              {errors.message ? (
                <div className={styles.errorMessage}>Message must be 10+ characters.</div>
              ) : null}

              {/* Honeypot: hidden field for bots */}
              <div className={styles.honeypot} aria-hidden="true">
                <label>
                  Company
                  <input tabIndex={-1} autoComplete="off" {...register("company")} />
                </label>
              </div>

              <button className={styles.btn} type="submit" disabled={status.state === "submitting"}>
                {status.state === "submitting" ? "Sending…" : "Send Message"}
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
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
