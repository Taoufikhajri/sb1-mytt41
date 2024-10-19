import React, { useState, useEffect, useRef } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useAppContext } from '../context/AppContext';

interface BlogPostFormProps {
  postId?: string;
}

const BlogPostForm: React.FC<BlogPostFormProps> = ({ postId }) => {
  const { blogPosts, addBlogPost, updateBlogPost } = useAppContext();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (postId) {
      const post = blogPosts.find(p => p.id === postId);
      if (post) {
        setTitle(post.title);
        setContent(post.content);
        setImages(post.images);
      }
    }
  }, [postId, blogPosts]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newPost = {
      id: postId || Date.now().toString(),
      title,
      content,
      date: new Date().toISOString(),
      images,
    };

    if (postId) {
      updateBlogPost(postId, newPost);
      alert('Blog post updated successfully!');
    } else {
      addBlogPost(newPost);
      alert('Blog post added successfully!');
    }

    setTitle('');
    setContent('');
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
      <h2 className="text-2xl font-bold">{postId ? 'Edit' : 'Add New'} Blog Post</h2>
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
        <label htmlFor="content" className="block mb-2">Content</label>
        <ReactQuill
          theme="snow"
          value={content}
          onChange={setContent}
          modules={modules}
          formats={formats}
          className="bg-white"
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
        {postId ? 'Update' : 'Add'} Blog Post
      </button>
    </form>
  );
};

export default BlogPostForm;