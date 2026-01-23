'use client';

import { NewsletterForm } from './newsletter-form';

export function NewsletterInline() {
  return (
    // Changed bg-slate-50 to bg-muted/50 and border-slate-100 to border-border
    <section className="w-full py-12 md:py-24 bg-muted/30 border-y border-border">
      <div className="container max-w-4xl mx-auto px-4 text-center">
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            📬 Subscribe to my newsletter
          </h2>
          <p className="text-muted-foreground text-lg max-w-[60ch] mx-auto">
            Get notified when I publish new blog posts about web development, coding
            tips, and tech insights.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <NewsletterForm
            placeholder="your.email@example.com"
            buttonText="Subscribe Now"
          />
        </div>
      </div>
    </section>
  );
}