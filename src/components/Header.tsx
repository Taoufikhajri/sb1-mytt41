import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-600">
          DigitalMarketPro
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-blue-600">Home</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-600">About</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-600">Services</Link>
          <Link to="/case-studies" className="text-gray-600 hover:text-blue-600">Case Studies</Link>
          <Link to="/blog" className="text-gray-600 hover:text-blue-600">Blog</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-600">Contact</Link>
          <Link to="/admin" className="text-gray-600 hover:text-blue-600">Admin</Link>
        </nav>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600">
            <Menu size={24} />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div ref={menuRef} className="md:hidden">
          <nav className="flex flex-col bg-white py-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Home</Link>
            <Link to="/about" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>About</Link>
            <Link to="/services" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Services</Link>
            <Link to="/case-studies" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Case Studies</Link>
            <Link to="/blog" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Blog</Link>
            <Link to="/contact" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Contact</Link>
            <Link to="/admin" className="text-gray-600 hover:text-blue-600 px-4 py-2" onClick={() => setIsMenuOpen(false)}>Admin</Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;