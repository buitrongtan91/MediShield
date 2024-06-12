type RoutesType = {
    [key: string]: string;
};

const routes: RoutesType = {
    productPage: "/:category/:group?",
    productDetail: "/:category/:group/:product",
    home: "/",
};

export default routes;
