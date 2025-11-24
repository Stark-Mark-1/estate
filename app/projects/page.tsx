'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, ArrowRight, Filter } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function Projects() {
  const { openModal } = useContactModal()
  const [filter, setFilter] = useState('all')

  const projects = [
    {
      id: 1,
      title: 'Skyline Towers',
      location: 'Downtown District',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      status: 'Completed',
      type: 'Residential',
      bedrooms: '2-4 BHK',
      bathrooms: '2-3',
      area: '1200-2500 sqft',
      price: 'Starting from $450K',
      description: 'Luxury high-rise apartments with panoramic city views and world-class amenities.',
    },
    {
      id: 2,
      title: 'Oceanview Residences',
      location: 'Coastal Area',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      status: 'Ongoing',
      type: 'Residential',
      bedrooms: '3-5 BHK',
      bathrooms: '3-4',
      area: '1800-3500 sqft',
      price: 'Starting from $680K',
      description: 'Beachfront luxury condominiums with private beach access and resort-style living.',
    },
    {
      id: 3,
      title: 'Garden Estates',
      location: 'Suburban Paradise',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      status: 'Completed',
      type: 'Residential',
      bedrooms: '2-3 BHK',
      bathrooms: '2',
      area: '1000-1800 sqft',
      price: 'Starting from $320K',
      description: 'Spacious family homes with private gardens and community facilities.',
    },
    {
      id: 4,
      title: 'Business Plaza',
      location: 'Financial District',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      status: 'Completed',
      type: 'Commercial',
      bedrooms: 'Office Spaces',
      bathrooms: 'Multiple',
      area: '500-5000 sqft',
      price: 'Starting from $800K',
      description: 'Premium commercial spaces in the heart of the business district.',
    },
    {
      id: 5,
      title: 'Riverside Villas',
      location: 'Waterfront',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      status: 'Ongoing',
      type: 'Residential',
      bedrooms: '4-6 BHK',
      bathrooms: '4-5',
      area: '3000-6000 sqft',
      price: 'Starting from $1.2M',
      description: 'Exclusive waterfront villas with private docks and luxury amenities.',
    },
    {
      id: 6,
      title: 'Metro Heights',
      location: 'City Center',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      status: 'Completed',
      type: 'Residential',
      bedrooms: '1-3 BHK',
      bathrooms: '1-2',
      area: '600-1500 sqft',
      price: 'Starting from $280K',
      description: 'Modern apartments with excellent connectivity and urban lifestyle.',
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.status.toLowerCase() === filter.toLowerCase())

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">Our Projects</h1>
          <p className="text-xl text-utility-grey max-w-3xl mx-auto">
            Discover our portfolio of premium real estate developments, each designed to exceed expectations.
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
            All Projects
          </button>
          <button
            onClick={() => setFilter('completed')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'completed'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Completed
          </button>
          <button
            onClick={() => setFilter('ongoing')}
            className={`px-6 py-2 rounded-lg font-medium transition-colors ${
              filter === 'ongoing'
                ? 'bg-accent-teal text-primary'
                : 'glass-effect text-utility-grey hover:text-primary'
            }`}
          >
            Ongoing
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="rounded-2xl glass-effect hover-lift overflow-hidden">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-accent-amber text-primary text-sm font-medium">
                    {project.status}
                  </div>
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent-teal text-primary text-sm font-medium">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  <div className="flex items-center text-utility-grey mb-4">
                    <MapPin size={16} className="mr-2 text-secondary" />
                    <span>{project.location}</span>
                  </div>
                  <p className="text-utility-grey mb-6 text-sm">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <Bed size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{project.bedrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Bath size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{project.bathrooms}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Square size={18} className="text-secondary" />
                      <span className="text-sm text-utility-grey">{project.area}</span>
                    </div>
                    <div className="text-sm text-secondary font-semibold">
                      {project.price}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={`/projects/${project.id}`}
                      className="flex-1 px-4 py-2 bg-accent-coral hover:bg-secondary text-white font-medium rounded-lg transition-colors text-center flex items-center justify-center space-x-2"
                    >
                      <span>View Details</span>
                      <ArrowRight size={16} />
                    </Link>
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
          <h2 className="text-4xl font-bold mb-4 gradient-text">Interested in Our Projects?</h2>
          <p className="text-xl text-utility-grey mb-8">
            Get in touch with our team to learn more about our developments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
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

    </div>
  )
}

