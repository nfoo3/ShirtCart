# ThreadCraft E-Commerce Design Guidelines

## Design Approach: Reference-Based (E-commerce)
Drawing inspiration from modern e-commerce leaders like Shopify, Etsy, and premium fashion retailers, with emphasis on clean product presentation and frictionless shopping experience.

## Typography System
- **Primary Font**: Inter or similar modern sans-serif via Google Fonts
- **Headings**: Font weight 700, sizes: h1 (3rem/48px), h2 (2rem/32px), h3 (1.5rem/24px)
- **Body Text**: Font weight 400, size 1rem/16px, line-height 1.6
- **Product Names**: Font weight 600, size 1.25rem/20px
- **Pricing**: Font weight 700, size 1.5rem/24px for emphasis
- **Cart Counter Badge**: Font weight 700, size 0.875rem/14px

## Layout & Spacing System
**Tailwind Units**: Consistently use 4, 6, 8, 12, and 16 for spacing
- Page padding: `px-4 md:px-8 lg:px-16`
- Section spacing: `py-12 md:py-16`
- Card padding: `p-6`
- Grid gaps: `gap-6 md:gap-8`
- Container max-width: `max-w-7xl mx-auto`

## Component Library

### Header/Navigation
- Full-width sticky header with `shadow-md`
- Logo left-aligned, navigation center, cart icon right
- Navigation links with `px-6` spacing, underline on hover
- Cart badge: Circular, absolute positioned top-right of cart icon

### Product Grid
- Responsive grid: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- Product cards: `rounded-lg shadow-lg` with `hover:shadow-xl hover:-translate-y-1 transition-all duration-300`
- Card structure: Image (aspect-ratio 4:3), content padding `p-6`
- Size/Color selectors: Inline flex with `gap-2`, buttons with `rounded-full px-4 py-2 border-2`
- Selected state: Solid background, unselected: Border only

### Shopping Cart Page
- Two-column layout on desktop: `lg:grid-cols-3`
- Cart items: Left column (col-span-2), summary right (col-span-1 sticky top-24)
- Item cards: Flex layout, image left (w-24 h-24), details center, controls right
- Quantity controls: Circular buttons with `w-8 h-8`, center-aligned text
- Price summary: Right-aligned text with dividers, total in larger bold text

### Checkout Flow
- Single column centered layout: `max-w-2xl mx-auto`
- Form groups: `space-y-4`
- Input fields: `w-full px-4 py-3 rounded-lg border-2 focus:border-blue-500`
- Order summary sidebar (desktop): Sticky panel with `bg-gray-50 p-6 rounded-lg`
- Payment section: Card-style visual with icon placeholders for security

### Confirmation Page
- Success icon: Large centered checkmark (text-6xl)
- Order number: Monospace font, large size (text-2xl), highlighted background
- Order details: Clean table layout with `divide-y` borders

## Images Strategy
**Product Images**: 6 high-quality t-shirt product photos showing different angles/colors
- Use Unsplash with search terms: "t-shirt mockup", "blank tshirt", "folded shirt"
- Consistent aspect ratio 4:3 or 1:1
- White or neutral backgrounds for product clarity
- Placement: Featured in product cards, cart thumbnails, checkout summary

**No Hero Section**: Jump directly into product grid - this is a conversion-focused store

## Interaction Patterns
- **Add to Cart**: Button expands briefly with checkmark animation on click
- **Cart Counter**: Bounce animation when number updates
- **Product Cards**: Subtle lift on hover with shadow increase
- **Form Validation**: Inline error messages in red below fields
- **Loading States**: Disable buttons with opacity-50 during actions
- **Remove Item**: Fade-out animation before removal

## Responsive Behavior
- **Mobile (< 768px)**: Single column, sticky bottom cart button, simplified header
- **Tablet (768-1024px)**: 2-column product grid, collapsible cart summary
- **Desktop (> 1024px)**: 3-column product grid, persistent cart summary sidebar

## Accessibility
- All interactive elements: `focus:ring-2 focus:ring-offset-2`
- Color contrast minimum WCAG AA compliance
- Form labels properly associated with inputs
- Cart counter uses `aria-label="Items in cart"`
- Semantic HTML: `<main>`, `<nav>`, `<article>` for products