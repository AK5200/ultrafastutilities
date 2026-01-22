# PolicyDraft - Overnight Ralph Setup

## Files Included

| File | Purpose |
|------|---------|
| `.cursorrules` | Instructions for Cursor Agent (the brain) |
| `features.json` | 43 features to build, tracked as pass/fail |
| `claude-progress.txt` | Log file Ralph writes to |
| `init.sh` | Environment setup script |
| `PROMPT.md` | Reference doc (content is in .cursorrules) |

---

## Setup Steps

### 1. Create Project Folder

```bash
mkdir policydraft
cd policydraft
```

### 2. Copy All Files Into It

Put these files in the folder:
- `.cursorrules`
- `features.json`
- `claude-progress.txt`
- `init.sh`
- `PROMPT.md`

### 3. Initialize Git

```bash
git init
git add -A
git commit -m "init: ralph wiggum project setup"
```

### 4. Open in Cursor

```bash
cursor .
```

---

## Start Overnight Run

### In Cursor:

1. Open **Composer** (Cmd+I or Ctrl+I)
2. Select **Agent** mode (not normal chat)
3. Paste this EXACT prompt:

```
You are Ralph. Read .cursorrules carefully. 

Start the autonomous loop NOW:
1. Check features.json for first "passes": false
2. Build that feature completely
3. Test it works
4. Mark it "passes": true in features.json
5. Git commit
6. Log to claude-progress.txt
7. IMMEDIATELY continue to next feature

Do not stop. Do not ask questions. Work until all features pass.

Begin.
```

4. Press Enter
5. Go to sleep 😴

---

## Check Progress in Morning

```bash
# See completed vs remaining
cat features.json | grep -c '"passes": true'
cat features.json | grep -c '"passes": false'

# Read the log
cat claude-progress.txt

# See commits
git log --oneline

# Run the app
npm run dev
```

---

## If Cursor Stops

It might stop after a while due to rate limits or context length.

Just re-open Composer and say:

```
Continue. Read features.json, find next incomplete feature, build it. Keep going.
```

---

## Expected Outcome

- 43 features
- ~15-20 will complete overnight (depends on complexity)
- Setup + Landing + Generator questions likely done
- Payment integration might need your API keys

---

## You'll Need to Add (Later)

Create `.env.local` with real keys:

```
RAZORPAY_KEY_ID=rzp_test_xxx
RAZORPAY_KEY_SECRET=xxx
NEXT_PUBLIC_SUPABASE_URL=xxx
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxx
RESEND_API_KEY=xxx
```

Ralph will scaffold everything, you add keys when ready to test payments.

---

## Good Night 🌙


