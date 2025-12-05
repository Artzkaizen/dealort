export function VerificationEmail({
  name,
  verificationLink,
}: {
  name: string;
  verificationLink: string;
}) {
  return {
    subject: "Verify your email address",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Verify Your Email</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Verify Your Email</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
            <p style="font-size: 16px; margin-bottom: 20px;">
              Thank you for signing up! Please verify your email address by clicking the button below.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${verificationLink}" style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: 600;">Verify Email Address</a>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 20px;">
              Or copy and paste this link into your browser:
            </p>
            <p style="font-size: 12px; color: #667eea; word-break: break-all; background: white; padding: 10px; border-radius: 5px;">
              ${verificationLink}
            </p>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
            </p>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Best regards,<br>
              The Dealort Team
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Verify Your Email Address
      
      Hi ${name},
      
      Thank you for signing up! Please verify your email address by clicking the link below.
      
      ${verificationLink}
      
      This link will expire in 24 hours. If you didn't create an account, you can safely ignore this email.
      
      Best regards,
      The Dealort Team
    `,
  };
}
