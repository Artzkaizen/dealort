import { env } from "@dealort/utils/env";

export function SecurityWarningEmail({
  name,
  ipAddress,
  device,
  location,
  timestamp,
}: {
  name: string;
  ipAddress: string;
  device?: string;
  location?: string;
  timestamp: string;
}) {
  return {
    subject: "🔒 Security Alert: New Login Detected",
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>Security Alert</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%); padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1 style="color: white; margin: 0; font-size: 28px;">🔒 Security Alert</h1>
          </div>
          <div style="background: #f9fafb; padding: 30px; border-radius: 0 0 10px 10px;">
            <p style="font-size: 16px; margin-bottom: 20px;">Hi ${name},</p>
            <p style="font-size: 16px; margin-bottom: 20px; color: #dc2626; font-weight: 600;">
              We detected a new login to your account from a new location or device.
            </p>
            <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #f59e0b; margin: 20px 0;">
              <p style="margin: 10px 0;"><strong>IP Address:</strong> ${ipAddress}</p>
              ${device ? `<p style="margin: 10px 0;"><strong>Device:</strong> ${device}</p>` : ""}
              ${location ? `<p style="margin: 10px 0;"><strong>Location:</strong> ${location}</p>` : ""}
              <p style="margin: 10px 0;"><strong>Time:</strong> ${timestamp}</p>
            </div>
            <p style="font-size: 16px; margin-bottom: 20px;">
              If this was you, you can safely ignore this email. If you don't recognize this activity, please secure your account immediately.
            </p>
            <div style="text-align: center; margin: 30px 0;">
              <a href="${env.CORS_ORIGIN}/dashboard/settings/security" style="background: #dc2626; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; display: inline-block; font-weight: 600;">Secure My Account</a>
            </div>
            <p style="font-size: 14px; color: #666; margin-top: 30px;">
              Best regards,<br>
              The Dealort Security Team
            </p>
          </div>
        </body>
      </html>
    `,
    text: `
      Security Alert: New Login Detected
      
      Hi ${name},
      
      We detected a new login to your account from a new location or device.
      
      Details:
      - IP Address: ${ipAddress}
      ${device ? `- Device: ${device}` : ""}
      ${location ? `- Location: ${location}` : ""}
      - Time: ${timestamp}
      
      If this was you, you can safely ignore this email. If you don't recognize this activity, please secure your account immediately.
      
      Secure your account: ${env.CORS_ORIGIN}/dashboard/settings/security
      
      Best regards,
      The Dealort Security Team
    `,
  };
}
