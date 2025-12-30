#!/bin/bash

echo "🚀 Kilikood Box Office - Vercel Deployment"
echo "=========================================="
echo ""
echo "Your Vercel ID: albin-2675"
echo ""
echo "Step 1: Logging in to Vercel..."
echo "This will open your browser for authentication."
echo ""
read -p "Press Enter to continue..."

npx vercel login

if [ $? -eq 0 ]; then
    echo ""
    echo "✅ Login successful!"
    echo ""
    echo "Step 2: Deploying to production..."
    echo ""
    npx vercel --prod --yes
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "🎉 Deployment complete!"
        echo ""
        echo "Your application is now live!"
        echo "Check the URL above to share with others."
        echo ""
    else
        echo ""
        echo "❌ Deployment failed. Please check the errors above."
    fi
else
    echo ""
    echo "❌ Login failed. Please try again."
fi

