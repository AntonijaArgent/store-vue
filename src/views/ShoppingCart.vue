<template>
  <div class="shopping-cart-page">
    <div class="headding-wrapper">
      <img @click="goBack" class="icon" src="../assets/arrow-left.svg" />
      <h1 class="headding">Shopping cart</h1>
      <span class="spacer"></span>
      <img class="icon" @click="clear" src="../assets/trash.svg" />
    </div>
    <div class="product-holder">
      <router-link
        v-for="(product, index) in store.shoppingCart.state.products"
        :key="index"
        :to="'/products/' + product.id"
      >
        <ProductItem :p="product" />
      </router-link>
    </div>
  </div>
</template>

<script>
import ProductItem from "../components/ProductItem.vue";
import store from "../store.js";
export default {
  components: { ProductItem: ProductItem },
  data() {
    return {
      store,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    clear() {
      this.store.shoppingCart.clear();
    },
  },
};
</script>

<style scoped>
.shopping-cart-page {
  max-width: 600px;
  margin: 0 auto;
}
.headding-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.headding {
  margin-bottom: 20px;
}
.icon {
  height: 20px;
  cursor: pointer;
}
.spacer {
  flex: 1;
}
.product-holder {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-items: center;
}
@media screen and (max-width: 1200px) {
  .product-holder {
    grid-template-columns: auto auto auto;
  }
}
@media screen and (max-width: 600px) {
  .product-holder {
    grid-template-columns: auto auto;
  }
}
@media screen and (max-width: 400px) {
  .product-holder {
    grid-template-columns: auto;
  }
}
</style>
