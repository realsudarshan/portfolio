'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState, Suspense } from 'react';

function UnsubscribeContent() {
    const searchParams = useSearchParams();
    const id = searchParams.get('id');
    const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');
    const [message, setMessage] = useState('Unsubscribing you from the newsletter...');

    useEffect(() => {
        if (!id) {
            setStatus('error');
            setMessage('Invalid unsubscribe link.');
            return;
        }

        const unsubscribe = async () => {
            try {
                const response = await fetch('/api/newsletter/unsubscribe', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ id })
                });

                const data = await response.json();

                if (response.ok) {
                    setStatus('success');
                    setMessage('You have been successfully unsubscribed. We won\'t send you any more emails.');
                } else {
                    setStatus('error');
                    setMessage(data.error || 'Failed to unsubscribe. Please try again.');
                }
            } catch (error) {
                setStatus('error');
                setMessage('An error occurred. Please try again later.');
            }
        };

        unsubscribe();
    }, [id]);

    return (
        <div className="[ wrapper-sm ] [ flow ] [ region ] [ text-center ]">
            <h1>Unsubscribe</h1>
            <p className={`fs-500 ${status === 'error' ? 'text-error' : ''}`}>
                {message}
            </p>
            {status === 'success' && (
                <a href="/" className="button" style={{ marginTop: '2rem', display: 'inline-block' }}>
                    Return to Home
                </a>
            )}
        </div>
    );
}

export default function UnsubscribePage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <UnsubscribeContent />
        </Suspense>
    );
}
