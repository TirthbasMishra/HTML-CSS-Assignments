import React from 'react';
import { User, Trophy, Briefcase } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: User,
      number: '27',
      label: 'Students cracked GSoC 2025',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-900',
    },
    {
      icon: Trophy,
      number: '$150K',
      label: 'Highest International package',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-900',
    },
    {
      icon: Briefcase,
      number: '200+',
      label: 'High paying internships confirmed',
      bgColor: 'bg-blue-100',
      iconColor: 'text-blue-900',
    },
  ];

  return (
    <section className="bg-gray-50 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className={`${stat.bgColor} p-3 rounded-xl flex-shrink-0`}>
                  <stat.icon className={`w-7 h-7 ${stat.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stat.number}
                  </h3>
                  <p className="text-blue-200 text-sm md:text-base">
                    {stat.label}
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

export default Stats;
