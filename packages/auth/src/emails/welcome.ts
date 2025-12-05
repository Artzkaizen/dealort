import { env } from "@dealort/utils/env";

export function WelcomeEmail({ name }: { name: string }) {
  const dashboardUrl = `${env.CORS_ORIGIN}/dashboard`;

  return {
    subject: "Welcome to Dealort! 🎉",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Welcome to Dealort</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Welcome to Dealort!</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
            <p style="font-size: 16px; margin-bottom: 20px;">
              We're thrilled to have you on board! Your account has been successfully created.
            </p>
            <p style="font-size: 16px; margin-bottom: 20px;">
              You can now start exploring all the features we have to offer. If you have any questions, feel free to reach out to our support team.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${dashboardUrl}" style="background: #667eea; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: 600;">Go to Dashboard</a>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Best regards,<br>
              The Dealort Team
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Welcome to Dealort!
      
      Hi ${name},
      
      We're thrilled to have you on board! Your account has been successfully created.
      
      You can now start exploring all the features we have to offer. If you have any questions, feel free to reach out to our support team.
      
      Visit your dashboard: ${dashboardUrl}
      
      Best regards,
      The Dealort Team
    `,
  };
}
