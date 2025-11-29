import { resend, NEWSLETTER_AUDIENCE_ID, sendNewPostEmail } from '@/lib/resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
    try {
        // Verify API secret to prevent unauthorized access
        const authHeader = request.headers.get('authorization');
        const apiSecret = process.env.NEWSLETTER_API_SECRET;

        if (!apiSecret || authHeader !== `Bearer ${apiSecret}`) {
            return NextResponse.json(
                { error: 'Unauthorized' },
                { status: 401 }
            );
        }

        const body = await request.json();
        const { postTitle, postDescription, postSlug } = body;

        if (!postTitle || !postDescription || !postSlug) {
            return NextResponse.json(
                { error: 'Missing required fields: postTitle, postDescription, postSlug' },
                { status: 400 }
            );
        }

        // Get all subscribers from Resend audience
        if (!resend) {
            return NextResponse.json(
                { error: 'Server configuration error: RESEND_API_KEY missing' },
                { status: 500 }
            );
        }

        const contacts = await resend.contacts.list({
            audienceId: NEWSLETTER_AUDIENCE_ID
        });

        if (!contacts.data || contacts.data.data.length === 0) {
            return NextResponse.json(
                { message: 'No subscribers found', count: 0 },
                { status: 200 }
            );
        }

        const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://mwtech.vercel.app';
        const postUrl = `${baseUrl}/blog/${postSlug}`;

        // Send email to all subscribers
        const emailPromises = contacts.data.data
            .filter(contact => !contact.unsubscribed)
            .map(contact => {
                const unsubscribeUrl = `${baseUrl}/newsletter/unsubscribe?id=${contact.id}`;
                return sendNewPostEmail(
                    contact.email,
                    postTitle,
                    postDescription,
                    postUrl,
                    unsubscribeUrl
                );
            });

        const results = await Promise.allSettled(emailPromises);

        const successCount = results.filter(r => r.status === 'fulfilled').length;
        const failCount = results.filter(r => r.status === 'rejected').length;

        return NextResponse.json({
            message: 'Notification emails sent',
            success: true,
            stats: {
                total: contacts.data.data.length,
                sent: successCount,
                failed: failCount
            }
        });
    } catch (error) {
        console.error('Newsletter notification error:', error);
        return NextResponse.json(
            { error: 'Failed to send notifications' },
            { status: 500 }
        );
    }
}
