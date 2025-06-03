import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const categories = [
  {
    name: "Клюшки",
    description: "Хоккейные клюшки для любого уровня",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=500&h=400&fit=crop&auto=format",
    count: "120+ товаров",
  },
  {
    name: "Коньки",
    description: "Профессиональные хоккейные коньки",
    image:
      "https://images.unsplash.com/photo-1578928154847-a5a4e1e8c5b5?w=500&h=400&fit=crop&auto=format",
    count: "85+ товаров",
  },
  {
    name: "Шлемы",
    description: "Защитные шлемы и маски",
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=500&h=400&fit=crop&auto=format",
    count: "45+ товаров",
  },
  {
    name: "Защита",
    description: "Нагрудники, налокотники, щитки",
    image:
      "https://images.unsplash.com/photo-1574880321928-d16c4bb025fb?w=500&h=400&fit=crop&auto=format",
    count: "95+ товаров",
  },
  {
    name: "Форма",
    description: "Хоккейные свитера и шорты",
    image:
      "https://images.unsplash.com/photo-1581992595670-90a4b2cee7b8?w=500&h=400&fit=crop&auto=format",
    count: "60+ товаров",
  },
  {
    name: "Аксессуары",
    description: "Сумки, лента, аксессуары",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=500&h=400&fit=crop&auto=format",
    count: "35+ товаров",
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Категории товаров
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Выберите нужную категорию экипировки для игры в хоккей
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-white/80 backdrop-blur-sm hover:scale-105"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm text-gray-200 font-medium">
                      {category.count}
                    </p>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg">
                    {category.description}
                  </p>
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white group-hover:border-transparent transition-all duration-300 py-3 text-lg font-semibold"
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
