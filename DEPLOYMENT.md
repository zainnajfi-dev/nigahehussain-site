# Nigah e Hussain - Deployment Checklist

## Pre-Deployment Setup

### 1. Environment Configuration

Create `.env.local` in the project root:

\`\`\`env
# Email Service (Choose one)
SENDGRID_API_KEY=your_sendgrid_api_key
SENDGRID_FROM_EMAIL=noreply@nigahhussain.com

# Or use Resend
RESEND_API_KEY=your_resend_api_key

# Development only (for testing)
NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL=http://localhost:3000
\`\`\`

### 2. Content Verification

- [ ] Replace all placeholder text with real content
- [ ] Update company contact information (phone, email, address)
- [ ] Replace hero slideshow images
- [ ] Upload portfolio project images
- [ ] Add client testimonial photos
- [ ] Replace company profile PDF
- [ ] Update office location maps (replace embed URLs)
- [ ] Configure social media links (WhatsApp, Instagram, Facebook)
- [ ] Update website domain in metadata

### 3. SEO Optimization

- [ ] Update `metadata` in `app/layout.tsx` with company description
- [ ] Add Google Analytics script (if needed)
- [ ] Verify `sitemap.xml` is accessible
- [ ] Check `robots.txt` for proper configuration
- [ ] Test Open Graph meta tags for social sharing
- [ ] Configure domain in Vercel project settings

### 4. Email Configuration

**Using SendGrid:**

1. Create SendGrid account at https://sendgrid.com
2. Generate API key
3. Set sender email verification
4. Add to environment variables
5. Test contact form

**Using Resend (Recommended for Vercel):**

1. Create Resend account at https://resend.com
2. Generate API key
3. Add to environment variables
4. Update `app/api/contact/route.ts`:

\`\`\`typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In POST handler:
await resend.emails.send({
  from: 'onboarding@resend.dev', // Change to your domain
  to: 'info@nigahhussain.com',
  subject: \`New Inquiry from \${name}\`,
  html: \`...\`
})
\`\`\`

### 5. Performance Testing

Run Lighthouse audit:

\`\`\`bash
# Build the project
npm run build

# Test locally
npm run start

# Open DevTools > Lighthouse and run audit
\`\`\`

Target scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 90+
- SEO: 100

## Deployment Steps

### Deploy to Vercel (Recommended)

#### Option 1: Using GitHub

1. Push code to GitHub repository
2. Go to https://vercel.com
3. Click "New Project"
4. Connect GitHub account
5. Select repository
6. Configure settings:
   - Framework: Next.js
   - Root directory: ./
   - Environment variables: Add all from `.env.local`
7. Click "Deploy"

#### Option 2: Using Vercel CLI

\`\`\`bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Add environment variables in the prompt or dashboard
\`\`\`

#### Option 3: Using Netlify

1. Create `netlify.toml`:

\`\`\`toml
[build]
  command = "npm run build"
  functions = "netlify/functions"
  publish = ".next"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
\`\`\`

2. Connect GitHub to Netlify
3. Add environment variables in Netlify dashboard
4. Deploy

### Post-Deployment Verification

- [ ] Website loads correctly
- [ ] All images display properly
- [ ] Contact form submits successfully
- [ ] Email notifications are received
- [ ] Maps are embedded correctly
- [ ] Navigation scrolls work
- [ ] Mobile responsive layout works
- [ ] Social media links open correctly
- [ ] Phone links work (tel:)
- [ ] Email links work (mailto:)
- [ ] PDF download works
- [ ] Forms validate input correctly
- [ ] Animations perform smoothly
- [ ] No console errors
- [ ] Sitemap is accessible
- [ ] Robots.txt is accessible

## Domain Configuration

### Connect Custom Domain to Vercel

1. Go to Vercel project settings
2. Navigate to "Domains"
3. Add your domain (e.g., nigahhussain.com)
4. Follow DNS configuration:
   - For root domain: Add A record pointing to Vercel IP
   - For www: Add CNAME record pointing to Vercel
5. Verify domain connection

### Update DNS Records

Example for common registrars:

**GoDaddy/NameCheap:**
- A record: @ → Vercel IP
- CNAME record: www → cname.vercel.domains

**Cloudflare:**
- Proxy through Cloudflare for additional security
- Enable caching for images

## Security Checklist

- [ ] Enable HTTPS (automatic with Vercel)
- [ ] Set Content Security Policy headers
- [ ] Add security headers in `next.config.mjs`
- [ ] Validate all form inputs server-side
- [ ] Sanitize user input
- [ ] Use environment variables for sensitive data
- [ ] Enable CORS only for trusted origins
- [ ] Set rate limiting on contact form

### Add Security Headers

Create `next.config.mjs`:

\`\`\`javascript
export default {
  headers: async () => [
    {
      source: '/:path*',
      headers: [
        {
          key: 'X-Content-Type-Options',
          value: 'nosniff'
        },
        {
          key: 'X-Frame-Options',
          value: 'DENY'
        },
        {
          key: 'X-XSS-Protection',
          value: '1; mode=block'
        }
      ]
    }
  ]
}
\`\`\`

## Monitoring & Maintenance

### Set Up Monitoring

1. **Vercel Analytics**: Enabled by default
2. **Google Analytics**: Add tracking ID
3. **Sentry**: Error tracking

### Regular Maintenance Tasks

- [ ] Monitor contact form submissions weekly
- [ ] Review analytics monthly
- [ ] Update content quarterly
- [ ] Check for dependency updates monthly
- [ ] Test contact form regularly
- [ ] Verify email delivery
- [ ] Monitor site performance
- [ ] Check for broken links

### Update Dependencies

\`\`\`bash
# Check for updates
npm outdated

# Update all dependencies
npm update

# Update to latest major versions (be careful)
npm upgrade

# Run tests after updates
npm run build
npm run dev
\`\`\`

## Troubleshooting

### Contact form not sending emails

- Check SENDGRID_API_KEY or RESEND_API_KEY in environment
- Verify sender email is verified
- Check email logs in service provider
- Test API route manually with POST request

### Images not displaying

- Verify image paths are correct
- Check CORS headers if using external CDN
- Use `/placeholder.svg` for testing
- Optimize images with `next/image` component

### Slow performance

- Run Lighthouse audit
- Optimize images (use WebP format)
- Enable caching headers
- Minimize JavaScript bundle
- Use CDN for static assets

### SSL/HTTPS issues

- Wait up to 24 hours for DNS propagation
- Clear browser cache
- Test in incognito mode
- Contact Vercel support if persistent

## Rollback Procedure

If deployment issues occur:

\`\`\`bash
# Revert to previous deployment
vercel rollback

# Or redeploy from main branch
git reset --hard HEAD~1
git push origin main
\`\`\`

## Support Contacts

- **Vercel Support**: https://vercel.com/help
- **Next.js Docs**: https://nextjs.org/docs
- **Tailwind CSS**: https://tailwindcss.com/docs
- **SendGrid**: https://support.sendgrid.com
- **Resend**: https://resend.com/docs

---

**Last Updated**: January 2025
\`\`\`
