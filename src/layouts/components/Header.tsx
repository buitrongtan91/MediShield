import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { AlignJustify, Bell, ChevronDown, CircleUserRound, Search, ShoppingCart } from "lucide-react";
import logo from "@/assets/icons8-plus-shield-96.png";
import Category from "@/config/category";

import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import CategoryItem from "@/components/CategoryItem";
import { Tabs, TabsContent, TabsList } from "@/components/ui/tabs";
import GroupItem from "@/components/GroupItem";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="w-full py-4 bg-sky-500">
            <div className="container mx-auto flex justify-between items-center h-11 gap-10">
                <Link to="/" className="flex items-center text-2xl text-white font-bold">
                    <img src={logo} className="w-10 h-10" />
                    MediShield
                </Link>
                <div className="flex items-center bg-white rounded-sm py-1 px-2 flex-1">
                    <Search strokeWidth={2} size={20} className="" />
                    <Input
                        type="text"
                        placeholder="Medicine names, symptoms, vitamins and supplements."
                        className="border-none shadow-none  focus-visible:ring-0"
                    />
                </div>
                <div className="flex items-center text-white h-full gap-5">
                    <Bell />
                    <ShoppingCart />
                    <Separator orientation="vertical" />
                    <div className="flex items-center gap-2 text-black bg-white py-2 px-4 rounded-full cursor-pointer hover:text-sky-500">
                        <CircleUserRound />
                        <span>Log in/Sign in</span>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <div className="bg-white text-black flex items-center justify-between gap-2 p-2 rounded-sm w-[190px]">
                            <div className="flex items-center gap-2">
                                <AlignJustify />
                                <span className="text-base font-semibold">Category</span>
                            </div>
                            <ChevronDown />
                        </div>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="start" className="w-[100vw]">
                        <Tabs defaultValue={Category[0].label} className="container grid grid-cols-[1fr_3fr] gap-5">
                            <TabsList className="h-full flex flex-col">
                                {Category.map((item, index) => (
                                    <CategoryItem key={index} item={item} />
                                ))}
                            </TabsList>
                            <div>
                                {Category.map((item, index) => (
                                    <TabsContent key={index} value={item.label} className="grid grid-cols-5 gap-2 m-0">
                                        {item.group?.map((group, index, arr) => (
                                            <Link
                                                key={index}
                                                to={`/${item.path}/${index !== arr.length - 1 ? index : ""}`}
                                            >
                                                <GroupItem group={group} />
                                            </Link>
                                        ))}
                                    </TabsContent>
                                ))}
                            </div>
                        </Tabs>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    );
};

export default Header;
