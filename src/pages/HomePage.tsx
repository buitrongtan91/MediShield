import * as React from "react";
import Autoplay from "embla-carousel-autoplay";

import Category from "@/config/category";

import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import ProductCard from "@/components/ProductCard";
import { Link } from "react-router-dom";

const HomePage = () => {
    const plugin = React.useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

    const images: string[] = [];

    Category.forEach((category) => {
        category.group.forEach((group) => {
            if (group.products) {
                group.products.forEach((product) => {
                    images.push(product.img);
                });
            }
        });
    });

    return (
        <div>
            <Carousel
                plugins={[plugin.current]}
                className="w-full"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
            >
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index} className="basis-1/3">
                            <Card>
                                <CardContent>
                                    <AspectRatio ratio={1 / 1} className="flex justify-center  bg-sky-300">
                                        <img src={img} alt="" className="object-cover" />
                                    </AspectRatio>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>

            <div className="flex flex-col gap-10 my-10 rounded-xl p-5 bg-gradient-to-t from-[#0070E0] via-[#01C091] to-[#72E5C9] bg-repeat-x">
                <span className="text-center text-3xl font-bold text-white">Product categories</span>
                <div className="flex justify-between">
                    {Category.map((category, index) => {
                        return (
                            <Link
                                to={`/${category.path}`}
                                key={index}
                                className="flex flex-col items-center justify-start gap-5 p-3 w-[120px] rounded-md bg-white hover:bg-gray-100"
                            >
                                <img src={category.img} alt="" className="w-[40px] h-[40px]" />
                                <span className="text-base font-semibold text-center">{category.label}</span>
                            </Link>
                        );
                    })}
                </div>
            </div>

            <div className="grid grid-cols-4 gap-5 mt-5">
                {Category.map((category) => {
                    return category.group.map((group, groupIndex) => {
                        return group.products?.map((product, index) => {
                            return (
                                <Link key={index} to={`/${category.path}/${groupIndex}/${index}`}>
                                    <ProductCard key={index} item={product} />
                                </Link>
                            );
                        });
                    });
                })}
            </div>
        </div>
    );
};

export default HomePage;
