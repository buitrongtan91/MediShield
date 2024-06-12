import { useParams } from "react-router-dom";
import Category from "@/config/category";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { CircleMinus, CirclePlus } from "lucide-react";
import { Button } from "@/components/ui/button";

import detail1 from "@/assets/detaipage1.svg";
import detail2 from "@/assets/detaipage2.svg";
import detail3 from "@/assets/detaipage3.svg";

const ProductDetailPage = () => {
    const { category, group, product } = useParams<{ category: string; group: string; product: string }>();
    const groupIndex = group ? parseInt(group, 10) : 0;
    const productIndex = product ? parseInt(product, 10) : 0;
    const CategoryItem = Category.find((item) => item.path === category)?.group[groupIndex]?.products?.[productIndex];

    if (!CategoryItem) {
        // Xử lý khi không tìm thấy sản phẩm
        return <div>Sản phẩm không tồn tại</div>;
    }

    return (
        <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col gap-5">
                <img src={CategoryItem.img} alt="" className="rounded-lg w-full object-center" />
                <span className="bg-sky-200 p-1 rounded-sm text-sky-600 text-md font-normal">
                    100% genuine product, design may vary by shipment
                </span>
                <img src={CategoryItem.img} alt="" className="rounded-lg border-2 border-sky-500" width={100} />
            </div>
            <div className="flex flex-col gap-10">
                <span className="text-3xl font-bold">{CategoryItem.name}</span>
                <span
                    className={`text-3xl font-bold ${
                        category === "medicine" && group === "1" ? "text-orange-500" : "text-sky-500"
                    }`}
                >
                    {CategoryItem.price}
                </span>
                <div className="flex flex-col gap-5">
                    <span className="text-md font-normal text-gray-400">
                        Price includes tax. Shipping fees and other costs (if any) will be shown when ordering.
                    </span>
                    <div className="text-md font-normal bg-orange-200 p-5 rounded-xl">
                        Check out the discount code catalog to see exclusive offers at pharmacies near you
                    </div>
                </div>
                <Separator />
                <Card>
                    <CardHeader className="flex flex-col gap-3">
                        <CardTitle>The pharmacy is still in stock</CardTitle>
                        <CardDescription>
                            Please share your coordinates so that MediShield can suggest pharmacies in stock near you
                        </CardDescription>
                        <Separator />
                    </CardHeader>
                    <CardContent className="flex flex-col gap-8">
                        <CardTitle className="text-2xl">Quantity</CardTitle>
                        <div className="flex items-center gap-3">
                            <CircleMinus size={32} />
                            <span className="text-3xl font-bold">1</span>
                            <CirclePlus size={32} />
                        </div>
                        <div className="flex flex-col gap-5">
                            <Button className="bg-sky-500 hover:bg-sky-900">
                                {category === "medicine" && group === "1" ? "Advise now" : "Buy now"}
                            </Button>
                            <Button variant={"outline"} className="border-sky-500 text-sky-500">
                                Add to cart
                            </Button>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <div className="w-[150px] h-[100px] flex flex-col items-center justify-between gap-3">
                            <img src={detail1} alt="" width={50} />
                            <span className="text-center">Enough medicine standard</span>
                        </div>
                        <div className="w-[150px] h-[100px] flex flex-col items-center justify-between gap-3">
                            <img src={detail2} alt="" width={50} />
                            <span className="text-center">Delivery Super speed</span>
                        </div>
                        <div className="w-[150px] h-[100px] flex flex-col items-center justify-between gap-3">
                            <img src={detail3} alt="" width={50} />
                            <span className="text-center">Free of charge transport</span>
                        </div>
                    </CardFooter>
                </Card>
            </div>
        </div>
    );
};

export default ProductDetailPage;
