export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-1 mb-4">
              <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">vs</span>
              </div>
              <span className="text-xl font-bold">Desk</span>
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
          <p className="text-gray-400 text-sm">© 2025 vsDesk. Все права защищены.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Политика конфиденциальности</a>
            <a href="#" className="hover:text-white transition">Условия использования</a>
          </div>
        </div>
      </div>
    </footer>
  );
}