# ThreadCraft E-Commerce Design Guidelines
**Inspired by MVMTH - Premium Fashion E-commerce**

## Design Approach
Drawing inspiration from premium fashion retailers like MVMTH, focusing on lifestyle imagery, elegant typography, and a sophisticated shopping experience that emphasizes visual storytelling over standard product grids.

## Typography System
- **Primary Font**: Playfair Display (serif) for headings - elegant, premium feel
- **Secondary Font**: Inter (sans-serif) for body text - clean, readable
- **Headings**: 
  - h1: 3.5rem (56px), font-weight 700, Playfair Display
  - h2: 2.5rem (40px), font-weight 700, Playfair Display
  - h3: 1.75rem (28px), font-weight 600, Playfair Display
- **Body Text**: 1rem (16px), font-weight 400, Inter
- **Buttons**: 0.875rem (14px), font-weight 600, Inter, uppercase tracking

## Color Palette
- **Primary Brand**: Deep indigo (HSL: 235 70% 35%) for CTAs and accents
- **Background**: Off-white (#FAFAFA) for main background
- **Text**: Near-black (#1A1A1A) for primary text
- **Secondary Text**: Medium gray (#666666)
- **White**: Pure white (#FFFFFF) for cards and contrast
- **Borders**: Light gray (#E5E5E5) for subtle divisions

## Layout & Spacing
- **Container**: max-w-7xl, generous padding (px-6 md:px-12 lg:px-16)
- **Hero Section**: Full-width with overlay text, minimum height 500px
- **Section Spacing**: py-16 md:py-24 between major sections
- **Card Spacing**: gap-6 md:gap-8 for grids
- **Inner Padding**: p-8 md:p-12 for cards with text content

## Component Library

### Header
- Minimal, centered logo design
- Sticky navigation with white background
- Links: MENS, WOMENS (uppercase, 15px font - 25% larger than standard)
- Right-aligned icons: Search, Account, Cart (25px size - 25% larger than standard)
- Height: 72px, subtle shadow on scroll

### Hero Section
- Full-width banner with lifestyle photography
- Overlay gradient for text readability
- Large headline with promotional text
- Dual CTA buttons (primary + secondary)
- Minimum height: 60vh on desktop, 50vh on mobile

### Product Cards
- Large aspect ratio images (3:4 or lifestyle shots)
- Hover effect: subtle zoom on image
- Minimal text overlay on images with product name
- Price prominent but elegant
- "SHOP NOW" button appears on hover
- White background cards with subtle shadow

### Category Sections
- Large lifestyle images with category overlay
- Text overlay: Category name + "SHOP ALL" link
- Grid layout: 2 columns on mobile, 3-4 on desktop
- Images should inspire lifestyle/aspiration

### Cart & Checkout
- Clean, spacious layout
- Thumbnail images (80px x 80px)
- Large, readable pricing
- Sticky order summary on desktop
- Progress indicator for checkout steps

## Images Strategy
**Hero/Lifestyle Images**: 
- Aspirational lifestyle photography
- Models wearing products in authentic settings
- Professional photography with good lighting
- Aspect ratio: 16:9 for hero, 3:4 for product cards
- Focus on emotion and lifestyle over product details

**Product Images**:
- Clean, minimal backgrounds
- Consistent lighting and styling
- Show products in use when possible
- Multiple angles available on product pages

## Interaction Patterns
- **Buttons**: Uppercase text, subtle hover scale (1.02), background color darkens
- **Cards**: Image zoom on hover, shadow deepens
- **Links**: Underline on hover, smooth transition
- **Hero CTA**: Prominent primary button (deep indigo), secondary button (outline)
- **Smooth Scrolling**: For navigation links
- **Add to Cart**: Success feedback with brief animation

## Responsive Behavior
- **Mobile**: Single column, stacked layout, full-width hero
- **Tablet**: 2-column grids, adjusted hero text size
- **Desktop**: 3-4 column grids, side-by-side hero elements, sticky elements

## Accessibility
- WCAG AA contrast ratios
- Focus indicators on all interactive elements
- Semantic HTML structure
- Alt text for all images
- Keyboard navigation support
