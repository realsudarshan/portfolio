'use client';

import { NewsletterForm } from './newsletter-form';

export function NewsletterInline() {
    return (
        <section className="[ newsletter-inline ] [ region ] [ bg-primary-100 ]">
            <div className="[ wrapper ] [ flow ] [ text-center ]">
                <h2 className="fs-700">📬 Subscribe to my newsletter</h2>
                <p className="fs-400" style={{ maxWidth: '60ch', margin: '0 auto' }}>
                    Get notified when I publish new blog posts about web development, coding
                    tips, and tech insights. No spam, just quality content delivered to your
                    inbox.
                </p>
                <div style={{ maxWidth: '500px', margin: '0 auto' }}>
                    <NewsletterForm
                        placeholder="your.email@example.com"
                        buttonText="Subscribe Now"
                    />
                </div>
            </div>
        </section>
    );
}
