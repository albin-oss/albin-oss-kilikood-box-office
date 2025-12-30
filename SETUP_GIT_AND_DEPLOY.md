# Setup Git Repository & Deploy to Vercel

## Your Git ID: albin-oss
## Your Vercel ID: albin-2675

---

## Step 1: Create GitHub Repository

### Option A: Via GitHub Website
1. Go to: https://github.com/new
2. Repository name: `kilikood-box-office`
3. Description: "Modern ticketing platform - Kilikood Box Office"
4. Choose: **Private** or **Public**
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### Option B: Via GitHub CLI (if installed)
```bash
gh repo create kilikood-box-office --private --source=. --remote=origin --push
```

---

## Step 2: Connect Local Repository to GitHub

After creating the repository on GitHub, run these commands:

```bash
# Add remote (replace YOUR_USERNAME with albin-oss if different)
git remote add origin https://github.com/albin-oss/kilikood-box-office.git

# Or if using SSH:
# git remote add origin git@github.com:albin-oss/kilikood-box-office.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## Step 3: Deploy to Vercel

### Method 1: Via Vercel Dashboard (Recommended)

1. **Go to**: https://vercel.com/dashboard
2. **Click**: "Add New Project"
3. **Import Git Repository**:
   - Select "GitHub" (or your Git provider)
   - Authorize Vercel if needed
   - Find and select: `albin-oss/kilikood-box-office`
   - Click **"Import"**
4. **Configure Project**:
   - Framework: **Next.js** (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (auto-filled)
   - Output Directory: `.next` (auto-filled)
   - Install Command: `npm install` (auto-filled)
5. **Deploy**:
   - Click **"Deploy"**
   - Wait 2-3 minutes
   - **Copy your URL!**

### Method 2: Via Vercel CLI

```bash
# Login to Vercel
npx vercel login

# Deploy (will link to Git automatically)
npx vercel --prod
```

When prompted:
- **Link to existing project?** → `N` (create new)
- **Project name?** → `kilikood-box-office` or press Enter
- **Directory?** → Press Enter (current directory)

---

## Step 4: Get Your Sharable URL

After deployment, you'll get:

**Production URL**: `https://kilikood-box-office.vercel.app`

Or if custom:
`https://kilikood-box-office-xxxxx.vercel.app`

---

## Automatic Deployments

Once connected to Git:
- ✅ Every push to `main` branch = Production deployment
- ✅ Pull requests = Preview deployments
- ✅ Automatic updates on code changes

---

## Quick Commands Reference

```bash
# Check remote
git remote -v

# Add remote (if not done)
git remote add origin https://github.com/albin-oss/kilikood-box-office.git

# Push code
git push -u origin main

# Check Vercel status
npx vercel ls

# View deployments
npx vercel inspect
```

---

## Troubleshooting

### If Git push fails:
```bash
# Check if remote is set
git remote -v

# If not set, add it:
git remote add origin https://github.com/albin-oss/kilikood-box-office.git

# Try pushing again
git push -u origin main
```

### If Vercel can't find repository:
1. Make sure repository is public, OR
2. Connect your GitHub account in Vercel settings
3. Grant Vercel access to your repositories

---

## Your URLs

- **GitHub**: `https://github.com/albin-oss/kilikood-box-office`
- **Vercel Dashboard**: `https://vercel.com/dashboard`
- **Production URL**: (Will be shown after deployment)

---

**Ready to deploy? Follow the steps above!** 🚀

