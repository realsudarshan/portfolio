'use client';

import { newsletterSchema } from 'lib/validate-newsletter';
import { useState } from 'react';

type NewsletterFormProps = {
    className?: string;
    placeholder?: string;
    buttonText?: string;
};

export function NewsletterForm({
    className = '',
    placeholder = 'Enter your email',
    buttonText = 'Subscribe'
}: NewsletterFormProps) {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');
        setMessage('');

        // Validate email
        const validation = newsletterSchema.safeParse({ email });
        if (!validation.success) {
            setStatus('error');
            setMessage(validation.error.issues[0].message);
            return;
        }

        try {
            const response = await fetch('/api/newsletter/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });

            const data = await response.json();

            if (response.ok) {
                setStatus('success');
                setMessage(data.message || 'Successfully subscribed!');
                setEmail('');
            } else {
                setStatus('error');
                setMessage(data.error || 'Failed to subscribe. Please try again.');
            }
        } catch (error) {
            setStatus('error');
            setMessage('An error occurred. Please try again later.');
        }
    };

    return (
        <div className={`newsletter-form ${className}`}>
            <form onSubmit={handleSubmit} className="flow">
                <div className="newsletter-form__input-group">
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder={placeholder}
                        disabled={status === 'loading' || status === 'success'}
                        className="newsletter-form__input"
                        aria-label="Email address"
                        required
                    />
                    <button
                        type="submit"
                        disabled={status === 'loading' || status === 'success'}
                        className="newsletter-form__button button"
                    >
                        {status === 'loading' ? 'Subscribing...' : buttonText}
                    </button>
                </div>

                {message && (
                    <p
                        className={`newsletter-form__message ${status === 'success' ? 'text-success' : 'text-error'
                            }`}
                        role="alert"
                    >
                        {message}
                    </p>
                )}
            </form>

            <p className="newsletter-form__privacy fs-200">
                No spam, unsubscribe anytime. I respect your privacy.
            </p>
        </div>
    );
}
