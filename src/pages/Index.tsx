import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import NewsSection from '@/components/NewsSection';
import DocsSection from '@/components/DocsSection';
import PricingSection from '@/components/PricingSection';
import AboutSection from '@/components/AboutSection';
import DemoSection from '@/components/DemoSection';
import ContactsSection from '@/components/ContactsSection';
import Footer from '@/components/Footer';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gray-200/40 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-gray-300/30 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700"></div>
      
      <div className="relative z-10">
        <Navbar scrollToSection={scrollToSection} />
        <HeroSection scrollToSection={scrollToSection} />
        <FeaturesSection />
        <NewsSection />
        <DocsSection />
        <PricingSection />
        <AboutSection />
        <DemoSection />
        <ContactsSection />
        <Footer />
      </div>
    </div>
  );
}