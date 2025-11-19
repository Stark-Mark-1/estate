'use client'

import { useState } from 'react'
import { X, Phone, Mail, MessageCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactFormProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    number: '',
    requirement: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
    setFormData({ name: '', number: '', requirement: '' })
    onClose()
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div 
              className="bg-gray-900 rounded-2xl p-8 max-w-md w-full glass-effect border border-white/10 relative pointer-events-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>

              <h2 className="text-2xl font-bold mb-6 gradient-text">Get in Touch</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label htmlFor="number" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="number"
                    required
                    value={formData.number}
                    onChange={(e) => setFormData({ ...formData, number: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="+1 (234) 567-8900"
                  />
                </div>

                <div>
                  <label htmlFor="requirement" className="block text-sm font-medium text-gray-300 mb-2">
                    Requirement
                  </label>
                  <textarea
                    id="requirement"
                    required
                    value={formData.requirement}
                    onChange={(e) => setFormData({ ...formData, requirement: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg glass-effect border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    placeholder="Tell us about your requirement..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Submit Inquiry
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-sm text-gray-400 mb-4 text-center">Or contact us directly:</p>
                <div className="grid grid-cols-3 gap-3">
                  <a
                    href="tel:+1234567890"
                    className="flex flex-col items-center justify-center p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors group"
                  >
                    <Phone size={20} className="text-blue-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-400 group-hover:text-white">Call</span>
                  </a>
                  <a
                    href="https://wa.me/1234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors group"
                  >
                    <MessageCircle size={20} className="text-green-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-400 group-hover:text-white">WhatsApp</span>
                  </a>
                  <a
                    href="mailto:info@estate.com"
                    className="flex flex-col items-center justify-center p-3 rounded-lg glass-effect hover:bg-white/10 transition-colors group"
                  >
                    <Mail size={20} className="text-purple-400 mb-1 group-hover:scale-110 transition-transform" />
                    <span className="text-xs text-gray-400 group-hover:text-white">Email</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

