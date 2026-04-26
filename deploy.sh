#!/bin/bash
# Stop on any error
set -e

# Prompt for a commit message
read -p "Enter commit message for these changes: " commit_msg

# 1. Add and commit all changes to your 'source' branch
echo "📦 Committing changes to the source branch..."
git add .
git commit -m "$commit_msg" || echo "No changes to commit."

# 2. Push the source code to GitHub
echo "☁️ Pushing source code to GitHub..."
git push origin source

# 3. Build the Vite production package
echo "🛠️ Building the optimized website..."
npm run build

# 4. Deploy the 'dist' folder to the 'main' branch using the gh-pages tool
echo "🚀 Deploying the website to the main branch..."
npx gh-pages -d dist -b main

echo "✅ All done! Source backed up and live website updated."
