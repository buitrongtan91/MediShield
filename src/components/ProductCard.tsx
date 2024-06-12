import { Product } from "@/types";
import { Card, CardContent } from "./ui/card";
import { AspectRatio } from "./ui/aspect-ratio";

type Props = {
    item: Product;
};

const ProductCard = ({ item }: Props) => {
    return (
        <Card className="flex flex-col gap-5 group h-full">
            <AspectRatio ratio={1 / 1}>
                <img src={item.img} className="rounded-lg object-center" />
            </AspectRatio>
            <CardContent className="flex-1 flex flex-col gap-5 justify-between">
                <span className="group-hover:underline">{item.name}</span>
                <span className="text-2xl font-bold text-sky-500">{item.price}</span>
            </CardContent>
        </Card>
    );
};

export default ProductCard;
