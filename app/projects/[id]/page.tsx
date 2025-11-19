'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { MapPin, Bed, Bath, Square, ArrowLeft, Calendar, Building, Users } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'

// This would typically fetch from an API or CMS
const projectData: Record<string, any> = {
  '1': {
    title: 'Skyline Towers',
    location: 'Downtown District',
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
    ],
    status: 'Completed',
    type: 'Residential',
    bedrooms: '2-4 BHK',
    bathrooms: '2-3',
    area: '1200-2500 sqft',
    price: 'Starting from $450K',
    description: 'Skyline Towers represents the pinnacle of urban luxury living. This prestigious residential development offers an unparalleled lifestyle experience in the heart of the downtown district. Each residence has been meticulously designed to maximize space, natural light, and breathtaking panoramic city views.\n\nOur award-winning architecture combines contemporary elegance with timeless sophistication. The building features floor-to-ceiling windows that flood each unit with natural light, while premium finishes and high-end appliances create a sense of refined luxury throughout.\n\nThe development includes a comprehensive suite of world-class amenities designed to enhance your daily life. From the rooftop infinity pool with stunning skyline views to the state-of-the-art fitness center, every detail has been carefully considered to provide residents with an exceptional living experience.\n\nLocated in the vibrant downtown district, Skyline Towers offers unparalleled access to fine dining, shopping, entertainment, and business districts. With excellent transportation links and proximity to top schools and healthcare facilities, this is more than just a home—it\'s a lifestyle choice.',
    features: [
      'Panoramic City Views',
      'Rooftop Infinity Pool',
      'State-of-the-Art Gym',
      '24/7 Concierge Service',
      'Private Parking',
      'Smart Home Technology',
      'Landscaped Gardens',
      'Children\'s Play Area',
      'Business Center',
      'Rooftop Lounge',
      'Pet-Friendly Environment',
      'Electric Vehicle Charging',
    ],
    amenities: [
      'Swimming Pool',
      'Fitness Center',
      'Clubhouse',
      'Security System',
      'Elevators',
      'Parking',
      'Garden',
      'Playground',
      'Business Center',
      'Rooftop Terrace',
      'Concierge Service',
      'Maintenance Service',
    ],
    completionDate: '2023',
    units: '250 Units',
  },
  '2': {
    title: 'Oceanview Residences',
    location: 'Coastal Area',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585152915-d0ec10b0c6ef?w=1200&h=800&fit=crop',
    ],
    status: 'Ongoing',
    type: 'Residential',
    bedrooms: '3-5 BHK',
    bathrooms: '3-4',
    area: '1800-3500 sqft',
    price: 'Starting from $680K',
    description: 'Oceanview Residences offers an exclusive beachfront living experience unlike any other. This luxury condominium development combines the tranquility of coastal living with the sophistication of modern architecture. Each residence features expansive balconies and terraces that provide uninterrupted views of the ocean.\n\nThe design philosophy emphasizes seamless indoor-outdoor living, with large glass panels that blur the boundaries between your home and the natural beauty outside. Premium materials and finishes throughout create an atmosphere of refined coastal elegance.\n\nResidents enjoy direct private beach access, allowing you to step from your home directly onto pristine sandy shores. The development includes resort-style amenities including multiple swimming pools, a spa and wellness center, and fine dining options.\n\nLocated in the prestigious coastal area, Oceanview Residences is surrounded by natural beauty while maintaining easy access to urban conveniences. This is your opportunity to own a piece of paradise where luxury meets the ocean.',
    features: [
      'Private Beach Access',
      'Ocean Views from Every Unit',
      'Resort-Style Pool',
      'Spa & Wellness Center',
      'Fine Dining Restaurant',
      '24/7 Security',
      'Private Marina Access',
      'Beach Club Membership',
      'Concierge Services',
      'Valet Parking',
      'Smart Home Integration',
      'Premium Finishes',
    ],
    amenities: [
      'Private Beach',
      'Swimming Pools',
      'Spa & Wellness',
      'Fitness Center',
      'Restaurant',
      'Beach Club',
      'Marina',
      'Concierge',
      'Security',
      'Parking',
      'Landscaped Gardens',
      'Children\'s Area',
    ],
    completionDate: '2025',
    units: '180 Units',
  },
  '3': {
    title: 'Garden Estates',
    location: 'Suburban Paradise',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600585152915-d0ec10b0c6ef?w=1200&h=800&fit=crop',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1200&h=800&fit=crop',
    ],
    status: 'Completed',
    type: 'Residential',
    bedrooms: '2-3 BHK',
    bathrooms: '2',
    area: '1000-1800 sqft',
    price: 'Starting from $320K',
    description: 'Garden Estates offers the perfect blend of suburban tranquility and modern convenience. This thoughtfully planned residential community provides spacious family homes surrounded by beautifully landscaped gardens and green spaces.\n\nEach home is designed with families in mind, featuring open-plan living areas, modern kitchens, and private outdoor spaces. The community atmosphere is enhanced by shared facilities that bring neighbors together while respecting privacy.\n\nThe development includes extensive community facilities including parks, playgrounds, sports courts, and community centers. Children can play safely in designated areas while adults enjoy walking trails and recreational facilities.\n\nLocated in the suburban paradise area, Garden Estates offers a peaceful retreat from city life while maintaining excellent connectivity to schools, shopping centers, and business districts. This is the ideal setting for families seeking a balanced lifestyle.',
    features: [
      'Private Gardens',
      'Community Parks',
      'Children\'s Playgrounds',
      'Sports Facilities',
      'Walking Trails',
      'Community Center',
      'Secure Gated Community',
      'Ample Parking',
      'Modern Architecture',
      'Energy Efficient Design',
      'Low Maintenance',
      'Family-Friendly',
    ],
    amenities: [
      'Parks & Gardens',
      'Playgrounds',
      'Sports Courts',
      'Community Center',
      'Walking Trails',
      'Security',
      'Parking',
      'Landscaping',
      'Recreation Areas',
      'BBQ Areas',
      'Pet Areas',
      'Maintenance',
    ],
    completionDate: '2022',
    units: '120 Units',
  },
}

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const { openModal } = useContactModal()
  const project = projectData[params.id]

  if (!project) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
        <Link href="/projects" className="text-blue-400 hover:text-blue-300">
          Back to Projects
        </Link>
      </div>
    )
  }

  return (
    <div className="pt-32 pb-20">
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <Link
          href="/projects"
          className="inline-flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
        >
          <ArrowLeft size={20} />
          <span>Back to Projects</span>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative h-96 rounded-2xl overflow-hidden"
        >
          <Image
            src={project.images[0]}
            alt={project.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute bottom-8 left-8 right-8">
            <div className="flex items-center space-x-4 mb-4">
              <span className="px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium">
                {project.status}
              </span>
              <span className="px-4 py-2 rounded-full bg-purple-600 text-white text-sm font-medium">
                {project.type}
              </span>
            </div>
            <h1 className="text-5xl font-bold mb-2">{project.title}</h1>
            <div className="flex items-center text-gray-300">
              <MapPin size={20} className="mr-2" />
              <span className="text-lg">{project.location}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4 gradient-text">About This Project</h2>
              <div className="text-gray-300 leading-relaxed text-lg whitespace-pre-line space-y-4">
                {project.description.split('\n\n').map((paragraph: string, index: number) => (
                  <p key={index} className="mb-4">{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Project Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.images.slice(1).map((image: string, index: number) => (
                  <div key={index} className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
                    <Image
                      src={image}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6 gradient-text">Key Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {project.features.map((feature: string, index: number) => (
                  <div key={index} className="flex items-center space-x-3 p-4 rounded-lg glass-effect">
                    <div className="w-2 h-2 rounded-full bg-blue-400" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32 p-8 rounded-2xl glass-effect"
            >
              <h3 className="text-2xl font-bold mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Bed size={20} className="text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Bedrooms</div>
                    <div className="text-white font-medium">{project.bedrooms}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Bath size={20} className="text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Bathrooms</div>
                    <div className="text-white font-medium">{project.bathrooms}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Square size={20} className="text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Area</div>
                    <div className="text-white font-medium">{project.area}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Building size={20} className="text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Total Units</div>
                    <div className="text-white font-medium">{project.units}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar size={20} className="text-blue-400" />
                  <div>
                    <div className="text-sm text-gray-400">Completion</div>
                    <div className="text-white font-medium">{project.completionDate}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="text-sm text-gray-400 mb-2">Starting Price</div>
                <div className="text-3xl font-bold text-blue-400 mb-6">{project.price}</div>
                
                <button
                  onClick={openModal}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors mb-3"
                >
                  Get in Touch
                </button>
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors text-center"
                >
                  WhatsApp Us
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-white/10">
                <h4 className="text-lg font-semibold mb-4">Amenities</h4>
                <div className="space-y-2">
                  {project.amenities.map((amenity: string, index: number) => (
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      <span className="text-sm text-gray-300">{amenity}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

