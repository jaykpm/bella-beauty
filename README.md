# Bella Beauty - Next.js Project

A beautiful, modern beauty clinic website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Migration from Vite to Next.js

This project has been successfully migrated from Vite to Next.js. The migration includes:

- ✅ Next.js 14 with Pages Router
- ✅ TypeScript configuration
- ✅ Tailwind CSS setup
- ✅ Client-side components with "use client" directive
- ✅ TinaCMS context provider
- ✅ Admin page at `/admin`
- ✅ All sections and components preserved

## 📋 Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Run the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## 📁 Project Structure

```
bella-beauty/
├── pages/              # Next.js pages
│   ├── _app.tsx       # App wrapper with TinaProvider
│   ├── _document.tsx  # HTML document structure
│   ├── index.tsx      # Home page
│   └── admin.tsx      # Admin page
├── src/
│   ├── components/    # Reusable components
│   ├── contexts/      # React contexts (TinaContext)
│   ├── pages/         # Page components
│   └── sections/      # Page sections
├── styles/
│   └── globals.css    # Global styles with Tailwind
├── content/           # Content JSON files
├── tina/             # TinaCMS configuration
└── public/           # Static assets

```

## 🗑️ Files to Delete (Old Vite Setup)

The following files are from the old Vite setup and can be safely deleted:

- `index.html` - No longer needed (Next.js uses `_document.tsx`)
- `vite.config.ts` - Replaced by `next.config.js`
- `src/index.tsx` - Entry point now handled by Next.js
- `src/App.tsx` - Logic moved to `pages/index.tsx` and `pages/_app.tsx`
- `tailwind.css` - Replaced by `styles/globals.css`
- `tsconfig.app.json` - Consolidated into `tsconfig.json`
- `tsconfig.node.json` - Not needed for Next.js

**Optional cleanup command (run at your own risk):**
```bash
# Windows PowerShell
Remove-Item index.html, vite.config.ts, src\index.tsx, src\App.tsx, tailwind.css, tsconfig.app.json, tsconfig.node.json
```

## 🎨 Features

- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Content Management** - Admin panel for easy content editing
- **Performance Optimized** - Next.js automatic code splitting and optimization
- **TypeScript** - Full type safety across the project
- **Modern UI** - Clean, professional design for beauty clinics

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for environment-specific configuration:

```env
# TinaCMS (if using cloud features)
NEXT_PUBLIC_TINA_CLIENT_ID=your_client_id
TINA_TOKEN=your_token
```

### Tailwind CSS

Tailwind is configured in `tailwind.config.js` with custom colors, fonts, and animations.

### Next.js

Next.js configuration is in `next.config.js` with:
- Image domain allowlist for external images
- React strict mode enabled
- Webpack fallbacks for server-side compatibility

## 📱 Pages

- **Home (`/`)** - Main landing page with all sections
- **Admin (`/admin`)** - Content management interface

## 🎯 Next Steps

### Recommended Optimizations:

1. **Image Optimization**: Convert `<img>` tags to Next.js `<Image>` component for better performance
2. **Font Optimization**: Add custom fonts to `public/fonts/` and configure in `next/font`
3. **Static Assets**: Move images from `static/` to `public/`
4. **SEO**: Add metadata to pages using Next.js `Head` component
5. **API Routes**: Consider moving TinaCMS logic to API routes for better security

### Optional Enhancements:

- Add loading states and skeletons
- Implement error boundaries
- Add analytics (Google Analytics, etc.)
- Set up CI/CD pipeline
- Add tests (Jest, React Testing Library)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project was automatically generated and migrated to Next.js.

## 🆘 Troubleshooting

### Module not found errors
Run `npm install` to ensure all dependencies are installed.

### Styles not loading
Make sure `styles/globals.css` is imported in `pages/_app.tsx`.

### TypeScript errors
Delete `.next` folder and `node_modules`, then run `npm install` and `npm run dev`.

---

**Powered by Next.js 14, React 18, and Tailwind CSS**