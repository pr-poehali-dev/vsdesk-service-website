import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface HeroSectionProps {
  scrollToSection: (id: string) => void;
}

export default function HeroSection({ scrollToSection }: HeroSectionProps) {
  return (
    <section id="home" className="pt-20 pb-32 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-200 animate-fade-in">Service Desk система нового поколения</Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up [animation-delay:100ms]">
            Эффективное управление <br />
            <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">технической поддержкой</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in-up [animation-delay:200ms]">
            vsDesk — профессиональная система для автоматизации работы службы поддержки. 
            Увеличьте продуктивность команды и качество обслуживания клиентов.
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up [animation-delay:300ms]">
            <Button size="lg" onClick={() => scrollToSection('demo')} className="bg-gray-900 hover:bg-gray-800 hover:scale-105 transition-transform">
              Попробовать бесплатно
            </Button>
            <Button size="lg" variant="outline" onClick={() => scrollToSection('features')} className="hover:scale-105 transition-transform">
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}