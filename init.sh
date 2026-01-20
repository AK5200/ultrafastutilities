#!/bin/bash

# PolicyDraft - Environment Setup Script
# Run this at the start of each session

echo "🚀 Starting PolicyDraft environment setup..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env.local exists
if [ ! -f ".env.local" ]; then
    echo "⚠️  No .env.local found. Creating template..."
    cat > .env.local << EOF
# Razorpay (Test Mode)
RAZORPAY_KEY_ID=rzp_test_xxxxxxxxxxxxx
RAZORPAY_KEY_SECRET=xxxxxxxxxxxxxxxxxxxxx

# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=xxxxxxxxxxxxxxxxxxxxx

# Email (Resend)
RESEND_API_KEY=re_xxxxxxxxxxxxx

# Site URL
NEXT_PUBLIC_SITE_URL=http://localhost:3000
EOF
    echo "📝 Please update .env.local with real values"
fi

# Kill any existing Next.js dev server
pkill -f "next dev" 2>/dev/null

# Start dev server in background
echo "🌐 Starting development server..."
npm run dev &

# Wait for server to start
sleep 5

# Check if server is running
if curl -s http://localhost:3000 > /dev/null; then
    echo "✅ Dev server running at http://localhost:3000"
else
    echo "❌ Dev server failed to start. Check for errors."
fi

echo ""
echo "📋 Quick Status:"
echo "   - Features remaining: $(cat features.json | grep '"passes": false' | wc -l)"
echo "   - Features complete: $(cat features.json | grep '"passes": true' | wc -l)"
echo ""
echo "🎯 Ready to code! Check claude-progress.txt for context."
