import React from 'react';
import { Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-8">
            <h1 className="text-2xl font-bold">
              <span className="text-black">100</span>
              <span className="text-red-600">x</span>
              <span className="text-black">Devs</span>
            </h1>
            
            {/* Navigation Links */}
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Courses
              </a>
              <a href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Store
              </a>
            </div>
          </div>

          {/* Search and Profile */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2 bg-gray-50 px-4 py-2 rounded-lg border border-gray-200">
              <Search className="w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Type to search"
                className="bg-transparent border-none outline-none text-sm text-gray-600 placeholder-gray-400 w-48"
              />
            </div>
            
            {/* Profile Avatar */}
            <div className="w-10 h-10 bg-blue-900 rounded-full flex items-center justify-center text-white font-semibold">
              T
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
