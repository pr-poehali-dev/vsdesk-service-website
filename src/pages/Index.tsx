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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
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
  );
}
