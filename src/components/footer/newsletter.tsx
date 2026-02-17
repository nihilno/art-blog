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
import { Loader2 } from "lucide-react";

function Newsletter() {
  const { form, onSubmit, isLoading } = useNewsletter();

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center justify-between"
      >
        <h2 className="text-6xl font-extrabold">
          Design news to <br /> your inbox
        </h2>
        <div className="flex items-center gap-2">
          <FormField
            name="email"
            control={form.control}
            render={({ field, fieldState }) => (
              <FormItem className="w-80">
                <FormControl>
                  <Input
                    placeholder="Email"
                    {...field}
                    aria-invalid={fieldState.invalid}
                    type="email"
                  />
                </FormControl>
              </FormItem>
            )}
          />
          <Button type="submit" className="self-end" disabled={isLoading}>
            {isLoading ? (
              <Loader2 className="size-4 animate-spin" />
            ) : (
              "Sign up"
            )}
          </Button>
        </div>
        <FormMessage />
      </form>
    </Form>
  );
}

export default Newsletter;
