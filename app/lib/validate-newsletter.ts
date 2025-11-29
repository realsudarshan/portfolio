import { z } from 'zod';

export const newsletterSchema = z.object({
    email: z
        .string()
        .min(1, 'Email is required')
        .email('Please enter a valid email address')
        .toLowerCase()
        .trim()
});

export type NewsletterFormData = z.infer<typeof newsletterSchema>;

export function validateEmail(email: string): { valid: boolean; error?: string } {
    try {
        newsletterSchema.parse({ email });
        return { valid: true };
    } catch (error) {
        if (error instanceof z.ZodError) {
            return { valid: false, error: error.issues[0].message };
        }
        return { valid: false, error: 'Invalid email' };
    }
}
