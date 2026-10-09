This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

This app uses PostgreSQL in production. Create a PostgreSQL database (for example, with Neon), then import this repository into [Vercel](https://vercel.com/new).

In Vercel, add these server-side environment variables under **Project Settings → Environment Variables**:

- `DATABASE_URL`: pooled PostgreSQL connection URL for application traffic.
- `PRISMA_DATABASE_URL`: direct PostgreSQL connection URL for Prisma migrations (provided by the Vercel Prisma Postgres integration).
- `GEMINI_API_KEY`: Gemini API key (optional; chatbot requests need it).
- `ADMIN_USERNAME` and `ADMIN_PASSWORD`: set both to private, strong credentials.

The production build runs `prisma migrate deploy` before building, applying the checked-in schema migration automatically. Keep database URLs and secrets out of Git and do not prefix them with `NEXT_PUBLIC_`.

The local SQLite database is not automatically copied to PostgreSQL. The deployed database starts with the schema only; run the seed script against it only if you want demo data.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
