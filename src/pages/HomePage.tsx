import React from 'react';
import { ArrowRight, Search, MousePointer, PenTool, Mail, ShoppingCart, Building, MapPin } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Helping Businesses Grow with SEO, PPC, Content Marketing, and More</h1>
          <p className="text-xl mb-8">Drive results with our data-driven digital marketing strategies</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">Get a Free Consultation</a>
        </div>
      </section>

      {/* Quick Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Your Full-Service Digital Marketing Partner</h2>
          <p className="text-xl text-center max-w-3xl mx-auto">
            We specialize in SEO, PPC, content marketing, email marketing, B2B marketing, e-commerce marketing, and local SEO for small businesses. Our data-driven approach ensures measurable results and sustainable growth for your business.
          </p>
        </div>
      </section>

      {/* Service Highlights */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard icon={<Search />} title="SEO" description="Boost your organic rankings and drive targeted traffic" />
            <ServiceCard icon={<MousePointer />} title="PPC" description="Maximize ROI with targeted pay-per-click campaigns" />
            <ServiceCard icon={<PenTool />} title="Content Marketing" description="Engage your audience with valuable, SEO-optimized content" />
            <ServiceCard icon={<Mail />} title="Email Marketing" description="Nurture leads and drive conversions with personalized emails" />
            <ServiceCard icon={<ShoppingCart />} title="E-commerce Marketing" description="Increase online sales and optimize your e-commerce funnel" />
            <ServiceCard icon={<Building />} title="B2B Marketing" description="Generate high-quality leads for your B2B business" />
            <ServiceCard icon={<MapPin />} title="Local SEO" description="Dominate local search results and attract nearby customers" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TestimonialCard
              quote="DigitalGrowth increased our organic traffic by 300% in just 6 months. Their SEO expertise is unmatched!"
              author="John Doe, CEO of TechStart"
            />
            <TestimonialCard
              quote="Our PPC campaigns are now generating 5x more leads at half the cost. Incredible results!"
              author="Jane Smith, Marketing Director at E-comm Solutions"
            />
            <TestimonialCard
              quote="The content strategy they developed has positioned us as thought leaders in our industry. Highly recommended!"
              author="Mike Johnson, Founder of B2B Services Inc."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Let's create a tailored digital marketing strategy for your success</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center">
            Book a Free Consultation
            <ArrowRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-gray-100 p-6 rounded-lg text-center">
    <div className="text-blue-600 text-4xl mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TestimonialCard: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <p className="text-gray-600 italic mb-4">"{quote}"</p>
    <p className="font-semibold">{author}</p>
  </div>
);

export default HomePage;