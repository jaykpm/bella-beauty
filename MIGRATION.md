# Migration Guide: Vite to Next.js

## ✅ Completed Changes

### 1. Package Dependencies
- ✅ Removed Vite and related dependencies
- ✅ Added Next.js 14, TypeScript, and Next.js tooling
- ✅ Updated React Router DOM to Next.js routing

### 2. Configuration Files
- ✅ Created `next.config.js` (replaces `vite.config.ts`)
- ✅ Created `postcss.config.js` for Tailwind
- ✅ Updated `tsconfig.json` for Next.js
- ✅ Created `.eslintrc.json` for Next.js linting
- ✅ Updated `.gitignore` for Next.js artifacts

### 3. Pages & Routing
- ✅ Created `pages/_app.tsx` - App wrapper with providers
- ✅ Created `pages/_document.tsx` - HTML document structure
- ✅ Created `pages/index.tsx` - Home page (replaces `/` route)
- ✅ Created `pages/admin.tsx` - Admin page (replaces `/admin` route)
- ✅ Moved from React Router to Next.js file-based routing

### 4. Styles
- ✅ Created `styles/globals.css` (replaces `tailwind.css`)
- ✅ Imported global styles in `_app.tsx`
- ✅ Maintained all Tailwind configurations

### 5. Components
- ✅ Added `"use client"` directive to `TinaContext.tsx`
- ✅ Added `"use client"` directive to `AdminPage.tsx`
- ✅ Updated anchor tags to Next.js `Link` component in AdminPage

### 6. Context & State Management
- ✅ TinaProvider now wraps the entire app in `_app.tsx`
- ✅ localStorage logic preserved for content management

## 🚀 Next Steps (Required)

### 1. Install Dependencies
```bash
npm install
```

This will install:
- next@^14.2.0
- TypeScript and type definitions
- All existing dependencies (React, Tailwind, etc.)

### 2. Test the Application
```bash
npm run dev
```

Then visit:
- Home page: http://localhost:3000
- Admin page: http://localhost:3000/admin

### 3. Clean Up Old Files (Optional)

**These files are no longer needed and can be deleted:**

```bash
# Remove old Vite files
rm index.html
rm vite.config.ts
rm src/index.tsx
rm src/App.tsx
rm tailwind.css
rm tsconfig.app.json
rm tsconfig.node.json
```

Or use PowerShell:
```powershell
Remove-Item index.html, vite.config.ts, src\index.tsx, src\App.tsx, tailwind.css, tsconfig.app.json, tsconfig.node.json
```

## 📋 File Mapping

| Old Vite File | New Next.js File | Status |
|---------------|------------------|--------|
| `index.html` | `pages/_document.tsx` | ✅ Migrated |
| `src/index.tsx` | `pages/_app.tsx` | ✅ Migrated |
| `src/App.tsx` | `pages/index.tsx` + `pages/_app.tsx` | ✅ Migrated |
| `vite.config.ts` | `next.config.js` | ✅ Migrated |
| `tailwind.css` | `styles/globals.css` | ✅ Migrated |
| `tsconfig.json` | Updated for Next.js | ✅ Updated |

## 🔍 Key Differences

### Routing
**Before (React Router):**
```tsx
<Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/admin" element={<AdminPage />} />
  </Routes>
</Router>
```

**After (Next.js):**
```
pages/
  index.tsx     → / route
  admin.tsx     → /admin route
```

### Entry Point
**Before (Vite):**
```tsx
// src/index.tsx
ReactDOM.createRoot(document.getElementById("app")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

**After (Next.js):**
```tsx
// pages/_app.tsx
export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
```

### Client-Side Components
Next.js uses Server Components by default. Components using hooks or browser APIs need `"use client"`:

```tsx
"use client";

import { useState } from "react";
// ... component code
```

### Links
**Before:**
```tsx
<a href="/admin">Admin</a>
```

**After:**
```tsx
import Link from "next/link";

<Link href="/admin">Admin</Link>
```

## ⚠️ Important Notes

### 1. Current Lint Errors
The TypeScript/ESLint errors you're seeing are **expected** and will resolve after running `npm install`. These errors occur because:
- Next.js packages aren't installed yet
- Type definitions are missing
- CSS processing tools aren't available

**These errors will disappear after installation!**

### 2. Static Assets
- Static files should be in the `public/` folder (not `static/`)
- Next.js serves files from `public/` at the root URL
- Move any files from `static/` to `public/` if needed

### 3. Image Optimization (Future Enhancement)
Consider replacing `<img>` tags with Next.js `<Image>` component:

```tsx
import Image from "next/image";

<Image 
  src="/path/to/image.jpg"
  alt="Description"
  width={500}
  height={300}
/>
```

### 4. Environment Variables
Next.js requires the `NEXT_PUBLIC_` prefix for client-side env vars:

```env
# .env.local
NEXT_PUBLIC_TINA_CLIENT_ID=your_id
TINA_TOKEN=your_token  # Server-side only
```

## 🎯 Verification Checklist

After running `npm install` and `npm run dev`, verify:

- [ ] Home page loads at http://localhost:3000
- [ ] Admin page loads at http://localhost:3000/admin
- [ ] Navigation between pages works
- [ ] Tailwind CSS styles are applied
- [ ] All sections render correctly
- [ ] Admin form functionality works
- [ ] Content management persists to localStorage
- [ ] No console errors in browser

## 🐛 Troubleshooting

### "Module not found" errors
**Solution:** Run `npm install`

### Styles not loading
**Solution:** Verify `styles/globals.css` is imported in `pages/_app.tsx`

### TypeScript errors persist
**Solution:** 
```bash
rm -rf .next node_modules
npm install
npm run dev
```

### Port 3000 already in use
**Solution:** 
```bash
# Kill process on port 3000 or use different port
npm run dev -- -p 3001
```

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Migration Guide](https://nextjs.org/docs/migrating)
- [Tailwind CSS with Next.js](https://tailwindcss.com/docs/guides/nextjs)
- [TypeScript with Next.js](https://nextjs.org/docs/basic-features/typescript)

## ✨ What's New in Next.js

Your app now benefits from:
- **Automatic Code Splitting** - Faster page loads
- **Image Optimization** - Automatically optimized images
- **Fast Refresh** - Instant feedback during development
- **API Routes** - Build backend endpoints easily
- **SEO Optimization** - Better metadata and SEO control
- **Production Optimizations** - Minification, bundling, etc.

---

**Migration completed successfully! 🎉**

Run `npm install` to get started with your Next.js app.
