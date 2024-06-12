import { DefaultLayout } from "@/layouts";
import config from "@/config";
import React, { ReactNode } from "react";
import { HomePage, ProductPage, ProductDetailPage } from "@/pages";

type RouteType = {
    path: string;
    component: React.FunctionComponent;
    layout: React.FunctionComponent<{ children: ReactNode }>;
};

const publicRoutes: RouteType[] = [
    {
        path: config.routes.home,
        component: HomePage,
        layout: DefaultLayout,
    },
    {
        path: config.routes.productPage,
        component: ProductPage,
        layout: DefaultLayout,
    },
    {
        path: config.routes.productDetail,
        component: ProductDetailPage,
        layout: DefaultLayout,
    },
];

const privateRoutes: RouteType[] = [];

export { publicRoutes, privateRoutes };
