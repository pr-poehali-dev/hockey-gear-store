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
    <Card className="group hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            {isNew && <Badge className="bg-green-500">Новинка</Badge>}
            {discount && <Badge className="bg-red-500">-{discount}%</Badge>}
          </div>
          <Button
            size="sm"
            className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-white text-gray-700 hover:bg-gray-100"
          >
            <Icon name="Heart" size={16} />
          </Button>
        </div>

        <div className="p-6">
          <p className="text-sm text-gray-500 mb-1">{brand}</p>
          <h3 className="font-semibold text-gray-900 mb-2 line-clamp-2">
            {name}
          </h3>

          <div className="flex items-center mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={14}
                  className={
                    i < rating
                      ? "text-yellow-400 fill-current"
                      : "text-gray-300"
                  }
                />
              ))}
            </div>
            <span className="text-sm text-gray-500 ml-2">({rating}/5)</span>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xl font-bold text-gray-900">
                {price.toLocaleString()} ₽
              </span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {originalPrice.toLocaleString()} ₽
                </span>
              )}
            </div>
          </div>

          <Button className="w-full bg-blue-600 hover:bg-blue-700">
            <Icon name="ShoppingCart" size={16} className="mr-2" />В корзину
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
