# TutorsHub Website

Marketing / download landing page for the TutorsHub mobile app. Next.js 16 (App Router), fully static.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Editing

| What | Where |
|---|---|
| Store links, contact email, site URL | `lib/site.ts` (or env `NEXT_PUBLIC_PLAY_STORE_URL`, `NEXT_PUBLIC_APP_STORE_URL`) |
| Page copy, features, FAQ | `app/page.tsx` |
| Styles / brand tokens (mirrors `TutorsHub/src/theme/tokens.ts`) | `app/globals.css` |
| App screenshots | `public/screens/*.png` |

Leave `appStore` as `null` to show a "Coming soon to the App Store" badge.

## Screenshots

`public/screens/` holds real captures of the app (Expo web build, 390×844 @2x):
`welcome`, `role`, `home`, `class`, `practice`, `quiz`, `tutors`. To refresh them, run the
app (`TutorsHub-backend: npm run dev:mem`, `TutorsHub: npx expo start --web`) and re-capture at
the same size so they drop straight into the phone frames.

## Deploy

Any Next.js host works (Vercel, Netlify, or `next build` + `next start` on a server). The page
is prerendered as static HTML.
