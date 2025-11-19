'use client'

import { useContactModal } from '@/contexts/ContactModalContext'
import ContactForm from './ContactForm'

export default function ContactModalWrapper() {
  const { isOpen, closeModal } = useContactModal()
  return <ContactForm isOpen={isOpen} onClose={closeModal} />
}


