import type { Metadata } from 'next';
import { ContactForm } from './form';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    "If you want to know more about me or my work, I'll be happy to answer questions and share what I'm up to. You can contact me directly through the contact form."
};

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container max-w-4xl mx-auto px-6 pt-20 pb-16">
        <div className="space-y-4">
          <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
            {String(metadata.title)}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            {metadata.description}
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="bg-secondary/30 py-16 md:py-24">
        <div className="container max-w-4xl mx-auto px-6">
          <h2 className="sr-only">Contact Form</h2>
          <div className="bg-background p-8 md:p-12 rounded-xl border shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}