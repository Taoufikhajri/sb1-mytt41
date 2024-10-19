import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface BlogPost {
  id: string;
  title: string;
  content: string;
  date: string;
  images: string[];
}

interface CaseStudy {
  id: string;
  title: string;
  description: string;
  industry: string;
  services: string[];
  images: string[];
}

interface AppContextType {
  blogPosts: BlogPost[];
  caseStudies: CaseStudy[];
  addBlogPost: (post: BlogPost) => void;
  updateBlogPost: (id: string, post: BlogPost) => void;
  addCaseStudy: (study: CaseStudy) => void;
  updateCaseStudy: (id: string, study: CaseStudy) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const savedPosts = localStorage.getItem('blogPosts');
    return savedPosts ? JSON.parse(savedPosts) : [];
  });
  const [caseStudies, setCaseStudies] = useState<CaseStudy[]>(() => {
    const savedStudies = localStorage.getItem('caseStudies');
    return savedStudies ? JSON.parse(savedStudies) : [];
  });

  useEffect(() => {
    localStorage.setItem('blogPosts', JSON.stringify(blogPosts));
  }, [blogPosts]);

  useEffect(() => {
    localStorage.setItem('caseStudies', JSON.stringify(caseStudies));
  }, [caseStudies]);

  const addBlogPost = (post: BlogPost) => {
    setBlogPosts([...blogPosts, post]);
  };

  const updateBlogPost = (id: string, post: BlogPost) => {
    setBlogPosts(blogPosts.map(p => p.id === id ? post : p));
  };

  const addCaseStudy = (study: CaseStudy) => {
    setCaseStudies([...caseStudies, study]);
  };

  const updateCaseStudy = (id: string, study: CaseStudy) => {
    setCaseStudies(caseStudies.map(s => s.id === id ? study : s));
  };

  return (
    <AppContext.Provider value={{ blogPosts, caseStudies, addBlogPost, updateBlogPost, addCaseStudy, updateCaseStudy }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};