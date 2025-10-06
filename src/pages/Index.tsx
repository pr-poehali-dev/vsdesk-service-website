import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

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

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">vD</span>
              </div>
              <span className="text-xl font-bold text-gray-900">vsDesk</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('home')} className="text-sm text-gray-600 hover:text-gray-900 transition">Главная</button>
              <button onClick={() => scrollToSection('features')} className="text-sm text-gray-600 hover:text-gray-900 transition">Возможности</button>
              <button onClick={() => scrollToSection('news')} className="text-sm text-gray-600 hover:text-gray-900 transition">Новости</button>
              <button onClick={() => scrollToSection('docs')} className="text-sm text-gray-600 hover:text-gray-900 transition">Документация</button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm text-gray-600 hover:text-gray-900 transition">Тарифы</button>
              <button onClick={() => scrollToSection('about')} className="text-sm text-gray-600 hover:text-gray-900 transition">О системе</button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm text-gray-600 hover:text-gray-900 transition">Контакты</button>
            </div>

            <div className="flex items-center gap-4">
              <Button onClick={() => scrollToSection('demo')} className="hidden md:flex bg-gray-900 hover:bg-gray-800">
                Демо
              </Button>
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
                className="md:hidden p-2 text-gray-600 hover:text-gray-900"
                aria-label="Меню"
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-2 animate-in slide-in-from-top duration-200">
              <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Главная</button>
              <button onClick={() => scrollToSection('features')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Возможности</button>
              <button onClick={() => scrollToSection('news')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Новости</button>
              <button onClick={() => scrollToSection('docs')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Документация</button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Тарифы</button>
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">О системе</button>
              <button onClick={() => scrollToSection('contacts')} className="block w-full text-left px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition">Контакты</button>
              <Button onClick={() => scrollToSection('demo')} className="w-full mt-2 bg-gray-900 hover:bg-gray-800">
                Демо
              </Button>
            </div>
          )}
        </div>
      </nav>

      <section id="home" className="pt-20 pb-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-gray-100 text-gray-700 hover:bg-gray-200">Service Desk система нового поколения</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Эффективное управление <br />
              <span className="bg-gradient-to-r from-gray-700 to-gray-900 bg-clip-text text-transparent">технической поддержкой</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              vsDesk — профессиональная система для автоматизации работы службы поддержки. 
              Увеличьте продуктивность команды и качество обслуживания клиентов.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => scrollToSection('demo')} className="bg-gray-900 hover:bg-gray-800">
                Попробовать бесплатно
              </Button>
              <Button size="lg" variant="outline" onClick={() => scrollToSection('features')}>
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Возможности системы</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Все инструменты для эффективной работы службы технической поддержки
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
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

      <section id="pricing" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Тарифы</h2>
            <p className="text-lg text-gray-600">Выберите подходящий план для вашего бизнеса</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card key={index} className={`relative border-2 ${plan.popular ? 'border-gray-900 shadow-xl' : 'border-gray-200'}`}>
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
                  <Button className={`w-full ${plan.popular ? 'bg-gray-900 hover:bg-gray-800' : 'bg-white hover:bg-gray-50 text-gray-900 border border-gray-300'}`}>
                    Выбрать план
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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

      <section id="demo" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Попробуйте демо</h2>
              <p className="text-lg text-gray-600">Оставьте заявку и получите доступ к демо-версии</p>
            </div>

            <Card className="border-gray-200">
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
                  <Button type="submit" className="w-full bg-gray-900 hover:bg-gray-800">
                    Получить доступ к демо
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Контакты</h2>
              <p className="text-lg text-gray-600">Свяжитесь с нами любым удобным способом</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Mail" className="text-gray-700" size={24} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Email</CardTitle>
                  <CardDescription className="text-gray-600">info@vsdesk.ru<br />support@vsdesk.ru</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon name="Phone" className="text-gray-700" size={24} />
                  </div>
                  <CardTitle className="text-lg text-gray-900">Телефон</CardTitle>
                  <CardDescription className="text-gray-600">8 (800) 555-35-35<br />+7 (495) 123-45-67</CardDescription>
                </CardHeader>
              </Card>

              <Card className="border-gray-200 text-center">
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

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">vD</span>
                </div>
                <span className="text-xl font-bold">vsDesk</span>
              </div>
              <p className="text-gray-400 text-sm">Профессиональная система управления технической поддержкой</p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Продукт</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#features" className="hover:text-white transition">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Тарифы</a></li>
                <li><a href="#docs" className="hover:text-white transition">Документация</a></li>
                <li><a href="#demo" className="hover:text-white transition">Демо</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Компания</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#about" className="hover:text-white transition">О системе</a></li>
                <li><a href="#news" className="hover:text-white transition">Новости</a></li>
                <li><a href="#contacts" className="hover:text-white transition">Контакты</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>8 (800) 555-35-35</li>
                <li>support@vsdesk.ru</li>
                <li>Пн-Пт: 9:00 - 18:00</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">© 2024 vsDesk. Все права защищены.</p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
              <a href="#" className="hover:text-white transition">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}