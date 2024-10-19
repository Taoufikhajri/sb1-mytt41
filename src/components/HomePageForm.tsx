import React, { useState } from 'react';

const HomePageForm: React.FC = () => {
  const [heroTitle, setHeroTitle] = useState('');
  const [heroSubtitle, setHeroSubtitle] = useState('');
  const [overviewText, setOverviewText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log('Home page update:', { heroTitle, heroSubtitle, overviewText });
    alert('Home page updated successfully!');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-2xl font-bold">Update Home Page</h2>
      <div>
        <label htmlFor="heroTitle" className="block mb-2">Hero Title</label>
        <input
          type="text"
          id="heroTitle"
          value={heroTitle}
          onChange={(e) => setHeroTitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="heroSubtitle" className="block mb-2">Hero Subtitle</label>
        <input
          type="text"
          id="heroSubtitle"
          value={heroSubtitle}
          onChange={(e) => setHeroSubtitle(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          required
        />
      </div>
      <div>
        <label htmlFor="overviewText" className="block mb-2">Overview Text</label>
        <textarea
          id="overviewText"
          value={overviewText}
          onChange={(e) => setOverviewText(e.target.value)}
          className="w-full px-3 py-2 border rounded"
          rows={4}
          required
        ></textarea>
      </div>
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
        Update Home Page
      </button>
    </form>
  );
};

export default HomePageForm;