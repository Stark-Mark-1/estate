import type { Metadata } from 'next'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import { ContactModalProvider } from '@/contexts/ContactModalContext'
import ContactModalWrapper from '@/components/ContactModalWrapper'
import Chatbot from '@/components/Chatbot'

export const metadata: Metadata = {
  title: 'Premium Real Estate | Luxury Properties & Developments',
  description: 'Discover premium real estate properties, upcoming projects, and luxury developments. Your trusted partner in real estate.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        <ContactModalProvider>
          <Navigation />
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <ContactModalWrapper />
          <Chatbot />
        </ContactModalProvider>
      </body>
    </html>
  )
}

