'use client'

import Link from 'next/link'
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ]

  const quickLinks = [
    { href: '/projects', label: 'Projects' },
    { href: '/upcoming-projects', label: 'Upcoming Projects' },
    { href: '/rentals', label: 'Rentals' },
    { href: '/testimonials', label: 'Testimonials' },
    { href: '/about', label: 'About Us' },
    { href: '/media-coverage', label: 'Media Coverage' },
  ]

  return (
    <footer className="bg-white border-t border-utility-grey/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="text-2xl font-bold gradient-text">ESTATE</div>
            <p className="text-utility-grey text-sm leading-relaxed">
              Your trusted partner in premium real estate. We deliver exceptional properties and unmatched service.
            </p>
            <div className="flex space-x-4 pt-4">
              {socialLinks.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 flex items-center justify-center rounded-lg glass-effect hover:bg-background transition-colors"
                    aria-label={social.label}
                  >
                    <Icon size={20} className="text-utility-grey hover:text-primary transition-colors" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-utility-grey hover:text-primary text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Phone size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a href="tel:+1234567890" className="text-utility-grey hover:text-primary text-sm transition-colors">
                  +1 (234) 567-8900
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <Mail size={18} className="text-secondary mt-1 flex-shrink-0" />
                <a href="mailto:info@estate.com" className="text-utility-grey hover:text-primary text-sm transition-colors">
                  info@estate.com
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin size={18} className="text-secondary mt-1 flex-shrink-0" />
                <span className="text-utility-grey text-sm">
                  123 Premium Avenue,<br />
                  Business District, City 12345
                </span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-primary font-semibold mb-4">Stay Updated</h3>
            <p className="text-utility-grey text-sm mb-4">
              Subscribe to get updates on new projects and exclusive offers.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 rounded-lg glass-effect border border-utility-grey/30 text-primary placeholder-utility-grey focus:outline-none focus:border-secondary transition-colors"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-accent-coral hover:bg-secondary text-white font-medium rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-utility-grey/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-utility-grey text-sm">
              © {currentYear} ESTATE. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-utility-grey hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-utility-grey hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

