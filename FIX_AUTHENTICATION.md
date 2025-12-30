# Fix GitHub Authentication - Quick Guide

## Problem
GitHub no longer accepts passwords. You need a **Personal Access Token**.

## Solution: Create and Use Personal Access Token

### Step 1: Create Personal Access Token

1. **Go to**: https://github.com/settings/tokens
2. **Click**: "Generate new token" → "Generate new token (classic)"
3. **Fill in**:
   - **Note**: `Kilikood Box Office`
   - **Expiration**: Choose duration (90 days recommended)
   - **Scopes**: Check ✅ `repo` (Full control of private repositories)
4. **Click**: "Generate token" (scroll to bottom)
5. **⚠️ COPY THE TOKEN IMMEDIATELY** (you won't see it again!)
   - It looks like: `ghp_xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx`

### Step 2: Use Token to Push

**Option A: Update Remote URL with Token (Recommended)**

```bash
# Update remote URL with your token
git remote set-url origin https://albin-oss:YOUR_TOKEN_HERE@github.com/albin-oss/kilikood-box-office.git

# Then push
git push -u origin main
```

**Option B: Use Token When Prompted**

```bash
# Just push normally
git push -u origin main

# When prompted:
# Username: albin-oss
# Password: PASTE_YOUR_TOKEN_HERE (not your GitHub password!)
```

**Option C: Use Git Credential Helper (Saves Token)**

```bash
# Configure credential helper
git config --global credential.helper osxkeychain

# Push (will prompt once, then save)
git push -u origin main
# Username: albin-oss
# Password: PASTE_YOUR_TOKEN_HERE
```

---

## Quick Fix Commands

```bash
# 1. Check current remote
git remote -v

# 2. Update remote with token (replace YOUR_TOKEN)
git remote set-url origin https://albin-oss:YOUR_TOKEN@github.com/albin-oss/kilikood-box-office.git

# 3. Push
git push -u origin main
```

---

## Alternative: Use SSH (No Token Needed)

If you have SSH keys set up:

```bash
# Change remote to SSH
git remote set-url origin git@github.com:albin-oss/kilikood-box-office.git

# Push
git push -u origin main
```

---

## Verify It Worked

After pushing, check:
- Go to: https://github.com/albin-oss/kilikood-box-office
- You should see all your files!

---

## Security Note

⚠️ **Never commit tokens to Git!**
- Tokens are stored in your local Git config
- They're not pushed to the repository
- Keep your token secret

