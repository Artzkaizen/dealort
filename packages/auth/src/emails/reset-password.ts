export function ResetPasswordEmail({
  name,
  verificationLink,
}: {
  name: string;
  verificationLink: string;
}) {
  return {
    subject: "Reset Your Password",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Reset Your Password</h2>
        <p>Hello ${name},</p>
        <p>Please reset your password by clicking the button below:</p>
        <a href="${verificationLink}" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; display: inline-block; margin: 16px 0;">Reset Password</a>
        <p>If you didn't request this reset, please ignore this email.</p>
        <p>This link will expire in 20 minutes.</p>
        <p>Best regards,<br>Dealort Team</p>
      </div>
    `,
    text: `
      Reset Your Password
      Hello ${name},
      Please reset your password by clicking the link below:
      ${verificationLink}
      If you didn't request this reset, please ignore this email.
      This link will expire in 20 minutes.
      Best regards,
      Dealort Team
    `,
  };
}
