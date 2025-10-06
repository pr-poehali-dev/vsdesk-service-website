import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">О системе vsDesk</h2>
          </div>

          <div className="space-y-6 text-gray-600">
            <p className="text-lg">
              vsDesk — это комплексное решение для автоматизации работы службы технической поддержки, 
              разработанное с учетом современных требований к качеству обслуживания клиентов.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">5+</div>
                <div className="text-gray-600">лет на рынке</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">500+</div>
                <div className="text-gray-600">компаний-клиентов</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gray-900 mb-2">99.9%</div>
                <div className="text-gray-600">uptime SLA</div>
              </div>
            </div>

            <Card className="mt-12 bg-gray-50 border-gray-200">
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
