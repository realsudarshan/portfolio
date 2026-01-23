'use client';

import { useState } from 'react';
import { newsletterSchema } from 'lib/validate-newsletter';
import { Input } from "@/components/components/ui/input";
import { Button } from "@/components/components/ui/button";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import { cn } from './lib/utils';


export function NewsletterForm({
  className,
  placeholder = 'Enter your email',
  buttonText = 'Subscribe'
}: { className?: string, placeholder?: string, buttonText?: string }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setMessage('');

    const validation = newsletterSchema.safeParse({ email });
    if (!validation.success) {
      setStatus('error');
      setMessage(validation.error.issues[0].message);
      return;
    }

    try {
      const response = await fetch('/api/newsletter/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'Successfully subscribed!');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(data.error || 'Failed to subscribe.');
      }
    } catch (error) {
      setStatus('error');
      setMessage('An error occurred.');
    }
  };

  return (
    <div className={cn("w-full space-y-3", className)}>
      <form onSubmit={handleSubmit} className="relative group">
        {/* Changed bg-white to bg-background and border-slate-200 to border-input */}
        <div className="relative flex items-center shadow-sm rounded-lg border border-input bg-background p-1 focus-within:ring-2 focus-within:ring-ring/20 transition-all">
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={placeholder}
            disabled={status === 'loading' || status === 'success'}
            // Removed border-0 to let shadcn input handle its own style or use transparent
            className="border-0 focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent text-base h-11"
            aria-label="Email address"
            required
          />
          <Button 
            type="submit" 
            disabled={status === 'loading' || status === 'success'}
            className={cn(
              "shrink-0 h-10 px-6 rounded-md transition-all duration-300",
              status === 'success' ? "bg-green-600 hover:bg-green-600 text-white" : ""
            )}
          >
            {status === 'loading' && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
            {status === 'success' ? "Subscribed!" : buttonText}
          </Button>
        </div>

        {message && (
          <div className={cn(
            "absolute -bottom-8 left-0 flex items-center gap-2 text-sm font-medium",
            status === 'success' ? "text-green-500" : "text-destructive"
          )}>
            {status === 'success' ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
            {message}
          </div>
        )}
      </form>

      <p className="text-xs text-muted-foreground pt-4">
        I respect your privacy. Unsubscribe at any time.
      </p>
    </div>
  );
}