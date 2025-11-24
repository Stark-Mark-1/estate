'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Calendar, ArrowRight, Clock } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'
import ContactForm from '@/components/ContactForm'

export default function UpcomingProjects() {
  const { openModal } = useContactModal()
  const [isContactOpen, setIsContactOpen] = useState(false)

  const upcomingProjects = [
    {
      id: 1,
      title: 'Grand Central',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      launchDate: 'Q2 2024',
      completionDate: 'Q4 2026',
      type: 'Mixed Use',
      description: 'A revolutionary mixed-use development combining luxury residences, retail spaces, and entertainment zones in the heart of the city.',
      features: ['Smart Home Technology', 'Rooftop Gardens', 'Shopping Mall', 'Cinema Complex'],
      price: 'Starting from $550K',
      status: 'Pre-Launch',
    },
    {
      id: 2,
      title: 'Eco Park Residences',
      location: 'Green Valley',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      launchDate: 'Q3 2024',
      completionDate: 'Q1 2027',
      type: 'Residential',
      description: 'Sustainable living redefined with eco-friendly design, renewable energy, and green spaces for modern families.',
      features: ['Solar Power', 'Rainwater Harvesting', 'Organic Gardens', 'EV Charging'],
      price: 'Starting from $420K',
      status: 'Pre-Launch',
    },
    {
      id: 3,
      title: 'Tech Hub Towers',
      location: 'Innovation District',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      launchDate: 'Q4 2024',
      completionDate: 'Q2 2027',
      type: 'Commercial',
      description: 'State-of-the-art commercial complex designed for tech companies and startups with cutting-edge infrastructure.',
      features: ['Fiber Optic Ready', 'Co-working Spaces', 'Conference Facilities', '24/7 Security'],
      price: 'Starting from $950K',
      status: 'Pre-Launch',
    },
    {
      id: 4,
      title: 'Luxury Penthouses',
      location: 'Skyline District',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      launchDate: 'Q1 2025',
      completionDate: 'Q3 2027',
      type: 'Residential',
      description: 'Ultra-luxury penthouses with private elevators, infinity pools, and panoramic city views.',
      features: ['Private Elevators', 'Infinity Pools', 'Wine Cellars', 'Butler Service'],
      price: 'Starting from $2.5M',
      status: 'Announced',
    },
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">Upcoming Projects</h1>
          <p className="text-xl text-utility-grey max-w-3xl mx-auto">
            Be among the first to discover our future developments. Reserve your space today.
          </p>
        </motion.div>
      </section>

      {/* Projects List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {upcomingProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl glass-effect overflow-hidden hover-lift"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent-amber text-primary text-sm font-bold">
                    {project.status}
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center justify-between mb-4">
                    <h2 className="text-3xl font-bold">{project.title}</h2>
                    <span className="px-3 py-1 rounded-full bg-accent-teal text-primary text-sm font-medium">
                      {project.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-utility-grey mb-6">
                    <MapPin size={18} className="mr-2 text-secondary" />
                    <span>{project.location}</span>
                  </div>

                  <p className="text-utility-grey mb-6 leading-relaxed">{project.description}</p>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} className="text-secondary" />
                      <div>
                        <div className="text-xs text-utility-grey">Launch</div>
                        <div className="text-sm text-primary font-medium">{project.launchDate}</div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={18} className="text-secondary" />
                      <div>
                        <div className="text-xs text-utility-grey">Completion</div>
                        <div className="text-sm text-primary font-medium">{project.completionDate}</div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-utility-grey mb-3">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-accent-teal" />
                          <span className="text-sm text-utility-grey">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-6 border-t border-utility-grey/20">
                    <div>
                      <div className="text-sm text-utility-grey">Starting Price</div>
                      <div className="text-xl font-bold text-secondary">{project.price}</div>
                    </div>
                    <button
                      onClick={openModal}
                      className="px-6 py-3 bg-accent-coral hover:bg-secondary text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
                    >
                      <span>Reserve Now</span>
                      <ArrowRight size={18} />
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Early Bird Benefits</h2>
          <p className="text-xl text-utility-grey mb-8">
            Reserve your space early and enjoy exclusive pricing and priority selection
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

