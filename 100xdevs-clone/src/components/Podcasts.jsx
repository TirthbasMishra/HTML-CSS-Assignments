import React from 'react';
import { Play } from 'lucide-react';

const Podcasts = () => {
  const podcasts = [
    {
      title: 'How a 21-Year-Old Got an ₹80 LPA Offer (Before Degree!)',
      thumbnail: 'https://youtu.be/dRXq81Om2a4',
    },
    {
      title: '$25000 Bug Bounty, $100k Offer as a Solana Engineer',
      thumbnail: 'https://youtu.be/PZNgcH2Jtac',
    },
    {
      title: 'How He Cracked A 40Lakhs Remote Coding Job (Complete Story)',
      thumbnail: 'https://youtu.be/TbbCJQ4Vbko',
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Decorative Background Element */}
        <div className="bg-gradient-to-br from-teal-500 to-teal-600 rounded-3xl p-12 relative overflow-hidden">
          {/* Decorative Icons */}
          <div className="absolute left-10 top-20 opacity-20">
            <div className="flex flex-col gap-4">
              {[...Array(3)].map((_, i) => (
                <div key={i} className="flex gap-2">
                  {[...Array(3)].map((_, j) => (
                    <div key={j} className="w-2 h-8 bg-white rounded-full"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-1/4 bottom-20 opacity-20">
            <div className="flex flex-col items-center gap-2">
              {[40, 60, 80, 60, 70, 50, 40].map((height, i) => (
                <div key={i} className="w-3 bg-white rounded-full" style={{ height: `${height}px` }}></div>
              ))}
            </div>
          </div>

          <div className="absolute right-20 top-1/3 opacity-20">
            <div className="flex gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="flex flex-col gap-2">
                  {[...Array(5)].map((_, j) => (
                    <div key={j} className="w-2 h-2 bg-white rounded-full"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="relative z-10 mb-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Listen to our Podcasts
            </h2>
            <p className="text-lg text-teal-50">
              Unfiltered discussions on engineering, startups, and career growth with industry experts and successful developers
            </p>
          </div>

          {/* Podcast Cards */}
          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            {podcasts.map((podcast, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group cursor-pointer"
              >
                {/* Thumbnail */}
                <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 h-48 flex items-center justify-center">
                  <div className="text-6xl mb-4">

                    <iframe src="https://www.youtube.com/embed/dRXq81Om2a4?si=6bd3usllvsCYBwx2" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

                  </div>

                  {/* Play Button Overlay */}
                  {/* <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                      <Play className="w-8 h-8 text-white fill-white ml-1" />
                    </div>
                  </div> */}

                  {/* Red Play Button Badge */}
                  {/* <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-10 h-10 text-white fill-white ml-1" />
                  </div> */}
                </div>

                {/* Title */}
                <div className="p-4">
                  <p className="text-gray-900 font-medium text-sm leading-snug">
                    {podcast.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Podcasts;
