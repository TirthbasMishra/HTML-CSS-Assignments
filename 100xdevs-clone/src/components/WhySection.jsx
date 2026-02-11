import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Code } from 'lucide-react';

const WhySection = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  const slides = [
    {
      icon: '🎯',
      iconBg: 'bg-cyan-100',
      iconColor: 'text-cyan-600',
      title: 'Live Interactive Sessions',
      description: 'Learn in real-time with weekend live sessions, interactive Q&A, and direct mentorship from industry experts.',
    },
    {
      icon: <Code className="w-8 h-8" />,
      iconBg: 'bg-white',
      iconColor: 'text-blue-900',
      title: 'Real Engineer, Real Experience',
      description: "Learn from Harkirat Singh who has built & scaled real-world systems at top tech companies.",
      featured: true,
    },
    {
      icon: '💻',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
      title: 'Learn by Doing',
      description: 'Hands-on projects, open-source contributions & practical coding. Build payment systems, automation tools & end-to-end applications.',
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Why 100xDevs?
          </h2>
          <p className="text-lg text-gray-600">
            Our most comprehensive and impactful learning experiences
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="flex items-center justify-center gap-6">
            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="hidden md:flex w-12 h-12 bg-gray-400 hover:bg-gray-500 rounded-full items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Cards Container */}
            <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`rounded-2xl p-8 transition-all duration-300 ${
                    index === 1
                      ? 'bg-gradient-to-br from-blue-900 to-blue-800 text-white scale-105 shadow-xl'
                      : 'bg-white text-gray-900 shadow-md'
                  }`}
                >
                  {/* Icon */}
                  <div className={`${index === 1 ? 'bg-white' : slide.iconBg} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                    {typeof slide.icon === 'string' ? (
                      <span className="text-3xl">{slide.icon}</span>
                    ) : (
                      <div className={index === 1 ? 'text-blue-900' : slide.iconColor}>
                        {slide.icon}
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-4">
                    {slide.title}
                  </h3>

                  {/* Divider */}
                  <div className={`w-12 h-1 mb-4 ${index === 1 ? 'bg-blue-400' : 'bg-teal-500'}`}></div>

                  {/* Description */}
                  <p className={`leading-relaxed ${index === 1 ? 'text-blue-100' : 'text-gray-600'}`}>
                    {slide.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="hidden md:flex w-12 h-12 bg-gray-600 hover:bg-gray-700 rounded-full items-center justify-center text-white transition-colors flex-shrink-0"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
