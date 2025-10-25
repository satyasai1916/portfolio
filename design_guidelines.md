# Design Guidelines: Developer Portfolio Website

## Design Approach

**Selected Approach:** Reference-Based (Modern Developer Portfolio)
Drawing inspiration from Linear, Vercel, and professional developer portfolios that balance minimalism with impact. The design prioritizes clarity, professional polish, and strategic visual elements.

**Design Principles:**
- Clarity over decoration
- Purposeful whitespace as a design element
- Typography-driven hierarchy
- Subtle depth through shadows and borders
- Professional credibility through restraint

---

## Typography System

**Font Families:**
- Primary: Inter (via Google Fonts) - clean, professional, excellent readability
- Code/Technical: JetBrains Mono - for tech stack tags and code-related content

**Type Scale:**
- Hero Name: text-5xl md:text-6xl lg:text-7xl, font-bold
- Hero Title: text-xl md:text-2xl lg:text-3xl, font-medium
- Section Headings: text-3xl md:text-4xl, font-bold
- Subsection Headings: text-2xl md:text-3xl, font-semibold
- Project Titles: text-xl md:text-2xl, font-semibold
- Body Text: text-base md:text-lg, font-normal
- Small Text (dates, labels): text-sm md:text-base, font-medium
- Tech Tags: text-xs md:text-sm, font-mono

**Line Height:** Use leading-relaxed for body text, leading-tight for headings

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-6 to p-8
- Section vertical spacing: py-16 md:py-24 lg:py-32
- Element gaps: gap-4, gap-6, gap-8
- Container max-width: max-w-6xl with px-6 md:px-8

**Grid System:**
- Projects: grid-cols-1 md:grid-cols-2 gap-8
- Skills: grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4
- Mobile-first responsive breakpoints

---

## Component Library

### Hero Section (Home)
- Full viewport height (min-h-screen) with centered content
- Profile picture: Circular image (w-32 h-32 md:w-40 md:h-40) with subtle ring border, positioned above name
- Name, title, and 2-3 line introduction stacked vertically
- Two CTA buttons side-by-side: "View Projects" (primary) and "Download Resume" (secondary)
- Professional portrait image should be high-quality, cropped to headshot

### Projects Section
- Grid of project cards (2 columns on desktop, stack on mobile)
- Each card: Elevated with shadow (shadow-lg), rounded corners (rounded-xl), padding p-6
- Card structure: Project title → description (2-3 lines) → tech stack tags (horizontal flex wrap) → link buttons
- Tech stack: Small pills/badges with rounded-full, px-3 py-1, monospace font
- Links: GitHub icon + Demo icon as clickable elements with hover states

### Skills Section
- Category-based grouping (Frontend, Backend, Tools, etc.)
- Each category: Heading + grid of skill items
- Skill items: Simple cards or badges with icon (optional) + skill name
- Compact spacing, clean presentation without over-decoration

### Experience Section
- Timeline layout (vertical on mobile, can be enhanced later)
- Each entry: Company name (bold) + Role (medium weight) + Duration (lighter)
- 1-2 bullet points per role, concise and impactful
- Subtle left border or timeline indicator for visual hierarchy

### Contact Section
- Centered layout with social links displayed prominently
- Icon + Label for Email, LinkedIn, GitHub (horizontal arrangement on desktop, stack on mobile)
- "Contact Me" primary button below social links
- Clean, uncluttered presentation

### Navigation
- Fixed top navigation bar with logo/name on left, nav links on right
- Smooth scroll to sections on click
- Mobile: Hamburger menu icon revealing overlay or slide-in menu
- Navigation links: Home, Projects, Skills, Experience, Contact

---

## Visual Elements

### Shadows & Depth
- Cards: shadow-md for resting state, shadow-lg on hover
- Subtle elevation creates hierarchy without heavy borders

### Borders & Shapes
- Rounded corners: rounded-lg for cards, rounded-full for buttons and badges
- Minimal use of explicit borders; prefer shadows for separation

### Buttons
- Primary: Solid background, px-6 py-3, rounded-lg, font-medium
- Secondary: Border style, same padding/rounding
- Icon buttons: Circular or square with padding, subtle hover lift
- All buttons have smooth transitions (transition-all duration-200)

### Spacing & Rhythm
- Consistent vertical rhythm using py-16/py-24/py-32 for section spacing
- Generous whitespace between elements for breathing room
- Avoid cramped layouts; let content breathe

---

## Images

**Profile Picture:**
- Location: Hero section, centered above name
- Style: Circular crop (rounded-full), professional headshot
- Size: 128px - 160px diameter (responsive)
- Treatment: Subtle shadow or ring border for polish

**Project Screenshots (Future Enhancement):**
- Not implementing in MVP, but structure cards to accommodate images at top
- Reserve space in card layout for future project thumbnails

**Hero Background:** 
- This portfolio does NOT use a large hero background image
- Clean, solid background with focus on typography and profile picture

---

## Animations (Minimal)

- Smooth scroll behavior for navigation
- Button hover: subtle scale(1.02) and shadow increase
- Card hover: shadow elevation change
- Link hover: underline decoration or opacity change
- Page transitions: None for MVP (keep it simple)

---

## Responsive Behavior

**Mobile (< 768px):**
- Single column layouts throughout
- Navigation collapses to hamburger menu
- Reduced font sizes (use responsive classes)
- Stacked buttons vertically
- Full-width cards and sections

**Tablet (768px - 1024px):**
- 2-column project grid
- 3-column skills grid
- Horizontal button groups

**Desktop (> 1024px):**
- Maximum content width with centered container
- Full multi-column layouts
- Enhanced spacing and larger typography
- Side-by-side content where appropriate

---

## Accessibility

- High contrast text/background combinations
- Focus states on all interactive elements (ring-2 ring-offset-2)
- Semantic HTML structure (nav, main, section, article)
- Alt text for profile image
- Keyboard navigation support
- Minimum touch target size of 44px for mobile

---

This design creates a polished, professional developer portfolio that showcases work effectively while maintaining clean aesthetics and excellent user experience across all devices.