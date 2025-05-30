import Image from 'next/image';
import Navbar from '@/components/Navbar';
import StarRating from '@/components/StarRating';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Homeowner',
      image: '/testimonials/sarah.jpg',
      quote: 'The team did an incredible job renovating our kitchen. Their attention to detail and professionalism exceeded our expectations. We love our new space!',
      project: 'Kitchen Renovation',
      rating: 5
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Property Developer',
      image: '/testimonials/michael.jpg',
      quote: 'I\'ve worked with many contractors over the years, but this team stands out. Their work quality and project management are exceptional.',
      project: 'Multi-Unit Renovation',
      rating: 5
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Homeowner',
      image: '/testimonials/emily.jpg',
      quote: 'Our bathroom remodel was completed on time and within budget. The craftsmanship is outstanding, and we couldn\'t be happier with the results.',
      project: 'Bathroom Remodel',
      rating: 5
    },
    {
      id: 4,
      name: 'David Thompson',
      role: 'Homeowner',
      image: '/testimonials/david.jpg',
      quote: 'The basement development was a game-changer for our home. The team was professional, clean, and delivered exactly what we envisioned. The new entertainment space is perfect for our family.',
      project: 'Basement Development',
      rating: 5
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      role: 'Business Owner',
      image: '/testimonials/lisa.jpg',
      quote: 'They renovated our office space while we remained operational. Their ability to work around our schedule and maintain a clean, safe environment was impressive. The end result is beautiful and functional.',
      project: 'Commercial Renovation',
      rating: 5
    },
    {
      id: 6,
      name: 'James Wilson',
      role: 'Homeowner',
      image: '/testimonials/james.jpg',
      quote: 'The custom carpentry work in our home is absolutely stunning. From built-in shelves to crown molding, every detail was executed perfectly. Their craftsmen are true artists.',
      project: 'Custom Carpentry',
      rating: 5
    },
    {
      id: 7,
      name: 'Amanda Foster',
      role: 'Homeowner',
      image: '/testimonials/amanda.jpg',
      quote: 'The outdoor living space they created is beyond our wildest dreams. The deck, pergola, and custom lighting have made our backyard an extension of our home. We use it all summer long!',
      project: 'Outdoor Living Space',
      rating: 5
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Restaurant Owner',
      image: '/testimonials/robert.jpg',
      quote: 'They transformed our outdated restaurant into a modern dining space while keeping our heritage elements intact. The renovation was completed ahead of schedule, minimizing our downtime.',
      project: 'Restaurant Renovation',
      rating: 5
    },
    {
      id: 9,
      name: 'Patricia Hughes',
      role: 'Homeowner',
      image: '/testimonials/patricia.jpg',
      quote: 'The team\'s expertise in flooring installation was evident. They helped us choose the perfect hardwood and their installation was flawless. Our home looks completely transformed!',
      project: 'Hardwood Flooring Installation',
      rating: 4.9
    },
    {
      id: 10,
      name: 'Hassan Ahmed',
      role: 'Property Manager',
      image: '/testimonials/hassan.jpg',
      quote: 'Managing multiple condo unit renovations was made easy with their organized approach. Their team coordinated perfectly with our schedule and residents\' needs.',
      project: 'Multi-Unit Condo Renovation',
      rating: 5
    },
    {
      id: 11,
      name: 'Grace Taylor',
      role: 'Homeowner',
      image: '/testimonials/grace.jpg',
      quote: 'The custom tile work in our master bathroom is a masterpiece. Their attention to pattern alignment and grout work shows their dedication to perfection.',
      project: 'Custom Tile Installation',
      rating: 5
    },
    {
      id: 12,
      name: 'Marcus Bennett',
      role: 'Real Estate Investor',
      image: '/testimonials/marcus.jpg',
      quote: 'Their ability to modernize older homes while maintaining character is remarkable. They\'ve helped me increase property values significantly through thoughtful renovations.',
      project: 'Heritage Home Renovation',
      rating: 4.8
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl text-black font-bold mb-4">Client Testimonials</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about their experience working with us.
          </p>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded-lg shadow-md p-6">
                <div className="mb-4">
                  <h3 className="font-semibold text-lg text-black">{testimonial.name}</h3>
                  <p className="text-black">{testimonial.role}</p>
                  <StarRating rating={testimonial.rating} className="mt-1" />
                </div>
                <blockquote className="text-black mb-4">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t pt-4">
                  <p className="text-sm text-black">
                    Project: <span className="font-medium">{testimonial.project}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white mt-12">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Join Our Satisfied Clients</h2>
          <p className="text-xl mb-8">Ready to start your dream renovation project? Let's make it happen.</p>
          <a 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Get Started
          </a>
        </div>
      </section>
    </main>
  );
} 