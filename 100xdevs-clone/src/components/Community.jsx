import React from 'react';

const Community = () => {
  const communityImages = [
    'src/assets/img/community2.png', 'src/assets/img/community3.png', 'src/assets/img/community4.png', 'src/assets/img/community5.png'
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#202230] via-[#293C69] to-[#32549F] px-8 md:px-16 lg:px-20">
          <div className="flex max-w-7xl flex-col items-center gap-8 lg:flex-row lg:justify-between">
            {/* Left Content */}
            <div className="flex-1 space-y-6 py-12  md:py-16">
              <h2 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                A Community That Has Your Back
              </h2>

              <ul className="space-y-3 text-sm text-white/90 md:text-base">
                <li className="flex items-start gap-3">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-lg">Active Discord with 24/7 community support</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-lg">Collaborate on open source and build together</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-lg">Weekly study groups and peer code reviews</span>
                </li>
                <li className="flex items-start">
                  <span className="text-2xl mr-3">•</span>
                  <span className="text-lg">Job referrals and opportunity sharing</span>
                </li>
              </ul>
            </div>

            {/* Right Images */}
            <div className="relative flex-1 self-stretch">
              <div className="relative h-full flex items-end">
                    <div className="h-auto w-full object-contain">
                      <img src='src/assets/img/community1.png' alt="Community members collage" width="600" height="400" />
                    </div>
                </div>
            </div>
          </div>
        </div>

        {/* Community Photos Grid */}
        <div className="grid w-full grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 py-8">
          {communityImages.map((emoji, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-xl relative aspect-[4/3]"
            >
              <div className="absolute inset-0 w-full h-full object-cover">
                <img src={emoji}/>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community;
