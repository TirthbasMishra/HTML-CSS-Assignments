import React, { useState } from 'react';
import { Code } from 'lucide-react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    query: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <section className="pointer-events-none mx-auto w-full max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-[#010C39] to-[#3766CB] translate-y-[120px] ">
      <div>
        <div className="flex h-max flex-col-reverse items-stretch lg:flex-row">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left Side - Decorative Globe */}
            <div className='relative flex-1 overflow-hidden min-h-[400px] lg:h-auto pointer-events-auto' >
              {/* Animated Globe Illustration */}
              <div className='absolute inset-0 flex items-end justify-center sm:-bottom-96 md:-bottom-40 lg:justify-start lg:-left-50 lg:-bottom-70'>
                {/* Globe */}
                <div className="h-auto w-full max-w-[600px] md:max-w-[820px] lg:max-w-full object-contain lg:object-cover"></div>
               <img src='src/assets/img/home-globe.svg' />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="flex-1 flex flex-col justify-end items-center py-12 gap-12 px-4 md:px-6 lg:px-  12 pointer-events-auto">
              <div className="max-w-md">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                  Having doubts? Let's get in touch!
                </h2>
                <p className="text-blue-100 mb-8">
                  Send us your queries and we'll get back to you soon.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name Input */}
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-600/40 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />

                  {/* Email Input */}
                  <input
                    type="email"
                    name="email"
                    placeholder="Your email address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-600/40 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />

                  {/* Phone Input */}
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Your contact number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-600/40 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all"
                  />

                  {/* Query Textarea */}
                  <textarea
                    name="query"
                    placeholder="Type your query here..."
                    value={formData.query}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-blue-600/40 border border-blue-500/30 text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all resize-none"
                  ></textarea>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors shadow-lg"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
