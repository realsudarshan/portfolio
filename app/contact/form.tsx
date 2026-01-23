'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import emailjs from '@emailjs/browser';
import { useState, useRef } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

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

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    setLoading(true);
    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      console.log("Email sent successfully");
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

  // --- Styled Sub-classes ---
  const inputClasses = "bg-white/5 border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20 transition-all duration-300 placeholder:text-slate-600 rounded-xl py-6";
  const labelClasses = "text-slate-300 font-medium ml-1";

  return (
    <AnimatePresence mode="wait">
      {success ? (
        <motion.div 
          key="success"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="flex flex-col items-center justify-center space-y-6 py-12 text-center"
        >
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500">
            <CheckCircle2 className="h-12 w-12" />
          </div>
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-white">Message Received!</h2>
            <p className="text-slate-400">
              Your vision is in my inbox. I&apos;ll reach out shortly.
            </p>
          </div>
          <Button 
            variant="ghost" 
            className="text-blue-400 hover:text-blue-300 hover:bg-blue-500/10"
            onClick={() => setSuccess(false)}
          >
            Send another message
          </Button>
        </motion.div>
      ) : (
        <Form {...form}>
          <motion.form 
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            ref={formRef} 
            onSubmit={form.handleSubmit(onSubmit)} 
            className="space-y-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>Full Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John Doe" className={inputClasses} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>Email Address</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="john@example.com" className={inputClasses} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                control={form.control}
                name="job"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>Project Type</FormLabel>
                    <FormControl>
                      <Input placeholder="Web Design, SaaS..." className={inputClasses} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="deadline"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className={labelClasses}>Expected Deadline</FormLabel>
                    <FormControl>
                      <Input placeholder="e.g. 1 month" className={inputClasses} {...field} />
                    </FormControl>
                    <FormMessage className="text-red-400" />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="details"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className={labelClasses}>Project Details</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell me more about your goals..." 
                      className={`${inputClasses} min-h-[150px] py-4 resize-none`}
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage className="text-red-400" />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="group relative h-14 w-full overflow-hidden rounded-xl bg-blue-600 font-bold text-white transition-all hover:bg-blue-500 md:w-48"
              disabled={loading}
            >
              <div className="relative z-10 flex items-center justify-center gap-2">
                {loading ? (
                  <Loader2 className="h-5 w-5 animate-spin" />
                ) : (
                  <>
                    <span>Send Message</span>
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </>
                )}
              </div>
            </Button>
          </motion.form>
        </Form>
      )}
    </AnimatePresence>
  );
}