import { z } from "zod";
import { budgetOptions, projectTypes, timelineOptions } from "@/data/contact";

export const consultationSchema = z.object({
  projectType: z.enum(projectTypes),
  location: z.string().min(2, "Project location is required."),
  area: z.string().min(1, "Approximate area is required."),
  timeline: z.enum(timelineOptions),
  budget: z.enum(budgetOptions),
  name: z.string().min(2, "Name is required."),
  company: z.string().optional(),
  email: z.email("Enter a valid email address."),
  phone: z.string().min(6, "Phone number is required."),
  message: z.string().min(10, "Please share a little more about the project.")
});

export type ConsultationFormValues = z.infer<typeof consultationSchema>;
