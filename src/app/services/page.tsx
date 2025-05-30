import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'Home Renovation',
      description: 'Complete home makeovers that transform your living space. From floor to ceiling, we handle every aspect of your renovation with expert care.',
      icon: '🏠',
      features: [
        'Kitchen remodeling',
        'Bathroom renovations',
        'Room additions',
        'Interior design consultation',
        'Project management',
      ]
    },
    {
      title: 'Basement Development',
      description: 'Transform your basement into a functional and beautiful living space. Our expert team handles everything from design to completion.',
      icon: '🏗️',
      features: [
        'Full basement finishing',
        'Basement bathroom addition',
        'Entertainment rooms',
        'Legal basement suites',
        'Waterproofing & insulation',
      ]
    },
    {
      title: 'Bathroom Remodeling',
      description: 'Create your dream bathroom with our expert renovation services. We specialize in modern designs with premium fixtures and finishes.',
      icon: '🛁',
      features: [
        'Custom shower installation',
        'Luxury fixtures and fittings',
        'Tile work and waterproofing',
        'Vanity and cabinet installation',
        'Lighting and ventilation',
      ]
    },
    {
      title: 'Custom Carpentry',
      description: 'Bespoke woodwork crafted to your exact specifications. Our master carpenters create beautiful, functional pieces that enhance your home.',
      icon: '🔨',
      features: [
        'Custom cabinets',
        'Built-in shelving',
        'Custom trim work',
        'Architectural details',
        'Custom furniture',
      ]
    },
    {
      title: 'Flooring Installation',
      description: 'Expert installation of various flooring types to enhance the beauty and value of your home.',
      icon: '🪜',
      features: [
        'Hardwood flooring',
        'Engineered wood',
        'Luxury vinyl plank',
        'Laminate flooring',
        'Custom inlays and borders',
      ]
    },
    {
      title: 'Professional Tiling',
      description: 'Expert tile installation services for any room in your home. We work with all types of tiles to create stunning, durable surfaces.',
      icon: '🔲',
      features: [
        'Floor tile installation',
        'Wall tile installation',
        'Custom backsplashes',
        'Shower and tub surrounds',
        'Decorative tile work',
      ]
    },
    {
      title: 'Deck Construction',
      description: 'Custom deck design and construction that extends your living space outdoors. We create beautiful, durable decks built to last.',
      icon: '🏡',
      features: [
        'Custom deck design',
        'Multiple material options',
        'Built-in seating',
        'Pergolas and shade structures',
        'Lighting installation',
      ]
    },
    {
      title: 'Fence Installation',
      description: 'Professional fence installation services to enhance your property\'s security and appeal. We offer various styles and materials to suit your needs.',
      icon: '🏰',
      features: [
        'Wood fence installation',
        'Chain link fencing',
        'Vinyl fencing',
        'Custom gate design',
        'Privacy screens',
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl text-black font-bold text-center mb-4">Our Services</h1>
          <p className="text-xl text-black max-w-3xl mx-auto text-center">
            We offer a comprehensive range of construction and renovation services to transform your home.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-8">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h2 className="text-2xl font-bold mb-4 text-black">{service.title}</h2>
                  <p className="text-black mb-6">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-black">
                        <span className="mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={`/portfolio#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
                    className="inline-block bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                  >
                    View Projects
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-white mb-8">Contact us today for a free consultation and estimate.</p>
          <a 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Free Estimate
          </a>
        </div>
      </section>
    </main>
  );
} 