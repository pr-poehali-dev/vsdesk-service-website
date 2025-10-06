import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const news = [
  {
    date: '15 сентября 2024',
    title: 'Обновление vsDesk 3.5',
    description: 'Новая версия с улучшенным интерфейсом и расширенными возможностями автоматизации'
  },
  {
    date: '3 сентября 2024',
    title: 'Интеграция с Telegram',
    description: 'Теперь вы можете получать уведомления о новых тикетах прямо в мессенджер'
  },
  {
    date: '20 августа 2024',
    title: 'Мобильное приложение',
    description: 'Запущена бета-версия мобильного приложения для iOS и Android'
  }
];

export default function NewsSection() {
  return (
    <section id="news" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Новости и обновления</h2>
          <p className="text-lg text-gray-600">Следите за развитием платформы</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {news.map((item, index) => (
            <Card key={index} className="border-gray-200 hover:border-gray-300 transition-colors">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <Badge variant="outline" className="text-gray-600 border-gray-300">{item.date}</Badge>
                    </div>
                    <CardTitle className="text-2xl text-gray-900 mb-2">{item.title}</CardTitle>
                    <CardDescription className="text-gray-600 text-base">{item.description}</CardDescription>
                  </div>
                  <Icon name="ArrowRight" className="text-gray-400 mt-2" size={20} />
                </div>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
