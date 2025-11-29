import { resend, NEWSLETTER_AUDIENCE_ID } from '@/lib/resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { id } = body;

        if (!id) {
            return NextResponse.json(
                { error: 'Missing subscriber ID' },
                { status: 400 }
            );
        }

        if (!resend) {
            return NextResponse.json(
                { error: 'Server configuration error' },
                { status: 500 }
            );
        }

        // Remove contact from Resend audience
        // We use 'remove' to completely delete them. 
        // Alternatively, we could update them to unsubscribed: true if we wanted to keep record.
        await resend.contacts.remove({
            id,
            audienceId: NEWSLETTER_AUDIENCE_ID
        });

        return NextResponse.json({
            message: 'Successfully unsubscribed',
            success: true
        });
    } catch (error) {
        console.error('Unsubscribe error:', error);
        return NextResponse.json(
            { error: 'Failed to unsubscribe' },
            { status: 500 }
        );
    }
}
