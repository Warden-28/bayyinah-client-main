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

const QuestionForm = () => {
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
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full grid grid-cols-1 sm:grid-cols-2 gap-6"
        >
          {/* NAME */}
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem className="gap-y-3">
                <FormLabel className="text-white">Your Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your name"
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
                <FormLabel className="text-white">Your Email Address</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Enter your email"
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
              <FormItem className="gap-y-3 col-span-full">
                <FormLabel className="text-white">
                  Short your personal message
                </FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter your email"
                    {...field}
                    className="bg-white h-28"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" variant={"secondary"} className="col-span-full">
            Send
          </Button>
        </form>
      </Form>
    </React.Fragment>
  );
};

export default QuestionForm;
