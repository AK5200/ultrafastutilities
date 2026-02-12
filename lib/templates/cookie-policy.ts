import { PolicyData } from "../types";

// Helper to get cookie examples based on type
function getCookieExamples(cookieType: string, thirdPartySharing: string[]): string {
  const examples: string[] = [];
  
  if (cookieType === "essential" || cookieType === "all") {
    examples.push("Session cookies (to maintain your login state)");
    examples.push("Security cookies (to protect against fraud)");
    examples.push("Load balancing cookies (to distribute traffic)");
  }
  
  if (cookieType === "analytics" || cookieType === "all") {
    examples.push("Google Analytics cookies (_ga, _gid, _gat)");
    examples.push("Page view tracking");
    examples.push("User behavior analytics");
  }
  
  if (cookieType === "advertising" || cookieType === "all") {
    examples.push("Facebook Pixel cookies");
    examples.push("Google Ads cookies");
    examples.push("Retargeting cookies");
  }
  
  // Add third-party specific cookies
  if (thirdPartySharing.some(p => p.toLowerCase().includes('google'))) {
    if (!examples.some(e => e.includes('Google'))) {
      examples.push("Google Analytics and Google Ads cookies");
    }
  }
  
  if (thirdPartySharing.some(p => p.toLowerCase().includes('facebook') || p.toLowerCase().includes('meta'))) {
    if (!examples.some(e => e.includes('Facebook'))) {
      examples.push("Facebook Pixel and Meta advertising cookies");
    }
  }
  
  if (thirdPartySharing.some(p => p.toLowerCase().includes('stripe') || p.toLowerCase().includes('dodo') || p.toLowerCase().includes('payment'))) {
    examples.push("Payment processor cookies (Stripe, Dodo, etc.)");
  }
  
  if (thirdPartySharing.some(p => p.toLowerCase().includes('cloudflare'))) {
    examples.push("Cloudflare security and performance cookies");
  }
  
  return examples.length > 0 ? examples.join("\n- ") : "Various cookies as described below";
}

// Helper to get third-party services list
function getThirdPartyServices(thirdPartySharing: string[], cookieType: string): string {
  if (thirdPartySharing.includes("No sharing")) {
    return "We do not use third-party cookies.";
  }
  
  const services: string[] = [];
  const parties = thirdPartySharing.filter(p => p !== "No sharing");
  
  parties.forEach(party => {
    const partyLower = party.toLowerCase();
    if (partyLower.includes('google') || partyLower.includes('analytics')) {
      services.push("Google Analytics (for website analytics)");
    } else if (partyLower.includes('facebook') || partyLower.includes('meta')) {
      services.push("Facebook Pixel (for advertising and analytics)");
    } else if (partyLower.includes('stripe')) {
      services.push("Stripe (for payment processing)");
    } else if (partyLower.includes('dodo')) {
      services.push("Dodo (for payment processing)");
    } else if (partyLower.includes('cloudflare')) {
      services.push("Cloudflare (for security and performance)");
    } else if (partyLower.includes('advertising') || partyLower.includes('advertising')) {
      // Skip generic "advertising" - will be handled by cookie type logic below
    } else {
      services.push(`${party} (for service delivery)`);
    }
  });
  
  // Add common services if analytics or advertising cookies are used
  if (cookieType === "analytics" || cookieType === "all") {
    if (!services.some(s => s.includes('Google Analytics'))) {
      services.push("Google Analytics (for website analytics)");
    }
  }
  
  if (cookieType === "advertising" || cookieType === "all") {
    if (!services.some(s => s.includes('Facebook'))) {
      services.push("Facebook Pixel (for advertising)");
    }
  }
  
  return services.length > 0 ? services.join("\n- ") : "Various third-party services as needed";
}

