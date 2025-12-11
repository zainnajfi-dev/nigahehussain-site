# Nigah e Hussain - Premium Construction & Renovation Website

A production-ready, fully responsive website for Nigah e Hussain, built with Next.js 16, React 19, Tailwind CSS v4, and Framer Motion.

## Features

✅ **Responsive Design** - Mobile-first approach with desktop optimization
✅ **Hero Slideshow** - Auto-rotating slides with controls and keyboard navigation
✅ **Services Grid** - Interactive service cards with expandable process details
✅ **Portfolio Carousel** - Featured projects with filter functionality and before/after slider
✅ **Animated Stats** - Company metrics with counting animations
✅ **Testimonials** - Auto-rotating client reviews with ratings
✅ **Contact Section** - Dual office locations with embedded maps and inquiry form
✅ **SEO Optimized** - Sitemap, robots.txt, meta tags, and JSON-LD schema
✅ **Accessibility** - WCAG AA compliant with ARIA labels and keyboard navigation
✅ **Performance** - Optimized images, lazy loading, and smooth animations

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Library**: React 19
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (body), Playfair Display (headings)

## Quick Start

### Installation

\`\`\`bash
# Using shadcn CLI (recommended)
npx shadcn@latest init

# Or clone and install
npm install
npm run dev
\`\`\`

Open [http://localhost:3000](http://localhost:3000) to view the website.

## Customization Guide

### 1. **Replace Brand Colors**

Edit `app/globals.css` to update the color palette:

\`\`\`css
:root {
  --teal-600: #1e5a5a;      /* Primary brand color */
  --teal-700: #133f3f;      /* Darker teal */
  --cyan-200: #a8d4d4;      /* Accent cyan */
  --gold: #d4af37;          /* Gold accents */
  --text-default: #153c3c;  /* Text color */
}
\`\`\`

### 2. **Update Company Information**

- **Header/Logo**: Edit `components/logo.tsx`
- **Contact Info**: Update phone and email in `components/header.tsx`, `components/contact.tsx`, `components/footer.tsx`
- **Office Locations**: Modify office data in `components/contact.tsx`
- **Company Name**: Search and replace "Nigah e Hussain" throughout the codebase

### 3. **Add Real Images**

Replace placeholder images in:

- `components/hero.tsx` - Hero slideshow images
- `components/portfolio.tsx` - Portfolio project images
- `components/reviews.tsx` - Client testimonial photos
- `components/company-profile.tsx` - Use your own icons

### 4. **Update Content**

- **Hero Text**: Edit slide content in `components/hero.tsx`
- **Services**: Modify service cards in `components/services.tsx`
- **Portfolio Projects**: Update project data in `components/portfolio.tsx`
- **Testimonials**: Add client reviews in `components/reviews.tsx`
- **Company Profile**: Update company description in `components/company-profile.tsx`

### 5. **Email Integration (Contact Form)**

The contact form currently logs to console. To send emails:

**Option A: SendGrid**

\`\`\`bash
npm install @sendgrid/mail
\`\`\`

Update `app/api/contact/route.ts`:

\`\`\`typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  // ... validation code ...
  
  await sgMail.send({
    to: 'info@nigahhussain.com',
    from: process.env.SENDGRID_FROM_EMAIL!,
    subject: `New Project Inquiry from ${name}`,
    html: `<h2>${name}</h2><p>${message}</p>...`
  })
}
\`\`\`

**Option B: Resend**

\`\`\`bash
npm install resend
\`\`\`

Similar setup with Resend API.

### 6. **Add CMS Integration (Optional)**

For dynamic content management, integrate with:

- **Sanity.io** - Headless CMS
- **Contentful** - Content management
- **Strapi** - Self-hosted CMS

## Deployment

### Deploy to Vercel (Recommended)

\`\`\`bash
# Push to GitHub first
git push

# Deploy from Vercel dashboard
# or use Vercel CLI
npm install -g vercel
vercel
\`\`\`

### Environment Variables

Create a `.env.local` file:

\`\`\`
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
SENDGRID_API_KEY=your_api_key
SENDGRID_FROM_EMAIL=noreply@nigahhussain.com
\`\`\`

## Project Structure

\`\`\`
app/
├── api/
│   └── contact/          # Contact form API route
├── layout.tsx            # Root layout with fonts and metadata
├── page.tsx              # Home page
└── globals.css           # Global styles and CSS variables

components/
├── header.tsx            # Fixed header with navigation
├── hero.tsx              # Hero slideshow section
├── services.tsx          # Services grid
├── portfolio.tsx         # Portfolio carousel with lightbox
├── company-profile.tsx   # Company info with animated stats
├── reviews.tsx           # Testimonials carousel
├── contact.tsx           # Contact form and office locations
├── footer.tsx            # Footer with links
├── logo.tsx              # Logo component
└── breadcrumb.tsx        # Breadcrumb navigation

public/
├── sitemap.xml           # SEO sitemap
├── robots.txt            # Search engine directives
└── nigah-profile.pdf     # Company profile PDF
\`\`\`

## Performance Optimization

- ✅ Image optimization with `next/image`
- ✅ Font optimization with `next/font`
- ✅ Route preloading
- ✅ Component lazy loading with dynamic imports
- ✅ CSS optimization with Tailwind v4

## Accessibility Features

- ✅ Semantic HTML (main, header, nav, section)
- ✅ ARIA labels and roles
- ✅ Keyboard navigation support
- ✅ Focus indicators
- ✅ Color contrast ratio ≥ 4.5:1
- ✅ Screen reader announcements

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Troubleshooting

### Images not loading
- Check image paths are correct
- Ensure images are in `public/` directory
- Use absolute paths, not relative

### Contact form not working
- Check API route at `/app/api/contact/route.ts`
- Verify email service credentials
- Check browser console for errors

### Animations not smooth
- Disable animations in browser DevTools performance tab
- Check GPU acceleration is enabled
- Update Framer Motion to latest version

## Support & Maintenance

- Regular content updates recommended
- Monitor analytics for user behavior
- Update dependencies monthly
- Test form submissions regularly

## License

This project is proprietary to Nigah e Hussain. All rights reserved.

---

**Last Updated**: January 2025
**Version**: 1.0.0
