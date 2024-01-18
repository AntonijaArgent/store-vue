<template>
  <div>
    <div class="search-holder">
      <input
        type="text"
        class="search"
        v-model="searchedProduct"
        placeholder="press enter to search"
        @keyup="search"
      />
      <router-link class="cart-link" to="/cart">
        <img class="icon" src="../assets/shopping-bag.svg" />
        <span>{{ store.shoppingCart.state.products.length }}</span>
      </router-link>
    </div>
    <div class="product-holder">
      <router-link
        v-for="product in products"
        :key="product.id"
        :to="'/products/' + product.id"
      >
        <ProductItem :p="product" />
      </router-link>
    </div>
  </div>
</template>
<script>
import ProductItem from "../components/ProductItem.vue";
import { get } from "../helper.js";
import store from "../store.js";
export default {
  name: "HomeView",
  components: { ProductItem },

  data() {
    return {
      products: [],
      searchedProduct: "",
      store,
    };
  },
  async created() {
    this.products = (await get("https://dummyjson.com/products")).products;
  },
  methods: {
    async search(event) {
      if (event.key === "Enter") {
        this.products = (
          await get(
            "https://dummyjson.com/products/search?q=" + this.searchedProduct
          )
        ).products;
      }
    },
  },
};
</script>

<style scoped>
.cart-link {
  white-space: nowrap;
}
.search-holder {
  display: flex;
  justify-content: center;
  padding: 40px;
  align-items: center;
  gap: 10px;
}
.search {
  padding: 10px;
  width: 100%;
  border-radius: 10px;
}
.product-holder {
  display: grid;
  grid-template-columns: auto auto auto auto;
  justify-items: center;
}
.icon {
  height: 20px;
  cursor: pointer;
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
