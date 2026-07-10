# PREXEL STORE Demo Website

A premium Arabic-first RTL demo website for a digital creative studio serving gaming communities, Discord servers, streamers, FiveM servers, and content creators.

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- GSAP dependency installed for ScrollTrigger expansion
- Lucide React
- React Hook Form
- Zod validation
- Local mock data only

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality Checks

```bash
npm run lint
npm run build
```

## Main Routes

- `/` complete landing page
- `/services` services detail entry
- `/portfolio` filtered portfolio
- `/packages` package overview
- `/contact` project request form
- `/login` demo client login
- `/dashboard` demo client dashboard
- `/admin` demo admin panel

## Replace Demo Content

- Services: `data/services.ts`
- Portfolio projects: `data/projects.ts`
- Packages and prices: `data/packages.ts`
- Testimonials: `data/testimonials.ts`
- Dashboard/admin mock data: `data/dashboard.ts`
- Contact labels and dropdowns: `components/home/contact-section.tsx`
- Brand metadata: `app/layout.tsx`
- Placeholder assets: `public/images`, `public/videos`, `public/textures`

The current visuals use CSS gradients and local placeholders so the project has no broken external image URLs. Add real optimized assets under `public/images` and render them with `next/image`.

## Future Production Integrations

- Backend: add API routes or a separate service for project requests, uploads, status updates, and admin actions.
- Database: use PostgreSQL, MySQL, or a managed service to store users, orders, services, files, and messages.
- Authentication: replace the demo localStorage session with Discord OAuth or an auth provider such as Auth.js.
- Payments: integrate Stripe, PayPal, or a local payment provider and connect payment status to real invoices.
- File storage: use S3-compatible storage, Cloudflare R2, or a managed media service for client uploads and deliverables.
- Notifications: connect email, Discord webhooks, or ticketing systems for order updates.

## Notes

This is a demo concept. Forms save to `localStorage` only and no real backend, payment, authentication, or email delivery is active.
