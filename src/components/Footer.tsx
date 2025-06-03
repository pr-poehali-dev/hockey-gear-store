import Icon from "@/components/ui/icon";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">🏒</span>
              </div>
              <h3 className="text-2xl font-bold">HockeyShop</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Профессиональная хоккейная экипировка от ведущих мировых брендов.
              Качество, надежность, доступные цены.
            </p>
            <div className="flex space-x-4">
              <Icon
                name="Facebook"
                size={22}
                className="text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110"
              />
              <Icon
                name="Instagram"
                size={22}
                className="text-gray-400 hover:text-pink-400 cursor-pointer transition-all duration-300 hover:scale-110"
              />
              <Icon
                name="Twitter"
                size={22}
                className="text-gray-400 hover:text-blue-400 cursor-pointer transition-all duration-300 hover:scale-110"
              />
              <Icon
                name="Youtube"
                size={22}
                className="text-gray-400 hover:text-red-400 cursor-pointer transition-all duration-300 hover:scale-110"
              />
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Категории</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Клюшки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Коньки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Шлемы
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Защита
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Форма
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Аксессуары
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Поддержка</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Служба поддержки
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Доставка и оплата
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Возврат товара
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Размерная сетка
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Icon name="Phone" size={18} className="text-gray-400" />
                <span className="text-gray-400">+7 (495) 123-45-67</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Mail" size={18} className="text-gray-400" />
                <span className="text-gray-400">info@hockeyshop.ru</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="MapPin" size={18} className="text-gray-400" />
                <span className="text-gray-400">Москва, ул. Хоккейная, 15</span>
              </div>
              <div className="flex items-center space-x-3">
                <Icon name="Clock" size={18} className="text-gray-400" />
                <span className="text-gray-400">Пн-Вс: 9:00-21:00</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg">
            © 2024 HockeyShop. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
