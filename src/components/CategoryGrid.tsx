import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Клюшки",
    description: "Хоккейные клюшки для любого уровня",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=300&h=200&fit=crop",
    count: "120+ товаров",
  },
  {
    name: "Коньки",
    description: "Профессиональные хоккейные коньки",
    image:
      "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=300&h=200&fit=crop",
    count: "85+ товаров",
  },
  {
    name: "Шлемы",
    description: "Защитные шлемы и маски",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=300&h=200&fit=crop",
    count: "45+ товаров",
  },
  {
    name: "Защита",
    description: "Нагрудники, налокотники, щитки",
    image:
      "https://images.unsplash.com/photo-1574880321928-d16c4bb025fb?w=300&h=200&fit=crop",
    count: "95+ товаров",
  },
  {
    name: "Форма",
    description: "Хоккейные свитера и шорты",
    image:
      "https://images.unsplash.com/photo-1581992595670-90a4b2cee7b8?w=300&h=200&fit=crop",
    count: "60+ товаров",
  },
  {
    name: "Аксессуары",
    description: "Сумки, лента, аксессуары",
    image:
      "https://images.unsplash.com/photo-1578928154847-a5a4e1e8c5b5?w=300&h=200&fit=crop",
    count: "35+ товаров",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Категории товаров
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Выберите нужную категорию экипировки для игры в хоккей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <CardContent className="p-0">
                <div className="relative">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{category.name}</h3>
                    <p className="text-sm text-gray-200">{category.count}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">{category.description}</p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-colors"
                  >
                    Смотреть товары
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
