export type Product = {
    name: string;
    price: string;
    img: string;
    group?: number;
};

export type Group = {
    label: string;
    img: string;
    products?: Product[];
};

export type CategoryItemType = {
    label: string;
    img: string;
    path: string;
    group: Group[];
};
