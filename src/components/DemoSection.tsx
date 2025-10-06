import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Попробуйте демо</h2>
            <p className="text-lg text-gray-600">Оставьте заявку и получите доступ к демо-версии</p>
          </div>

          <Card className="border-gray-200 shadow-lg animate-scale-in [animation-delay:200ms]">
            <CardContent className="pt-6">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Имя</label>
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Email</label>
                  <Input type="email" placeholder="email@company.com" className="border-gray-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Компания</label>
                  <Input placeholder="Название компании" className="border-gray-300" />
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-700 mb-1.5 block">Комментарий</label>
                  <Textarea placeholder="Расскажите о ваших задачах..." className="border-gray-300 min-h-24" />
                </div>
                <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800 transition-transform hover:scale-105">
                  Получить доступ к демо
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}