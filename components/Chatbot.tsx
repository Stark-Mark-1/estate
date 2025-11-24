'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, X, Send, ChevronRight } from 'lucide-react'
import { useContactModal } from '@/contexts/ContactModalContext'
import { useRouter } from 'next/navigation'

interface Message {
  id: number
  text: string
  isBot: boolean
  options?: string[]
}

export default function Chatbot() {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm here to help you with your real estate needs. How can I assist you today?",
      isBot: true,
      options: [
        "Looking for a new property",
        "Looking for rental property",
        "I have a plot and need construction help",
        "Want to know about upcoming projects",
        "General inquiry"
      ]
    }
  ])
  const { openModal } = useContactModal()

  const handleOptionClick = (option: string) => {
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: option,
      isBot: false
    }
    setMessages(prev => [...prev, userMessage])

    // Generate bot response based on option
    setTimeout(() => {
      let botResponse: Message = {
        id: messages.length + 2,
        text: '',
        isBot: true,
        options: []
      }

      switch (option) {
        case "Looking for a new property":
          botResponse.text = "Great! We have a wide range of properties available. You can browse our completed projects, upcoming projects, or speak with our team for personalized recommendations. Would you like to explore our projects or get in touch with our sales team?"
          botResponse.options = [
            "View completed projects",
            "View upcoming projects",
            "Get in touch with sales team"
          ]
          break
        case "Looking for rental property":
          botResponse.text = "We offer premium rental properties in prime locations. You can browse our rental listings or contact us to find the perfect rental property that matches your needs and budget."
          botResponse.options = [
            "View rental listings",
            "Get in touch about rentals"
          ]
          break
        case "I have a plot and need construction help":
          botResponse.text = "Excellent! We provide complete construction services for your plot. Our team handles everything from design to construction and delivers a finished home. We take care of all the hassles so you don't have to worry about anything."
          botResponse.options = [
            "Learn more about construction services",
            "Get in touch about construction",
            "View construction success stories"
          ]
          break
        case "Want to know about upcoming projects":
          botResponse.text = "We have several exciting upcoming projects in prime locations. These projects offer great investment opportunities with modern amenities and excellent connectivity."
          botResponse.options = [
            "View upcoming projects",
            "Get more information",
            "Schedule a site visit"
          ]
          break
        case "General inquiry":
          botResponse.text = "I'm here to help! Please let me know what information you need, or you can directly contact our team for any questions."
          botResponse.options = [
            "Get in touch",
            "Learn about our company"
          ]
          break
        case "View completed projects":
          botResponse.text = "We have completed 50+ successful projects including Skyline Towers, Oceanview Residences, and Garden Estates. Each project offers luxury living with world-class amenities."
          botResponse.options = [
            "View all projects",
            "Get in touch"
          ]
          break
        case "View upcoming projects":
          botResponse.text = "Check out our upcoming projects page to see what's coming soon. These projects offer great pre-launch pricing and investment opportunities."
          botResponse.options = [
            "Go to upcoming projects",
            "Get in touch"
          ]
          break
        case "Get in touch with sales team":
        case "Get in touch about rentals":
        case "Get in touch about construction":
        case "Get in touch":
          botResponse.text = "Perfect! Our team is ready to assist you. You can fill out our contact form or reach us via WhatsApp for immediate assistance."
          botResponse.options = [
            "Open contact form",
            "Contact via WhatsApp"
          ]
          break
        case "View rental listings":
          botResponse.text = "You can browse all our available rental properties on our rentals page. We have properties available for both short-term and long-term rentals."
          botResponse.options = [
            "Go to rentals page",
            "Get in touch"
          ]
          break
        case "Learn more about construction services":
          botResponse.text = "Our construction services include architectural design, structural planning, construction management, interior design, and final handover. We handle all permits, approvals, and quality checks. Visit our constructions page to learn more!"
          botResponse.options = [
            "Go to constructions page",
            "Get in touch"
          ]
          break
        case "View construction success stories":
          botResponse.text = "We've successfully completed numerous construction projects for our clients. Visit our constructions page to see real success stories and testimonials from satisfied customers."
          botResponse.options = [
            "Go to constructions page",
            "Get in touch"
          ]
          break
        case "View all projects":
          botResponse.text = "You can explore all our completed projects on our projects page. Each project showcases our commitment to quality and luxury."
          botResponse.options = [
            "Go to projects page",
            "Get in touch"
          ]
          break
        case "Go to upcoming projects":
          botResponse.text = "Great choice! Our upcoming projects offer excellent investment opportunities with modern amenities."
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Go to rentals page":
          botResponse.text = "Perfect! You'll find all our rental listings there. Feel free to contact us if you need any assistance."
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Go to constructions page":
          botResponse.text = "Excellent! Our constructions page has all the details about our services, process, and success stories."
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Go to projects page":
          botResponse.text = "You'll find all our completed projects there. Each one represents our commitment to excellence."
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Open contact form":
          botResponse.text = "Opening our contact form for you..."
          botResponse.options = []
          break
        case "Contact via WhatsApp":
          botResponse.text = "You can reach us on WhatsApp for immediate assistance. We're here to help!"
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Learn about our company":
          botResponse.text = "ESTATE has been a trusted name in real estate for over 15 years. We've completed 50+ projects and served 2000+ happy customers. Visit our about page to learn more!"
          botResponse.options = [
            "Go to about page",
            "Get in touch"
          ]
          break
        case "Go to about page":
          botResponse.text = "You'll learn all about our company, values, and journey there!"
          botResponse.options = [
            "Get in touch"
          ]
          break
        case "Get more information":
        case "Schedule a site visit":
          botResponse.text = "Our team would be happy to provide more information or schedule a site visit. Please get in touch with us!"
          botResponse.options = [
            "Get in touch"
          ]
          break
        default:
          botResponse.text = "Thank you for your interest! Is there anything else I can help you with?"
          botResponse.options = [
            "Get in touch",
            "Start over"
          ]
      }

      setMessages(prev => [...prev, botResponse])

      // Handle special actions
      if (option === "Open contact form") {
        setTimeout(() => {
          openModal()
        }, 500)
      } else if (option === "Contact via WhatsApp") {
        setTimeout(() => {
          window.open("https://wa.me/1234567890", "_blank")
        }, 500)
      } else if (option === "Go to upcoming projects") {
        setTimeout(() => {
          router.push("/upcoming-projects")
          setIsOpen(false)
        }, 1000)
      } else if (option === "Go to rentals page") {
        setTimeout(() => {
          router.push("/rentals")
          setIsOpen(false)
        }, 1000)
      } else if (option === "Go to constructions page") {
        setTimeout(() => {
          router.push("/constructions")
          setIsOpen(false)
        }, 1000)
      } else if (option === "Go to projects page") {
        setTimeout(() => {
          router.push("/projects")
          setIsOpen(false)
        }, 1000)
      } else if (option === "Go to about page") {
        setTimeout(() => {
          router.push("/about")
          setIsOpen(false)
        }, 1000)
      } else if (option === "Start over") {
        setTimeout(() => {
          setMessages([{
            id: 1,
            text: "Hello! I'm here to help you with your real estate needs. How can I assist you today?",
            isBot: true,
            options: [
              "Looking for a new property",
              "Looking for rental property",
              "I have a plot and need construction help",
              "Want to know about upcoming projects",
              "General inquiry"
            ]
          }])
        }, 500)
      }
    }, 500)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-accent-coral hover:bg-secondary text-white rounded-full shadow-lg flex items-center justify-center transition-colors"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="fixed bottom-24 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] h-[600px] max-h-[calc(100vh-8rem)] glass-effect rounded-2xl border border-utility-grey/20 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 border-b border-utility-grey/20 bg-white/70">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-accent-teal rounded-full flex items-center justify-center">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">ESTATE Assistant</h3>
                    <p className="text-xs text-utility-grey">We're online</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-utility-grey hover:text-primary transition-colors"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.isBot
                        ? 'bg-white text-primary border border-utility-grey/30'
                        : 'bg-accent-coral text-white'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    {message.options && message.options.length > 0 && (
                      <div className="mt-3 space-y-2">
                        {message.options.map((option, idx) => (
                          <button
                            key={idx}
                            onClick={() => handleOptionClick(option)}
                            className="w-full text-left px-3 py-2 rounded-lg bg-background hover:bg-accent-teal/20 text-sm transition-colors flex items-center justify-between group text-primary"
                          >
                            <span>{option}</span>
                            <ChevronRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                          </button>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-4 border-t border-utility-grey/20 bg-white/70">
              <p className="text-xs text-utility-grey text-center">
                Need immediate help?{' '}
                <a
                  href="https://wa.me/1234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-teal hover:text-secondary"
                >
                  WhatsApp us
                </a>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

