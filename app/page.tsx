'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ArrowRight, Star, TrendingUp, Award } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'
import ThreeScene from '@/components/ThreeScene'

export default function Home() {
  const { openModal } = useContactModal()

  const marqueeProjects = [
    {
      id: 1,
      title: 'Skyline Towers',
      location: 'Downtown District',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      status: 'Completed',
      units: '250 Units',
      price: 'Starting from $450K',
    },
    {
      id: 2,
      title: 'Oceanview Residences',
      location: 'Coastal Area',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      status: 'Ongoing',
      units: '180 Units',
      price: 'Starting from $680K',
    },
    {
      id: 3,
      title: 'Garden Estates',
      location: 'Suburban Paradise',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      status: 'Completed',
      units: '120 Units',
      price: 'Starting from $320K',
    },
  ]

  const successStories = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      quote: 'ESTATE helped us find our dream home. The entire process was seamless and professional.',
      property: 'Skyline Towers, Unit 1205',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Investor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      quote: 'Excellent investment opportunity. The returns have exceeded our expectations.',
      property: 'Oceanview Residences, Unit 804',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      quote: 'The team guided us through every step. We couldn\'t be happier with our new home.',
      property: 'Garden Estates, Unit 305',
    },
  ]

  const stats = [
    { label: 'Projects Completed', value: '50+', icon: Award },
    { label: 'Happy Customers', value: '2000+', icon: Star },
    { label: 'Years of Excellence', value: '15+', icon: TrendingUp },
  ]

  return (
    <div className="relative">
      {/* Hero Section with 3D Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <ThreeScene />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="gradient-text">ESTATE</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Premium Real Estate Solutions for Your Dream Property
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Discover luxury properties, exceptional service, and unmatched expertise in real estate development.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
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
                <span>WhatsApp Us</span>
                <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl glass-effect hover-lift"
                >
                  <Icon size={48} className="text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Marquee Projects Section */}
      <section id="projects" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 gradient-text">Marquee Projects</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Explore our flagship developments that redefine luxury living
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {marqueeProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <Link href={`/projects/${project.id}`}>
                  <div className="relative overflow-hidden rounded-2xl glass-effect hover-lift cursor-pointer">
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-blue-600 text-white text-sm font-medium">
                        {project.status}
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-400 mb-4">{project.location}</p>
                      <div className="flex justify-between items-center text-sm">
                        <span className="text-gray-300">{project.units}</span>
                        <span className="text-blue-400 font-semibold">{project.price}</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Customer Success Stories */}
      <section className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 gradient-text">Customer Success Stories</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real experiences from our satisfied clients
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={story.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl glass-effect hover-lift"
              >
                <div className="flex items-center mb-6">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                    <Image
                      src={story.image}
                      alt={story.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">{story.name}</h4>
                    <p className="text-sm text-gray-400">{story.role}</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4 italic">&ldquo;{story.quote}&rdquo;</p>
                <p className="text-sm text-blue-400 font-medium">{story.property}</p>
                <div className="flex mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/testimonials"
              className="inline-flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              <span>Read More Stories</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

