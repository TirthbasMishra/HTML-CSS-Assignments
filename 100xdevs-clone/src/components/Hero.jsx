import React from 'react';
import { Code } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gray-50 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 rounded-full px-4 py-2">
              <span className="w-2 h-2 bg-teal-500 rounded-full"></span>
              <span className="text-sm text-gray-700">Join 100,000+ enrolled students today</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master Full Stack Development
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Master Full Stack Development through hands-on open source projects. Join a community of developers transforming their careers with practical, real-world programming skills.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <button className="px-6 py-3 bg-white text-gray-900 border-2 border-gray-900 rounded-lg font-semibold hover:bg-gray-50 transition-colors">
                Learn more
              </button>
              <button className="px-6 py-3 bg-blue-900 text-white rounded-lg font-semibold hover:bg-blue-800 transition-colors">
                Explore Courses
              </button>
            </div>
          </div>

          {/* Right Image with Decorative Elements */}
          <div className="relative">
            <div className="relative overflow-hidden">
              {/* Placeholder for instructor image */}
              <div className="aspect-[4/3] bg-gradient-to-br  flex items-center justify-center">
                <div className="text-white text-center">
                  <div className="text-6xl mb-4">
                    <img src='src/assets/img/hero-img.webp'/>
                  </div>
                  
                </div>
              </div>
            </div>

           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
