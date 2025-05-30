import Navbar from '@/components/Navbar';
import ContactForm from '@/components/ContactForm';

export default function Contact() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4 text-black">Contact Us</h1>
          <p className="text-xl text-black max-w-3xl mx-auto">
            Ready to start your project? Get in touch with us today for a free consultation.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <ContactForm />

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-black">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-black">Address</h3>
                    <p className="text-black">64 Hidden Point NW</p>
                    <p className="text-black">Calgary, Alberta</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Phone</h3>
                    <p className="text-black">(403) 921-6590</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Email</h3>
                    <p className="text-black">abeesconstructionandservices@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-black">Hours</h3>
                    <p className="text-black">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-black">Saturday: By appointment</p>
                    <p className="text-black">Sunday: Closed</p>
                  </div>
                </div>
              </div>

              {/* Service Area */}
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-6 text-black">Service Area</h2>
                <p className="text-black mb-4">
                  We proudly serve the following areas and surrounding communities:
                </p>
                <ul className="list-disc list-inside text-black space-y-2">
                  <li>Calgary</li>
                  <li>Airdrie</li>
                  <li>Cochrane</li>
                  <li>Okotoks</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 