# Debugging Email Sending

## Testing Steps

1. **Start the server with logging:**

   ```bash
   bun run dev:server
   ```

2. **Sign up a new user** through the web interface

3. **Check the server logs** for:
   - `[Auth Middleware]` logs showing the request path and response
   - `[Email Service]` logs showing email sending attempts
   - Any error messages

## Common Issues

### 1. Path Not Matching

- Check logs for: `[Auth Middleware] isSignUp: false` when it should be true
- Better Auth uses `/api/auth/sign-up/email` for email signup
- Update path matching in `apps/server/src/index.ts` if needed

### 2. Response Structure

- Check logs for: `[Auth Middleware] Parsed response data:`
- Better Auth might return data in different formats:
  - Direct: `{ user: {...}, session: {...} }`
  - Nested: `{ data: { user: {...}, session: {...} } }`
  - Different property names

### 3. Missing Environment Variables

- Ensure `.env` has:
  - `RESEND_API_KEY=re_...`
  - `RESEND_FROM_EMAIL=...` (optional, defaults to onboarding@resend.dev)

### 4. Email Service Errors

- Check logs for: `[Email Service]` errors
- Verify Resend API key is valid
- Check Resend dashboard for delivery status

## Manual Test

Run the test script:

```bash
# Edit test-email.js to use your test email
bun test-email.js
```

## What to Look For in Logs

When signing up, you should see:

```
[Auth Middleware] POST /api/auth/sign-up/email
[Auth Middleware] isSignUp: true, isSignIn: false
[Auth Middleware] Response status: 200
[Auth Middleware] Response body (first 500 chars): {...}
[Auth Middleware] Parsed response data: {...}
[Auth Middleware] Sending welcome email to: user@example.com
[Email Service] Sending welcome email to: user@example.com
[Email Service] Welcome email result: {...}
[Auth Middleware] Welcome email sent successfully: {...}
```

If any step is missing, that's where the issue is.
