import React from 'react';

const FeaturedCohorts = () => {
  const cohorts = [
    {
      title: '100xSchool Combined Bootcamp',
      description: 'Web dev (Every Friday) Devops (Every Friday) Machine Learning and AI (Every Saturday) Web3...',
      price: '₹5,999',
      originalPrice: '₹0,999',
      discount: '34% off',
      buttonText: 'View Content',
      buttonVariant: 'primary',
      image: 'src/assets/img/2026-01-31-0_6302172904491252.jpg',
      tags: ['Web3', 'Bootcamp 1.0', 'Classical ML', 'Solana Runtime', 'Rust & Anchor', 'Web2 + Web3 systems'],
    },
    {
      title: 'Web Dev + Devops Bootcamp',
      description: 'Web dev Devops',
      price: '₹3,999',
      originalPrice: '₹5,999',
      discount: '34% off',
      buttonText: 'View Details',
      buttonVariant: 'secondary',
      image: 'src/assets/img/2026-01-31-0_0916663009561891.jpg',
      tags: ['Complete Typescript', 'MERN stack', 'Complete Devops', 'System design', 'Projects'],
    },
    {
      title: 'Web3 Bootcamp',
      description: 'Complete Solana and Web3 Bootcamp',
      price: '₹3,999',
      originalPrice: '₹5,999',
      discount: '34% off',
      buttonText: 'View Details',
      buttonVariant: 'secondary',
      image: 'src/assets/img/2026-01-31-0_9482626468382281.jpg',
      tags: ['Solana Runtime', 'Programs & Smart contracts', 'Rust & Anchor', 'Web2 + Web3 systems'],
    },
    {
      title: 'AI and ML Bootcamp',
      description: 'AI and ML Syllabus',
      price: '₹3,999',
      originalPrice: '₹5,999',
      discount: '34% off',
      buttonText: 'View Details',
      buttonVariant: 'secondary',
      image: 'src/assets/img/2026-01-31-0_12723468219857426.jpg',
      tags: ['Classical ML', 'Attention and its variations', 'GenAI Memory and retrieval', 'Advanced topics'],
    },
  ];

  return (
    <section className="bg-blue-900 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
          Featured Cohorts
        </h2>

        {/* Cohorts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cohorts.map((cohort, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {/* Image/Thumbnail */}
              <div className="relative bg-gradient-to-br from-blue-800 to-teal-600 h-48 flex items-center justify-center">
                <div className="text-6xl"><img src={cohort.image}/></div>
                {cohort.tags && (
                  <div className="absolute top-4 left-4 right-4 flex flex-wrap gap-2">
                    {cohort.tags.slice(0, 3).map((tag, idx) => (
                      <span
                        key={idx}
                        className="bg-white/90 text-blue-900 text-xs px-2 py-1 rounded-md font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
                <div className="absolute bottom-4 right-4 bg-white rounded-full px-3 py-1">
                  <span className="text-xs font-bold text-blue-900">100xSchool</span>
                  <span className="text-xs font-bold text-teal-600 ml-1">Bootcamp 1.0</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {cohort.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                  {cohort.description}
                </p>

                {/* Pricing */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-gray-900">
                    {cohort.price}
                  </span>
                  <span className="text-lg text-gray-400 line-through">
                    {cohort.originalPrice}
                  </span>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-md font-semibold">
                    {cohort.discount}
                  </span>
                </div>

                {/* Currency Dropdown */}
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4 text-sm text-gray-700">
                  <option>INR</option>
                  <option>USD</option>
                </select>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-colors ${
                    cohort.buttonVariant === 'primary'
                      ? 'bg-blue-900 text-white hover:bg-blue-800'
                      : 'bg-blue-900 text-white hover:bg-blue-800'
                  }`}
                >
                  {cohort.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCohorts;
