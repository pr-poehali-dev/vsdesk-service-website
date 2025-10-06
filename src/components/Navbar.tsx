import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

export default function Navbar({ scrollToSection }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = (id: string) => {
    scrollToSection(id);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">vs</span>
            </div>
            <span className="text-xl font-bold text-gray-900">Desk</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button onClick={() => handleScroll('home')} className="text-sm text-gray-600 hover:text-gray-900 transition">Главная</button>
            <button onClick={() => handleScroll('features')} className="text-sm text-gray-600 hover:text-gray-900 transition">Возможности</button>
            <button onClick={() => handleScroll('news')} className="text-sm text-gray-600 hover:text-gray-900 transition">Новости</button>
            <button onClick={() => handleScroll('docs')} className="text-sm text-gray-600 hover:text-gray-900 transition">Документация</button>
            <button onClick={() => handleScroll('pricing')} className="text-sm text-gray-600 hover:text-gray-900 transition">Тарифы</button>
            <button onClick={() => handleScroll('about')} className="text-sm text-gray-600 hover:text-gray-900 transition">О системе</button>
            <button onClick={() => handleScroll('contacts')} className="text-sm text-gray-600 hover:text-gray-900 transition">Контакты</button>
          </div>

          <div className="flex items-center gap-4">
            <Button onClick={() => handleScroll('demo')} className="hidden md:flex bg-gray-900 hover:bg-gray-800">
              Демо
            </Button>
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
              className="md:hidden p-2 text-gray-600 hover:text-gray-900"
              aria-label="Меню"
            >
              <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-200">
            <button onClick={() => handleScroll('home')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Главная</button>
            <button onClick={() => handleScroll('features')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Возможности</button>
            <button onClick={() => handleScroll('news')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Новости</button>
            <button onClick={() => handleScroll('docs')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Документация</button>
            <button onClick={() => handleScroll('pricing')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Тарифы</button>
            <button onClick={() => handleScroll('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">О системе</button>
            <button onClick={() => handleScroll('contacts')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Контакты</button>
            <Button onClick={() => handleScroll('demo')} className="w-full mt-2 bg-gray-900 hover:bg-gray-800">
              Демо
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}