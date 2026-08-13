# Studyone Landing Page

A modern, minimal "Coming Soon" landing page for Studyone, launching on 1 September 2026.

## Overview

This is a production-ready Vite + React website that serves as a temporary landing page at https://studyone.bolt.host. The page features a clean, modern design with smooth animations and full responsiveness across all devices.

## Features

- **Modern Design**: Minimal, professional, student-focused aesthetic
- **Fully Responsive**: Optimized for mobile, tablet, and desktop screens
- **Smooth Animations**: Subtle CSS animations for a polished feel
- **SEO Optimized**: Meta tags and semantic HTML for search engines
- **Accessible**: WCAG compliant with keyboard navigation and semantic markup
- **Production Ready**: Built with Vite for optimal performance
- **No Unnecessary Dependencies**: Clean, lightweight codebase

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite 5
- **Styling**: CSS3 with CSS Grid and Flexbox
- **Animations**: CSS animations with prefers-reduced-motion support

## Project Structure

```
├── index.html          # Main HTML file with SEO meta tags
├── package.json        # Project dependencies and scripts
├── vite.config.js      # Vite configuration
├── src/
│   ├── App.jsx         # Main React component
│   ├── index.css       # Styling and animations
│   └── main.jsx        # React entry point
└── dist/               # Production build output (created by build)
```

## Getting Started

### Prerequisites
- Node.js 16+ and npm

### Installation

1. Install dependencies:
```bash
npm install
```

### Development

Run the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173/`

### Build

Create a production build:
```bash
npm run build
```

The optimized files will be in the `dist/` folder.

### Preview

Preview the production build locally:
```bash
npm run preview
```

## Page Content

The landing page displays:

- **Brand Name**: "Studyone"
- **Main Heading**: "Coming Soon"
- **Tagline**: "Everything a student needs, in one place."
- **Launch Date**: "1 September 2026" (styled with blue gradient)
- **Message**: "Come back on 1 September 2026 to access the new Studyone website."
- **Footer**: "A new student experience is on the way."

## Design Specifications

### Color Scheme
- **Primary Text**: Black (#1a1a1a)
- **Secondary Text**: Gray (#555, #666, #888)
- **Background**: Light gradient (#fafafa to #f5f7ff)
- **Accent**: Blue gradient (#4a7ba7 to #2e5266)

### Typography
- **Font Family**: System font stack (Apple/San Francisco, Segoe UI, etc.)
- **Heading**: 56px, bold (42px on tablet, 32px on mobile)
- **Launch Date**: 42px, bold blue gradient (36px on tablet, 28px on mobile)
- **Body Text**: 16-18px, regular weight

### Animations
- Brand fades in on load
- Main heading slides up with fade
- Date and supporting text fade in sequentially
- Decorative divider scales in
- Respects `prefers-reduced-motion` for accessibility

### Responsive Breakpoints
- **Desktop**: 1024px and above
- **Tablet**: 768px to 1023px
- **Mobile**: Below 768px (optimized for 480px)

## Accessibility

- Semantic HTML5 structure
- Proper heading hierarchy (h1, h2, etc.)
- Strong text contrast (WCAG AA compliant)
- Keyboard navigation support
- Focus indicators for interactive elements
- Respects `prefers-reduced-motion` user preference
- Proper meta viewport for mobile browsers

## SEO

- Page title: "Studyone | Coming Soon"
- Meta description: "Studyone is launching on 1 September 2026. Everything a student needs, in one place."
- Open Graph tags for social media sharing
- Semantic HTML for better indexing

## Deployment

### To Studyone.bolt.host

1. Build the project:
```bash
npm run build
```

2. Upload the contents of the `dist/` folder to your hosting provider.

### Environment Variables

No environment variables are required for this project.

## Performance

Production build sizes:
- HTML: 0.83 kB (gzipped: 0.40 kB)
- CSS: 3.62 kB (gzipped: 1.14 kB)
- JavaScript: 143.46 kB (gzipped: 46.10 kB)

The application is lightweight and loads quickly on all connection speeds.

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari 14+, Chrome Android)

## Future Enhancements

This landing page can be easily extended with:
- Email signup form
- Newsletter subscription
- Social media links
- Early access registration

Simply keep the existing structure and add components as needed.

## License

Created for Studyone - September 2026
To come up
