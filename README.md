# Spine.AI

Monorepo for Spine.AI - A comprehensive AI-powered project management and learning platform with Next.js frontend and FastAPI/Express backend, integrated with Supabase.

## 🏗️ Architecture

### Tech Stack

#### Frontend
- **Framework**: Next.js 14+ with TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui or custom component library
- **State Management**: Zustand or Redux Toolkit
- **Authentication**: Supabase Auth

#### Backend
- **Primary Option**: FastAPI (Python) - Recommended for AI/ML integration
- **Alternative Option**: Express.js (Node.js) - For JavaScript consistency
- **Database**: PostgreSQL via Supabase
- **Storage**: Supabase Storage
- **Authentication**: Supabase Auth

#### Infrastructure & Services
- **Database**: Supabase PostgreSQL
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage (file uploads, media)
- **AI Services**: OpenAI API
- **External APIs**: Google Books API
- **Deployment**: Vercel (Frontend) + Railway/Fly.io (Backend)

## 📁 Project Structure (Monorepo)

```
spine-ai/
├── README.md
├── .gitignore
├── .env.example
├── docker-compose.yml          # Local development services
├── package.json                # Root package.json for workspace
├── turbo.json                  # Turborepo configuration (optional)
│
├── frontend/                   # Next.js frontend application
│   ├── package.json
│   ├── next.config.js
│   ├── tsconfig.json
│   ├── tailwind.config.js
│   ├── src/
│   │   ├── app/                # App Router (Next.js 13+)
│   │   ├── components/         # Reusable UI components
│   │   ├── hooks/              # Custom React hooks
│   │   ├── lib/                # Utilities and configurations
│   │   ├── store/              # State management
│   │   └── types/              # TypeScript type definitions
│   ├── public/                 # Static assets
│   └── .env.local              # Frontend environment variables
│
├── backend/                    # API backend (FastAPI or Express)
│   ├── requirements.txt        # Python dependencies (FastAPI)
│   ├── package.json            # Node.js dependencies (Express)
│   ├── main.py                 # FastAPI entry point
│   ├── app.js                  # Express entry point
│   ├── src/
│   │   ├── routes/             # API route handlers
│   │   ├── models/             # Database models/schemas
│   │   ├── services/           # Business logic services
│   │   ├── middleware/         # Authentication, logging, etc.
│   │   ├── utils/              # Helper functions
│   │   └── config/             # Configuration files
│   ├── tests/                  # Backend tests
│   └── .env                    # Backend environment variables
│
├── shared/                     # Shared utilities and types
│   ├── types/                  # Shared TypeScript types
│   ├── utils/                  # Shared utility functions
│   └── constants/              # Shared constants
│
├── docs/                       # Documentation
│   ├── api/                    # API documentation
│   ├── setup/                  # Setup guides
│   └── architecture/           # Architecture decisions
│
└── scripts/                    # Development and deployment scripts
    ├── setup.sh                # Initial setup script
    ├── dev.sh                  # Development startup script
    └── deploy.sh               # Deployment script
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn/pnpm
- Python 3.9+ (if using FastAPI backend)
- Supabase account
- OpenAI API key
- Google Books API key

### 1. Clone and Install

```bash
git clone https://github.com/disruptusa/spine-ai.git
cd spine-ai

# Install dependencies
npm install  # or yarn/pnpm install
```

### 2. Environment Setup

Copy `.env.example` to `.env` and fill in your values:

```bash
cp .env.example .env
```

### 3. Supabase Setup

1. Create a new project at [supabase.com](https://supabase.com)
2. Get your project URL and anon key from Settings > API
3. Run the database migrations (instructions in `/docs/setup/supabase.md`)

### 4. Development

```bash
# Start both frontend and backend in development mode
npm run dev

# Or run individually:
npm run dev:frontend
npm run dev:backend
```

## 🔧 Configuration

### Environment Variables

See `.env.example` for all required environment variables including:

- Supabase configuration (URL, keys)
- OpenAI API key
- Google Books API key
- Database connection strings
- Authentication secrets

### Supabase Integration

The project uses Supabase for:

- **PostgreSQL Database**: User data, projects, tasks, learning content
- **Authentication**: User registration, login, session management
- **Storage**: File uploads, user avatars, project assets
- **Real-time**: Live updates for collaborative features

## 📚 Documentation

- [API Documentation](./docs/api/README.md)
- [Supabase Setup Guide](./docs/setup/supabase.md)
- [Deployment Guide](./docs/setup/deployment.md)
- [Architecture Decisions](./docs/architecture/README.md)

## 🏛️ Architectural Decisions

### Monorepo vs Multi-repo

**Current Choice: Monorepo**

**Advantages:**
- Simplified dependency management
- Easier code sharing between frontend and backend
- Single source of truth for types and interfaces
- Coordinated deployments
- Better developer experience

**When to Split into Multi-repo:**

Consider splitting when:
- Team grows beyond 10-15 developers
- Frontend and backend have completely different release cycles
- Different teams need independent ownership
- Codebase becomes unwieldy (>100k LOC)

### Splitting Strategy (Future)

If needed, split into:

1. **spine-ai-frontend** - Next.js application
2. **spine-ai-backend** - API backend
3. **spine-ai-shared** - Shared types and utilities (npm package)

### Backend Framework Choice

**FastAPI (Recommended)**
- Superior for AI/ML integration
- Excellent async performance
- Automatic API documentation
- Strong typing with Pydantic
- Better for data processing tasks

**Express.js (Alternative)**
- JavaScript consistency across stack
- Larger ecosystem
- Easier for frontend developers to contribute
- Faster initial development

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit your changes: `git commit -am 'Add new feature'`
4. Push to the branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📄 License

MIT License - see [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Supabase Documentation](https://supabase.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [FastAPI Documentation](https://fastapi.tiangolo.com/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
