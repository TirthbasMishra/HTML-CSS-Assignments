import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import FeatureCards from './components/FeatureCards';
import WhySection from './components/WhySection';
import FeaturedCohorts from './components/FeaturedCohorts';
import Podcasts from './components/Podcasts';
import Community from './components/Community';
import FAQs from './components/FAQs';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <FeatureCards />
        <WhySection />
        <FeaturedCohorts />
        <Podcasts />
        <Community />
        <FAQs />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

export default App;
