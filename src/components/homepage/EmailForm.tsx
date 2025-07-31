"use client";
import React from "react";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";


const formSchema = z.object({
  email: z.string().email(),
});

const EmailForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

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
          className="flex items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="">
                <div aria-describedby="input-wrapper" className="relative">
                  <FormControl>
                    <Input
                      placeholder="Enter your email"
                      {...field}
                      className="bg-white w-80 pr-24 md:pr-28 sm:w-md h-12"
                    />
                  </FormControl>

                  <Button
                    type="submit"
                    variant={"secondary"}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 h-full text-base md:text-xl"
                  >
                    Submit
                  </Button>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </Form>
    </React.Fragment>
  );
};

export default EmailForm;
