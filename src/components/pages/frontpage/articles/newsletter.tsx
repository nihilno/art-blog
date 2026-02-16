"use client";

import Button from "@/components/globals/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useNewsletter } from "@/hooks/use-newsletter";

function Newsletter() {
  const { form, onSubmit } = useNewsletter();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="bg-muted mt-24 flex flex-col items-start space-y-4 p-8"
      >
        <p className="font-bold uppercase">Newsletter</p>
        <h3 className="max-w-[14ch] text-3xl font-bold">
          Design News to your inbox
        </h3>
        <FormField
          name="email"
          control={form.control}
          render={({ field, fieldState }) => (
            <FormItem className="w-full">
              <FormControl>
                <Input
                  placeholder="Email"
                  {...field}
                  aria-invalid={fieldState.invalid}
                  aria-label="Email address"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="self-end">
          Sign up
        </Button>
      </form>
    </Form>
  );
}

export default Newsletter;
