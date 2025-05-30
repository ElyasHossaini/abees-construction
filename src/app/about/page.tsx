import Image from 'next/image';
import Navbar from '@/components/Navbar';

export default function About() {
  const values = [
    {
      title: 'Quality Craftsmanship',
      description: 'We take pride in delivering exceptional workmanship on every project, big or small.',
      icon: '🏆',
    },
    {
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We work closely with you to bring your vision to life.',
      icon: '🤝',
    },
    {
      title: 'Reliability',
      description: 'We deliver projects on time and within budget, maintaining clear communication throughout.',
      icon: '⏰',
    },
    {
      title: 'Experience',
      description: 'With over 20 years in the industry, we have the expertise to handle any renovation challenge.',
      icon: '📋',
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl font-bold mb-6 text-black">About Our Company</h1>
              <p className="text-xl text-black mb-8">
                With over two decades of experience in home renovation and construction,
                we've built our reputation on quality craftsmanship and exceptional customer service.
              </p>
              <a 
                href="/contact"
                className="bg-blue-600 text-white px-8 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 transition-colors inline-block"
              >
                Get in Touch
              </a>
            </div>
            <div className="relative h-96">
              <Image
                src="/beelogo_full_image.png"
                alt="Abees Construction Logo"
                fill
                className="object-contain p-8"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-black">{value.title}</h3>
                <p className="text-black">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-black">Our Story</h2>
            <div className="prose prose-lg mx-auto text-black">
              <p className="mb-6">
              Abees Construction and Services Corp. is a Calgary-based construction company founded by Said Hossaini, who brings over 20 years of hands-on experience in the construction industry. Since its incorporation in April 2019, Abees Construction has been committed to delivering high-quality construction services to clients throughout Calgary and the surrounding areas. With a focus on craftsmanship, reliability, and customer satisfaction, the company has built a reputation for excellence in both residential and commercial projects.
              </p>
              <p className="mb-6">
              Operating from our location in Calgary, we offer a comprehensive range of services tailored to meet the unique needs of each client. Our dedication to quality and integrity has earned us a strong standing in the community. We are proud to have maintained a clean record with the Better Business Bureau, reflecting our commitment to ethical business practices.
              </p>
              <p>
              At Abees Construction and Services Corp., we believe that every project is an opportunity to demonstrate our expertise and dedication. Whether it's a small renovation or a large-scale construction project, our team is equipped to handle it with professionalism and attention to detail. We look forward to continuing to serve our community and building lasting relationships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-black">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-80">
                <Image
                  src="/team/founder.jpg"
                  alt="Company Founder"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-black">Said Hossaini</h3>
                <p className="text-black mb-2">Founder & Master Craftsman</p>
                <p className="text-black">
                  With over 20 years of experience in construction and renovation,
                  Said leads our team with expertise and dedication.
                </p>
              </div>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl mb-8">Let's work together to bring your vision to life.</p>
          <a 
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-md text-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Contact Us Today
          </a>
        </div>
      </section>
    </main>
  );
} 