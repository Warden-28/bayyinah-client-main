"use client";

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPinterest,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { Mail, MapPin, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

// Subscribe Form Schema
const formSchema = z.object({
  email: z.string().email(),
});

export const FooterSubscribeForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setSubmitted(true);
    form.reset();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-center gap-x-4 h-14">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-y-2 h-full">
              <FormControl>
                <Input placeholder="Email Address" {...field} className="h-full" />
              </FormControl>
            </FormItem>
          )}
        />
        <Button type="submit" className="h-full text-base cursor-pointer">
          Subscribe
        </Button>
      </form>
      {submitted && (
        <p className="text-green-600 text-sm mt-2">Thanks for subscribing!</p>
      )}
    </Form>
  );
};

export const SocialLists = () => {
  const SOCIAL_LISTS = [
    { key: "facebook", icon: FaFacebookF, url: "#" },
    { key: "linkedin", icon: FaLinkedinIn, url: "#" },
    { key: "instagram", icon: FaInstagram, url: "#" },
    { key: "youtube", icon: FaYoutube, url: "#" },
    { key: "pinterest", icon: FaPinterest, url: "#" },
  ];

  return (
    <ul className="flex items-center gap-x-3 gap-y-4">
      {SOCIAL_LISTS.map(({ icon: Icon, key, url }) => (
        <li className="flex w-max" key={key}>
          <Link
            href={url}
            aria-label={key}
            className="text-sm text-white bg-regal-blue-500 p-2 rounded-full flex items-center justify-center w-max transition-all ease-in-out duration-300 hover:bg-regal-blue-600 group/social-link"
          >
            <Icon className="transition-transform ease-in-out duration-200 group-hover/social-link:scale-120" />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const FooterNavigation = () => {
  const FOOTER_NAV_ITEMS = [
    {
      key: "Courses",
      lists: [
        { label: "Quran Tajweed", url: "#" },
        { label: "Quran Hifz", url: "#" },
        { label: "Arabic Language", url: "#" },
        { label: "Islamic Studies", url: "#" },
      ],
    },
    {
      key: "Explore",
      lists: [
        { label: "About us", url: "/about-us" },
        { label: "Blog", url: "/blogs" },
        { label: "Teachers", url: "/our-teachers" },
        { label: "Testimonials", url: "/testimonials" },
        { label: "FAQ", url: "/faqs" },
        { label: "Career", url: "/career" },
        { label: "Sitemap", url: "/sitemap" },
        { label: "Contact us", url: "/contact-us" },
      ],
    },
  ];

  return (
    <React.Fragment>
      {FOOTER_NAV_ITEMS.map((nav) => (
        <ul className="flex flex-col gap-y-4" key={nav.key}>
          <h4 className="text-xl font-bold text-neutral-800 uppercase">{nav.key}</h4>
          {nav.lists.map((list, index) => (
            <li key={index}>
              <Link
                href={list.url}
                className="text-lg font-normal text-neutral-800 transition-colors ease-in-out duration-300 hover:text-sky-blue-500"
              >
                {list.label}
              </Link>
            </li>
          ))}
        </ul>
      ))}
    </React.Fragment>
  );
};

export const ContactLists = () => {
  const CONTACT_LISTS = [
    {
      key: "email",
      label: "support@bayyinah.academy",
      url: "mailto:support@bayyinah.academy",
      icon: Mail,
    },
    {
      key: "phone",
      label: "+44 77 0018 3406",
      url: "tel:+447700183406",
      icon: PhoneCall,
    },
    {
      key: "location",
      label: "85 Great Portland Street, First Floor, England, W1W 7LT, London, United Kingdom",
      url: "https://maps.app.goo.gl/pg94BVUuYVQPzqYv9",
      icon: MapPin,
    },
  ];

  return (
    <div>
      <h4 className="text-xl mb-4 font-bold text-neutral-800 uppercase">Get In Touch</h4>
      <ul className="flex flex-col gap-y-4">
        {CONTACT_LISTS.map((contact) => (
          <li className="flex" key={contact.key}>
            <Link
              href={contact.url}
              target={contact.key === "location" ? "_blank" : "_self"}
              className="flex items-start gap-x-2 group/contact-item"
            >
              <span className="bg-white p-2 border border-[#F3F3F3] shadow-sm rounded-full transition-colors group-hover/contact-item:border-sky-blue-500">
                <contact.icon className="w-4 h-4 text-regal-blue-500" />
              </span>
              <p className="text-lg text-neutral-800 transition-colors group-hover/contact-item:text-sky-blue-500">
                {contact.label}
              </p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <React.Fragment>
      <footer aria-describedby="main-footer">
        <div className="container">
          <div className="flex flex-col sm:flex-row gap-x-16 gap-y-10 py-12">
            <div>
              <div className="w-48 mb-12">
                <Image
                  src={"/Bayyinah Logo.webp"}
                  width={520}
                  height={162}
                  alt="Bayyinah logo"
                  priority
                />
              </div>

              <div className="mb-8">
                <FooterSubscribeForm />
              </div>

              <div className="mb-12">
                <SocialLists />
              </div>

              {/* ✅ WhatsApp Button above App Download */}
              <div className="mb-8 w-full">
                <Link
                  href="https://api.whatsapp.com/send?phone=447700183406&text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20courses"
                  target="_blank"
                  className="flex items-center gap-x-2 px-4 py-3 rounded-full bg-[#25D366] text-white font-medium text-base w-max shadow-md hover:bg-[#1DA851] transition-colors duration-300"
                >
                  <ImWhatsapp className="text-xl" />
                  Chat with us on WhatsApp
                </Link>
              </div>

              <div className="flex flex-col gap-y-3">
                <h4 className="text-xl font-medium text-neutral-800">Download our App</h4>
                <div className="w-[300px] flex cursor-not-allowed">
                  <Image
                    src={"/app-store.png"}
                    width={903}
                    height={198}
                    alt="Bayyinah Mobile app"
                  />
                </div>
              </div>
            </div>

            <div className="flex flex-wrap xl:flex-nowrap gap-x-20 gap-y-10">
              <FooterNavigation />
              <ContactLists />
            </div>
          </div>
        </div>

        <div className="bg-[#EDEFF2] h-20 flex items-center justify-center w-full">
          <div className="container">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
              <p className="text-sm sm:text-base font-medium text-neutral-800">
                © Bayyinah Academy Ltd.
              </p>
              <ul className="flex items-center">
                <li className="flex pr-2 border-r border-r-neutral-400 last:pr-0">
                  <Link
                    href={"/terms-of-services"}
                    className="text-xs sm:text-base font-medium text-neutral-600 hover:text-regal-blue-600"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li className="flex pl-2">
                  <Link
                    href={"/privacy-policy"}
                    className="text-xs sm:text-base font-medium text-neutral-600 hover:text-regal-blue-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* ✅ Floating WhatsApp Button */}
      <Link
        href="https://api.whatsapp.com/send?phone=447700183406&text=Hi%2C%20I%20would%20like%20to%20learn%20more%20about%20your%20courses"
        target="_blank"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1DA851] text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors duration-300"
      >
        <ImWhatsapp className="text-2xl" />
      </Link>
    </React.Fragment>
  );
};

export default Footer;
