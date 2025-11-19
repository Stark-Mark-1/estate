'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ExternalLink, Calendar, Newspaper } from 'lucide-react'

export default function MediaCoverage() {
  const articles = [
    {
      id: 1,
      title: 'ESTATE Wins Best Developer Award 2024',
      publication: 'Real Estate Today',
      date: 'March 15, 2024',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      excerpt: 'ESTATE has been recognized as the Best Real Estate Developer of the year for their exceptional projects and customer service.',
      link: '#',
      category: 'Awards',
    },
    {
      id: 2,
      title: 'Skyline Towers: Redefining Urban Living',
      publication: 'Architecture Digest',
      date: 'February 28, 2024',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      excerpt: 'An in-depth look at how ESTATE\'s Skyline Towers project is setting new standards for luxury residential developments.',
      link: '#',
      category: 'Feature',
    },
    {
      id: 3,
      title: 'Sustainable Development: ESTATE\'s Eco Park Initiative',
      publication: 'Green Building Magazine',
      date: 'February 10, 2024',
      image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
      excerpt: 'ESTATE leads the way in sustainable construction with their innovative Eco Park Residences project.',
      link: '#',
      category: 'Sustainability',
    },
    {
      id: 4,
      title: 'Record Sales at Oceanview Residences Launch',
      publication: 'Business Times',
      date: 'January 22, 2024',
      image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&h=600&fit=crop',
      excerpt: 'ESTATE\'s Oceanview Residences sees unprecedented demand with 80% of units sold in the first week.',
      link: '#',
      category: 'Business',
    },
    {
      id: 5,
      title: 'Tech Hub Towers: The Future of Commercial Real Estate',
      publication: 'Tech Real Estate',
      date: 'January 5, 2024',
      image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800&h=600&fit=crop',
      excerpt: 'ESTATE announces Tech Hub Towers, a revolutionary commercial complex designed for the digital age.',
      link: '#',
      category: 'Innovation',
    },
    {
      id: 6,
      title: 'ESTATE Celebrates 15 Years of Excellence',
      publication: 'Real Estate Weekly',
      date: 'December 18, 2023',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      excerpt: 'ESTATE marks 15 years in the industry with a celebration of achievements and future plans.',
      link: '#',
      category: 'Company News',
    },
    {
      id: 7,
      title: 'Luxury Penthouses: The Ultimate in High-End Living',
      publication: 'Luxury Living Magazine',
      date: 'December 1, 2023',
      image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      excerpt: 'A preview of ESTATE\'s upcoming ultra-luxury penthouse development, featuring world-class amenities.',
      link: '#',
      category: 'Luxury',
    },
    {
      id: 8,
      title: 'ESTATE Partners with Leading Architects',
      publication: 'Design & Build',
      date: 'November 15, 2023',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      excerpt: 'ESTATE announces strategic partnerships with internationally renowned architecture firms.',
      link: '#',
      category: 'Partnerships',
    },
    {
      id: 9,
      title: 'Customer Satisfaction: ESTATE Tops Industry Rankings',
      publication: 'Real Estate Review',
      date: 'November 2, 2023',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
      excerpt: 'ESTATE achieves the highest customer satisfaction rating in the industry for the third consecutive year.',
      link: '#',
      category: 'Recognition',
    },
  ]

  const categories = ['All', 'Awards', 'Feature', 'Sustainability', 'Business', 'Innovation', 'Company News', 'Luxury', 'Partnerships', 'Recognition']

  return (
    <div className="pt-32 pb-20">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h1 className="text-6xl font-bold mb-6 gradient-text">Media Coverage</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Stay updated with the latest news, features, and recognition of ESTATE in the media
          </p>
        </motion.div>
      </section>

      {/* Articles Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <Link href={article.link}>
                <div className="rounded-2xl glass-effect hover-lift overflow-hidden h-full flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-blue-600 text-white text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center text-xs text-gray-400 mb-3">
                      <Newspaper size={14} className="mr-2" />
                      <span>{article.publication}</span>
                      <span className="mx-2">•</span>
                      <Calendar size={14} className="mr-2" />
                      <span>{article.date}</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-400 transition-colors">
                      {article.title}
                    </h2>
                    <p className="text-gray-400 text-sm mb-4 flex-1">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center text-blue-400 text-sm font-medium">
                      <span>Read More</span>
                      <ExternalLink size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Press Kit CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center p-12 rounded-2xl glass-effect"
        >
          <h2 className="text-4xl font-bold mb-4 gradient-text">Media Inquiries</h2>
          <p className="text-xl text-gray-400 mb-8">
            For press inquiries, interviews, or media kit requests, please contact our media relations team
          </p>
          <a
            href="mailto:media@estate.com"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            <span>Contact Media Team</span>
            <ExternalLink size={20} />
          </a>
        </motion.div>
      </section>
    </div>
  )
}

