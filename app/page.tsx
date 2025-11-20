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
      quote: 'Every morning I wake up and pinch myself. This is home. This is where our family grows, laughs, and creates memories that will last forever.',
      property: 'Skyline Towers, Unit 1205',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Investor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      quote: 'Not just an investment, but a place where dreams take shape. Watching families build their lives here brings me immense joy.',
      property: 'Oceanview Residences, Unit 804',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      quote: 'From dreaming to reality. Our first home is everything we imagined and more. The kids have space to play, and we have space to breathe.',
      property: 'Garden Estates, Unit 305',
    },
  ]

  const aspirations = [
    { label: 'Dream Homes Delivered', value: '2000+', icon: Star, description: 'Families living their best lives' },
    { label: 'Memories Created', value: 'Countless', icon: TrendingUp, description: 'Moments that matter, every day' },
    { label: 'Lives Transformed', value: 'Every Day', icon: Award, description: 'Your happiness is our success' },
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
              <span className="gradient-text">Your Dream Life</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
              Starts with the Perfect Home
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Wake up to breathtaking views. Create memories in spaces designed for living. Build the life you've always imagined.
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

      {/* Aspirations Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4 gradient-text">Where Dreams Come True</h2>
            <p className="text-xl text-gray-400">Every home is a new beginning</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aspirations.map((aspiration, index) => {
              const Icon = aspiration.icon
              return (
                <motion.div
                  key={aspiration.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center p-8 rounded-2xl glass-effect hover-lift"
                >
                  <Icon size={48} className="text-blue-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold gradient-text mb-2">{aspiration.value}</div>
                  <div className="text-gray-300 font-semibold mb-2">{aspiration.label}</div>
                  <div className="text-sm text-gray-400">{aspiration.description}</div>
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
            <h2 className="text-5xl font-bold mb-4 gradient-text">Your Next Chapter Awaits</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Discover homes where every sunrise brings new possibilities, and every evening ends with contentment
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
                      <p className="text-sm text-gray-500 mb-4 italic">Where your story begins</p>
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
            <h2 className="text-5xl font-bold mb-4 gradient-text">Lives Transformed, Dreams Realized</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real stories of happiness, belonging, and the joy of coming home
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

