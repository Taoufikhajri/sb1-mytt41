import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CaseStudiesPage: React.FC = () => {
  const { caseStudies } = useAppContext();

  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Case Studies</h1>
          <p className="text-xl">Real results for real businesses</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {caseStudies.length === 0 ? (
            <p className="text-center text-xl">No case studies available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study) => (
                <CaseStudyCard
                  key={study.id}
                  id={study.id}
                  title={study.title}
                  description={study.description.replace(/<[^>]+>/g, '').substring(0, 150) + '...'}
                  industry={study.industry}
                  services={study.services}
                  image={study.images[0]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const CaseStudyCard: React.FC<{
  id: string;
  title: string;
  description: string;
  industry: string;
  services: string[];
  image?: string;
}> = ({ id, title, description, industry, services, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {image && (
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <span className="font-semibold">Industry:</span> {industry}
      </div>
      <div className="mb-4">
        <span className="font-semibold">Services:</span> {services.join(', ')}
      </div>
      <Link to={`/case-studies/${id}`} className="text-blue-600 font-semibold hover:underline inline-flex items-center">
        Read Full Case Study
      </Link>
    </div>
  </div>
);

export default CaseStudiesPage;