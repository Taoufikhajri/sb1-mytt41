import React from 'react';
import { useParams } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const BlogPostPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { blogPosts } = useAppContext();
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    return <div>Blog post not found</div>;
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      {post.images[0] && (
        <div className="w-full h-96 relative">
          <img src={post.images[0]} alt={post.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white text-center px-4">{post.title}</h1>
          </div>
        </div>
      )}
      <div className="container mx-auto px-4 py-8">
        {!post.images[0] && <h1 className="text-3xl font-bold mb-4">{post.title}</h1>}
        <p className="text-gray-600 mb-4">{new Date(post.date).toLocaleDateString()}</p>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div 
            className="prose max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
        </div>
        {post.images.length > 1 && (
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {post.images.slice(1).map((image, index) => (
                <img key={index} src={image} alt={`Image ${index + 2}`} className="w-full h-48 object-cover rounded-lg" />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPostPage;