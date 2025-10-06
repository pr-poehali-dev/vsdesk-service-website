import { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

function AnimatedCounter({ end, duration = 2000, suffix = '' }: { end: number; duration?: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [isVisible]);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isVisible, end, duration]);

  return (
    <div ref={counterRef} className="text-4xl font-bold text-gray-900 mb-2">
      {count}{suffix}
    </div>
  );
}

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-tr from-gray-50 via-white to-gray-100/50"></div>
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-gradient-to-bl from-gray-300/20 to-gray-100/10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-gradient-to-tr from-gray-200/25 to-transparent rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
      <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="1"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О системе vsDesk</h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg animate-fade-in-up [animation-delay:100ms]">
              vsDesk — это комплексное решение для автоматизации работы службы технической поддержки, 
              разработанное с учетом современных требований к качеству обслуживания клиентов.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center animate-scale-in [animation-delay:200ms]">
                <AnimatedCounter end={5} suffix="+" />
                <div className="text-gray-600">лет на рынке</div>
              </div>
              <div className="text-center animate-scale-in [animation-delay:300ms]">
                <AnimatedCounter end={500} suffix="+" />
                <div className="text-gray-600">компаний-клиентов</div>
              </div>
              <div className="text-center animate-scale-in [animation-delay:400ms]">
                <AnimatedCounter end={99} suffix=".9%" duration={2500} />
                <div className="text-gray-600">uptime SLA</div>
              </div>
            </div>

            <Card className="mt-12 bg-gray-50 border-gray-200 animate-fade-in-up [animation-delay:500ms]">
              <CardHeader>
                <CardTitle className="text-gray-900">Наши преимущества</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <Icon name="Shield" className="text-gray-700 shrink-0 mt-0.5" size={18} />
                    <span>Высокий уровень безопасности и защита данных</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Zap" className="text-gray-700 shrink-0 mt-0.5" size={18} />
                    <span>Быстрое развертывание и простая настройка</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="Globe" className="text-gray-700 shrink-0 mt-0.5" size={18} />
                    <span>Доступ из любой точки мира</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Icon name="TrendingUp" className="text-gray-700 shrink-0 mt-0.5" size={18} />
                    <span>Масштабируемость под рост вашего бизнеса</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}