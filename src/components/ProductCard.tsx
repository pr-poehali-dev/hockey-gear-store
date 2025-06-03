import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

interface ProductCardProps {
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  brand: string;
  rating: number;
  isNew?: boolean;
  discount?: number;
}

const ProductCard = ({
  name,
  price,
  originalPrice,
  image,
  brand,
  rating,
  isNew,
  discount,
}: ProductCardProps) => {
  return (
    <Card className="group hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500 cursor-pointer overflow-hidden border-0 bg-white hover:scale-105">
      <CardContent className="p-0">
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={name}
            className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && (
              <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg">
                Новинка
              </Badge>
            )}
            {discount && (
              <Badge className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 shadow-lg animate-pulse">
                -{discount}%
              </Badge>
            )}
          </div>
          <Button
            size="sm"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/90 text-gray-700 hover:bg-white hover:text-red-500 shadow-lg backdrop-blur-sm"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        <div className="p-8">
          <p className="text-sm text-gray-500 mb-2 font-semibold uppercase tracking-wide">
            {brand}
          </p>
          <h3 className="font-bold text-gray-900 mb-4 line-clamp-2 text-lg leading-tight">
            {name}
          </h3>

          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={16}
                  className={
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2 font-medium">
              ({rating}/5)
            </span>
          </div>

          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                {price.toLocaleString()} ₽
              </span>
              {originalPrice && (
                <span className="text-lg text-gray-500 line-through">
                  {originalPrice.toLocaleString()} ₽
                </span>
              )}
            </div>
          </div>

          <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 py-3 text-base font-semibold">
            <Icon name="ShoppingCart" size={18} className="mr-2" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
