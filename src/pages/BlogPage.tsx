import React from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

const BlogPage: React.FC = () => {
  const { blogPosts } = useAppContext();
  
  console.log('Blog posts:', blogPosts); // Add this line for debugging

  return (
    <div className="bg-gray-100">
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Digital Marketing Insights</h1>
          <p className="text-xl">Stay up-to-date with the latest trends, tips, and strategies</p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          {blogPosts.length === 0 ? (
            <p className="text-center text-xl">No blog posts available yet.</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <BlogPost
                  key={post.id}
                  id={post.id}
                  title={post.title}
                  excerpt={post.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...'}
                  date={new Date(post.date).toLocaleDateString()}
                  image={post.images[0]}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const BlogPost: React.FC<{
  id: string;
  title: string;
  excerpt: string;
  date: string;
  image?: string;
}> = ({ id, title, excerpt, date, image }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    {image && (
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    )}
    <div className="p-6">
      <div className="text-sm text-gray-600 mb-2">{date}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <Link to={`/blog/${id}`} className="text-blue-600 font-semibold hover:underline inline-flex items-center">
        Read More
      </Link>
    </div>
  </div>
);

export default BlogPage;