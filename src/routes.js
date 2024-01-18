import HomeView from "./views/HomeView.vue";
import ShoppingCart from "./views/ShoppingCart.vue";
import ProductView from "./views/ProductView.vue";

let routes = [
  { path: "/", component: HomeView },
  {
    path: "/products/:id",
    component: ProductView,
  },
  {
    path: "/cart",
    component: ShoppingCart,
  },
];

export default routes;
