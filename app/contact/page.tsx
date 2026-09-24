import type { Metadata } from 'next';
import { ContactForm } from './form';
import { FaXTwitter, FaLinkedin, FaDiscord, FaGithub } from 'react-icons/fa6';

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

      {/* Social Links Section */}
      <section className="container max-w-4xl mx-auto px-6 py-16">
        <div className="text-center space-y-6">
          <p className="text-slate-500 dark:text-slate-400 text-sm uppercase tracking-widest font-semibold">Or reach me directly on</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="http://discord.com/users/1519599755972317374"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#5865F2] text-white font-medium hover:bg-[#4752c4] transition-colors shadow-sm"
            >
              <FaDiscord className="w-5 h-5" />
              Discord
            </a>
            <a
              href="https://x.com/realsudarsan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-black text-white font-medium hover:bg-neutral-800 transition-colors shadow-sm"
            >
              <FaXTwitter className="w-5 h-5" />
              @realsudarsan
            </a>
            <a
              href="https://www.linkedin.com/in/sudarsan-dhakal-5b4522284"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-[#0077B5] text-white font-medium hover:bg-[#005f91] transition-colors shadow-sm"
            >
              <FaLinkedin className="w-5 h-5" />
              LinkedIn
            </a>
            <a
              href="https://github.com/realsudarshan"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-slate-800 text-white font-medium hover:bg-slate-700 transition-colors shadow-sm"
            >
              <FaGithub className="w-5 h-5" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}