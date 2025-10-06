import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function DocsSection() {
  return (
    <section id="docs" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Документация</h2>
            <p className="text-lg text-gray-600">Полное руководство по работе с системой</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="BookOpen" className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 mb-2">Быстрый старт</CardTitle>
                    <CardDescription className="text-gray-600">Начните работу с vsDesk за 10 минут</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Code" className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 mb-2">API документация</CardTitle>
                    <CardDescription className="text-gray-600">Интеграция через REST API</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="Video" className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 mb-2">Видео-уроки</CardTitle>
                    <CardDescription className="text-gray-600">Обучающие материалы для всех уровней</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 hover:border-gray-300 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                    <Icon name="HelpCircle" className="text-gray-700" size={20} />
                  </div>
                  <div>
                    <CardTitle className="text-gray-900 mb-2">FAQ</CardTitle>
                    <CardDescription className="text-gray-600">Ответы на частые вопросы</CardDescription>
                  </div>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
