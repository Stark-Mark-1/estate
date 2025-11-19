# ESTATE - Premium Real Estate Website

A modern, ultra-professional 3D real estate website built with Next.js, React Three Fiber, and Tailwind CSS.

## Features

- **Modern 3D Design**: Interactive 3D scenes using React Three Fiber
- **Responsive Layout**: Fully responsive design for all devices
- **Fast Performance**: Optimized for speed and performance
- **Professional UI**: Clean, modern interface with glass morphism effects
- **Multiple Pages**: 
  - Landing page with company overview
  - Projects showcase
  - Upcoming projects
  - Testimonials
  - About us
  - Media coverage
  - Rentals

## Tech Stack

- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **React Three Fiber**: 3D graphics and animations
- **Framer Motion**: Smooth animations and transitions
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
estate/
├── app/
│   ├── about/           # About page
│   ├── media-coverage/  # Media coverage page
│   ├── projects/        # Projects listing page
│   ├── rentals/         # Rental properties page
│   ├── testimonials/    # Testimonials page
│   ├── upcoming-projects/ # Upcoming projects page
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Landing page
│   └── globals.css      # Global styles
├── components/
│   ├── ContactForm.tsx  # Contact form modal
│   ├── Footer.tsx       # Footer component
│   ├── Navigation.tsx   # Navigation bar
│   └── ThreeScene.tsx   # 3D scene component
└── public/              # Static assets
```

## Customization

### Update Contact Information

Edit the contact details in:
- `components/Navigation.tsx` - WhatsApp link
- `components/Footer.tsx` - Contact information
- `components/ContactForm.tsx` - Contact form handlers

### Update Company Information

- Company name: Search for "ESTATE" and replace
- Company description: Update in `app/page.tsx` and `app/about/page.tsx`
- Social media links: Update in `components/Footer.tsx`

### Images

Replace placeholder images with your own real estate images. Update image URLs in:
- Project listings
- Testimonials
- About page
- Media coverage

## Features Overview

### Landing Page
- Hero section with 3D background
- Company statistics
- Marquee projects showcase
- Customer success stories

### Projects Page
- Filterable project listings
- Detailed project information
- Contact integration

### Upcoming Projects
- Pre-launch project details
- Launch and completion dates
- Reservation system

### Testimonials
- Client reviews and ratings
- Success stories
- Satisfaction statistics

### About Page
- Company history
- Mission and vision
- Core values
- Team members
- Company milestones

### Media Coverage
- Press articles and features
- Awards and recognition
- Media inquiries

### Rentals
- Rental property listings
- Filter by property type
- Schedule viewing functionality

## Contact Form

The contact form includes:
- Name field
- Phone number field
- Requirement/Message field
- Direct contact buttons (Call, WhatsApp, Email)

## Performance Optimization

- Image optimization with Next.js Image component
- Code splitting with Next.js
- Optimized 3D rendering
- Lazy loading for images and components

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is proprietary and confidential.

