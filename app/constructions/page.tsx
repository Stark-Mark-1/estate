'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle, Home, Wrench, Palette, Shield, Star, MessageCircle } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

export default function Constructions() {
  const { openModal } = useContactModal()

  const services = [
    {
      icon: Home,
      title: 'Complete Design & Planning',
      description: 'Our expert architects and designers create custom plans tailored to your vision and plot specifications.',
    },
    {
      icon: Wrench,
      title: 'Full Construction Management',
      description: 'We handle all aspects of construction from foundation to finishing, ensuring quality at every step.',
    },
    {
      icon: Palette,
      title: 'Interior Design & Finishing',
      description: 'Complete interior design services to make your home beautiful and functional.',
    },
    {
      icon: Shield,
      title: 'Permits & Approvals',
      description: 'We take care of all legal formalities, permits, and approvals so you don\'t have to worry.',
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'We discuss your requirements, budget, and vision for your dream home.',
    },
    {
      step: '02',
      title: 'Design & Planning',
      description: 'Our team creates detailed architectural plans and 3D visualizations for your approval.',
    },
    {
      step: '03',
      title: 'Approvals & Permits',
      description: 'We handle all necessary permits, approvals, and legal documentation.',
    },
    {
      step: '04',
      title: 'Construction',
      description: 'Expert construction team builds your home with quality materials and craftsmanship.',
    },
    {
      step: '05',
      title: 'Interior Finishing',
      description: 'Complete interior design and finishing touches to make your home move-in ready.',
    },
    {
      step: '06',
      title: 'Final Handover',
      description: 'Quality inspection and final handover of your completed dream home.',
    },
  ]

  const successStories = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Bangalore',
      plotSize: '2400 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=400&h=300&fit=crop',
      quote: 'ESTATE transformed our plot into a beautiful 3BHK home. They handled everything from design to construction, and we just moved in! The quality is exceptional.',
      timeline: '8 months',
      rating: 5,
    },
    {
      id: 2,
      name: 'Priya Sharma',
      location: 'Mumbai',
      plotSize: '1800 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=400&h=300&fit=crop',
      quote: 'As a working professional, I couldn\'t manage construction. ESTATE took complete charge and delivered our dream home on time. Highly recommended!',
      timeline: '6 months',
      rating: 5,
    },
    {
      id: 3,
      name: 'Amit Patel',
      location: 'Delhi',
      plotSize: '3000 sq ft',
      image: 'https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=400&h=300&fit=crop',
      quote: 'We wanted a modern villa with smart home features. ESTATE not only delivered but exceeded our expectations. The attention to detail is remarkable.',
      timeline: '10 months',
      rating: 5,
    },
    {
      id: 4,
      name: 'Sneha Reddy',
      location: 'Hyderabad',
      plotSize: '2000 sq ft',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=400&h=300&fit=crop',
      quote: 'From the first meeting to final handover, ESTATE made the entire process stress-free. Our home is exactly what we envisioned and more.',
      timeline: '7 months',
      rating: 5,
    },
  ]

  const benefits = [
    'No hassle - We handle everything',
    'Quality assured construction',
    'On-time delivery guaranteed',
    'Transparent pricing with no hidden costs',
    'Expert team of architects and engineers',
    'Post-construction support and warranty',
  ]

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h1 className="text-6xl font-bold gradient-text">Construction Services</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Have a plot? We'll build your dream home from scratch. Our comprehensive construction services 
              handle everything from design to delivery, so you can focus on what matters most.
            </p>
            <p className="text-lg text-gray-400 leading-relaxed">
              We take care of all the hassles - permits, approvals, construction, interior design, and quality 
              checks. You just need to provide the plot, and we'll deliver a finished, move-in ready home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={openModal}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>Get in Touch</span>
                <ArrowRight size={20} />
              </button>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <MessageCircle size={20} />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              alt="Construction Services"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">What We Offer</h2>
          <p className="text-xl text-gray-400">Complete end-to-end construction solutions</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-effect hover-lift"
              >
                <Icon size={48} className="text-blue-400 mb-4" />
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm">{service.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Our Process</h2>
          <p className="text-xl text-gray-400">Simple, transparent, and hassle-free</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {process.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl glass-effect hover-lift relative"
            >
              <div className="text-4xl font-bold text-blue-400 mb-4 opacity-50">{step.step}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-400 text-sm">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1600585154084-4e5fe7c39198?w=800&h=600&fit=crop"
              alt="Construction Benefits"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-5xl font-bold gradient-text">Why Choose Us?</h2>
            <p className="text-lg text-gray-300">
              Building a home is a significant investment. We make it easy, stress-free, and rewarding.
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start space-x-3"
                >
                  <CheckCircle size={24} className="text-green-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">{benefit}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Success Stories</h2>
          <p className="text-xl text-gray-400">Real homes, real stories, real satisfaction</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {successStories.map((story, index) => (
            <motion.div
              key={story.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="rounded-2xl glass-effect hover-lift overflow-hidden"
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={story.image}
                  alt={story.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold">{story.name}</h3>
                    <p className="text-sm text-gray-400">{story.location} • {story.plotSize}</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    {[...Array(story.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <span className="text-sm text-gray-400">Completed in {story.timeline}</span>
                  <span className="text-sm text-blue-400 font-medium">✓ Delivered on time</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-2xl glass-effect p-12 text-center"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Ready to Build Your Dream Home?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your plot and requirements. Our team is ready to turn your vision into reality.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={openModal}
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </button>
            <a
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors flex items-center space-x-2"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

