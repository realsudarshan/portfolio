import { addSubscriber, sendWelcomeEmail } from '@/lib/resend';
import { newsletterSchema } from '@/lib/validate-newsletter';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate email
        const validation = newsletterSchema.safeParse(body);

        if (!validation.success) {
            return NextResponse.json(
                { error: validation.error.issues[0].message },
                { status: 400 }
            );
        }

        const { email } = validation.data;

        // Add subscriber to Resend audience
        const addResult = await addSubscriber(email);

        if (!addResult.success) {
            // Check if already subscribed
            if (addResult.error?.includes('already exists') || addResult.error?.includes('duplicate')) {
                return NextResponse.json(
                    { error: 'This email is already subscribed!' },
                    { status: 409 }
                );
            }

            return NextResponse.json(
                { error: 'Failed to subscribe. Please try again later.' },
                { status: 500 }
            );
        }

        // Send welcome email
        const emailResult = await sendWelcomeEmail(email);

        if (!emailResult.success) {
            console.error('Failed to send welcome email:', emailResult.error);
            // Don't fail the request if email sending fails
        }

        return NextResponse.json(
            {
                message: 'Successfully subscribed! Check your email for a welcome message.',
                success: true
            },
            { status: 201 }
        );
    } catch (error) {
        console.error('Newsletter subscription error:', error);
        return NextResponse.json(
            { error: 'An unexpected error occurred. Please try again.' },
            { status: 500 }
        );
    }
}
