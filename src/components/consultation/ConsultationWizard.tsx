"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useMemo, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { budgetOptions, projectTypes, timelineOptions } from "@/data/contact";
import { trackEvent } from "@/lib/analytics/events";
import { typography } from "@/styles/typography";
import { consultationSchema, type ConsultationFormValues } from "@/components/consultation/consultationSchema";
import { OptionSelector } from "@/components/consultation/OptionSelector";
import { ProgressIndicator } from "@/components/consultation/ProgressIndicator";
import { SuccessState } from "@/components/consultation/SuccessState";

const defaults: ConsultationFormValues = {
  projectType: "Residential",
  location: "",
  area: "",
  timeline: "3 Months",
  budget: "$50k-100k",
  name: "",
  company: "",
  email: "",
  phone: "",
  message: ""
};

export function ConsultationWizard() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    control,
    formState: { errors }
  } = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationSchema),
    defaultValues: defaults,
    mode: "onBlur"
  });

  const values = useWatch({ control });

  useEffect(() => {
    trackEvent("start_consultation", { form: "consultation_wizard" });
  }, []);

  useEffect(() => {
    trackEvent("consultation_step", { form: "consultation_wizard", step });
  }, [step]);

  const fieldsByStep = useMemo(
    () =>
      ({
        1: ["projectType"],
        2: ["location", "area", "timeline", "budget"],
        3: ["name", "email", "phone", "message"]
      }) as const,
    []
  );

  async function nextStep() {
    const valid = await trigger(fieldsByStep[step as 1 | 2 | 3]);
    if (valid) {
      setStep((current) => Math.min(current + 1, 3));
    }
  }

  if (submitted) {
    return <SuccessState />;
  }

  return (
    <form
      className="grid gap-10"
      onSubmit={handleSubmit((formValues) => {
        trackEvent("complete_consultation", {
          form: "consultation_wizard",
          projectType: formValues.projectType,
          timeline: formValues.timeline,
          budget: formValues.budget
        });
        setSubmitted(true);
      })}
    >
      <ProgressIndicator step={step} />

      {step === 1 ? (
        <div className="grid gap-8">
          <h2 className={typography.h2}>What kind of space are you planning?</h2>
          <OptionSelector
            label="Project type"
            options={projectTypes}
            register={register("projectType")}
            value={values.projectType}
          />
        </div>
      ) : null}

      {step === 2 ? (
        <div className="grid gap-8">
          <h2 className={typography.h2}>Tell us about the scope.</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Location" error={errors.location?.message}>
              <input {...register("location")} className="field-input" placeholder="Dhaka, Bangladesh" />
            </Field>
            <Field label="Approximate area" error={errors.area?.message}>
              <input {...register("area")} className="field-input" placeholder="2,500 sq ft" />
            </Field>
          </div>
          <OptionSelector
            label="Timeline"
            options={timelineOptions}
            register={register("timeline")}
            value={values.timeline}
          />
          <OptionSelector
            label="Budget"
            options={budgetOptions}
            register={register("budget")}
            value={values.budget}
          />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="grid gap-8">
          <h2 className={typography.h2}>How can we reach you?</h2>
          <div className="grid gap-5 md:grid-cols-2">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className="field-input" />
            </Field>
            <Field label="Company" error={errors.company?.message}>
              <input {...register("company")} className="field-input" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} autoComplete="email" className="field-input" spellCheck={false} type="email" />
            </Field>
            <Field label="Phone" error={errors.phone?.message}>
              <input {...register("phone")} autoComplete="tel" className="field-input" inputMode="tel" type="tel" />
            </Field>
          </div>
          <Field label="Message" error={errors.message?.message}>
            <textarea {...register("message")} className="field-input min-h-40" />
          </Field>
          <div className="border border-dashed border-[var(--color-border)] p-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-text-muted)]">
              Future upload
            </p>
            <p className="mt-3 text-sm leading-7 text-[var(--color-text-muted)]">
              Upload floor plans and inspiration images will be enabled with backend storage.
            </p>
          </div>
        </div>
      ) : null}

      <div className="flex flex-wrap justify-between gap-4 border-t border-[var(--color-border)] pt-6">
        <button
          className={`${typography.caption} border border-[var(--color-border)] px-5 py-3 transition hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] disabled:opacity-40`}
          disabled={step === 1}
          onClick={() => setStep((current) => Math.max(current - 1, 1))}
          type="button"
        >
          Back
        </button>
        {step < 3 ? (
          <button
            className={`${typography.caption} border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-3 text-white transition hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)]`}
            onClick={nextStep}
            type="button"
          >
            Next
          </button>
        ) : (
          <button
            className={`${typography.caption} border border-[var(--color-primary)] bg-[var(--color-primary)] px-5 py-3 text-white transition hover:border-[var(--color-primary-hover)] hover:bg-[var(--color-primary-hover)]`}
            type="submit"
          >
            Submit brief
          </button>
        )}
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="grid gap-2">
      <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-text-muted)]">
        {label}
      </span>
      {children}
      {error ? <span className="text-sm text-[var(--color-accent)]" role="alert">{error}</span> : null}
    </label>
  );
}
