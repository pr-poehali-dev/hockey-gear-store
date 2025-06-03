import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent opacity-20"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in">
            <h1 className="text-6xl lg:text-7xl font-bold mb-8 leading-tight">
              Профессиональная
              <span className="block bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent animate-pulse">
                хоккейная экипировка
              </span>
            </h1>
            <p className="text-xl text-blue-100 mb-10 leading-relaxed max-w-lg">
              Все для игры в хоккей: от коньков до полной защиты. Качественное
              снаряжение от ведущих мировых брендов с доставкой по всей России.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg"
              >
                <Icon name="ShoppingBag" size={22} className="mr-3" />
                Каталог товаров
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-blue-900 transition-all duration-300 hover:scale-105 px-8 py-4 text-lg backdrop-blur-sm"
              >
                <Icon name="Play" size={22} className="mr-3" />
                Смотреть видео
              </Button>
            </div>
          </div>

          <div className="relative animate-scale-in">
            <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl border border-white/20">
              <img
                src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=600&fit=crop&auto=format"
                alt="Профессиональная хоккейная экипировка"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-2xl font-bold text-lg shadow-xl animate-bounce">
                🔥 Скидка -25%
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
