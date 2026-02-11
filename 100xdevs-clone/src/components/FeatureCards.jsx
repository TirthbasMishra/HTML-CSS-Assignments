import React from 'react';

const FeatureCards = () => {
  return (
    <section className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Left Card - Teal */}
          <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Job ready skills that matter
            </h2>
            <p className="text-lg text-teal-50 mb-6">
              Master development through real-world applications, not tutorials
            </p>

            {/* Tags */}
            <div className="flex flex-wrap gap-3">
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                Full Stack Development
              </span>
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                Real-World Projects
              </span>
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                Open Source Contributions
              </span>
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                Production Ready
              </span>
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                DevOps & Deployment
              </span>
              <span className="bg-white text-teal-600 px-4 py-2 rounded-full text-sm font-semibold">
                Job Ready Portfolio
              </span>
            </div>
          </div>

          {/* Right Card - Navy */}
          <div className="bg-gradient-to-br from-blue-900 to-blue-800 rounded-3xl p-8 md:p-10 text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Personally mentoring India's next 100x engineers
            </h2>
            <p className="text-lg text-blue-200 mb-6">
              Taking you from 1x to 100x through practical projects and real-world open source
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureCards;
