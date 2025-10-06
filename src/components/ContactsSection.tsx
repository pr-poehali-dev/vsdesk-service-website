import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function ContactsSection() {
  return (
    <section id="contacts" className="py-20 bg-white relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-lg text-gray-600">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up [animation-delay:100ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Mail" className="text-gray-700" size={24} />
                </div>
                <CardTitle className="text-lg text-gray-900">Email</CardTitle>
                <CardDescription className="text-gray-600">info@vsdesk.ru<br />support@vsdesk.ru</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up [animation-delay:200ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="Phone" className="text-gray-700" size={24} />
                </div>
                <CardTitle className="text-lg text-gray-900">Телефон</CardTitle>
                <CardDescription className="text-gray-600">8 (800) 555-35-35<br />+7 (495) 123-45-67</CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-gray-200 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up [animation-delay:300ms]">
              <CardHeader>
                <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" className="text-gray-700" size={24} />
                </div>
                <CardTitle className="text-lg text-gray-900">Офис</CardTitle>
                <CardDescription className="text-gray-600">Москва, ул. Примерная, 123</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}