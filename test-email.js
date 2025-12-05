#!/usr/bin/env node
/**
 * Test script to verify email sending functionality
 * Run with: bun test-email.js
 */

import { sendWelcomeEmail } from "./packages/auth/src/emails/service.js";

async function testEmail() {
  console.log("Testing welcome email...");

  try {
    const result = await sendWelcomeEmail({
      to: "okenwavictor003@gmail.com", // Replace with your test email
      name: "Victor Okenwa",
    });

    console.log("✅ Email sent successfully!");
    console.log("Result:", result);
  } catch (error) {
    console.error("❌ Failed to send email:", error);
    process.exit(1);
  }
}

testEmail();
