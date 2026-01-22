import { Resend } from 'resend';

const resendApiKey = process.env.RESEND_API_KEY;

export const resend = resendApiKey ? new Resend(resendApiKey) : null;

// Resend audience ID for newsletter subscribers
export const NEWSLETTER_AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID || '';

export async function addSubscriber(email: string) {
  if (!resend) {
    console.error('RESEND_API_KEY is not defined');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    console.log('Adding subscriber:', email);
    const response = await resend.contacts.create({
      email,
      audienceId: NEWSLETTER_AUDIENCE_ID,
      unsubscribed: false
    });
    console.log('Subscriber added:', response);

    if (response.error) {
      console.error('Error adding subscriber:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Error adding subscriber:', error);
    return { success: false, error: error.message };
  }
}

export async function removeSubscriber(email: string) {
  if (!resend) {
    console.error('RESEND_API_KEY is not defined');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    const response = await resend.contacts.remove({
      email,
      audienceId: NEWSLETTER_AUDIENCE_ID
    });

    if (response.error) {
      console.error('Error removing subscriber:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Error removing subscriber:', error);
    return { success: false, error: error.message };
  }
}

export async function sendWelcomeEmail(email: string) {
  if (!resend) {
    console.error('RESEND_API_KEY is not defined');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    const response = await resend.emails.send({
      from: 'Sudarshan Dhakal <onboarding@resend.dev>', // Change this to your verified domain
      to: email,
      subject: 'Welcome to my newsletter! 🎉',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">Welcome to my newsletter!</h1>
          <p>Hi there! 👋</p>
          <p>Thank you for subscribing to my blog newsletter. You'll now receive updates whenever I publish new content about web development, coding tips, and tech insights.</p>
          <p>Here's what you can expect:</p>
          <ul>
            <li>📝 New blog post notifications</li>
            <li>💡 Exclusive tips and insights</li>
            <li>🚀 Updates on my latest projects</li>
          </ul>
          <p>If you ever want to unsubscribe, you can do so from any email I send you.</p>
          <p>Happy reading!</p>
          <p style="margin-top: 30px;">
            <strong>Sudarshan Dhakal</strong><br>
            Full Stack Web Developer
          </p>
        </div>
      `
    });

    if (response.error) {
      console.error('Error sending welcome email:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Error sending welcome email:', error);
    return { success: false, error: error.message };
  }
}

export async function sendNewPostEmail(
  email: string,
  postTitle: string,
  postDescription: string,
  postUrl: string,
  unsubscribeUrl: string
) {
  if (!resend) {
    console.error('RESEND_API_KEY is not defined');
    return { success: false, error: 'Server configuration error' };
  }

  try {
    const response = await resend.emails.send({
      from: 'Sudarshan Dhakal <onboarding@resend.dev>', // Change this to your verified domain
      to: email,
      subject: `New Post: ${postTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h1 style="color: #333;">New Blog Post Published! 📝</h1>
          <h2 style="color: #555;">${postTitle}</h2>
          <p style="color: #666; line-height: 1.6;">${postDescription}</p>
          <p style="margin: 30px 0;">
            <a href="${postUrl}" style="background-color: #0070f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block;">
              Read the full post →
            </a>
          </p>
          <hr style="border: none; border-top: 1px solid #eee; margin: 40px 0;">
          <p style="color: #999; font-size: 12px;">
            You're receiving this because you subscribed to my newsletter.<br>
            <a href="${unsubscribeUrl}" style="color: #999;">Unsubscribe</a>
          </p>
        </div>
      `
    });

    if (response.error) {
      console.error('Error sending new post email:', response.error);
      return { success: false, error: response.error.message };
    }

    return { success: true, data: response.data };
  } catch (error: any) {
    console.error('Error sending new post email:', error);
    return { success: false, error: error.message };
  }
}
