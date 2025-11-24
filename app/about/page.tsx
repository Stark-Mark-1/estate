'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Award, Users, TrendingUp, Target, Heart, Shield } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Shield,
      title: 'Trust & Integrity',
      description: 'We build lasting relationships based on transparency and ethical practices.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for perfection in every project, exceeding industry standards.',
    },
    {
      icon: Heart,
      title: 'Customer First',
      description: 'Your satisfaction is our priority. We listen, understand, and deliver.',
    },
    {
      icon: TrendingUp,
      title: 'Innovation',
      description: 'We embrace cutting-edge technology and modern design principles.',
    },
  ]

  const milestones = [
    { year: '2009', event: 'Company Founded', description: 'Started with a vision to transform real estate' },
    { year: '2012', event: 'First Major Project', description: 'Completed Skyline Towers with 250 units' },
    { year: '2015', event: 'Expansion', description: 'Expanded to commercial real estate development' },
    { year: '2018', event: '1000+ Customers', description: 'Reached milestone of 1000 satisfied customers' },
    { year: '2021', event: 'Award Recognition', description: 'Received Best Developer Award' },
    { year: '2024', event: '2000+ Customers', description: 'Continuing growth with 2000+ happy clients' },
  ]

  const team = [
    {
      name: 'John Smith',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop',
    },
    {
      name: 'Sarah Williams',
      role: 'Head of Sales',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop',
    },
    {
      name: 'Michael Brown',
      role: 'Project Director',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop',
    },
    {
      name: 'Emily Davis',
      role: 'Design Lead',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop',
    },
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
            <h1 className="text-6xl font-bold gradient-text">About ESTATE</h1>
            <p className="text-xl text-utility-grey leading-relaxed">
              For over 15 years, ESTATE has been at the forefront of premium real estate development, 
              creating exceptional properties that redefine luxury living and commercial excellence.
            </p>
            <p className="text-lg text-utility-grey leading-relaxed">
              Our commitment to quality, innovation, and customer satisfaction has made us a trusted 
              name in the real estate industry. We don't just build properties; we create communities 
              and shape lifestyles.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative h-96 rounded-2xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
              alt="About ESTATE"
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-effect"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Mission</h2>
            <p className="text-utility-grey leading-relaxed">
              To deliver exceptional real estate solutions that exceed expectations, creating value 
              for our customers while building sustainable, thriving communities that stand the test of time.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl glass-effect"
          >
            <h2 className="text-3xl font-bold mb-4 gradient-text">Our Vision</h2>
            <p className="text-utility-grey leading-relaxed">
              To be the most trusted and innovative real estate developer, recognized for excellence 
              in design, quality, and customer service, setting new benchmarks in the industry.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Our Values</h2>
          <p className="text-xl text-utility-grey">The principles that guide everything we do</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl glass-effect hover-lift text-center"
              >
                <Icon size={48} className="text-secondary mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-utility-grey text-sm">{value.description}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* Milestones */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Our Journey</h2>
          <p className="text-xl text-utility-grey">Key milestones in our growth story</p>
        </motion.div>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-secondary hidden md:block" />
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={`flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="w-full md:w-1/2 p-6">
                  <div className={`p-6 rounded-2xl glass-effect ${index % 2 === 0 ? 'md:mr-auto md:max-w-md' : 'md:ml-auto md:max-w-md'}`}>
                    <div className="text-2xl font-bold text-secondary mb-2">{milestone.year}</div>
                    <div className="text-xl font-semibold mb-2">{milestone.event}</div>
                    <div className="text-utility-grey">{milestone.description}</div>
                  </div>
                </div>
                <div className="hidden md:block w-1/2" />
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-secondary rounded-full border-4 border-primary hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Leadership Team</h2>
          <p className="text-xl text-utility-grey">The experts driving our success</p>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-utility-grey">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

