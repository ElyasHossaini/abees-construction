import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Slideshow from '@/components/Slideshow';

export default function Home() {
  // Array of slideshow images - you'll need to replace these with your actual image paths
  const slideshowImages = [
    '/images/hero/gallery-img-9486.jpg',  // Modern kitchen showcase
    '/images/hero/gallery-img-5462.jpg',  // Luxury bathroom design
    '/images/hero/gallery-img-5459.jpg',  // Custom renovation work
    '/images/hero/gallery-img-7054.jpg',  // Interior transformation
    '/images/hero/gallery-img-3995.jpg',  // Professional craftsmanship
    '/images/hero/gallery-img-2477.jpg'   // Home improvement excellence
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen">
        <Slideshow images={slideshowImages} interval={6000} />
        <div className="relative h-full flex items-center justify-center text-center text-white z-20">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Transform Your Home With Expert Craftsmanship
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Professional renovation and construction services with over 20 years of experience
            </p>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Free Estimate
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/luxary-kitchen.jpg"
                  alt="Modern kitchen renovation in Calgary featuring custom white cabinets, quartz countertops, and stainless steel appliances"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Modern Wetbar Renovation</h3>
                <p className="text-black">Complete wetbar transformation with custom cabinets, quartz countertops, and premium finishes.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/luxary-basement.jpg"
                  alt="Luxury basement development in Calgary with custom entertainment space and modern finishes"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Luxury Basement Development</h3>
                <p className="text-black">Full basement transformation featuring entertainment space, custom lighting, and modern finishes.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/luxary-bathroom.jpg"
                  alt="Custom bathroom renovation in Calgary with premium fixtures and elegant tile work"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Luxury Bathroom Remodel</h3>
                <p className="text-black">Stunning bathroom renovation with custom tile work, premium fixtures, and elegant design.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/custom-carpentry.jpg"
                  alt="Custom carpentry work in Calgary home featuring built-in shelving and storage solutions"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Custom Carpentry</h3>
                <p className="text-black">Bespoke carpentry work featuring custom built-ins, shelving, and unique storage solutions.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/complete-home-reno.jpg"
                  alt="Complete home renovation in Calgary showcasing modern design and premium finishes"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Complete Home Renovation</h3>
                <p className="text-black">Full home transformation with modern design, premium materials, and expert craftsmanship.</p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/images/front-page-projects/exterior.jpg"
                  alt="Exterior renovation in Calgary featuring custom deck and landscaping"
                  fill
                  className="object-cover"
                  loading="eager"
                  priority={true}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Exterior Transformation</h3>
                <p className="text-black">Beautiful exterior renovation with custom deck work and professional landscaping.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏠</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Home Renovation</h3>
              <p className="text-black">Complete home makeovers that bring your vision to life.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏗️</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Basement Development</h3>
              <p className="text-black">Expert basement finishing and development services.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🛁</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Bathroom Remodeling</h3>
              <p className="text-black">Modern bathroom designs with premium fixtures and finishes.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔨</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Custom Carpentry</h3>
              <p className="text-black">Bespoke woodwork and custom built-ins for your home.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🪜</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Flooring Installation</h3>
              <p className="text-black">Expert installation of hardwood, laminate, vinyl, and engineered flooring.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🔲</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Professional Tiling</h3>
              <p className="text-black">Custom tile installation for floors, walls, backsplashes, and showers.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Deck Construction</h3>
              <p className="text-black">Custom deck design and construction with premium materials.</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-4">🏰</div>
              <h3 className="text-xl font-semibold mb-2 text-black">Fence Installation</h3>
              <p className="text-black">Professional fence installation with various styles and materials.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12 text-black">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"Exceptional work! They transformed our outdated kitchen into a modern masterpiece. Highly recommended!"</p>
              <p className="font-semibold text-black">- Sarah Johnson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"The basement development exceeded our expectations. Professional team, excellent communication, and outstanding results. Our new entertainment space is perfect!"</p>
              <p className="font-semibold text-black">- Mike Anderson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"We hired them for a complete bathroom renovation. The attention to detail and quality of work was impressive. They finished on time and within budget."</p>
              <p className="font-semibold text-black">- Emily Chen</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"Their custom carpentry work is amazing! They built beautiful built-in shelves and a custom entertainment center that perfectly matches our home's style."</p>
              <p className="font-semibold text-black">- David Thompson</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"The new hardwood flooring throughout our home is absolutely stunning. The team's attention to detail with the custom inlays really made our floors a standout feature."</p>
              <p className="font-semibold text-black">- Jennifer Martinez</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-black mb-4">"Our new deck and fence have completely transformed our backyard. The craftsmanship is outstanding, and they helped us choose the perfect materials for our climate."</p>
              <p className="font-semibold text-black">- Robert Wilson</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Contact us today for a free consultation and estimate.</p>
          <Link 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
} 