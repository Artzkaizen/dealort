# Resend Email Integration with Better Auth - Setup Guide

This guide walks you through setting up Resend with Better Auth to send:

- Welcome emails to first-time users
- Security warning emails when IP/device changes
- Email verification emails

## Step 1: Get Your Resend API Key

1. Sign up for a Resend account at [resend.com](https://resend.com)
2. Go to [API Keys](https://resend.com/api-keys) in your dashboard
3. Click "Create API Key"
4. Give it a name (e.g., "Dealort Production")
5. Select "Sending access" permission
6. Copy the API key (you'll only see it once!)

## Step 2: Verify Your Domain (Optional but Recommended)

For production, you should verify your domain:

1. Go to [Domains](https://resend.com/domains) in Resend dashboard
2. Click "Add Domain"
3. Follow the instructions to add DNS records
4. Once verified, you can use emails like `noreply@yourdomain.com`

For development, you can use `onboarding@resend.dev` (already configured as fallback)

## Step 3: Add Environment Variables

Add these to your `.env` file in the project root:

```bash
# Resend Configuration
RESEND_API_KEY=re_your_api_key_here
RESEND_FROM_EMAIL=noreply@yourdomain.com  # Optional, defaults to onboarding@resend.dev
```

## Step 4: Install Dependencies

The dependencies are already added. If you need to reinstall:

```bash
bun install
```

## Step 5: How It Works

### Email Types

1. **Welcome Email** (`packages/auth/src/emails/welcome.tsx`)
   - Send manually after user signup in your API routes
   - Import: `import { sendWelcomeEmail } from "@dealort/auth/emails"`

2. **Security Warning Email** (`packages/auth/src/emails/security-warning.tsx`)
   - Send manually after login when IP/device changes
   - Import: `import { sendSecurityWarningEmail } from "@dealort/auth/emails"`
   - **TODO**: Implement logic to compare IP/device with previous sessions

3. **Verification Email** (`packages/auth/src/emails/verification.tsx`)
   - Better Auth handles this automatically via the email provider
   - Custom template is used via the `emailProvider.sendVerificationEmail` function

### Sending Emails in Your Code

After a successful signup or login, you can trigger emails:

```typescript
import {
  sendWelcomeEmail,
  sendSecurityWarningEmail,
} from "@dealort/auth/emails";

// After signup
await sendWelcomeEmail({
  to: user.email,
  name: user.name || "User",
});

// After login (if IP/device changed)
await sendSecurityWarningEmail({
  to: user.email,
  name: user.name || "User",
  ipAddress: "192.168.1.1",
  device: "Chrome on Windows",
  timestamp: new Date().toLocaleString(),
});
```

### Configuration

The email service is configured in:

- `packages/auth/src/index.ts` - Better Auth configuration
- `packages/auth/src/emails/service.ts` - Email sending functions using Resend

## Step 6: Testing

1. Start your development server:

   ```bash
   bun run dev
   ```

2. Sign up a new user - you should receive:
   - Welcome email
   - Verification email

3. Log in - you should receive:
   - Security warning email (currently on every login)

## Step 7: Customize Email Templates

Edit the email templates in:

- `packages/auth/src/emails/welcome.tsx`
- `packages/auth/src/emails/security-warning.tsx`
- `packages/auth/src/emails/verification.tsx`

## Step 8: Improve Security Warning Logic

Currently, security warnings are sent on every new session. To make it smarter:

1. Store user's previous IP/device in database
2. Compare current IP/device with stored values
3. Only send warning if they differ

You can add this logic in the `session.created.after` hook in `packages/auth/src/index.ts`.

## Troubleshooting

### Emails not sending?

- Check your Resend API key is correct
- Verify your domain (if using custom domain)
- Check server logs for errors
- Check Resend dashboard for delivery status

### Email verification not working?

- Ensure `emailVerification.enabled: true` in Better Auth config
- Check that `BETTER_AUTH_URL` is set correctly
- Verify the verification link format matches your frontend route

### Security warnings too frequent?

- Implement IP/device comparison logic (see Step 8)
- Add rate limiting to prevent spam

## Next Steps

1. ✅ Get Resend API key
2. ✅ Add to `.env` file
3. ✅ Test signup flow
4. ✅ Customize email templates
5. ⏳ Implement smart security warning logic
6. ⏳ Set up email analytics/monitoring
