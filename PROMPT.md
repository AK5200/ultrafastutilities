# PolicyDraft - Ralph Wiggum Autonomous Build

## Project Overview

**Product:** PolicyDraft - Privacy Policy Generator
**Goal:** Users enter website URL + answer 8 questions → get professional privacy policy
**Revenue:** Free (watermark) → ₹999 one-time (clean + bonus docs)

---

## Your Role

You are an autonomous coding agent building this product. You work in sessions. Each session, you:

1. Get your bearings
2. Pick ONE feature from `features.json` that is not yet passing
3. Implement it completely
4. Test it thoroughly
5. Mark it as passing only after verification
6. Commit your work with a clear message
7. Update `claude-progress.txt`

---

## Session Start Protocol

Every session, do these steps IN ORDER:

```bash
# 1. Where am I?
pwd

# 2. What exists?
ls -la

# 3. What happened recently?
git log --oneline -10

# 4. Read progress notes
cat claude-progress.txt

# 5. Check feature status
cat features.json | jq '[.[] | select(.passes == false)] | length'

# 6. Start dev server (if project exists)
./init.sh
```

---

## Session End Protocol

Before ending ANY session:

```bash
# 1. Ensure code runs without errors
npm run build

# 2. Commit your changes
git add -A
git commit -m "feat: [description of what you implemented]"

# 3. Update progress file
echo "$(date): [What you did, what's next]" >> claude-progress.txt
```

---

## Critical Rules

1. **ONE FEATURE PER SESSION.** Do not attempt multiple features.

2. **TEST BEFORE MARKING PASSING.** A feature is only `"passes": true` when you have:
   - Run the code
   - Verified it works as described in steps
   - Checked for edge cases

3. **NEVER REMOVE OR EDIT FEATURE DESCRIPTIONS.** You may only change `"passes": false` to `"passes": true`.

4. **COMMIT AFTER EVERY FEATURE.** Small, atomic commits.

5. **LEAVE CODE IN CLEAN STATE.** No half-implemented features. No console.logs. No broken imports.

6. **IF STUCK, DOCUMENT AND MOVE ON.** Add a note to `claude-progress.txt` and pick a different feature.

---

## Tech Stack (Do Not Deviate)

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Database:** Supabase (only for storing paid user emails)
- **Payments:** Razorpay
- **Hosting:** Vercel
- **Language:** TypeScript

---

## Project Structure

```
policydraft/
├── app/
│   ├── page.tsx                    # Landing page
│   ├── generate/
│   │   └── page.tsx                # Generator wizard
│   ├── preview/
│   │   └── page.tsx                # Policy preview + payment
│   ├── api/
│   │   ├── generate/route.ts       # Generate policy from answers
│   │   ├── detect/route.ts         # Auto-detect from URL
│   │   └── payment/route.ts        # Razorpay webhook
│   └── layout.tsx
├── components/
│   ├── ui/                         # shadcn components
│   ├── question-form.tsx
│   ├── policy-preview.tsx
│   └── pricing-card.tsx
├── lib/
│   ├── templates/
│   │   ├── privacy-policy.ts
│   │   ├── terms-of-service.ts
│   │   └── cookie-policy.ts
│   ├── generator.ts
│   └── razorpay.ts
├── features.json                   # Feature tracking
├── claude-progress.txt             # Session notes
├── init.sh                         # Environment setup
└── PROMPT.md                       # This file
```

---

## The 8 Questions (Reference)

1. **Website Type:** blog, business, e-commerce, SaaS, mobile app
2. **Data Collected:** name, email, phone, address, payment info, DOB, govt ID, photos
3. **Collection Methods:** forms, signup, newsletter, checkout, cookies, social login
4. **Data Usage:** services, orders, marketing, support, analytics, personalization
5. **Third Parties:** payment processors, email services, analytics, ads, hosting, CRM
6. **Cookies:** essential only, analytics, advertising, all, none
7. **User Rights:** view, download, delete, opt-out, all
8. **Business Info:** name, email, country (auto-detect from URL if provided)

---

## Template Variables

The policy templates use these variables:

```typescript
interface PolicyData {
  businessName: string;
  websiteUrl: string;
  contactEmail: string;
  country: string;
  state?: string;
  websiteType: string;
  dataCollected: string[];
  collectionMethods: string[];
  dataUsage: string[];
  thirdParties: string[];
  cookieTypes: string;
  userRights: string[];
  lastUpdated: string;
}
```

---

## Done Condition

Project is COMPLETE when:
- All features in `features.json` have `"passes": true`
- `npm run build` succeeds
- Site deploys to Vercel without errors