export function generateCookiePolicy(data: PolicyData): string {
  const {
    businessName,
    contactEmail,
    cookies,
    thirdPartySharing
  } = data;

  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  let policy = `COOKIE POLICY

Effective Date: ${effectiveDate}

1. INTRODUCTION

This Cookie Policy explains how ${businessName} ("we," "our," or "us") uses cookies and similar tracking technologies when you visit our website. This policy should be read in conjunction with our Privacy Policy, which provides additional information about how we collect, use, and protect your personal information.

2. WHAT ARE COOKIES

Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.

Cookies can be:
- "Session cookies" which are temporary and deleted when you close your browser
- "Persistent cookies" which remain on your device for a set period or until you delete them
- "First-party cookies" which are set by our website
- "Third-party cookies" which are set by other websites or services we use

We also use similar technologies such as:
- Web beacons (pixels)
- Local storage
- Session storage
- Tracking pixels

3. TYPES OF COOKIES WE USE

We categorize cookies based on their purpose into the following categories:

3.1 Strictly Necessary Cookies

These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled in our systems.

3.2 Analytics Cookies

These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.

3.3 Functional Cookies

These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.

3.4 Marketing/Advertising Cookies

These cookies are used to deliver personalized advertisements and track the effectiveness of our advertising campaigns. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of our marketing efforts.

3.5 Third-Party Cookies

These cookies are set by third-party services we use to operate, analyze, secure, or market our website.`;

  if (cookies === "none") {
    policy += `\n\nWe do not use cookies on our website.`;
  } else if (cookies === "essential") {
    policy += `\n\nDetailed Information:
    
3.1.1 Essential Cookies (Strictly Necessary)

These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled in our systems.

Examples of essential cookies we use:
- ${getCookieExamples("essential", thirdPartySharing)}

These cookies are typically session cookies that are deleted when you close your browser.`;
  } else if (cookies === "analytics") {
    policy += `\n\nDetailed Information:
    
3.1.1 Essential Cookies (Strictly Necessary)

These cookies are essential for the website to function properly. They cannot be disabled in our systems.

3.2.1 Analytics Cookies

These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.

Examples of analytics cookies we use:
- ${getCookieExamples("analytics", thirdPartySharing)}

These cookies may be persistent and remain on your device for up to 2 years, or until you delete them.`;
  } else if (cookies === "advertising") {
    policy += `\n\nDetailed Information:
    
3.1.1 Essential Cookies (Strictly Necessary)

These cookies are essential for the website to function properly. They cannot be disabled in our systems.

3.2.1 Advertising Cookies

These cookies are used to deliver personalized advertisements and track the effectiveness of our advertising campaigns. They may also be used to limit the number of times you see an advertisement.

Examples of advertising cookies we use:
- ${getCookieExamples("advertising", thirdPartySharing)}

These cookies may be persistent and remain on your device for up to 13 months, or until you delete them.`;
  } else if (cookies === "all") {
    policy += `\n\nDetailed Information:
    
3.1.1 Essential Cookies (Strictly Necessary)

These cookies are essential for the website to function properly. They enable core functionality such as security, network management, and accessibility. These cookies cannot be disabled in our systems.

Examples:
- ${getCookieExamples("essential", thirdPartySharing)}

Duration: Session cookies (deleted when you close your browser)

3.2.1 Analytics Cookies

These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website's performance and user experience.

Examples:
- ${getCookieExamples("analytics", thirdPartySharing)}

Duration: Up to 2 years (or until you delete them)

3.3.1 Marketing/Advertising Cookies

These cookies are used to deliver personalized advertisements and track the effectiveness of our advertising campaigns. They may also be used to limit the number of times you see an advertisement and measure the effectiveness of our marketing efforts.

Examples:
- ${getCookieExamples("advertising", thirdPartySharing)}

Duration: Up to 13 months (or until you delete them)

3.4.1 Functional Cookies

These cookies enable enhanced functionality and personalization, such as remembering your preferences and settings.

Examples:
- Language preferences
- User interface customization
- Remembering form data

Duration: Varies (typically 1 year or until you delete them)`;
  }

  policy += `\n\n4. THIRD-PARTY COOKIES

In addition to our own cookies, we may also use various third-party cookies to report usage statistics, deliver advertisements, and provide other services.

Third-party services that may set cookies on our website:
- ${getThirdPartyServices(thirdPartySharing, cookies)}

Third-party cookies may be set by services such as Google Analytics (analytics), Dodo or Stripe (payment processing), Cloudflare (security), and advertising platforms like Google Ads or Meta Ads.

These third parties may use cookies to collect information about your online activities across different websites. We do not control these third-party cookies, and they are subject to the respective third party's privacy policies.

Purpose: Third-party cookies help us integrate with external services, analyze website performance, deliver targeted advertising, and provide enhanced functionality.

Duration: Varies by service provider (typically 30 days to 2 years, or until you delete them).

5. COOKIE DURATION

Cookies we use have different lifespans:

- Session Cookies: These are temporary and are deleted when you close your browser
- Persistent Cookies: These remain on your device for a set period:
  - Essential cookies: Session duration
  - Analytics cookies: Up to 2 years
  - Advertising cookies: Up to 13 months
  - Functional cookies: Up to 1 year

You can delete cookies at any time through your browser settings.

6. MANAGING COOKIES

You have several options for managing cookies:

6.1 Browser Settings

Most browsers automatically accept cookies, but you can usually modify your browser settings to:
- Block all cookies
- Block third-party cookies only
- Delete existing cookies
- Receive notifications before cookies are set

Please note that blocking or deleting cookies may impact your user experience, and parts of our website may no longer be fully accessible or functional.

Instructions for managing cookies in popular browsers:
- Chrome: Settings → Privacy and security → Cookies and other site data
- Firefox: Options → Privacy & Security → Cookies and Site Data
- Safari: Preferences → Privacy → Cookies and website data
- Edge: Settings → Privacy, search, and services → Cookies and site permissions

6.2 Cookie Consent

When you first visit our website, you may be presented with a cookie consent banner. You can:
- Accept all cookies
- Reject non-essential cookies
- Customize your cookie preferences

You can change your cookie preferences at any time by visiting our cookie settings page or contacting us.

6.3 Opt-Out Tools

For certain third-party cookies, you can opt out directly:
- Google Analytics: https://tools.google.com/dlpage/gaoptout
- Facebook: https://www.facebook.com/settings?tab=ads
- Network Advertising Initiative: http://optout.networkadvertising.org/

7. DO NOT TRACK SIGNALS

Some browsers include a "Do Not Track" (DNT) feature that signals to websites you visit that you do not want to have your online activity tracked. Currently, there is no standard for how DNT signals should be interpreted. As a result, our website does not currently respond to DNT signals.

8. UPDATES TO THIS COOKIE POLICY

We may update this Cookie Policy from time to time to reflect changes in our practices, technology, or legal requirements. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the "Effective Date" at the top.

We encourage you to review this Cookie Policy periodically to stay informed about our use of cookies.

9. CONTACT US

If you have any questions about our use of cookies or this Cookie Policy, please contact us:

Email: ${contactEmail}

10. DISCLAIMER

This Cookie Policy is provided as a general template and does not constitute legal advice. While we have made efforts to ensure compliance with applicable laws, you should consult with a qualified legal professional to ensure this policy meets your specific legal requirements and business needs.

The information in this policy is provided "as is" without warranty of any kind, express or implied.`;

  return policy;
}
