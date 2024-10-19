import React from 'react';
import { Search, MousePointer, PenTool, Mail, ShoppingCart, Building, MapPin } from 'lucide-react';

const ServicesPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h1>
          <p className="text-xl">Comprehensive digital marketing solutions to grow your business</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Digital Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard
              icon={<Search className="w-12 h-12" />}
              title="Search Engine Optimization (SEO)"
              description="Boost your organic rankings and drive targeted traffic to your website with our comprehensive SEO services. We optimize on-page elements, build high-quality backlinks, and improve technical SEO to increase your search visibility."
            />
            <ServiceCard
              icon={<MousePointer className="w-12 h-12" />}
              title="Pay-Per-Click (PPC) Advertising"
              description="Maximize your ROI with targeted PPC campaigns across platforms like Google Ads, Bing Ads, and social media. Our PPC experts create and optimize campaigns to drive high-quality traffic and conversions while minimizing costs."
            />
            <ServiceCard
              icon={<PenTool className="w-12 h-12" />}
              title="Content Marketing"
              description="Engage your audience and build brand authority with our content marketing services. From blog posts and infographics to videos and podcasts, we create SEO-optimized, valuable content that resonates with your target audience and drives organic traffic."
            />
            <ServiceCard
              icon={<Mail className="w-12 h-12" />}
              title="Email Marketing"
              description="Nurture leads and boost conversions with our email marketing services. We create personalized, targeted email campaigns, implement automation workflows, and optimize for higher open rates and click-through rates."
            />
            <ServiceCard
              icon={<ShoppingCart className="w-12 h-12" />}
              title="E-commerce Marketing"
              description="Boost your online sales with our e-commerce marketing solutions. We optimize product listings, implement Google Shopping campaigns, create retargeting strategies, and improve conversion rates to grow your e-commerce business."
            />
            <ServiceCard
              icon={<Building className="w-12 h-12" />}
              title="B2B Marketing"
              description="Generate high-quality leads for your B2B business with our specialized marketing services. We leverage LinkedIn marketing, account-based marketing (ABM) strategies, and targeted content to reach decision-makers and nurture valuable business relationships."
            />
            <ServiceCard
              icon={<MapPin className="w-12 h-12" />}
              title="Local SEO for Small Businesses"
              description="Dominate local search results and attract nearby customers with our local SEO services. We optimize your Google My Business profile, manage local citations and directory listings, and implement location-based strategies to increase your visibility in local searches."
            />
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Our Approach</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            At DigitalGrowth, we take a data-driven, results-oriented approach to digital marketing. Our process ensures that we deliver tailored solutions that align with your business goals and drive measurable results.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <ProcessStep number={1} title="Discovery & Analysis" description="We start by understanding your business, goals, and target audience." />
            <ProcessStep number={2} title="Strategy Development" description="We create a customized digital marketing strategy tailored to your needs." />
            <ProcessStep number={3} title="Implementation" description="Our experts execute the strategy across chosen channels and platforms." />
            <ProcessStep number={4} title="Monitoring & Optimization" description="We continuously track performance and optimize for better results." />
          </div>
        </div>
      </section>

      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Ready to Grow Your Business?</h2>
          <p className="text-xl mb-8">Let's create a tailored digital marketing strategy for your success</p>
          <a href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-100 transition duration-300">
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
};

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="bg-white p-6 rounded-lg shadow-md">
    <div className="text-blue-600 mb-4 flex justify-center">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const ProcessStep: React.FC<{ number: number; title: string; description: string }> = ({ number, title, description }) => (
  <div>
    <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-xl font-bold mb-4 mx-auto">{number}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

export default ServicesPage;