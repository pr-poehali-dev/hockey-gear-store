import ProductCard from "./ProductCard";

const featuredProducts = [
  {
    name: "Хоккейная клюшка Bauer Vapor FlyLite",
    price: 12990,
    originalPrice: 15990,
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=600&h=500&fit=crop&auto=format",
    brand: "Bauer",
    rating: 5,
    isNew: true,
    discount: 19,
  },
  {
    name: "Коньки хоккейные CCM Jetspeed FT6",
    price: 45990,
    image:
      "https://images.unsplash.com/photo-1578928154847-a5a4e1e8c5b5?w=600&h=500&fit=crop&auto=format",
    brand: "CCM",
    rating: 4,
    isNew: false,
  },
  {
    name: "Шлем хоккейный Warrior Alpha One Pro",
    price: 8990,
    originalPrice: 11990,
    image:
      "https://images.unsplash.com/photo-1565992441121-4367c2967103?w=600&h=500&fit=crop&auto=format",
    brand: "Warrior",
    rating: 5,
    isNew: false,
    discount: 25,
  },
  {
    name: "Нагрудник Bauer Supreme S37",
    price: 23490,
    image:
      "https://images.unsplash.com/photo-1574880321928-d16c4bb025fb?w=600&h=500&fit=crop&auto=format",
    brand: "Bauer",
    rating: 4,
    isNew: true,
  },
  {
    name: "Свитер хоккейный Nike Team Canada",
    price: 7490,
    originalPrice: 8990,
    image:
      "https://images.unsplash.com/photo-1581992595670-90a4b2cee7b8?w=600&h=500&fit=crop&auto=format",
    brand: "Nike",
    rating: 4,
    isNew: false,
    discount: 17,
  },
  {
    name: "Сумка хоккейная Warrior Pro Carry Bag",
    price: 4990,
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=500&fit=crop&auto=format",
    brand: "Warrior",
    rating: 4,
    isNew: false,
  },
];

const ProductGrid = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-blue-800 bg-clip-text text-transparent mb-6">
            Популярные товары
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Топовая экипировка от ведущих брендов по лучшим ценам
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {featuredProducts.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
