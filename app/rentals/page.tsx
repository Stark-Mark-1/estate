'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, ArrowRight, Filter, DollarSign } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'
import ContactForm from '@/components/ContactForm'

export default function Rentals() {
  const { openModal } = useContactModal()
  const [filter, setFilter] = useState('all')
  const [isContactOpen, setIsContactOpen] = useState(false)

  const rentals = [
    {
      id: 1,
      title: 'Modern Downtown Apartment',
      location: 'Downtown District',
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      type: 'Apartment',
      bedrooms: 2,
      bathrooms: 2,
      area: '1200 sqft',
      price: '$2,500/month',
      available: 'Available Now',
      furnished: true,
      description: 'Spacious 2-bedroom apartment in the heart of downtown with modern amenities and stunning city views.',
    },
    {
      id: 2,
      title: 'Luxury Penthouse Suite',
      location: 'Skyline District',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      type: 'Penthouse',
      bedrooms: 3,
      bathrooms: 3,
      area: '2800 sqft',
      price: '$8,500/month',
      available: 'Available Now',
      furnished: true,
      description: 'Ultra-luxury penthouse with private terrace, panoramic views, and premium finishes throughout.',
    },
    {
      id: 3,
      title: 'Cozy Studio Apartment',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop',
      type: 'Studio',
      bedrooms: 0,
      bathrooms: 1,
      area: '600 sqft',
      price: '$1,200/month',
      available: 'Available Now',
      furnished: true,
      description: 'Perfect starter apartment for young professionals, fully furnished and move-in ready.',
    },
    {
      id: 4,
      title: 'Family Townhouse',
      location: 'Suburban Paradise',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      type: 'Townhouse',
      bedrooms: 4,
      bathrooms: 3,
      area: '2200 sqft',
      price: '$4,200/month',
      available: 'Available Now',
      furnished: false,
      description: 'Spacious family home with private garden, perfect for families seeking comfort and space.',
    },
    {
      id: 5,
      title: 'Waterfront Condo',
      location: 'Coastal Area',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      type: 'Condo',
      bedrooms: 2,
      bathrooms: 2,
      area: '1500 sqft',
      price: '$3,800/month',
      available: 'Available Now',
      furnished: true,
      description: 'Beautiful waterfront condo with ocean views, beach access, and resort-style amenities.',
    },
    {
      id: 6,
      title: 'Executive Office Space',
      location: 'Business District',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      type: 'Commercial',
      bedrooms: 0,
      bathrooms: 2,
      area: '1800 sqft',
      price: '$5,500/month',
      available: 'Available Now',
      furnished: false,
      description: 'Premium office space in prime business location, ideal for professional services.',
    },
    {
      id: 7,
      title: 'Luxury Villa',
      location: 'Exclusive Enclave',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      type: 'Villa',
      bedrooms: 5,
      bathrooms: 4,
      area: '4500 sqft',
      price: '$12,000/month',
      available: 'Available Now',
      furnished: true,
      description: 'Exclusive luxury villa with private pool, garden, and premium amenities for discerning tenants.',
    },
    {
      id: 8,
      title: 'Modern Loft',
      location: 'Arts District',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      type: 'Loft',
      bedrooms: 1,
      bathrooms: 1,
      area: '900 sqft',
      price: '$2,200/month',
      available: 'Available Now',
      furnished: true,
      description: 'Stylish converted loft with high ceilings, exposed brick, and modern industrial design.',
    },
    {
      id: 9,
      title: 'Garden Apartment',
      location: 'Residential Area',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      type: 'Apartment',
      bedrooms: 3,
      bathrooms: 2,
      area: '1600 sqft',
      price: '$3,200/month',
      available: 'Available Now',
      furnished: false,
      description: 'Ground-floor apartment with private garden access, perfect for pet owners and families.',
    },
  ]

  const filteredRentals = filter === 'all' 
    ? rentals 
    : rentals.filter(r => r.type.toLowerCase() === filter.toLowerCase())

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">Rental Properties</h1>
          <p className="text-xl text-utility-grey max-w-3xl mx-auto">
            Discover premium rental properties that suit your lifestyle and budget
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="flex items-center justify-center space-x-4 flex-wrap gap-4">
          <Filter size={20} className="text-utility-grey" />
          <button
            onClick={() => setFilter('all')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'all'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            All Properties
          </button>
          <button
            onClick={() => setFilter('apartment')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'apartment'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Apartments
          </button>
          <button
            onClick={() => setFilter('penthouse')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'penthouse'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Penthouses
          </button>
          <button
            onClick={() => setFilter('villa')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'villa'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Villas
          </button>
          <button
            onClick={() => setFilter('commercial')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'commercial'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Commercial
          </button>
        </div>
      </section>

      {/* Rentals Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRentals.map((rental, index) => (
            <motion.div
              key={rental.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl glass-effect hover-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={rental.image}
                    alt={rental.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-amber text-primary text-sm font-medium">
                    {rental.available}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent-teal text-primary text-sm font-medium">
                    {rental.type}
                  </div>
                  {rental.furnished && (
                    <div className="absolute bottom-4 left-4 px-3 py-1 rounded-full bg-secondary text-white text-xs font-medium">
                      Furnished
                    </div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{rental.title}</h3>
                  <div className="flex items-center text-utility-grey mb-4">
                    <MapPin size={16} className="mr-2 text-secondary" />
                    <span>{rental.location}</span>
                  </div>
                  <p className="text-utility-grey mb-6 text-sm">{rental.description}</p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Bed size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{rental.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{rental.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{rental.area}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-utility-grey/20 mb-4">
                    <div>
                      <div className="text-xs text-utility-grey">Monthly Rent</div>
                      <div className="text-2xl font-bold text-secondary">{rental.price}</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <button
                      onClick={openModal}
                      className="flex-1 px-4 py-2 bg-accent-coral hover:bg-secondary text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center space-x-2"
                    >
                      <span>Schedule Viewing</span>
                      <ArrowRight size={16} />
                    </button>
                    <button
                      onClick={openModal}
                      className="px-4 py-2 glass-effect hover:bg-background text-primary font-medium rounded-lg transition-colors"
                    >
                      Enquire
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl glass-effect"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Looking for a Rental?</h2>
          <p className="text-xl text-utility-grey mb-8">
            Contact us to schedule a viewing or discuss your rental requirements
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsContactOpen(true)}
              className="px-8 py-4 bg-accent-coral hover:bg-secondary text-white font-semibold rounded-lg transition-colors"
            >
              Get in Touch
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-accent-teal hover:bg-secondary text-primary font-semibold rounded-lg transition-colors"
            >
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </section>

      <ContactForm isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  )
}

