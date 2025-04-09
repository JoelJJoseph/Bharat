'use client';

import { useState } from 'react';
import { Phone, Mail, X } from 'lucide-react';
import Link from 'next/link';

export function ContactFloat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-lg shadow-lg p-4 mb-4 w-64">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-gray-800">Contact Us</h3>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <X size={18} />
            </button>
          </div>
          <div className="space-y-3">
            <a 
              href="tel:+919876543210" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Phone size={16} className="mr-2" />
              <span>+91 98765 43210</span>
            </a>
            <a 
              href="mailto:info@bharatalternates.com" 
              className="flex items-center text-gray-700 hover:text-blue-600 transition-colors"
            >
              <Mail size={16} className="mr-2" />
              <span>info@bharatalternates.com</span>
            </a>
            <Link 
              href="/contact" 
              className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors"
            >
              Contact Form
            </Link>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
          aria-label="Contact Us"
        >
          <Phone size={24} />
        </button>
      )}
    </div>
  );
} 