import React, { useState } from 'react';
import BlogPostForm from './BlogPostForm';
import CaseStudyForm from './CaseStudyForm';
import HomePageForm from './HomePageForm';
import { useAppContext } from '../context/AppContext';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('blog');
  const [editingPostId, setEditingPostId] = useState<string | null>(null);
  const [editingStudyId, setEditingStudyId] = useState<string | null>(null);
  const { blogPosts, caseStudies } = useAppContext();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button
          onClick={onLogout}
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
        >
          Logout
        </button>
      </div>
      <div className="mb-4">
        <button
          onClick={() => setActiveTab('blog')}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'blog' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Blog Posts
        </button>
        <button
          onClick={() => setActiveTab('caseStudy')}
          className={`mr-2 px-4 py-2 rounded ${
            activeTab === 'caseStudy' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Case Studies
        </button>
        <button
          onClick={() => setActiveTab('homePage')}
          className={`px-4 py-2 rounded ${
            activeTab === 'homePage' ? 'bg-blue-600 text-white' : 'bg-gray-200'
          }`}
        >
          Home Page
        </button>
      </div>
      {activeTab === 'blog' && (
        <div>
          <BlogPostForm postId={editingPostId || undefined} />
          <h3 className="text-xl font-bold mt-8 mb-4">Existing Blog Posts</h3>
          <ul>
            {blogPosts.map((post) => (
              <li key={post.id} className="mb-2">
                {post.title}{' '}
                <button
                  onClick={() => setEditingPostId(post.id)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'caseStudy' && (
        <div>
          <CaseStudyForm studyId={editingStudyId || undefined} />
          <h3 className="text-xl font-bold mt-8 mb-4">Existing Case Studies</h3>
          <ul>
            {caseStudies.map((study) => (
              <li key={study.id} className="mb-2">
                {study.title}{' '}
                <button
                  onClick={() => setEditingStudyId(study.id)}
                  className="text-blue-600 hover:underline"
                >
                  Edit
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
      {activeTab === 'homePage' && <HomePageForm />}
    </div>
  );
};

export default AdminDashboard;