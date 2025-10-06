import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const features = [
  {
    icon: 'CheckCircle',
    title: 'Система тикетов',
    description: 'Управляйте заявками эффективно с полным контролем жизненного цикла обращений'
  },
  {
    icon: 'FileText',
    title: 'База знаний',
    description: 'Структурированная документация и решения типовых проблем в одном месте'
  },
  {
    icon: 'MessageSquare',
    title: 'Поддержка 24/7',
    description: 'Круглосуточная техническая поддержка для решения критических задач'
  },
  {
    icon: 'BarChart3',
    title: 'Аналитика',
    description: 'Детальные отчеты и метрики для контроля качества обслуживания'
  },
  {
    icon: 'Users',
    title: 'Управление командой',
    description: 'Распределение задач и контроль загрузки специалистов'
  },
  {
    icon: 'Settings',
    title: 'Настройки',
    description: 'Гибкая конфигурация под бизнес-процессы вашей компании'
  }
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/30"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gray-200/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-gray-300/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.02) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.02) 1px, transparent 1px)', backgroundSize: '60px 60px' }}></div>
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Возможности системы</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Все инструменты для эффективной работы службы технической поддержки
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="border-gray-200 hover:shadow-lg hover:shadow-gray-200/50 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up backdrop-blur-sm bg-white/80"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon name={feature.icon} className="text-gray-700" size={24} />
                </div>
                <CardTitle className="text-xl text-gray-900">{feature.title}</CardTitle>
                <CardDescription className="text-gray-600">{feature.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}