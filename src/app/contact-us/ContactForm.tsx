"use client";

import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  username: z.string().min(2).max(50),
});

const ContactForm = () => {
  // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }

  return (
    <React.Fragment>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* NAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="gap-y-3">
                <FormLabel className="text-white">Full Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Full Name"
                    {...field}
                    className="bg-white h-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* EMAIL */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="gap-y-3">
                <FormLabel className="text-white">Email address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email Address"
                    {...field}
                    className="bg-white h-10"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* MESSAGE */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="gap-y-3">
                <FormLabel className="text-white">
                  Tell us more about your inquiry
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your messages"
                    {...field}
                    className="bg-white h-28"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant={"secondary"} className="w-full">
            Submit
          </Button>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default ContactForm;
