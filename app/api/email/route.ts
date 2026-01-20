import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, privacyPolicy, termsOfService, cookiePolicy } = await request.json();

    // Use Resend API to send email
    const resendApiKey = process.env.RESEND_API_KEY;
    
    if (!resendApiKey) {
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Create email with attachments
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: "PolicyDraft <noreply@policydraft.in>",
        to: email,
        subject: "Your PolicyDraft Documents",
        html: `
          <h1>Thank you for using PolicyDraft!</h1>
          <p>Your privacy policy documents are attached to this email.</p>
          <p>You can download and use these documents for your website.</p>
          <p>If you have any questions, please contact us.</p>
          <p>Best regards,<br>The PolicyDraft Team</p>
        `,
        attachments: [
          {
            filename: "privacy-policy.txt",
            content: Buffer.from(privacyPolicy).toString("base64")
          },
          {
            filename: "terms-of-service.txt",
            content: Buffer.from(termsOfService).toString("base64")
          },
          {
            filename: "cookie-policy.txt",
            content: Buffer.from(cookiePolicy).toString("base64")
          }
        ]
      })
    });

    if (!response.ok) {
      throw new Error("Failed to send email");
    }

    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error("Email error:", error);
    return NextResponse.json(
      { error: error.message || "Failed to send email" },
      { status: 500 }
    );
  }
}
