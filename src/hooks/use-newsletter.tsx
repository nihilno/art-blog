import { NewsletterSchema, NewsletterType } from "@/schemas/newsletter";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

export function useNewsletter() {
  const form = useForm<NewsletterType>({
    defaultValues: {
      email: "",
    },
    resolver: zodResolver(NewsletterSchema),
  });

  function onSubmit(formData: NewsletterType) {
    toast.success("Subscribed to newsletter!");
    form.reset();
  }

  return { form, onSubmit };
}
