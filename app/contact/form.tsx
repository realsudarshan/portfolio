'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';

import { Button } from "@/components/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/components/ui/form";
import { Input } from "@/components/components/ui/input";
import { Textarea } from "@/components/components/ui/textarea";
import { useToast } from "@/components/hooks/use-toast";

// 1. Define the validation schema
const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Invalid email address." }),
  job: z.string().min(2, { message: "Job title is required." }),
  deadline: z.string().min(1, { message: "Deadline is required." }),
  details: z.string().min(10, { message: "Please provide more details (min 10 chars)." }),
});

export function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  // 2. Initialize the form
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      job: "",
      deadline: "",
      details: "",
    },
  });

  // 3. Handle Submit
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      
      setSuccess(true);
      toast({
        title: "Message sent!",
        description: "I'll get back to you as soon as possible.",
      });
      form.reset();
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  }

  if (success) {
    return (
      <div className="flex flex-col items-center justify-center space-y-4 p-8 text-center border rounded-lg">
        <h1 className="text-2xl font-bold">Thank you!</h1>
        <p className="text-muted-foreground">
          I've got your details and will be in touch soon 😊
        </p>
        <Button variant="outline" onClick={() => setSuccess(false)}>Send another message</Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      {/* We keep the native form ref for EmailJS compatibility */}
      <form 
        ref={formRef} 
        onSubmit={form.handleSubmit(onSubmit)} 
        className="space-y-6 max-w-2xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="john@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={form.control}
            name="job"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job</FormLabel>
                <FormControl>
                  <Input placeholder="Project type" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="deadline"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Deadline</FormLabel>
                <FormControl>
                  <Input placeholder="e.g. 2 weeks" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="details"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Add any details or information</FormLabel>
              <FormControl>
                <Textarea 
                  placeholder="Tell me about your project..." 
                  className="min-h-[120px]"
                  {...field} 
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full md:w-auto" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </Form>
  );
}