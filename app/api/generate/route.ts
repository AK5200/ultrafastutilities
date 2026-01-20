import { NextRequest, NextResponse } from "next/server";
import { generatePrivacyPolicy } from "@/lib/templates/privacy-policy";
import { generateTermsOfService } from "@/lib/templates/terms-of-service";
import { generateCookiePolicy } from "@/lib/templates/cookie-policy";
import { PolicyData } from "@/lib/types";

export async function POST(request: NextRequest) {
  try {
    const data: PolicyData = await request.json();

    const privacyPolicy = generatePrivacyPolicy(data);
    const termsOfService = generateTermsOfService(data);
    const cookiePolicy = generateCookiePolicy(data);

    return NextResponse.json({
      privacyPolicy,
      termsOfService,
      cookiePolicy
    });
  } catch (error) {
    console.error("Error generating policy:", error);
    return NextResponse.json(
      { error: "Failed to generate policy" },
      { status: 500 }
    );
  }
}
