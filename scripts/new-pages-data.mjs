// Page configs for 10 new SEO pages.
// CRITICAL: All fields rendered as visible text MUST avoid the hyphen
// character "-" and em dashes. Use "and" or other connectors instead.
// Slugs and JSX attributes are exempt; they are not visible to readers.

export const PAGES = [
  // ========== 1 ==========
  {
    slug: "how-to-add-privacy-policy-to-chrome-extension",
    breadcrumbName: "Add Privacy Policy to Chrome Extension",
    title: "How to Add a Privacy Policy to a Chrome Extension (2026 Guide)",
    description:
      "Step by step guide to adding a privacy policy URL to your Chrome extension in the Web Store Developer Dashboard. Covers permissions, manifest, and review.",
    keywords:
      "how to add privacy policy chrome extension, chrome extension privacy policy URL, add privacy policy chrome web store, chrome developer dashboard privacy",
    heroBadge: "Chrome Extension Setup",
    heroH1Pre: "How to Add a Privacy Policy to a",
    heroH1Highlight: "Chrome Extension",
    heroSubtitle:
      "A complete walkthrough of adding a privacy policy URL to your Chrome extension listing, satisfying the Web Store data handling certification, and avoiding rejection during review.",
    snippetTag: "2026 Chrome Web Store steps",
    snippetLead:
      "To add a privacy policy to a Chrome extension, paste the policy URL into the Privacy tab of your Chrome Web Store Developer Dashboard, complete the data handling certification, and submit for review.",
    snippetBody:
      "The URL must be publicly accessible, must accurately describe what data your extension collects, and must match the certification you submit. Extensions that skip this step are rejected automatically.",
    readTime: 9,
    sections: [
      {
        id: "why-required",
        h2: "Why Chrome Extensions Need a Privacy Policy URL",
        paragraphs: [
          "Google requires a privacy policy URL for any Chrome extension that requests permissions involving user data. This includes tabs, cookies, history, identity, storage, host permissions, and many others. The requirement applies whether the data is stored locally or sent to your server.",
          "Without a valid privacy policy URL on your listing, the Chrome Web Store review team will reject your submission. Existing extensions that fail to maintain a valid policy can be unpublished. The 2026 enforcement of Chrome Web Store policies has made this stricter than in previous years.",
          "The URL itself is only one part of the requirement. Google also expects your policy to be specific to your extension, written in plain language, and to match the data handling certification you submit through the dashboard.",
        ],
      },
      {
        id: "step-by-step",
        h2: "Step by Step: Adding the Privacy Policy URL",
        paragraphs: [
          "Open your Chrome Web Store Developer Dashboard and select the extension you want to update. In the left sidebar, click Privacy practices. Scroll to the section labelled Privacy policy.",
          "Paste the public URL where your privacy policy is hosted. The URL must use HTTPS and must resolve to a page that anyone can read without logging in. A common mistake is to host the policy on a Google Doc behind sharing restrictions; that will fail review.",
          "After pasting the URL, complete the data handling certification just below it. You will tick boxes describing what data your extension collects: personally identifiable information, health information, financial information, authentication data, personal communications, location, web history, or user activity.",
          "Save your changes and submit the extension for review. Reviews typically take a few business days. If anything in your certification contradicts what is in the privacy policy at the URL, the reviewer will reject the submission and ask you to fix the inconsistency.",
        ],
      },
      {
        id: "where-to-host",
        h2: "Where to Host Your Privacy Policy",
        paragraphs: [
          "Your privacy policy needs a permanent, publicly accessible URL. The most common options are: a page on your own domain (best for trust and control), a free static hosting service like GitHub Pages or Netlify, or a hosted document on a service designed for legal pages.",
          "Avoid using a shared Google Doc, a Notion page behind login, a Gist, or any URL that could change. The Chrome Web Store team has flagged these in the past, and changing your URL later requires resubmission.",
          "If you do not have a website yet, the simplest path is to create a single static HTML page on a free host and link it. The page should include your extension name, the date it was last updated, and a contact email so reviewers and users can verify it belongs to you.",
        ],
      },
      {
        id: "what-to-include",
        h2: "What the Policy Itself Must Include",
        paragraphs: [
          "Your privacy policy must list every type of data your extension collects, accesses, or transmits. Be specific: list each category of data, the source, and what you do with it. Vague language like we may collect some user data is not enough and can fail review.",
          "Cover how the data is stored, how long it is kept, who it is shared with (including any analytics or crash reporting services), how users can request deletion, and how to contact you with questions. Include a last updated date.",
          "If your extension is subject to GDPR because users may be in the EU or UK, also include a legal basis for processing, a description of user rights, and information about international data transfers if any data leaves the EU.",
        ],
      },
      {
        id: "common-rejections",
        h2: "Common Reasons Reviewers Reject the Privacy Policy",
        paragraphs: [
          "The most common reason for rejection is a mismatch between the policy and the certification. For example, the certification says no PII is collected, but the policy mentions email addresses. Fix this by making sure the two match exactly before submission.",
          "Another frequent issue is hosting the policy at a URL that is not publicly reachable, such as a private Google Doc or a page behind a login. Fix it by moving the document to a public URL.",
          "Less common but still seen: copy and paste templates that reference the wrong company or extension name. Reviewers spot these immediately. Always customise the template to your specific extension before submitting.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I use the same privacy policy for multiple Chrome extensions?",
        a: "Yes, if all the extensions actually share the same data handling practices. Many developers maintain a single policy that lists each extension by name and the specific data it collects. This keeps maintenance simple. If your extensions differ significantly, separate policies are clearer.",
      },
      {
        q: "Does my Chrome extension need a privacy policy if it does not collect any data?",
        a: "Technically no, if your extension truly collects nothing and uses no data permissions. In practice, Google still recommends one because most extensions request at least one data related permission, and the Web Store team tends to flag listings without policies. A short policy that says no data is collected is the safest choice.",
      },
      {
        q: "How long does Chrome Web Store review take after I add a privacy policy?",
        a: "Usually a few business days for routine updates. Adding or updating a privacy policy URL is a small change and is typically processed faster than first time submissions or changes that touch permissions.",
      },
      {
        q: "What happens if I update my privacy policy after the extension is approved?",
        a: "You can update the policy text at the same URL without resubmitting the extension, as long as the URL still resolves and the new policy still matches your dashboard certification. If you change the URL itself, update the dashboard and submit a new version for review.",
      },
    ],
    ctaTitle: "Generate a Chrome extension privacy policy in 60 seconds",
    ctaSubtitle:
      "Web Store approved structure, GDPR ready, copy paste into your dashboard. Updated for 2026.",
    related: [
      { href: "/privacy-policy-for-chrome-extension", title: "Privacy Policy for Chrome Extension", desc: "Full guide to Chrome Web Store policy requirements." },
      { href: "/chrome-extension-privacy-policy-template", title: "Chrome Extension Privacy Policy Template", desc: "Free template you can copy and customize." },
      { href: "/do-chrome-extensions-need-a-privacy-policy", title: "Do Chrome Extensions Need a Privacy Policy?", desc: "When the requirement applies and which permissions trigger it." },
      { href: "/chrome-extension-gdpr-compliance", title: "Chrome Extension GDPR Compliance", desc: "Cover EU users with the right legal basis." },
    ],
  },

  // ========== 2 ==========
  {
    slug: "manifest-v3-privacy-policy-requirements",
    breadcrumbName: "Manifest V3 Privacy Policy",
    title: "Manifest V3 Privacy Policy Requirements (Chrome 2026 Rules)",
    description:
      "Manifest V3 changes how Chrome extensions handle data through service workers. See the new privacy policy requirements, certification rules, and what to update.",
    keywords:
      "manifest v3 privacy policy, mv3 privacy requirements, chrome manifest v3 rules, chrome extension service worker privacy",
    heroBadge: "Manifest V3",
    heroH1Pre: "Manifest V3 Privacy Policy",
    heroH1Highlight: "Requirements",
    heroSubtitle:
      "Manifest V3 replaced background pages with service workers, restricted remote code, and tightened the Chrome Web Store certification. Here is what your privacy policy must say in 2026.",
    snippetTag: "MV3 2026 enforcement",
    snippetLead:
      "Manifest V3 extensions must publish a privacy policy URL that accurately reflects their service worker data flows, host permissions, and remote code restrictions.",
    snippetBody:
      "While MV3 does not change the legal requirement to have a privacy policy, it changes what that policy must describe. Service workers behave differently from background pages, host permissions are more granular, and remote code is restricted, all of which must be reflected in your disclosures.",
    readTime: 8,
    sections: [
      {
        id: "what-mv3-changes",
        h2: "What Manifest V3 Changes for Privacy",
        paragraphs: [
          "Manifest V3 replaced persistent background pages with event driven service workers. A background page in MV2 ran continuously and could hold data in memory across the user session. A service worker terminates when idle and reloads on the next event, which changes how and where extensions cache or persist user data.",
          "MV3 also restricts remote code execution. Extensions can no longer load and run JavaScript fetched from a remote server at runtime. All executable code must be bundled with the extension. This removes a privacy concern around hidden third party code but still requires disclosure of any data sent to remote endpoints.",
          "Host permissions in MV3 are also more granular. Users can grant access to specific sites at install time, on click, or for the current site only. Your privacy policy must describe what data is read from those sites and whether it is sent off device.",
        ],
      },
      {
        id: "what-policy-must-say",
        h2: "What Your Privacy Policy Must Say Under MV3",
        paragraphs: [
          "Describe how your service worker handles data. If your worker writes anything to chrome.storage, IndexedDB, or any other persistent location, list what is stored, why, and how long. If it sends data to a remote API, name the endpoint and what is sent.",
          "Describe how host permissions are used. If your extension reads page content on websites the user visits, say so explicitly, including whether the content is sent off device or processed locally. The phrase only stored locally is acceptable if true and is taken seriously by reviewers.",
          "If your extension uses the offscreen API or any other MV3 specific feature that processes user data, describe it in plain language. Reviewers know what these APIs do and will check your policy reflects them.",
        ],
      },
      {
        id: "data-handling-cert",
        h2: "The Data Handling Certification You Must Match",
        paragraphs: [
          "When you submit an MV3 extension, you complete a certification in the Chrome Web Store Developer Dashboard. You declare which categories of data your extension touches: personally identifiable information, health, financial, authentication, personal communications, location, web history, or user activity.",
          "Your privacy policy at the URL you submit must match this certification exactly. A mismatch is the single most common cause of rejection. Read both side by side before submitting and adjust whichever is wrong.",
          "If your extension collects nothing in any of those categories, you still need to publish a short privacy policy that says so and explains what your service worker does. Empty cert plus no policy is a flag for reviewers.",
        ],
      },
      {
        id: "mv2-migration",
        h2: "Migrating From MV2 to MV3 Without Privacy Issues",
        paragraphs: [
          "Many extensions migrating from MV2 to MV3 carry over a privacy policy that was written for the old architecture. If your policy mentions persistent background pages, runtime code injection, or remote scripts, update it before migrating. Reviewers will compare against the new manifest.",
          "Audit what your service worker actually persists. The migration often introduces new chrome.storage usage to replace in memory state, which is now visible to users in their browser data. List anything new in the policy.",
          "Update the last modified date so it reflects the migration. Reviewers tend to scrutinise policies that are older than the most recent extension version.",
        ],
      },
    ],
    faq: [
      {
        q: "Does Manifest V3 itself require a new privacy policy?",
        a: "Not legally. The privacy policy requirement comes from data protection laws and Chrome Web Store rules, not from MV3 directly. But because MV3 changes how your extension handles data internally, your existing policy almost certainly needs an update to remain accurate.",
      },
      {
        q: "Can a Manifest V3 extension still load remote code?",
        a: "No. MV3 prohibits running remotely hosted code. All executable code must be bundled in the extension package. You can still call remote APIs and process responses, but you cannot fetch and execute JavaScript at runtime. Your privacy policy should reflect this.",
      },
      {
        q: "What if my service worker only uses chrome.storage.local and never sends data anywhere?",
        a: "Your privacy policy can clearly state that all data is stored locally on the user device and never transmitted. This is a strong privacy statement and reviewers accept it. Keep the certification matching: tick the boxes for any data type the local storage actually contains.",
      },
      {
        q: "Do MV3 host permissions need a separate disclosure?",
        a: "Yes. Your privacy policy should describe the categories of websites your extension accesses and what it does with the page content. For example: this extension reads the URL of the active tab to show suggestions, and the URL is never transmitted off your device.",
      },
    ],
    ctaTitle: "Build a Manifest V3 ready privacy policy in 60 seconds",
    ctaSubtitle:
      "Service worker disclosures, host permission language, and Chrome Web Store certification, all covered.",
    related: [
      { href: "/privacy-policy-for-chrome-extension", title: "Privacy Policy for Chrome Extension", desc: "Web Store policy guide for any extension." },
      { href: "/chrome-extension-user-data-policy", title: "Chrome Extension User Data Policy", desc: "Full breakdown of Google's user data rules." },
      { href: "/chrome-extension-privacy-best-practices", title: "Chrome Extension Privacy Best Practices", desc: "Patterns that pass review on the first try." },
      { href: "/chrome-extension-single-purpose-policy", title: "Chrome Extension Single Purpose Policy", desc: "How the single purpose rule interacts with privacy." },
    ],
  },

  // ========== 3 ==========
  {
    slug: "edge-extension-privacy-policy-requirements",
    breadcrumbName: "Edge Extension Privacy Policy",
    title: "Edge Extension Privacy Policy Requirements (Microsoft 2026 Rules)",
    description:
      "Microsoft Edge Add ons store requires a privacy policy for extensions that handle user data. See the rules, what to disclose, and how to pass review.",
    keywords:
      "edge extension privacy policy, microsoft edge add ons privacy, edge extension privacy requirements, edge developer policies privacy",
    heroBadge: "Microsoft Edge",
    heroH1Pre: "Edge Extension Privacy Policy",
    heroH1Highlight: "Requirements",
    heroSubtitle:
      "Microsoft Edge Add ons store has its own developer policies for browser extensions. They overlap with Chrome Web Store rules but have important differences. Here is what your privacy policy must cover for Edge in 2026.",
    snippetTag: "Microsoft Edge 2026 rules",
    snippetLead:
      "Microsoft Edge requires every extension that collects or accesses user data to publish a clear, comprehensive privacy policy that explains data handling practices and any third party services involved.",
    snippetBody:
      "The policy must be specific to your extension, must not reuse the Microsoft privacy statement, must use HTTPS, and must accurately describe data minimisation, security controls, and user controls. Reviewers compare it against the certification you submit through Partner Center.",
    readTime: 8,
    sections: [
      {
        id: "edge-vs-chrome",
        h2: "How Edge Privacy Rules Differ From Chrome",
        paragraphs: [
          "Edge extensions are based on the same WebExtensions API as Chrome, so most code ports directly. The privacy review, however, is run by Microsoft and follows the Microsoft Edge Add ons Developer Policies, not the Chrome Web Store policies.",
          "Edge places stronger emphasis on data minimisation. Microsoft expects extensions to collect only what is strictly necessary for the stated function and to aggregate or anonymise data wherever possible. A privacy policy that lists broad data categories without specific justifications is more likely to draw questions from Edge reviewers than from Chrome.",
          "Edge also requires that user sensitive data is encrypted in transit, that data sharing with any third party requires opt in consent, and that the privacy policy refer specifically to the Edge browser when it discusses data flows tied to that browser.",
        ],
      },
      {
        id: "what-to-disclose",
        h2: "What an Edge Extension Privacy Policy Must Disclose",
        paragraphs: [
          "Describe every category of user data your extension collects or accesses. This includes browsing history, page content, form data, identity, cookies, location, and any other category covered by your manifest permissions.",
          "Describe how data is used, who it is shared with, and how users can exercise control. Microsoft expects an explicit description of how a user can opt out, request deletion, or see what is stored.",
          "Describe security measures. At minimum, name the transport encryption used (TLS 1.2 or higher) and any storage encryption applied to sensitive data. If you do not encrypt at rest, say so and explain why it is acceptable for the data type.",
          "Identify any third party services your extension communicates with. Include analytics, error reporting, and any backend you operate. Reviewers cross check by inspecting network traffic and will reject extensions whose policy omits a service that the extension actually contacts.",
        ],
      },
      {
        id: "common-rejections",
        h2: "Common Reasons Edge Reviewers Reject Extensions",
        paragraphs: [
          "Reusing the Microsoft privacy statement instead of writing your own. Edge developer policies explicitly prohibit this unless your extension is an official Microsoft product. Always write or generate a policy that names your extension and your company.",
          "Vague data descriptions. Phrases like we may collect some information that helps us improve the product are not enough. Be specific about what is collected, why, and where it goes.",
          "Missing third party disclosures. If your extension uses Google Analytics, Sentry, Mixpanel, or any other service, name it in the policy. Reviewers compare network traffic against the policy and a mismatch fails the review.",
        ],
      },
      {
        id: "submit-and-update",
        h2: "Submitting and Updating Through Partner Center",
        paragraphs: [
          "Edge extensions are submitted through Microsoft Partner Center. The privacy policy URL field is on the Properties tab of your extension submission. Paste the public HTTPS URL where your policy is hosted.",
          "Submit the privacy questionnaire alongside the policy. The questionnaire asks the same kinds of questions as Chrome's data handling certification. Make sure your answers match what your policy says.",
          "When you update the extension code, review the privacy policy at the same time. If your update adds new data collection, network endpoints, or permissions, the policy must be updated before the new version is submitted.",
        ],
      },
    ],
    faq: [
      {
        q: "Can I use my Chrome extension privacy policy for Edge as well?",
        a: "Yes, if the policy is generic enough to apply to both browsers and you update the references. Many developers maintain a single policy that names both browsers. Edge reviewers will accept this as long as the policy is specific to the extension and not a generic boilerplate.",
      },
      {
        q: "Does Edge require a privacy policy for extensions that collect zero user data?",
        a: "Technically no, if your extension truly accesses no user data and requests no data permissions. In practice, Microsoft recommends having one anyway, even if it just states no data is collected. This avoids confusion during review.",
      },
      {
        q: "What encryption standard does Microsoft expect for Edge extensions?",
        a: "Edge developer policies require TLS for any data transmitted off the user device. Most modern HTTPS deployments use TLS 1.2 or 1.3, which satisfy this. Disable older TLS versions on any backend your extension contacts.",
      },
      {
        q: "Can my Edge extension share data with third parties?",
        a: "Only after obtaining opt in consent from the user. The default must be no sharing. The user must take an explicit action to allow it. Your privacy policy must describe the consent flow and the categories of data that may be shared.",
      },
    ],
    ctaTitle: "Generate an Edge ready privacy policy",
    ctaSubtitle:
      "Covers Microsoft Edge Add ons developer policies, data minimisation, and Partner Center certification.",
    related: [
      { href: "/privacy-policy-for-chrome-extension", title: "Privacy Policy for Chrome Extension", desc: "Sister browser extension guide." },
      { href: "/chrome-extension-privacy-policy-template", title: "Chrome Extension Privacy Policy Template", desc: "Reusable template that works on Edge too." },
      { href: "/chrome-extension-gdpr-compliance", title: "Chrome Extension GDPR Compliance", desc: "EU and UK user rights for browser extensions." },
      { href: "/chrome-extension-privacy-best-practices", title: "Chrome Extension Privacy Best Practices", desc: "Patterns that pass review on the first try." },
    ],
  },

  // ========== 4 ==========
  {
    slug: "firefox-extension-privacy-policy",
    breadcrumbName: "Firefox Extension Privacy Policy",
    title: "Firefox Extension Privacy Policy: Mozilla AMO Rules (2026)",
    description:
      "Mozilla addons.mozilla.org requires a privacy policy for extensions that collect user data. See the AMO review process, what to disclose, and how to pass.",
    keywords:
      "firefox extension privacy policy, mozilla addons privacy, AMO privacy policy, firefox addon privacy requirements",
    heroBadge: "Mozilla Firefox",
    heroH1Pre: "Firefox Extension",
    heroH1Highlight: "Privacy Policy",
    heroSubtitle:
      "Mozilla addons.mozilla.org has historically been one of the strictest extension stores when it comes to privacy review. Here is what your Firefox extension privacy policy must cover in 2026.",
    snippetTag: "Mozilla AMO 2026 rules",
    snippetLead:
      "Mozilla requires Firefox extensions that collect any user data to publish a clear privacy policy and to declare data collection through the addons.mozilla.org listing.",
    snippetBody:
      "Mozilla's review process is human led for many extensions and reviewers actively compare policy text against extension behaviour. Vague or boilerplate policies that do not match the extension's actual data flows are rejected or sent back with detailed feedback.",
    readTime: 8,
    sections: [
      {
        id: "amo-process",
        h2: "How the Mozilla AMO Review Works",
        paragraphs: [
          "Firefox extensions are distributed through addons.mozilla.org, often called AMO. AMO has both automated and human review tracks, depending on what your extension does. Extensions that request sensitive permissions, request all sites access, or use remote scripts typically get human review.",
          "During human review, a Mozilla volunteer or staff reviewer reads your privacy policy and compares it against your extension's behaviour. They check whether your manifest permissions match what the policy describes, whether the extension contacts any servers the policy does not name, and whether the data collection statement on your AMO listing is accurate.",
          "Mozilla rejects extensions whose policies are generic boilerplate, do not name the extension, or contradict the extension's actual behaviour. Specificity is the single most important quality of a Firefox extension privacy policy.",
        ],
      },
      {
        id: "amo-listing-data-collection",
        h2: "The AMO Listing Data Collection Field",
        paragraphs: [
          "When you create or update an AMO listing, you fill in a data collection field that tells users at install time what your extension collects. This is separate from the privacy policy URL but must be consistent with it.",
          "Be honest in this field. Users see it before they install. Mozilla penalises listings whose data collection field understates what the extension actually does, and reviewers will ask you to correct it.",
          "If your data collection list and your privacy policy disagree, Mozilla treats it as a misleading listing. Always update both at the same time when something changes.",
        ],
      },
      {
        id: "what-to-include",
        h2: "What a Firefox Extension Privacy Policy Must Include",
        paragraphs: [
          "Name your extension, your company or developer name, and a contact email at the top. Reviewers check that the document clearly belongs to the extension being submitted.",
          "List every category of personal data the extension collects, accesses, or transmits. Be specific. Include any data sent to your own servers, any data sent to third party services, and any data stored locally that could be considered personal.",
          "Describe how the data is used, who has access, how it is secured, and how long it is retained. Add a section explaining how users can request access, correction, or deletion. If your extension users are in the EU or UK, include the GDPR legal basis for processing.",
          "End with a last updated date and a note about how users will be notified of material changes to the policy.",
        ],
      },
      {
        id: "common-issues",
        h2: "Common Issues Mozilla Reviewers Flag",
        paragraphs: [
          "Boilerplate policies that look like they were generated for a generic website. Mozilla flags these regularly. Customize the template to your specific extension before submission.",
          "Missing third party disclosures. If your extension contacts Google Analytics, an error reporting service, an ad network, or any other third party, name them. Reviewers see the network traffic during testing.",
          "Policies that contradict the manifest. If your manifest requests the history permission but the policy says we do not access browsing history, reviewers reject the listing. Make sure the policy reflects what the manifest enables.",
        ],
      },
    ],
    faq: [
      {
        q: "Does every Firefox extension need a privacy policy?",
        a: "Mozilla requires a privacy policy for any extension that collects or transmits user data. Extensions that genuinely process nothing personal can submit without one, but reviewers still recommend a brief policy that clearly states no data is collected, to avoid confusion at install time.",
      },
      {
        q: "Can I reuse my Chrome extension privacy policy for Firefox?",
        a: "Yes, with care. The legal substance carries over because both browsers use the WebExtensions API. Update the policy to reference both Chrome and Firefox by name, and double check that any browser specific behaviour you describe matches the Firefox build of the extension.",
      },
      {
        q: "How long does Mozilla AMO review take with a privacy policy in place?",
        a: "Automated review can complete in minutes. Human review usually takes a few business days for routine extensions, longer for those with sensitive permissions. A clear, accurate privacy policy speeds up review because it removes the most common reason for back and forth with reviewers.",
      },
      {
        q: "Does Firefox have a data handling certification like Chrome?",
        a: "Mozilla uses the data collection field on the AMO listing instead of a separate certification page. The field captures the same information at a higher level. Be sure your data collection field, your privacy policy, and your manifest all agree.",
      },
    ],
    ctaTitle: "Generate a Mozilla AMO ready privacy policy",
    ctaSubtitle:
      "Specific, reviewer friendly, GDPR ready, and updated for 2026 Firefox extension review.",
    related: [
      { href: "/privacy-policy-for-chrome-extension", title: "Privacy Policy for Chrome Extension", desc: "Companion guide for the Chrome Web Store." },
      { href: "/chrome-extension-privacy-policy-template", title: "Chrome Extension Privacy Policy Template", desc: "Template that works for Firefox after small edits." },
      { href: "/chrome-extension-gdpr-compliance", title: "Chrome Extension GDPR Compliance", desc: "EU and UK user rights for browser extensions." },
      { href: "/edge-extension-privacy-policy-requirements", title: "Edge Extension Privacy Policy Requirements", desc: "The Microsoft Edge sister rules." },
    ],
  },

  // ========== 5 ==========
  {
    slug: "privacy-policy-for-ai-chatbot",
    breadcrumbName: "Privacy Policy for AI Chatbot",
    title: "Privacy Policy for AI Chatbot: GDPR & CCPA Rules (2026)",
    description:
      "AI chatbots collect prompts, personal data, and conversation history. See what your privacy policy must disclose under GDPR and CCPA, and how to handle training data.",
    keywords:
      "privacy policy for ai chatbot, chatbot privacy policy, ai chatbot gdpr, llm chatbot privacy, conversation data privacy",
    heroBadge: "AI Chatbot Compliance",
    heroH1Pre: "Privacy Policy for an",
    heroH1Highlight: "AI Chatbot",
    heroSubtitle:
      "AI chatbots present a privacy challenge that traditional websites do not. Users type sensitive content into a prompt, that content is processed by a language model, and it may be stored or used to improve the system. Your privacy policy must cover all of this clearly.",
    snippetTag: "2026 AI chatbot compliance",
    snippetLead:
      "Yes, every AI chatbot that collects user prompts, account data, or conversation history needs a privacy policy that discloses how that data is processed, stored, and used.",
    snippetBody:
      "Under GDPR, CCPA, and emerging AI specific regulation, chatbot operators must explain what is collected from prompts, who processes the data (including any underlying model providers), how long it is retained, whether it is used for training, and how users can opt out or request deletion.",
    readTime: 9,
    sections: [
      {
        id: "what-chatbots-collect",
        h2: "What an AI Chatbot Actually Collects",
        paragraphs: [
          "Prompts and responses are the most sensitive data an AI chatbot processes. Users frequently paste personal information into prompts: names, emails, employment details, health concerns, financial questions, and proprietary work content. Even if your chatbot is a wrapper around a third party model, the prompt text is personal data the moment a user includes anything that identifies them.",
          "Account data is the next layer: email address, login credentials, billing information for paid plans, IP address, and any profile fields you collect. This data is governed by the same privacy laws as any other web service.",
          "Conversation history is the third layer. Many chatbots persist past conversations so users can return to them. This creates a long term store of personal data that must be covered in the privacy policy and protected with appropriate security.",
        ],
      },
      {
        id: "model-provider-disclosure",
        h2: "Disclosing the Underlying Model Provider",
        paragraphs: [
          "If your chatbot is built on top of OpenAI, Anthropic, Google, or any other language model API, you must disclose this in your privacy policy. Users have a right to know that their prompts are being sent to a third party processor.",
          "Name the provider explicitly. State what data is sent (typically the prompt and any system context), what is returned (the model response), and what the provider says about retention. Most major providers offer enterprise terms that exclude prompt data from training; if you use those terms, say so in your policy.",
          "If you fine tune a model on user data, this is a much bigger disclosure. Tell users what data is used for fine tuning, how they can opt out, and what happens if they later request deletion. Trained model weights cannot be selectively deleted, which is a known limitation under GDPR's right to erasure that you should explain clearly.",
        ],
      },
      {
        id: "training-and-retention",
        h2: "Training, Retention, and Opt Out",
        paragraphs: [
          "If you use user prompts to improve your chatbot, this is a sensitive disclosure. State explicitly whether prompt data is used for training, what kind of training, who has access to the raw data, and how a user can opt out.",
          "Retention periods must be specific. Vague language like we keep your data as long as necessary is not GDPR friendly. Use real numbers: prompts deleted after 30 days, account data retained for the life of the account, billing records kept for seven years for tax purposes.",
          "Provide a clear path for users to delete their conversations and account. The path must be self serve where possible. Manual email requests are acceptable for edge cases but should not be the only option.",
        ],
      },
      {
        id: "gdpr-and-ccpa",
        h2: "GDPR and CCPA Specifics for Chatbots",
        paragraphs: [
          "Under GDPR, you must identify a lawful basis for processing prompt data. For paid users, contract performance is usually correct. For free users, consent or legitimate interests can apply, but legitimate interests need a balancing test that you should be ready to show.",
          "GDPR also requires you to identify your role as data controller, list any joint controllers, and name any data processors (including the model provider). Provide a contact for data protection requests.",
          "Under CCPA, California residents have a right to know, delete, and opt out of sale or sharing for advertising. Most chatbots do not sell data, but if you share with any analytics or ad partner, you must offer the Do Not Sell or Share My Personal Information link on the homepage.",
        ],
      },
      {
        id: "common-mistakes",
        h2: "Common Privacy Policy Mistakes Chatbots Make",
        paragraphs: [
          "Hiding the model provider. Reviewers and regulators have started flagging chatbots that fail to mention they are routing prompts to a third party API. Always name the provider.",
          "Claiming end to end encryption when prompts are processed by a third party. Encryption in transit is fine to claim if true, but the prompt is decrypted at the model provider, which is the relevant disclosure.",
          "Promising deletion without describing the model training caveat. If you fine tune on user data, deletion of the user account does not remove the data from the trained model. This must be explained in plain language.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a privacy policy if my AI chatbot is free and has no accounts?",
        a: "Yes. Even an anonymous chatbot collects data: IP address, browser metadata, the prompt text itself, and any cookies or analytics on the page. Privacy laws like GDPR and CCPA apply to that data regardless of whether the user has an account.",
      },
      {
        q: "Can I just point users to OpenAI's privacy policy if my chatbot uses the OpenAI API?",
        a: "No. You are the data controller for your service. You must publish your own privacy policy that names OpenAI as a processor and links to the OpenAI policy as supplementary. Pointing users at OpenAI alone fails GDPR controller obligations and confuses users.",
      },
      {
        q: "What if my chatbot uses an open source model running on my own server?",
        a: "Then there is no third party processor for the model itself, which simplifies the disclosure. You still need to describe what is collected, how it is stored, and how users can request deletion. If you use any cloud hosting, GPU vendor, or inference platform, name them as processors.",
      },
      {
        q: "Are there special rules for AI chatbots aimed at children?",
        a: "Yes. COPPA in the US, GDPR Article 8 in the EU, and the UK Age Appropriate Design Code all impose stricter rules on services aimed at users under 13. AI chatbots for children require parental consent for data collection and additional protections in the privacy policy.",
      },
    ],
    ctaTitle: "Generate an AI chatbot privacy policy in 60 seconds",
    ctaSubtitle:
      "Covers prompt handling, model provider disclosure, training opt out, and GDPR plus CCPA rights.",
    related: [
      { href: "/privacy-policy-for-ai-tools", title: "Privacy Policy for AI Tools", desc: "Broader AI tool category guide." },
      { href: "/chatgpt-privacy-policy-risks", title: "ChatGPT Privacy Policy Risks", desc: "Why generic AI generated policies fail." },
      { href: "/gdpr-privacy-policy-template", title: "GDPR Privacy Policy Template", desc: "EU and UK aligned base template." },
      { href: "/ccpa-privacy-policy-example", title: "CCPA Privacy Policy Example", desc: "California consumer rights covered." },
    ],
  },

  // ========== 6 ==========
  {
    slug: "privacy-policy-for-llm-app",
    breadcrumbName: "Privacy Policy for LLM App",
    title: "Privacy Policy for an LLM App: 2026 Compliance Guide",
    description:
      "LLM powered apps process prompts, embeddings, and user data through model APIs. See exactly what your privacy policy must disclose under GDPR, CCPA, and the EU AI Act.",
    keywords:
      "privacy policy for llm app, llm privacy policy, large language model privacy, openai api privacy policy, anthropic api privacy",
    heroBadge: "LLM App Compliance",
    heroH1Pre: "Privacy Policy for an",
    heroH1Highlight: "LLM App",
    heroSubtitle:
      "Apps built on large language models route user input to a third party model provider, often store embeddings of personal content, and may use the data for product improvement. Your privacy policy must explain all of this.",
    snippetTag: "2026 LLM compliance",
    snippetLead:
      "An LLM app privacy policy must disclose every data flow tied to the model, including prompts, embeddings, vector storage, model provider processing, and any training or evaluation use of user content.",
    snippetBody:
      "Under GDPR, CCPA, and the EU AI Act provisions taking effect in 2026, LLM app operators must identify themselves as the data controller, name the model provider as a processor, describe retention specifically, and provide a workable path for users to delete their data.",
    readTime: 9,
    sections: [
      {
        id: "what-llm-apps-do",
        h2: "What an LLM App Actually Does With User Data",
        paragraphs: [
          "An LLM app typically takes a user prompt, optionally enriches it with context from a vector database or knowledge base, sends the combined prompt to a model provider API, and returns the response to the user. Each of those steps touches data that may be personal.",
          "If your app stores user uploaded documents or notes and creates vector embeddings for retrieval, those embeddings are derived from the original content. Under GDPR, embeddings of personal content are considered personal data even though they look like numbers.",
          "If your app maintains conversation history, that history is a long term store of user prompts and model responses. It is fully personal data and must be handled with appropriate security and retention controls.",
        ],
      },
      {
        id: "who-is-controller",
        h2: "Who Is the Data Controller and Who Is the Processor",
        paragraphs: [
          "You, the operator of the LLM app, are the data controller. You decide what data is collected, why, and what is done with it. You are responsible to users and regulators.",
          "The model provider (OpenAI, Anthropic, Google, an open source model on a cloud GPU, or anything else) is a data processor. They process data on your instructions. Your contract with them sets the boundaries.",
          "If you use a vector database hosted by a third party, that vendor is also a processor. The same is true for your hosting provider, your authentication provider, your payment processor, and any analytics tool you embed. The privacy policy must list each one.",
        ],
      },
      {
        id: "training-disclosure",
        h2: "Training and Improvement Disclosure",
        paragraphs: [
          "If you do not use user data to train any model, say so explicitly. This is often the strongest privacy claim a small LLM app can make and users value it.",
          "If you do use user data, describe: what data is used, what kind of training or fine tuning, who has access to the raw data, how a user can opt out, and what happens to data already used in training when a user later requests deletion.",
          "Be honest about the limits of deletion. Trained model weights cannot be selectively unlearned. If a user's data has been used to fine tune a model, that influence is baked in. You can stop using the user's data going forward, but the historical training cannot be reversed. Privacy regulators are increasingly focused on this gap and your policy should address it directly.",
        ],
      },
      {
        id: "vector-storage",
        h2: "Vector Stores and Personal Embeddings",
        paragraphs: [
          "If your app uses retrieval augmented generation, you almost certainly have a vector database holding embeddings of user content. List the vendor (Pinecone, Weaviate, Qdrant, pgvector, or similar) and where it is hosted.",
          "Describe what gets embedded, how long the embeddings are retained, and what happens when a user deletes the source content. Best practice is to delete the embeddings at the same time as the source.",
          "Embeddings are not anonymisation. Two papers from 2023 and 2024 showed that embeddings of personal text can be inverted to recover meaningful portions of the original. Treat embeddings as personal data for GDPR purposes.",
        ],
      },
      {
        id: "eu-ai-act",
        h2: "EU AI Act and Transparency Obligations",
        paragraphs: [
          "The EU AI Act introduces transparency requirements that overlap with privacy disclosure. Users interacting with an AI system must be informed of that fact, and certain high risk uses require additional documentation.",
          "Most general purpose LLM apps fall into the limited or minimal risk category, which means transparency obligations apply but not the heavy compliance burden of high risk AI. Your privacy policy and a clear in product disclosure together usually satisfy the transparency requirement.",
          "If your LLM app is used in employment screening, education, credit scoring, or law enforcement, you may be in a higher risk category and additional documentation is required outside the privacy policy.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a separate privacy policy for my LLM app or can I reuse my main website policy?",
        a: "If the LLM app is a separate product or has materially different data flows from your main website, write a separate policy or a clearly marked section. Combining everything into one policy is acceptable only if every flow is described accurately.",
      },
      {
        q: "How do I describe a model provider that says they do not train on my data?",
        a: "State the fact and link to the provider's documentation. For example: prompts and responses are sent to OpenAI under their API enterprise terms, which exclude this data from model training. This is a strong claim and users appreciate the link to verify it.",
      },
      {
        q: "What if I cannot afford a lawyer to review my LLM app privacy policy?",
        a: "Use a generator that produces a structurally sound policy and customize the AI specific sections yourself. For high risk uses (health, finance, legal, employment), invest in a lawyer review. For consumer or productivity tools, a well written generated policy plus careful customisation is enough to start.",
      },
      {
        q: "Does a self hosted open source LLM still need a privacy policy?",
        a: "Yes. The legal requirement comes from collecting personal data, not from using a third party API. If users send prompts that include personal information, you have a privacy policy obligation regardless of where the model runs.",
      },
    ],
    ctaTitle: "Generate an LLM app privacy policy",
    ctaSubtitle:
      "Vector store, model provider, training opt out, and EU AI Act disclosure, all covered.",
    related: [
      { href: "/privacy-policy-for-ai-chatbot", title: "Privacy Policy for AI Chatbot", desc: "Sister guide focused on conversational AI." },
      { href: "/privacy-policy-for-ai-tools", title: "Privacy Policy for AI Tools", desc: "Broader AI tool category guide." },
      { href: "/gdpr-privacy-policy-template", title: "GDPR Privacy Policy Template", desc: "EU and UK aligned base template." },
      { href: "/chatgpt-privacy-policy-risks", title: "ChatGPT Privacy Policy Risks", desc: "Why generic AI generated policies fail." },
    ],
  },

  // ========== 7 ==========
  {
    slug: "privacy-policy-for-portfolio-website",
    breadcrumbName: "Privacy Policy for Portfolio Website",
    title: "Privacy Policy for a Portfolio Website (Free Template, 2026)",
    description:
      "Portfolio sites collect contact form data, analytics, and visitor IPs. See exactly what your privacy policy must disclose under GDPR and CCPA. Free template included.",
    keywords:
      "privacy policy for portfolio website, portfolio privacy policy, designer portfolio privacy, freelance portfolio privacy policy",
    heroBadge: "Portfolio Site Guide",
    heroH1Pre: "Privacy Policy for a",
    heroH1Highlight: "Portfolio Website",
    heroSubtitle:
      "Even a simple portfolio site collects visitor data through analytics, contact forms, and embedded fonts. Privacy laws apply the moment any of that touches a user. Here is what your portfolio policy must say.",
    snippetTag: "Designer and freelancer rules",
    snippetLead:
      "Yes, portfolio websites need a privacy policy if they use any analytics, contact form, embedded fonts, comments, or cookies, which is true for almost every modern portfolio site.",
    snippetBody:
      "Under GDPR, CCPA, and CalOPPA, the legal trigger is data collection, not commercial activity. Personal portfolios, freelancer sites, and creative case study pages all qualify the moment they include Google Analytics, a contact form, or even Google Fonts loaded from Google's CDN.",
    readTime: 7,
    sections: [
      {
        id: "what-portfolios-collect",
        h2: "What a Typical Portfolio Site Actually Collects",
        paragraphs: [
          "Most portfolio sites use Google Analytics or a similar tool. Analytics collects IP addresses, page views, referrers, browser metadata, and a unique visitor identifier. All of this is personal data under GDPR.",
          "Most portfolios have a contact form. The form collects at least a name and an email address, often a message body. If the form is hosted by Formspree, Typeform, Tally, or similar, that vendor is a data processor and must be named in the policy.",
          "Many portfolios use embedded Google Fonts loaded from Google's CDN. A 2022 German court ruling treated this as a data transfer and required disclosure. Self hosting fonts avoids the issue, but if you embed from the CDN, your policy must mention it.",
        ],
      },
      {
        id: "what-must-be-in-policy",
        h2: "What Must Be in Your Portfolio Privacy Policy",
        paragraphs: [
          "Identify yourself by name and provide a contact email. If you operate as a freelancer or sole trader, you can use your personal name; if you have a registered business, use the business name. Either way, the user must be able to reach you about privacy questions.",
          "List every category of data you collect, every tool that processes it, and the purpose for each. Use plain language. Avoid legal jargon that obscures what you actually do.",
          "Describe how a visitor can request access, correction, or deletion of their data. Give a real email address that you check. A contact form is acceptable as long as it actually reaches you.",
          "Add a last updated date and a short statement about how you will notify visitors of material changes. For most portfolios this just means updating the date when you change the policy.",
        ],
      },
      {
        id: "common-mistakes",
        h2: "Common Portfolio Privacy Policy Mistakes",
        paragraphs: [
          "Copying a generic template that mentions services or products you do not offer. Reviewers and savvy users notice immediately and it undermines trust.",
          "Forgetting Google Analytics. The single most common omission. If you have GA on your site, name it in the policy. Same for Plausible, Fathom, or any other analytics vendor.",
          "Forgetting Google Fonts loaded from the CDN. Easy to overlook. Self hosting fonts is the cleanest fix; otherwise list the CDN as a third party.",
          "Skipping the contact form processor. If you use Formspree, Tally, or Typeform, name the vendor and link to their privacy policy.",
        ],
      },
      {
        id: "where-to-display",
        h2: "Where to Display the Policy on a Portfolio Site",
        paragraphs: [
          "Add a Privacy link to your site footer so it appears on every page. This is the standard pattern users expect and the easiest way to make the policy discoverable.",
          "Link the contact form to the policy with a small note saying that submitted information is handled in accordance with the privacy policy. This is sometimes legally required and is always good practice.",
          "If your site uses cookies for analytics, add a small consent banner that links to the policy. For EU visitors, this is required by the ePrivacy Directive.",
        ],
      },
    ],
    faq: [
      {
        q: "Do I need a privacy policy for a portfolio site that has no contact form?",
        a: "If you use any analytics, embedded fonts from a CDN, or any third party widget, yes. Pure static sites with no analytics, no fonts CDN, and no third party assets are the only portfolios that can skip a policy, and almost no real portfolio is that bare.",
      },
      {
        q: "Can I just use the privacy policy from another designer's site?",
        a: "No. It will reference services that designer uses, not yours. It is also a copyright infringement and a compliance failure. Use a generator or write your own based on what your site actually does.",
      },
      {
        q: "What if my portfolio site is not for business and is just a hobby?",
        a: "Privacy laws apply to data collection regardless of commercial intent. A hobby site that uses Google Analytics is collecting personal data and needs a privacy policy under GDPR and CCPA.",
      },
      {
        q: "How long does a portfolio privacy policy need to be?",
        a: "A clear policy for a typical portfolio is one to two pages. Cover the basics: who you are, what you collect, who processes it, how to contact you, and the user's rights. Length is not the goal; accuracy and clarity are.",
      },
    ],
    ctaTitle: "Generate a portfolio privacy policy in 60 seconds",
    ctaSubtitle:
      "Covers analytics, contact form, fonts CDN, GDPR, and CCPA. Free preview, $4.99 to download.",
    related: [
      { href: "/privacy-policy-for-personal-website", title: "Privacy Policy for Personal Website", desc: "Sister guide for personal sites." },
      { href: "/privacy-policy-for-websites", title: "Privacy Policy for Websites", desc: "General website privacy policy guide." },
      { href: "/do-i-need-a-privacy-policy-for-a-free-website", title: "Do I Need a Privacy Policy for a Free Website?", desc: "When the requirement applies even without commerce." },
      { href: "/cookie-policy-for-websites", title: "Cookie Policy for Websites", desc: "EU cookie consent requirements explained." },
    ],
  },

  // ========== 8 ==========
  {
    slug: "privacy-policy-for-personal-website",
    breadcrumbName: "Privacy Policy for Personal Website",
    title: "Privacy Policy for a Personal Website (2026 Free Guide)",
    description:
      "Personal websites need a privacy policy if they use analytics, fonts, or contact forms. See what to disclose under GDPR and CCPA, and grab a free template.",
    keywords:
      "privacy policy for personal website, personal blog privacy policy, hobby website privacy policy, gdpr personal website",
    heroBadge: "Personal Site Guide",
    heroH1Pre: "Privacy Policy for a",
    heroH1Highlight: "Personal Website",
    heroSubtitle:
      "A personal website does not need to be commercial to fall under privacy law. Analytics, embedded fonts, and contact forms are enough to trigger GDPR and CCPA obligations. Here is the simplest way to comply.",
    snippetTag: "GDPR and CCPA personal site rules",
    snippetLead:
      "Yes, personal websites need a privacy policy if they collect any data from visitors, which is true the moment they use Google Analytics, a contact form, or fonts loaded from a third party CDN.",
    snippetBody:
      "Privacy laws like GDPR and CCPA apply to data collection rather than commercial activity. A hobby site with Google Analytics is collecting personal data and is subject to the same disclosure requirements as a business website, even if no money changes hands.",
    readTime: 7,
    sections: [
      {
        id: "trigger",
        h2: "What Triggers the Requirement on a Personal Site",
        paragraphs: [
          "Any analytics tool that uses cookies or collects IP addresses triggers the requirement. Google Analytics is the most common example. Plausible and Fathom are lighter on data but still require disclosure.",
          "Any contact form, comment system, or newsletter signup. These collect identifying information directly and are clear data collection events.",
          "Any embedded third party content that loads from a remote server: YouTube videos, Vimeo embeds, Twitter or X embeds, Disqus comments, embedded maps, Google Fonts from the CDN. Each of these contacts a third party server that may set cookies or log the visitor's IP.",
        ],
      },
      {
        id: "what-to-include",
        h2: "What Your Personal Site Privacy Policy Must Include",
        paragraphs: [
          "Identify yourself. Personal name and contact email is enough for a personal site. If you do not want to publish your home address, you do not have to; an email contact for privacy questions is sufficient.",
          "List the data types you collect, who processes them, how long they are kept, and the legal basis under GDPR. For a typical personal site, the basis is consent (for analytics that require it) or legitimate interests (for analytics that respect Do Not Track and store no IP).",
          "Describe how visitors can ask you what data you hold, request correction, or request deletion. Provide a clear contact channel.",
          "Add a last updated date. Update it whenever you change the policy.",
        ],
      },
      {
        id: "minimal-version",
        h2: "A Minimal Privacy Policy for a Simple Personal Site",
        paragraphs: [
          "If your site is genuinely simple (one analytics tool, no contact form, no embeds), your privacy policy can be short. A single page covering what is collected, who processes it, retention, and contact details is enough.",
          "Keep the language plain. The goal is to inform a visitor in a few minutes, not to write a contract. Bullet points and short paragraphs work better than dense legal prose.",
          "Reuse a generator and customise it. Resist the temptation to copy from a big company's policy. Their policies cover services your site does not offer and miss things your site does.",
        ],
      },
      {
        id: "common-questions",
        h2: "Questions Personal Site Owners Often Ask",
        paragraphs: [
          "Do I need a cookie banner on a personal site? If you use analytics or other cookies that count as non essential, EU visitors must give consent before those cookies are set. A simple banner that links to your privacy policy is the standard solution.",
          "Do I need to register as a data controller anywhere? In most jurisdictions, no. Personal sites are not required to register with a data protection authority. The exception is some EU member states that have additional rules for sites that process certain categories of data.",
          "Can I host the privacy policy on a different domain? Technically yes, but it is much better to host it on the same domain as the site. Keep it accessible from every page through a footer link.",
        ],
      },
    ],
    faq: [
      {
        q: "Does a static personal site need a privacy policy?",
        a: "If the site loads anything from a third party CDN (fonts, scripts, embedded videos), yes. If the site is genuinely standalone with no third party assets and no analytics, you can skip the policy, though it remains a good idea to include a one paragraph statement.",
      },
      {
        q: "Can I use the same privacy policy across all my personal projects?",
        a: "Yes, if every project has the same data flows. In practice, projects differ enough that a per project policy is clearer and more accurate. If you maintain one shared policy, name each project and the specific tools each one uses.",
      },
      {
        q: "Does my personal site need a CCPA section if I am not in California?",
        a: "If any of your visitors might be in California, yes. CCPA applies based on where the user is located, not where the operator is. Most US English language sites get California traffic, so a short CCPA section is the safe default.",
      },
      {
        q: "I am 16 and run a personal blog. Do the rules still apply to me?",
        a: "Yes. Privacy laws do not exempt minors who run websites. If your blog has analytics or a contact form, you have the same obligations as an adult site owner. A simple privacy policy is enough; you do not need a lawyer.",
      },
    ],
    ctaTitle: "Generate a personal site privacy policy",
    ctaSubtitle:
      "Free preview, $4.99 to download. Covers analytics, fonts CDN, contact form, GDPR, and CCPA.",
    related: [
      { href: "/privacy-policy-for-portfolio-website", title: "Privacy Policy for Portfolio Website", desc: "Sister guide for portfolio sites." },
      { href: "/do-i-need-a-privacy-policy-for-a-blog", title: "Do I Need a Privacy Policy for a Blog?", desc: "When the requirement applies to bloggers." },
      { href: "/do-i-need-a-privacy-policy-for-a-free-website", title: "Do I Need a Privacy Policy for a Free Website?", desc: "When non commercial sites still qualify." },
      { href: "/privacy-policy-for-websites", title: "Privacy Policy for Websites", desc: "General website privacy policy guide." },
    ],
  },

  // ========== 9 ==========
  {
    slug: "how-to-write-chrome-extension-privacy-policy",
    breadcrumbName: "Write Chrome Extension Privacy Policy",
    title: "How to Write a Chrome Extension Privacy Policy (2026 Guide)",
    description:
      "A practical guide to writing a Chrome extension privacy policy that passes Web Store review. Covers structure, language, certification matching, and common rejection reasons.",
    keywords:
      "how to write chrome extension privacy policy, write chrome extension policy, chrome extension privacy policy guide, chrome extension privacy policy steps",
    heroBadge: "Chrome Extension Writing Guide",
    heroH1Pre: "How to Write a",
    heroH1Highlight: "Chrome Extension Privacy Policy",
    heroSubtitle:
      "A Chrome extension privacy policy is short, specific, and structured. This guide shows you exactly what to write, in what order, and how to phrase it so Web Store reviewers approve on the first submission.",
    snippetTag: "Web Store reviewer perspective",
    snippetLead:
      "A passing Chrome extension privacy policy is short, specific to your extension, and structured into seven sections: identity, data collected, data use, third party services, storage and security, user controls, and contact.",
    snippetBody:
      "Reviewers spend less than two minutes on most policies. They look for specific data types, named third parties, and consistency with the data handling certification you submit. Vague templates and generic boilerplate are the most common reasons for rejection.",
    readTime: 8,
    sections: [
      {
        id: "structure",
        h2: "The Seven Section Structure That Passes Review",
        paragraphs: [
          "Section one: identity. State the name of your extension, the developer or company name, and a contact email. Reviewers check this matches your Web Store listing.",
          "Section two: what data you collect. List every category of data your extension touches. Be specific and use plain language. Examples: page URLs visited while the extension is active, text the user enters into the extension popup, the user's email address if they create an account.",
          "Section three: how you use the data. Map each data type to a purpose. Page URLs are used to provide relevant suggestions. Email addresses are used for account login and product update notifications.",
          "Section four: third party services. Name every external service: analytics, error reporting, model providers, payment processors, anything that receives any user data. Link to each one's privacy policy if possible.",
          "Section five: storage and security. State where data is stored, how long it is kept, and what security measures protect it. Be honest about local versus remote storage.",
          "Section six: user controls. Explain how users can see, change, export, or delete their data. Provide a clear path that does not require contacting you for routine cases.",
          "Section seven: contact. Give a real email address for privacy questions. Add a last updated date.",
        ],
      },
      {
        id: "language",
        h2: "Language and Tone That Works for Reviewers",
        paragraphs: [
          "Use plain language. Reviewers are not lawyers; they are technical reviewers checking that your policy matches your extension's behaviour. Plain English (or your local language) reads faster and is easier to verify.",
          "Avoid we may collect statements when you can say what you do collect. Vague language is a flag for reviewers. Specificity is the strongest signal that you understand what your extension does.",
          "Name third party services explicitly. Google Analytics, Sentry, Mixpanel, Stripe, OpenAI, and so on. Reviewers see these in the network traffic during testing and a missing name in the policy is a quick rejection.",
        ],
      },
      {
        id: "match-certification",
        h2: "Matching the Data Handling Certification",
        paragraphs: [
          "When you submit your extension, you complete a data handling certification with checkboxes for personally identifiable information, health, financial, authentication, personal communications, location, web history, and user activity.",
          "Your privacy policy must match this certification exactly. If the certification says no health data, the policy must not mention health data. If the certification says authentication data is collected, the policy must describe it.",
          "Read both side by side before submitting. The single most common cause of rejection is a mismatch between certification and policy.",
        ],
      },
      {
        id: "common-mistakes",
        h2: "Common Writing Mistakes That Trigger Rejection",
        paragraphs: [
          "Copying a website privacy policy and pasting it under an extension. Website policies mention things extensions never do (advertising cookies, marketing automation) and miss things extensions always do (browser API access).",
          "Listing data the extension does not collect. Reviewers test the extension and notice when the policy lists data the extension never touches. It is just as bad as missing data.",
          "Stale policies. A policy with a 2021 last updated date for a 2026 extension reads as abandoned. Refresh the date with every meaningful change.",
        ],
      },
    ],
    faq: [
      {
        q: "How long should a Chrome extension privacy policy be?",
        a: "Two to four pages is typical. Long enough to cover the seven sections in detail, short enough that a reviewer can read it in two minutes. Shorter is better than padded, as long as nothing important is missing.",
      },
      {
        q: "Can I write the policy in a language other than English?",
        a: "Yes, but the language should match the primary language of your extension's listing. If your extension is listed in English, the policy should be in English. You can offer translations, but the English version is the one reviewers will check.",
      },
      {
        q: "Should I have a lawyer review my Chrome extension privacy policy?",
        a: "For high risk extensions (financial data, health data, sensitive user content), yes. For most consumer extensions, a generator that produces a structurally sound policy plus careful customisation is enough to pass Web Store review and meet baseline GDPR and CCPA requirements.",
      },
      {
        q: "What if my extension changes data handling in a future update?",
        a: "Update the policy at the same time you submit the new version. Update the last modified date. If the change is material (new data types, new third parties), surface a notification inside the extension as well.",
      },
    ],
    ctaTitle: "Write your Chrome extension privacy policy in 60 seconds",
    ctaSubtitle:
      "Web Store approved structure, GDPR ready, all seven sections covered. Updated April 2026.",
    related: [
      { href: "/chrome-extension-privacy-policy-template", title: "Chrome Extension Privacy Policy Template", desc: "Template you can copy and customize." },
      { href: "/how-to-add-privacy-policy-to-chrome-extension", title: "How to Add Privacy Policy to Chrome Extension", desc: "Step by step dashboard walkthrough." },
      { href: "/chrome-extension-user-data-policy", title: "Chrome Extension User Data Policy", desc: "What Google's user data rules require." },
      { href: "/manifest-v3-privacy-policy-requirements", title: "Manifest V3 Privacy Policy Requirements", desc: "MV3 specific privacy considerations." },
    ],
  },

  // ========== 10 ==========
  {
    slug: "privacy-policy-for-mvp",
    breadcrumbName: "Privacy Policy for MVP",
    title: "Privacy Policy for an MVP (Startup Founder Guide, 2026)",
    description:
      "Launching an MVP? You still need a privacy policy on day one. See the minimum legal requirements, what founders skip at their peril, and a free 60 second generator.",
    keywords:
      "privacy policy for mvp, startup mvp privacy policy, mvp privacy compliance, founder privacy policy, side project privacy policy",
    heroBadge: "Startup MVP Guide",
    heroH1Pre: "Privacy Policy for an",
    heroH1Highlight: "MVP",
    heroSubtitle:
      "Founders launching an MVP often delay legal pages until later. Privacy laws do not work that way. From the first user signup, you have a privacy policy obligation. Here is the minimum a launch ready MVP needs.",
    snippetTag: "Startup founder essentials",
    snippetLead:
      "Every MVP that has user signups, payments, contact forms, analytics, or any third party data flow needs a privacy policy from launch day, not later.",
    snippetBody:
      "Privacy laws like GDPR and CCPA apply from the first byte of personal data collected. Payment processors, app stores, and ad platforms also require a published privacy policy as a condition of using their services. An MVP without one risks fines, processor bans, listing rejection, and customer trust loss.",
    readTime: 7,
    sections: [
      {
        id: "why-day-one",
        h2: "Why Privacy Cannot Wait Until After Launch",
        paragraphs: [
          "GDPR fines start at the first violation. The €20 million ceiling makes headlines but the typical fine is much smaller and applies to small businesses and side projects too. The legal trigger is data collection, and most MVPs collect personal data from the very first user.",
          "Stripe, Paddle, Lemon Squeezy, and every other payment processor require a published privacy policy before they will activate live mode. Apple App Store and Google Play require one before they list your app. Facebook Ads and Google Ads require one for any landing page that runs ads.",
          "Customer trust matters more for an MVP than for an established product. Users are deciding whether to give a brand new service their email and credit card. A clear privacy policy linked from the homepage is a simple trust signal that costs almost nothing to provide.",
        ],
      },
      {
        id: "minimum-content",
        h2: "The Minimum Content an MVP Privacy Policy Needs",
        paragraphs: [
          "Identity: company or founder name, contact email, and physical or business address if you have one. If you operate as a sole founder, your personal name and an email is enough to start.",
          "Data collected: what you actually collect today. List the real fields: email, name, payment data via Stripe, IP address, browser metadata. Do not list things you might collect later.",
          "Third party services: every vendor that touches user data. At MVP scale this is usually short: payment processor, analytics tool, email service, hosting provider. Name each one.",
          "User rights and how to exercise them: a clear path to ask what is held, request deletion, or contact you with a question. A real email is enough.",
          "Last updated date and a note that you will update the policy as the product changes.",
        ],
      },
      {
        id: "scaling-up",
        h2: "How the Policy Should Evolve as You Grow",
        paragraphs: [
          "Add sections as you add features. Launching email marketing? Add a section on what data is processed by your email provider and how users can unsubscribe. Adding a chat widget? Name the vendor and link to their policy.",
          "Move from informal contact to a real DPO or privacy contact as you scale. Once you have a few hundred users, set up a dedicated privacy email address (privacy@yourdomain) so you can route requests cleanly.",
          "Schedule a review every quarter. Privacy laws change, your product changes, and your vendor list changes. A stale policy is a compliance risk.",
        ],
      },
      {
        id: "common-shortcuts",
        h2: "Shortcuts Founders Take That Cause Problems",
        paragraphs: [
          "Copying a competitor's privacy policy. The copy describes the competitor's vendors and data flows, not yours. It is a copyright infringement and a compliance failure at the same time.",
          "Using a generic AI generated policy with no customisation. These read fluently but miss the specific vendors and data types your MVP actually uses. Reviewers and savvy users notice immediately.",
          "Skipping the policy until the first complaint. The first complaint may also be the first fine, the first processor ban, or the first chargeback dispute that does not go your way.",
        ],
      },
    ],
    faq: [
      {
        q: "I am a single founder launching this weekend. What is the minimum I need?",
        a: "A one page privacy policy that names you, lists what data you collect, names your payment processor and analytics vendor, gives a contact email, and shows a last updated date. A generator can produce this in a minute and it is enough for launch.",
      },
      {
        q: "Do I need a privacy policy if my MVP only has a waitlist?",
        a: "Yes. A waitlist collects email addresses, which are personal data under GDPR and CCPA. Even before you have a real product, the email collection is enough to trigger the requirement.",
      },
      {
        q: "Can I just use Termly's free policy and call it done?",
        a: "Termly's policies are decent starting points but you must customise them. The default text references services Termly assumes most sites use; if those do not match your MVP, the policy is inaccurate. Read it carefully and edit before publishing.",
      },
      {
        q: "I am bootstrapping. Is paying for a privacy policy generator worth it?",
        a: "A $5 to $30 spend on a structured generator buys you a policy that is significantly more accurate than free templates and faster than writing from scratch. For an MVP, that trade is almost always worth it. Lawyer review is overkill at this stage unless you handle health, finance, or children's data.",
      },
    ],
    ctaTitle: "Launch your MVP with a privacy policy that works",
    ctaSubtitle:
      "Generated in 60 seconds. Covers Stripe, analytics, GDPR, and CCPA. $4.99 one time.",
    related: [
      { href: "/privacy-policy-for-saas", title: "Privacy Policy for SaaS", desc: "When the MVP grows into a real SaaS product." },
      { href: "/privacy-policy-for-small-business", title: "Privacy Policy for Small Business", desc: "Sister guide for non SaaS small businesses." },
      { href: "/privacy-policy-for-stripe", title: "Privacy Policy for Stripe", desc: "Stripe specific disclosure language." },
      { href: "/how-to-create-a-privacy-policy-for-free", title: "How to Create a Privacy Policy for Free", desc: "Free options compared honestly." },
    ],
  },
];
