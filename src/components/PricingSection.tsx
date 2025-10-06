import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const pricing = [
  {
    name: 'Базовый',
    price: '2 990',
    period: 'мес',
    features: ['До 5 операторов', 'Базовая аналитика', 'Email поддержка', 'База знаний']
  },
  {
    name: 'Профессиональный',
    price: '7 990',
    period: 'мес',
    popular: true,
    features: ['До 25 операторов', 'Расширенная аналитика', 'Приоритетная поддержка', 'API доступ', 'Интеграции']
  },
  {
    name: 'Корпоративный',
    price: 'По запросу',
    period: '',
    features: ['Безлимитные операторы', 'Полная аналитика', 'Персональный менеджер', 'SLA гарантии', 'On-premise']
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 bg-gray-50 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
          <p className="text-lg text-gray-600">Выберите подходящий план для вашего бизнеса</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricing.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative border-2 transition-all duration-300 hover:-translate-y-2 animate-scale-in ${plan.popular ? 'border-gray-900 shadow-xl hover:shadow-2xl' : 'border-gray-200 hover:shadow-lg'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gray-900 text-white">Популярный</Badge>
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  {plan.period && <span className="text-gray-600 ml-2">₽/{plan.period}</span>}
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2">
                      <Icon name="Check" className="text-gray-700 shrink-0 mt-0.5" size={18} />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full transition-transform hover:scale-105 ${plan.popular ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'}`}>
                  Выбрать план
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}