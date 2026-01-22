import { PolicyData } from "../types";

// Helper to determine if country is EU/UK
function isEUUK(country: string): boolean {
  const euCountries = ['Austria', 'Belgium', 'Bulgaria', 'Croatia', 'Cyprus', 'Czech Republic', 'Denmark', 'Estonia', 'Finland', 'France', 'Germany', 'Greece', 'Hungary', 'Ireland', 'Italy', 'Latvia', 'Lithuania', 'Luxembourg', 'Malta', 'Netherlands', 'Poland', 'Portugal', 'Romania', 'Slovakia', 'Slovenia', 'Spain', 'Sweden'];
  return euCountries.includes(country) || country === 'United Kingdom';
}

// Helper to determine if state is California
function isCalifornia(state?: string): boolean {
  return state === 'California' || state === 'CA';
}

// Helper to get lawful basis for data usage
function getLawfulBasis(usage: string): string {
  if (usage.toLowerCase().includes('marketing') || usage.toLowerCase().includes('advertising')) {
    return 'consent';
  }
  if (usage.toLowerCase().includes('contract') || usage.toLowerCase().includes('service')) {
    return 'performance of a contract';
  }
  if (usage.toLowerCase().includes('legal') || usage.toLowerCase().includes('compliance')) {
    return 'legal obligation';
  }
  return 'legitimate interest';
}

function ensureBaselineDataUsage(usages: string[]): string[] {
  const baseline = [
    "Service delivery and improvement",
    "Account management",
    "Payments and billing",
    "Fraud prevention and security",
    "Analytics and performance monitoring",
    "Legal compliance",
    "Customer support",
  ];
  const normalized = new Set(usages.map((u) => u.toLowerCase()));
  const merged = [...usages];
  baseline.forEach((item) => {
    if (!normalized.has(item.toLowerCase())) {
      merged.push(item);
    }
  });
  return merged;
}

function getThirdPartyExamples(thirdPartySharing: string[]): string[] {
  const examples = new Set<string>();
  const lower = thirdPartySharing.map((p) => p.toLowerCase());

  if (lower.some((p) => p.includes("analytics") || p.includes("google"))) {
    examples.add("Google Analytics (analytics and performance)");
  } else {
    examples.add("Google Analytics (analytics and performance)");
  }

  if (lower.some((p) => p.includes("payment") || p.includes("stripe") || p.includes("paddle") || p.includes("paypal"))) {
    examples.add("Paddle / Stripe / PayPal (payment processing)");
  } else {
    examples.add("Paddle / Stripe / PayPal (payment processing)");
  }

  if (lower.some((p) => p.includes("cloudflare") || p.includes("cdn") || p.includes("security"))) {
    examples.add("Cloudflare (security and CDN)");
  } else {
    examples.add("Cloudflare (security and CDN)");
  }

  if (lower.some((p) => p.includes("advertising") || p.includes("marketing") || p.includes("meta") || p.includes("facebook") || p.includes("google ads"))) {
    examples.add("Google Ads, Meta Ads (advertising and attribution)");
  } else {
    examples.add("Google Ads, Meta Ads (advertising and attribution)");
  }

  return Array.from(examples);
}

