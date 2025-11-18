# ThreadCraft E-Commerce Platform

## Overview

ThreadCraft is a premium custom t-shirt e-commerce web application that provides an elegant shopping experience. The platform features a product catalog, shopping cart system with localStorage persistence, and a complete checkout flow. Built with React and TypeScript on the frontend, with an Express backend, the application emphasizes sophisticated visual design inspired by premium fashion retailers.

## Recent Changes

**November 18, 2025**
- Added gender filtering system (mens/womens/unisex) with active state indicators in header navigation
- Implemented featured collection section with product imagery showcasing color variety
- Added lifestyle gallery section below product grid with masonry-style image layout (5 curated lifestyle images)
- Dynamic page titles based on active gender filter ("Men's Collection", "Women's Collection", "Premium Collection")
- All products now have gender categorization in schema with unisex items appearing in both filtered views

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework & Build System**
- React 18 with TypeScript for type-safe component development
- Vite as the build tool and development server for fast HMR and optimized production builds
- Wouter for lightweight client-side routing

**UI Component Library**
- Shadcn/ui components built on Radix UI primitives for accessible, composable UI elements
- Tailwind CSS for utility-first styling with custom design tokens
- Typography system using Playfair Display (serif) for headings and Inter (sans-serif) for body text

**State Management**
- TanStack Query (React Query) for server state management and caching
- LocalStorage for cart persistence across sessions
- Custom event system (`cart-updated` events) for cross-component cart synchronization

**Design System**
- Custom color palette with deep burgundy primary color (#8B1E1E)
- Off-white background (#FAFAFA) with near-black text (#1A1A1A)
- Responsive grid layouts with breakpoints for mobile, tablet, and desktop
- Premium aesthetic focused on lifestyle imagery and elegant spacing

### Backend Architecture

**Server Framework**
- Express.js with TypeScript for type-safe API development
- ESM module system throughout the codebase
- HTTP server creation via Node's native `http` module

**Data Storage Strategy**
- In-memory storage implementation (`MemStorage`) for development
- Interface-based storage abstraction (`IStorage`) allowing easy migration to database solutions
- Drizzle ORM configured for PostgreSQL (via Neon serverless driver) when database is provisioned
- Schema defined in shared directory for type consistency between frontend and backend

**API Design**
- RESTful API structure with `/api` prefix for all routes
- JSON request/response format with automatic parsing
- Request logging middleware tracking method, path, status, duration, and response preview

### Application Flow

**Shopping Experience**
1. Home page displays hero section with promotional content, featured collection showcase, and product grid
2. Featured section highlights product variety with high-quality imagery and color swatches
3. Gender filtering (MENS/WOMENS) allows users to browse category-specific collections
4. Product cards show images, pricing, and size/color selection with real-time color-switching preview
5. Add to cart functionality with immediate visual feedback via toast notifications
6. Cart page with quantity controls, item removal, and automatic tax calculation (8.5%)
7. Checkout form with validation using React Hook Form and Zod schemas
8. Order confirmation page with generated order number stored in localStorage

**Cart Persistence**
- Cart data stored in localStorage under `threadcraft_cart` key
- Cart items include product ID, name, price, image, size, color, and quantity
- Duplicate items (same product, size, color) increment quantity rather than creating separate entries
- Event-driven updates ensure UI consistency across all components

### External Dependencies

**Core Libraries**
- `@neondatabase/serverless`: PostgreSQL database driver for serverless environments
- `drizzle-orm` & `drizzle-kit`: Type-safe ORM for database operations and migrations
- `express`: Web server framework
- `react` & `react-dom`: UI library

**UI Component Framework**
- `@radix-ui/*`: Primitive components for accessibility (accordion, dialog, dropdown, select, etc.)
- `tailwindcss`: Utility-first CSS framework
- `class-variance-authority`: Type-safe component variant management
- `lucide-react`: Icon library

**Form Management**
- `react-hook-form`: Performance-focused form handling
- `@hookform/resolvers`: Validation resolver integration
- `zod` & `drizzle-zod`: Schema validation and type inference

**Data Fetching**
- `@tanstack/react-query`: Server state management with caching and synchronization

**Development Tools**
- `vite`: Build tool and dev server
- `tsx`: TypeScript execution for Node.js
- `esbuild`: Fast bundling for production backend
- `@replit/vite-plugin-*`: Replit-specific development enhancements

**Session Management**
- `connect-pg-simple`: PostgreSQL session store for Express (configured but not actively used)

**Additional Utilities**
- `date-fns`: Date manipulation and formatting
- `clsx` & `tailwind-merge`: Conditional className utilities
- `cmdk`: Command palette component
- `embla-carousel-react`: Carousel/slider functionality
- `nanoid`: Unique ID generation