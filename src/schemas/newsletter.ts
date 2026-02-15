import z from "zod";

const NewsletterSchema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type NewsletterType = z.infer<typeof NewsletterSchema>;
export { NewsletterSchema, type NewsletterType };