export function generatePrivacyPolicy(data: PolicyData): string {
  const {
    businessName,
    contactEmail,
    websiteType,
    dataCollected,
    collectionMethods,
    dataUsage,
    thirdPartySharing,
    cookies,
    userRights,
    country,
    state
  } = data;

  const location = state ? `${state}, ${country}` : country;
  const effectiveDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const isGDPRApplicable = isEUUK(country);
  const isCCPAApplicable = isCalifornia(state) || country === 'United States';

  let policy = `PRIVACY POLICY

Effective Date: ${effectiveDate}

1. INTRODUCTION

${businessName} ("we," "our," or "us") is committed to protecting your privacy and ensuring compliance with applicable data protection laws. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our ${websiteType === 'other' ? data.otherType : websiteType} (the "Service").

By using our Service, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, do not use our Service.

${isGDPRApplicable ? `\nThis Privacy Policy is designed to comply with the General Data Protection Regulation (GDPR) (EU) 2016/679 and the UK GDPR.` : ''}
${isCCPAApplicable ? `\nThis Privacy Policy also includes disclosures required under the California Consumer Privacy Act (CCPA) and the California Privacy Rights Act (CPRA).` : ''}

2. INFORMATION WE COLLECT

We collect information that you provide directly to us and information that is automatically collected when you use our Service.

2.1 Information You Provide Directly

We may collect the following personal information when you interact with our Service:`;

  if (dataCollected.includes("None of the above")) {
    policy += `\n\nWe do not collect any personal information from our users.`;
  } else {
    const dataList = dataCollected.filter(d => d !== "None of the above");
    dataList.forEach(item => {
      policy += `\n- ${item}`;
    });
  }

  // Always include common data types for realism
  policy += `\n\nIn addition, we may collect:
- Email address (for account creation, communications, and support)
- Billing information (processed securely by payment providers such as Paddle, Stripe, or PayPal)
- Account credentials (username, password, if you create an account)
- Communications with our support team (emails, messages, feedback)`;

  policy += `\n\n2.2 Automatically Collected Information

We may automatically collect certain information about your device and how you interact with our Service, including:
- IP address
- Browser type and version
- Device information
- Usage data and patterns
- Referring website addresses
- Date and time of visits`;

  policy += `\n\n2.3 How We Collect Information

We collect information through the following methods:`;

  // Always include baseline collection methods for realism
  const baselineMethods = [
    "Website forms (contact forms, registration forms, checkout forms)",
    "Account creation and profile management",
    "Checkout and payment flow (processed by secure payment providers)",
    "Cookies and tracking technologies (as described in our Cookie Policy)",
    "Communications with us (emails, support tickets, feedback)"
  ];
  
  const userMethods = collectionMethods.filter(m => m !== "None of the above");
  const allMethods = [...userMethods, ...baselineMethods];
  const uniqueMethods = Array.from(new Set(allMethods));
  
  uniqueMethods.forEach(method => {
    policy += `\n- ${method}`;
  });

  policy += `\n\n3. HOW WE USE YOUR INFORMATION

We use the information we collect for the following purposes:`;

  const usageList = ensureBaselineDataUsage(dataUsage);
  usageList.forEach(usage => {
    policy += `\n- ${usage}`;
  });

  if (isGDPRApplicable) {
    policy += `\n\n3.1 Legal Basis for Processing Personal Data (GDPR)

Under the GDPR, we process your personal data based on the following lawful bases:

- Consent: Where you have given explicit consent for specific processing activities (e.g., marketing communications).
- Contractual necessity: Where processing is necessary to perform a contract with you or provide requested services.
- Legal obligation: Where processing is required to comply with applicable laws and regulations.
- Legitimate interests: Where processing is necessary for our legitimate business interests and does not override your rights.`;
  }

  policy += `\n\n4. SHARING YOUR INFORMATION`;

  if (thirdPartySharing.includes("No sharing")) {
    policy += `\n\nWe do not share your personal information with any third parties, except as described in this Privacy Policy or as required by law.`;
  } else {
    policy += `\n\nWe may share your information with the following categories of third parties:`;
    const parties = thirdPartySharing.filter(p => p !== "No sharing");
    parties.forEach(party => {
      policy += `\n- ${party}`;
    });
  }

  policy += `\n\n4.1 Data Controller and Data Processors

We act as the data controller for the personal information we collect directly from you. Third-party services that we use (such as hosting providers, analytics services, or payment processors) act as data processors and may only process your data according to our instructions and applicable data protection laws.

We ensure that all data processors implement appropriate technical and organizational measures to protect your personal data.`;

  const thirdPartyExamples = getThirdPartyExamples(thirdPartySharing);
  policy += `\n\n4.2 Third-Party Services (Examples)

We may use third-party services to operate, analyze, secure, or market our Service. Examples include:
${thirdPartyExamples.map((example) => `\n- ${example}`).join("")}

These examples are illustrative; your specific data flows depend on the features you use and the services we integrate.`;

  policy += `\n\n4.3 International Data Transfers

Your personal data may be processed outside your country of residence, including in jurisdictions that may have different data protection laws. Where required, we use appropriate safeguards such as Standard Contractual Clauses (SCCs) or equivalent legal protections to protect your data.`;

  policy += `\n\n5. DATA RETENTION

We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law. Our retention periods are based on:

- The nature of the data and the purpose for which it was collected
- Legal, regulatory, or contractual requirements
- The need to resolve disputes and enforce our agreements

Generally, we retain:
- Account information: For as long as your account is active or as needed to provide services
- Transaction records: For a minimum of 7 years as required by tax and accounting laws
- Marketing data: Until you opt out or request deletion
- Analytics data: Aggregated and anonymized data may be retained indefinitely
- Logs and security data: 30–90 days, depending on security and compliance needs

When personal data is no longer needed, we will securely delete or anonymize it in accordance with our data retention policies.`;

  policy += `\n\n6. COOKIES AND TRACKING TECHNOLOGIES`;

  if (cookies === "none") {
    policy += `\n\nWe do not use cookies or similar tracking technologies on our Service.`;
  } else if (cookies === "essential") {
    policy += `\n\nWe use only essential cookies that are strictly necessary for the Service to function properly. These cookies cannot be disabled in our systems as they are essential for core functionality.`;
  } else if (cookies === "analytics") {
    policy += `\n\nWe use analytics cookies to understand how visitors interact with our Service. These cookies help us improve our website's performance and user experience.`;
  } else if (cookies === "advertising") {
    policy += `\n\nWe use advertising cookies to deliver personalized advertisements and measure the effectiveness of our advertising campaigns.`;
  } else if (cookies === "all") {
    policy += `\n\nWe use various types of cookies and tracking technologies, including essential, analytics, and advertising cookies. For detailed information about our use of cookies, please refer to our Cookie Policy.`;
  }

  policy += `\n\n7. YOUR RIGHTS AND CHOICES

You have the following rights regarding your personal information:`;

  userRights.forEach(right => {
    const rightLower = right.toLowerCase();
    policy += `\n- Right to ${rightLower}: You can request to ${rightLower} your personal information.`;
  });

  if (isGDPRApplicable) {
    policy += `\n\n7.1 Additional Rights Under GDPR

If you are located in the European Economic Area (EEA) or United Kingdom, you have additional rights under the GDPR:

- Right to Access: You can request a copy of the personal data we hold about you
- Right to Rectification: You can request correction of inaccurate or incomplete data
- Right to Erasure ("Right to be Forgotten"): You can request deletion of your personal data under certain circumstances
- Right to Restrict Processing: You can request that we limit how we use your data
- Right to Data Portability: You can request a copy of your data in a structured, machine-readable format
- Right to Object: You can object to processing of your data for direct marketing or legitimate interests
- Right to Withdraw Consent: Where processing is based on consent, you can withdraw consent at any time
- Right to Lodge a Complaint: You have the right to file a complaint with your local data protection supervisory authority

To exercise any of these rights, please contact us using the information provided in the Contact section below. We will respond to your request within one month, though this period may be extended by two additional months if necessary.`;

    policy += `\n\n7.2 Supervisory Authority

If you are located in the EEA or UK and believe we have not addressed your concerns, you have the right to lodge a complaint with your local data protection supervisory authority. A list of supervisory authorities can be found at: https://edpb.europa.eu/about-edpb/board/members_en`;
  }

  if (isCCPAApplicable) {
    policy += `\n\n7.3 Additional Rights for California Residents (CCPA / CPRA)

If you are a California resident, you have the following rights under the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA):

- Right to Know: You can request information about the categories and specific pieces of personal information we collect, use, disclose, and sell (if applicable). This includes:
  - Categories of personal information collected
  - Sources of personal information
  - Business or commercial purposes for collecting or selling personal information
  - Categories of third parties with whom we share personal information

- Right to Delete: You can request deletion of your personal information, subject to certain exceptions (e.g., completing transactions, detecting security incidents, complying with legal obligations).

- Right to Opt-Out of Sale or Share: You can opt-out of the sale of your personal information or the sharing of your personal information for cross-context behavioral advertising. We do not sell personal information, but we may share information for advertising purposes. You can opt-out by contacting us or using any opt-out mechanisms we provide.

- Right to Correct: You can request correction of inaccurate personal information that we maintain about you.

- Right to Limit Use of Sensitive Personal Information: You can request that we limit the use of sensitive personal information (such as precise geolocation, racial or ethnic origin, religious beliefs) to what is necessary to provide requested goods or services.

- Right to Non-Discrimination: We will not discriminate against you for exercising your privacy rights. We will not deny goods or services, charge different prices, or provide a different level or quality of services because you exercised your rights.

- Right to Data Portability: You can request a copy of your personal information in a portable and readily usable format.

To exercise your California privacy rights:
- Contact us at: ${contactEmail}
- We will verify your identity before processing your request (this may require you to provide information to confirm your identity)
- We will respond within 45 days (which may be extended by an additional 45 days if we provide notice of the extension)
- If we deny your request, we will explain the reason and provide information about how to appeal

You may also designate an authorized agent to make requests on your behalf. We will require proof of authorization before processing such requests.`;
  }

  policy += `\n\nTo exercise any of these rights, please contact us using the information provided in the Contact section below. We will verify your identity before processing your request. We aim to respond within 30 days (or 45 days where required by law). If you disagree with our response, you may request an appeal or lodge a complaint with your local supervisory authority.

8. DATA SECURITY

We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:

- Encryption of data in transit using SSL/TLS protocols
- Secure storage of data with access controls
- Regular security assessments and updates
- Employee training on data protection
- Incident response procedures

However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.

9. CHILDREN'S PRIVACY

Our Service is not intended for children under the age of 13 (or 16 in the EEA/UK). We do not knowingly collect personal information from children under the applicable age. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately. If we become aware that we have collected personal information from a child without parental consent, we will take steps to delete that information.

10. CHANGES TO THIS PRIVACY POLICY

We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We will notify you of any material changes by:

- Posting the new Privacy Policy on this page
- Updating the "Effective Date" at the top of this policy
- ${isGDPRApplicable ? 'Sending you an email notification (if we have your email address)' : 'Providing notice through our Service'}

We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information.

11. CONTACT US

If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us:

Email: ${contactEmail}
Location: ${location}

${isGDPRApplicable ? `\nFor GDPR-related inquiries, you can also contact our Data Protection Officer (if applicable) at the email address above.` : ''}

12. DISCLAIMER

This Privacy Policy is provided as a general template and does not constitute legal advice. While we have made efforts to ensure compliance with applicable data protection laws, you should consult with a qualified legal professional to ensure this policy meets your specific legal requirements and business needs.

The information in this policy is provided "as is" without warranty of any kind, express or implied. We are not responsible for any legal consequences that may arise from the use of this policy.`;

  return policy;
}
