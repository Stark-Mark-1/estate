# Quick Start Guide

## Installation

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Open Browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## Customization Checklist

### Essential Updates

- [ ] Update company name (search for "ESTATE")
- [ ] Update contact information (phone, email, address)
- [ ] Update WhatsApp number in all components
- [ ] Replace placeholder images with real estate photos
- [ ] Update social media links in Footer component
- [ ] Customize project data with actual projects
- [ ] Update team member information in About page
- [ ] Add real testimonials and customer stories
- [ ] Update media coverage articles

### Contact Information Locations

1. **Navigation Component** (`components/Navigation.tsx`)
   - WhatsApp link: Line with `wa.me/1234567890`

2. **Footer Component** (`components/Footer.tsx`)
   - Phone number
   - Email address
   - Physical address
   - Social media links

3. **Contact Form** (`components/ContactForm.tsx`)
   - Phone number link
   - WhatsApp link
   - Email link

### Image Updates

Replace Unsplash placeholder images with your own:
- Project images in `app/projects/page.tsx`
- Upcoming projects in `app/upcoming-projects/page.tsx`
- Rental properties in `app/rentals/page.tsx`
- Testimonials in `app/testimonials/page.tsx`
- About page images in `app/about/page.tsx`
- Media coverage in `app/media-coverage/page.tsx`
- Landing page in `app/page.tsx`

### Form Integration

The contact form currently logs to console. To integrate with a backend:

1. Update `components/ContactForm.tsx`
2. Add API route in `app/api/contact/route.ts`
3. Connect to your email service or database

## Production Build

```bash
npm run build
npm start
```

## Deployment

The site can be deployed to:
- Vercel (recommended for Next.js)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## Support

For issues or questions, refer to the main README.md file.

