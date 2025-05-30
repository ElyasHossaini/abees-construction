'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import ImageModal from '@/components/ImageModal';

interface ModalImage {
  src: string;
  alt: string;
}

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState<ModalImage | null>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'featured', label: 'Featured' },
    { id: 'kitchens', label: 'Kitchens' },
    { id: 'bathrooms', label: 'Bathrooms' },
    { id: 'basements', label: 'Basements' },
    { id: 'living-rooms', label: 'Living Rooms' },
    { id: 'custom-work', label: 'Custom Work' },
    { id: 'tiling', label: 'Tiling' },
    { id: 'flooring', label: 'Flooring' },
    { id: 'outdoor', label: 'Outdoor' },
    { id: 'before-after', label: 'Before & After' }
  ];

  const projectGallery = [
    // Featured Projects
    {
      category: 'featured',
      image: '/images/hero/gallery-img-9486.jpg',
      alt: 'Featured kitchen renovation with modern design'
    },
    {
      category: 'featured',
      image: '/images/hero/gallery-img-7054.jpg',
      alt: 'Featured custom interior transformation'
    },
    {
      category: 'featured',
      image: '/images/hero/gallery-img-5462.jpg',
      alt: 'Featured bathroom renovation with luxury finishes'
    },
    {
      category: 'featured',
      image: '/images/hero/gallery-img-5459.jpg',
      alt: 'Featured home renovation project'
    },
    {
      category: 'featured',
      image: '/images/hero/gallery-img-3995.jpg',
      alt: 'Featured custom home design'
    },
    {
      category: 'featured',
      image: '/images/hero/gallery-img-2477.jpg',
      alt: 'Featured interior transformation'
    },

    // Kitchen Projects
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-9487.jpg',
      alt: 'Modern kitchen renovation with custom cabinetry',
      title: 'Modern Kitchen Design'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-6207.jpg',
      alt: 'Luxury kitchen renovation before',
      title: 'Classic Kitchen Transformation'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-6208.jpg',
      alt: 'Luxury kitchen renovation after',
      title: 'Modern Kitchen Makeover'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-7324.jpg',
      alt: 'Contemporary kitchen with island',
      title: 'Contemporary Kitchen'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-7318.jpg',
      alt: 'Elegant kitchen design',
      title: 'Elegant Kitchen Design'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-7060.jpg',
      alt: 'Custom kitchen cabinetry',
      title: 'Custom Cabinetry'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-6675.jpg',
      alt: 'Modern kitchen with premium finishes',
      title: 'Premium Kitchen Finishes'
    },
    {
      category: 'kitchens',
      image: '/images/kitchens/gallery-img-2478.jpg',
      alt: 'Spacious kitchen renovation',
      title: 'Spacious Kitchen Design'
    },

    // Bathroom Projects
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-7573.jpg',
      alt: 'Luxury master bathroom renovation',
      title: 'Master Bathroom Suite'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-7535.jpg',
      alt: 'Modern bathroom with custom shower',
      title: 'Modern Bathroom Design'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-7052.jpg',
      alt: 'Contemporary bathroom renovation',
      title: 'Contemporary Bathroom'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-5468.jpg',
      alt: 'Spa-like bathroom design',
      title: 'Spa Bathroom Retreat'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-5327.jpg',
      alt: 'Elegant bathroom renovation',
      title: 'Elegant Bathroom'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-3563.jpg',
      alt: 'Custom bathroom with premium fixtures',
      title: 'Premium Bathroom'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-3562.jpg',
      alt: 'Master bathroom transformation',
      title: 'Bathroom Transformation'
    },
    {
      category: 'bathrooms',
      image: '/images/bathrooms/gallery-img-2587.jpg',
      alt: 'Modern guest bathroom',
      title: 'Guest Bathroom'
    },

    // Basement Projects
    {
      category: 'basements',
      image: '/images/basements/gallery-img-6671.jpg',
      alt: 'Luxury basement development',
      title: 'Luxury Basement'
    },
    {
      category: 'basements',
      image: '/images/basements/gallery-img-2857.jpg',
      alt: 'Entertainment space in basement',
      title: 'Entertainment Space'
    },
    {
      category: 'basements',
      image: '/images/basements/gallery-img-2066.jpg',
      alt: 'Modern basement renovation',
      title: 'Modern Basement'
    },
    {
      category: 'basements',
      image: '/images/basements/gallery-img-2053.jpg',
      alt: 'Family recreation room',
      title: 'Recreation Room'
    },
    {
      category: 'basements',
      image: '/images/basements/gallery-img-1974.jpg',
      alt: 'Custom basement design',
      title: 'Custom Basement'
    },
    {
      category: 'basements',
      image: '/images/basements/gallery-img-1966.jpg',
      alt: 'Basement living space',
      title: 'Living Space'
    },

    // Custom Work Projects
    {
      category: 'custom-work',
      image: '/images/custom-work/gallery-img-8518.jpg',
      alt: 'Custom built-in cabinetry',
      title: 'Custom Built-ins'
    },
    {
      category: 'custom-work',
      image: '/images/custom-work/gallery-img-8512.jpg',
      alt: 'Custom woodwork and trim',
      title: 'Custom Woodwork'
    },
    {
      category: 'custom-work',
      image: '/images/custom-work/gallery-img-7480.jpg',
      alt: 'Custom storage solutions',
      title: 'Storage Solutions'
    },

    // Outdoor Projects
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-8527.jpg',
      alt: 'Custom deck with outdoor kitchen',
      title: 'Outdoor Kitchen'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-7371.jpg',
      alt: 'Luxury deck design',
      title: 'Luxury Deck'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-7369.jpg',
      alt: 'Custom pergola and deck',
      title: 'Pergola & Deck'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-7368.jpg',
      alt: 'Outdoor living space',
      title: 'Outdoor Living'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-5089.jpg',
      alt: 'Custom landscaping design',
      title: 'Landscaping Design'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-5088.jpg',
      alt: 'Outdoor entertainment area',
      title: 'Entertainment Area'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-4621.jpg',
      alt: 'Custom patio design',
      title: 'Patio Design'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-2708.jpg',
      alt: 'Outdoor renovation project',
      title: 'Outdoor Renovation'
    },
    {
      category: 'outdoor',
      image: '/images/outdoor/gallery-img-2707.jpg',
      alt: 'Custom outdoor features',
      title: 'Outdoor Features'
    },

    // Living Rooms Projects
    {
      category: 'living-rooms',
      image: '/images/living-rooms/gallery-img-7074.jpg',
      alt: 'Modern living room renovation'
    },
    {
      category: 'living-rooms',
      image: '/images/living-rooms/gallery-img-7073.jpg',
      alt: 'Contemporary living space design'
    },
    {
      category: 'living-rooms',
      image: '/images/living-rooms/gallery-img-6553.jpg',
      alt: 'Custom living room transformation'
    },

    // Tiling Projects
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-6156.jpg',
      alt: 'Custom tile installation'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-6155.jpg',
      alt: 'Modern tile design'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-6154.jpg',
      alt: 'Bathroom tile work'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-6153.jpg',
      alt: 'Kitchen backsplash design'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-6117.jpg',
      alt: 'Custom shower tile installation'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-3991.jpg',
      alt: 'Floor tile pattern design'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-1471.jpg',
      alt: 'Decorative tile work'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-1470.jpg',
      alt: 'Mosaic tile design'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-0190.jpg',
      alt: 'Custom tile pattern'
    },
    {
      category: 'tiling',
      image: '/images/tiling/gallery-img-0186.jpg',
      alt: 'Bathroom floor tiling'
    },

    // Flooring Projects
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-7307.jpg',
      alt: 'Hardwood flooring installation'
    },
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-7303.jpg',
      alt: 'Custom floor design'
    },
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-7302.jpg',
      alt: 'Modern flooring solution'
    },
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-7056.jpg',
      alt: 'Premium flooring installation'
    },
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-7055.jpg',
      alt: 'Engineered hardwood floors'
    },
    {
      category: 'flooring',
      image: '/images/flooring/gallery-img-3721.jpg',
      alt: 'Custom floor pattern'
    },

    // Before & After Projects
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-7009.jpg',
      alt: 'Kitchen renovation before'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-6963.jpg',
      alt: 'Bathroom transformation after'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-6373.jpg',
      alt: 'Kitchen renovation after'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-6349.jpg',
      alt: 'Bathroom transformation before'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-5797.jpg',
      alt: 'Living room makeover after'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-5569.jpg',
      alt: 'Living room makeover before'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-5484.jpg',
      alt: 'Basement renovation before'
    },
    {
      category: 'before-after',
      image: '/images/before-after/gallery-img-5321.jpg',
      alt: 'Basement renovation after'
    }
  ];

  const openModal = (src: string, alt: string) => {
    setSelectedImage({ src, alt });
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const filteredProjects = activeCategory === 'all' 
    ? projectGallery 
    : projectGallery.filter(project => project.category === activeCategory);

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Project Gallery */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Project Gallery</h2>
          
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full text-lg font-medium transition-colors ${
                  activeCategory === category.id
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project, index) => (
              <div 
                key={index}
                className="relative h-72 group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => openModal(project.image, project.alt)}
              >
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <ImageModal
          src={selectedImage.src}
          alt={selectedImage.alt}
          onClose={closeModal}
        />
      )}
    </main>
  );
} 