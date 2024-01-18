export default {
  shoppingCart: {
    state: {
      products: [],
    },
    addProduct(product) {
      this.state.products.push(product);
    },
    clear() {
      this.state.products = [];
    },
  },
};
