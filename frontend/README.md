# Frontend - Next.js Application

This directory contains the frontend application built with Next.js, TypeScript, and Tailwind CSS.

## Structure

```
frontend/
├── package.json           # Dependencies and scripts
├── next.config.js         # Next.js configuration
├── tsconfig.json         # TypeScript configuration
├── tailwind.config.js    # Tailwind CSS configuration
├── postcss.config.js     # PostCSS configuration
├── .env.local            # Frontend environment variables
├── src/
│   ├── app/              # App Router (Next.js 13+)
│   │   ├── layout.tsx    # Root layout
│   │   ├── page.tsx      # Home page
│   │   ├── globals.css   # Global styles
│   │   └── (auth)/       # Authentication routes
│   ├── components/       # Reusable UI components
│   │   ├── ui/           # Basic UI components
│   │   ├── forms/        # Form components
│   │   └── layout/       # Layout components
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utilities and configurations
│   │   ├── supabase.ts   # Supabase client
│   │   ├── utils.ts      # Utility functions
│   │   └── validations.ts# Form validation schemas
│   ├── store/            # State management (Zustand/Redux)
│   └── types/            # TypeScript type definitions
├── public/               # Static assets
│   ├── images/           # Image assets
│   └── icons/            # Icon assets
└── tests/                # Frontend tests
    ├── __mocks__/        # Test mocks
    ├── components/       # Component tests
    └── utils/            # Utility tests
```

## Getting Started

```bash
cd frontend
npm install
npm run dev
```

## Environment Variables

Copy the root `.env.example` to `frontend/.env.local` and configure:

- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `NEXT_PUBLIC_API_URL`

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui (recommended)
- **State Management**: Zustand or Redux Toolkit
- **Authentication**: Supabase Auth
- **Forms**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library
