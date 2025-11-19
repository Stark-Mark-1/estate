'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'ESTATE helped us find our dream home. The entire process was seamless and professional. The team was responsive, knowledgeable, and made us feel valued throughout. We couldn\'t be happier with our new home at Skyline Towers.',
      property: 'Skyline Towers, Unit 1205',
      date: 'March 2024',
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Real Estate Investor',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Excellent investment opportunity. The returns have exceeded our expectations. ESTATE\'s portfolio of properties offers great value and their team provides exceptional support. Highly recommend for serious investors.',
      property: 'Oceanview Residences, Unit 804',
      date: 'February 2024',
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'First-time Buyer',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'The team guided us through every step. We couldn\'t be happier with our new home. As first-time buyers, we had many questions, and ESTATE\'s team was patient, helpful, and made the entire process stress-free.',
      property: 'Garden Estates, Unit 305',
      date: 'January 2024',
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Purchased a commercial space for our business. The location is perfect, and the facilities are top-notch. ESTATE delivered exactly what they promised, on time and within budget. Professional service throughout.',
      property: 'Business Plaza, Unit 502',
      date: 'December 2023',
    },
    {
      id: 5,
      name: 'Lisa Anderson',
      role: 'Luxury Home Buyer',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'The attention to detail in the Riverside Villas is exceptional. Every aspect of the property reflects quality and luxury. ESTATE understands what premium means and delivers it consistently.',
      property: 'Riverside Villas, Unit 201',
      date: 'November 2023',
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Property Investor',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'I\'ve invested in multiple ESTATE properties, and each one has been a great decision. Their track record speaks for itself. Professional, reliable, and always delivering value.',
      property: 'Multiple Properties',
      date: 'October 2023',
    },
    {
      id: 7,
      name: 'Maria Garcia',
      role: 'Family Home Buyer',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'Found the perfect family home through ESTATE. The community at Garden Estates is wonderful, and the property quality is outstanding. Our children love the space and amenities.',
      property: 'Garden Estates, Unit 412',
      date: 'September 2023',
    },
    {
      id: 8,
      name: 'Robert Lee',
      role: 'Retiree',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'After retirement, we wanted a peaceful yet connected place. ESTATE helped us find exactly that. The location, amenities, and community are perfect for our lifestyle. Highly satisfied.',
      property: 'Metro Heights, Unit 608',
      date: 'August 2023',
    },
    {
      id: 9,
      name: 'Jennifer Martinez',
      role: 'Young Professional',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop',
      rating: 5,
      quote: 'As a young professional, I needed something modern and well-connected. Metro Heights was perfect. The design is contemporary, and the location is ideal for work and lifestyle.',
      property: 'Metro Heights, Unit 305',
      date: 'July 2023',
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
          <h1 className="text-6xl font-bold mb-6 gradient-text">Client Testimonials</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Hear from our satisfied clients who have made ESTATE their trusted real estate partner
          </p>
        </motion.div>
      </section>

      {/* Testimonials Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl glass-effect hover-lift relative"
            >
              <Quote size={32} className="text-blue-400/30 absolute top-6 right-6" />
              
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 italic leading-relaxed relative z-10">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="pt-6 border-t border-white/10">
                <p className="text-sm text-blue-400 font-medium mb-1">{testimonial.property}</p>
                <p className="text-xs text-gray-500">{testimonial.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <div className="text-center p-8 rounded-2xl glass-effect">
            <div className="text-5xl font-bold gradient-text mb-2">98%</div>
            <div className="text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center p-8 rounded-2xl glass-effect">
            <div className="text-5xl font-bold gradient-text mb-2">2000+</div>
            <div className="text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center p-8 rounded-2xl glass-effect">
            <div className="text-5xl font-bold gradient-text mb-2">4.9/5</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center p-8 rounded-2xl glass-effect">
            <div className="text-5xl font-bold gradient-text mb-2">15+</div>
            <div className="text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </section>
    </div>
  )
}

