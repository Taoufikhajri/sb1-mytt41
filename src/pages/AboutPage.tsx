import React from 'react';
import { Target, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About DigitalGrowth</h1>
          <p className="text-xl">Your partner in data-driven digital marketing success</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Our Mission</h2>
            <p className="text-xl mb-8">
              At DigitalGrowth, our mission is to empower businesses of all sizes with cutting-edge digital marketing strategies that drive measurable results and sustainable growth. We believe in the power of data-driven decision-making and tailored solutions to help our clients thrive in the ever-evolving digital landscape.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <ValueCard
                icon={<Target className="w-12 h-12 text-blue-600" />}
                title="Results-Driven"
                description="We focus on delivering measurable outcomes that directly impact your bottom line."
              />
              <ValueCard
                icon={<Users className="w-12 h-12 text-blue-600" />}
                title="Client-Centric"
                description="Your success is our success. We work closely with you to understand and achieve your goals."
              />
              <ValueCard
                icon={<Award className="w-12 h-12 text-blue-600" />}
                title="Innovation"
                description="We stay ahead of industry trends to provide you with cutting-edge marketing solutions."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Expert Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <TeamMember
              name="Sarah Johnson"
              role="SEO Specialist"
              image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Michael Chen"
              role="PPC Expert"
              image="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="Emily Rodriguez"
              role="Content Strategist"
              image="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            />
            <TeamMember
              name="David Kim"
              role="Analytics Manager"
              image="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Why Choose DigitalGrowth?</h2>
          <ul className="max-w-2xl mx-auto text-left list-disc pl-6 space-y-4">
            <li>Tailored strategies that align with your unique business goals</li>
            <li>A data-driven approach that ensures measurable results</li>
            <li>Transparent reporting and regular communication</li>
            <li>A team of certified experts across all digital marketing disciplines</li>
            <li>Cutting-edge tools and technologies to stay ahead of the competition</li>
            <li>Proven track record of success across various industries</li>
          </ul>
          <a href="/contact" className="mt-12 inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300">
            Start Your Growth Journey
          </a>
        </div>
      </section>
    </div>
  );
};

const ValueCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
  <div className="text-center">
    <div className="flex justify-center mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p>{description}</p>
  </div>
);

const TeamMember: React.FC<{ name: string; role: string; image: string }> = ({ name, role, image }) => (
  <div className="text-center">
    <img src={image} alt={name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
    <h3 className="text-xl font-semibold">{name}</h3>
    <p className="text-gray-600">{role}</p>
  </div>
);

export default AboutPage;