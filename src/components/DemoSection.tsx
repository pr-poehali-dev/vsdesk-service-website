import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export default function DemoSection() {
  return (
    <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-100 via-gray-50 to-white"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-gradient-to-b from-gray-300/30 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-gray-400/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-gradient-to-tl from-gray-300/25 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.02"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")' }}></div>
      <div className="container mx-auto px-4 relative">
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