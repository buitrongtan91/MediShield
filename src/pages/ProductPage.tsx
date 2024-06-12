import { Link, useParams } from "react-router-dom";
import Category from "@/config/category";
import { useEffect, useState } from "react";
import { Group, Product } from "@/types";
import GroupItem from "@/components/GroupItem";
import ProductCard from "@/components/ProductCard";

const ProductPage = () => {
    let { category, group } = useParams<{ category: string; group?: string }>();
    const CategoryItem = Category.find((item) => {
        return item.path === category;
    });
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const CategoryItem = Category.find((item) => item.path === category);
        if (group && CategoryItem) {
            let GroupItem: Group;
            const groupIndex = parseInt(group, 10);
            if (!isNaN(groupIndex) && groupIndex >= 0 && groupIndex < CategoryItem.group.length) {
                GroupItem = CategoryItem.group[groupIndex];
                if (GroupItem.products) {
                    setProducts(
                        GroupItem.products.map((product) => ({
                            ...product,
                            group: groupIndex, // Add group field
                        }))
                    );
                }
            }
        } else {
            let allProducts: Product[] = [];
            CategoryItem?.group.forEach((group, groupIndex) => {
                // Include groupIndex
                if (group.products) {
                    allProducts = allProducts.concat(
                        group.products.map((product) => ({
                            ...product,
                            group: groupIndex, // Add group field
                        }))
                    );
                }
            });
            // Set products
            setProducts(allProducts);
        }
    }, [category, group]);

    return (
        <div>
            <div className="grid grid-cols-8 gap-2 bg-gradient-to-t from-[#0070E0] via-[#01C091] to-[#72E5C9] bg-repeat-x rounded-lg p-10">
                {CategoryItem?.group.map((item, index, arr) => {
                    return (
                        <Link key={index} to={`/${CategoryItem.path}/${index !== arr.length - 1 ? index : ""}`}>
                            <GroupItem key={index} group={item} />
                        </Link>
                    );
                })}
            </div>
            <div className="grid grid-cols-4 gap-5 py-10">
                {products.map((item, index) => (
                    <Link key={index} to={`/${category}/${item.group}/${index}`}>
                        <ProductCard key={index} item={item} />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default ProductPage;
