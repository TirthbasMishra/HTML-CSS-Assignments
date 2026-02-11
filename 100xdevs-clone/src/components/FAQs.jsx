import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What makes 100xDevs different from other coding platforms?',
      answer: "No compromises. With 100xDevs, you don't have to choose between different tutors and random tutorials. Get the power of building production-ready applications.",
    },
    {
      question: 'Do I need prior coding experience to join?',
      answer: 'No prior experience is required. Our courses are designed to take you from beginner to advanced levels with structured learning paths.',
    },
    {
      question: 'What kind of support can I expect?',
      answer: "You'll get 24/7 community support through our active Discord, weekly study groups, peer code reviews, and direct mentorship opportunities.",
    },
    {
      question: 'Are the courses self-paced or scheduled?',
      answer: 'We offer both self-paced learning materials and scheduled live sessions, giving you the flexibility to learn at your own pace while staying connected with the community.',
    },
    {
      question: 'Will I get a certificate after completion?',
      answer: "Yes, you'll receive a certificate of completion for each course you finish, along with portfolio projects that demonstrate your skills to potential employers.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            FAQs
          </h2>
          <p className="text-lg text-gray-600">
            Get your questions answered
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-all"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-blue-900 pr-4">
                  {faq.question}
                </h3>
                <ChevronDown
                  className={`w-6 h-6 text-blue-900 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5">
                  <p className="text-gray-700 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQs;
