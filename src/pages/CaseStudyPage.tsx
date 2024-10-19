import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const CaseStudyPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { caseStudies } = useAppContext();
  const study = caseStudies.find(s => s.id === id);

  if (!study) {
    return <div>Case study not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {study.images[0] && (
        <div className="w-full h-96 relative">
          <img src={study.images[0]} alt={study.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4">{study.title}</h1>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        {!study.images[0] && <h1 className="text-3xl font-bold mb-4">{study.title}</h1>}
        <div className="bg-white rounded-lg shadow-md p-6">
          <p className="mb-4"><strong>Industry:</strong> {study.industry}</p>
          <p className="mb-4"><strong>Services:</strong> {study.services.join(', ')}</p>
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: study.description }} 
          />
        </div>
        {study.images.length > 1 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {study.images.slice(1).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 2}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CaseStudyPage;