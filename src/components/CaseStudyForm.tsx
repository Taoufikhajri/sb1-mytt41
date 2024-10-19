import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '../context/AppContext';

interface CaseStudyFormProps {
  studyId?: string;
}

const CaseStudyForm: React.FC<CaseStudyFormProps> = ({ studyId }) => {
  const { caseStudies, addCaseStudy, updateCaseStudy } = useAppContext();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [industry, setIndustry] = useState('');
  const [services, setServices] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (studyId) {
      const study = caseStudies.find(s => s.id === studyId);
      if (study) {
        setTitle(study.title);
        setDescription(study.description);
        setIndustry(study.industry);
        setServices(study.services.join(', '));
        setImages(study.images);
      }
    }
  }, [studyId, caseStudies]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newStudy = {
      id: studyId || Date.now().toString(),
      title,
      description,
      industry,
      services: services.split(',').map(s => s.trim()),
      images,
    };

    if (studyId) {
      updateCaseStudy(studyId, newStudy);
      alert('Case study updated successfully!');
    } else {
      addCaseStudy(newStudy);
      alert('Case study added successfully!');
    }

    setTitle('');
    setDescription('');
    setIndustry('');
    setServices('');
    setImages([]);
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const newImages = Array.from(files).map(file => URL.createObjectURL(file));
      setImages([...images, ...newImages]);
    }
  };

  const handleFeaturedImageUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFeaturedImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files[0]) {
      const featuredImage = URL.createObjectURL(files[0]);
      setImages([featuredImage, ...images]);
    }
  };

  const modules = {
    toolbar: [
      [{ 'header': [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
      ['link', 'image'],
      ['clean']
    ],
  };

  const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
  ];

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">{studyId ? 'Edit' : 'Add New'} Case Study</h2>
      <div>
        <label htmlFor="title" className="block mb-2">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="description" className="block mb-2">Description</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={modules}
          formats={formats}
          className="bg-white"
        />
      </div>
      <div>
        <label htmlFor="industry" className="block mb-2">Industry</label>
        <input
          type="text"
          id="industry"
          value={industry}
          onChange={(e) => setIndustry(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="services" className="block mb-2">Services (comma-separated)</label>
        <input
          type="text"
          id="services"
          value={services}
          onChange={(e) => setServices(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="images" className="block mb-2">Images</label>
        <input
          type="file"
          id="images"
          onChange={handleImageUpload}
          multiple
          accept="image/*"
          className="w-full px-3 py-2 border rounded"
        />
      </div>
      <div>
        <button
          type="button"
          onClick={handleFeaturedImageUpload}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mr-2"
        >
          Insert Featured Image
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFeaturedImageChange}
          accept="image/*"
          className="hidden"
        />
      </div>
      <div className="flex flex-wrap gap-2 mt-2">
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Uploaded ${index + 1}`} className="w-24 h-24 object-cover" />
        ))}
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        {studyId ? 'Update' : 'Add'} Case Study
      </button>
    </form>
  );
};

export default CaseStudyForm;