import { CategoryItemType } from "@/types";
import { TabsTrigger } from "./ui/tabs";

type Props = {
    item: CategoryItemType;
};

const CategoryItem = ({ item }: Props) => {
    return (
        <TabsTrigger value={item.label} className="flex justify-start w-full gap-5">
            <img src={item.img} alt="" className="w-[40px] h-[40px]" />
            <span className="text-base font-semibold">{item.label}</span>
        </TabsTrigger>
    );
};

export default CategoryItem;
