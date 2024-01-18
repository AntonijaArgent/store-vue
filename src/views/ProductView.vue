<template>
  <div class="product-page" v-if="product">
    <div class="headding-wrapper">
      <img @click="goBack" class="icon" src="../assets/arrow-left.svg" />
      <h1 class="headding">{{ product.title }}</h1>
      <span class="spacer"></span>
      <router-link class="cart-link" to="/cart">
        <img class="icon" src="../assets/shopping-bag.svg" />
        <span>{{ store.shoppingCart.state.products.length }}</span>
      </router-link>
    </div>
    <img class="img" :src="product.images[0]" />
    <div class="action-bar">
      <span class="tag blue">{{ product.brand }}</span>
      <span class="tag red">{{ product.category }}</span>
      <span class="spacer"></span>
      <button class="add-to-cart" @click="addToCart">
        <img class="icon" src="../assets/shopping-bag.svg" />
        <img class="icon" src="../assets/plus.svg" />
      </button>
    </div>
    <p>{{ product.description }}</p>
    <table class="table">
      <thead>
        <tr>
          <th>Price</th>
          <th>Rating</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ product.price }}$</td>
          <td>{{ product.rating }} / 5</td>
          <td>{{ product.stock }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { get } from "../helper.js";
import store from "../store.js";
export default {
  data() {
    return {
      product: null,
      store,
    };
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    addToCart() {
      this.store.shoppingCart.addProduct(this.product);
    },
  },
  async created() {
    this.product = await get(
      "https://dummyjson.com/products/" + this.$route.params.id
    );
  },
};
</script>

<style scoped>
.cart-link {
  white-space: nowrap;
}
.product-page {
  max-width: 600px;
  margin: 0 auto;
}
.icon {
  height: 20px;
  cursor: pointer;
}
.tag {
  padding: 10px;
  border-radius: 10px;
  color: white;
  margin-right: 10px;
}
.tag.blue {
  background: rgb(80, 179, 236);
}
.tag.red {
  background: rgb(219, 97, 97);
}
.headding-wrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}
.headding {
  margin-bottom: 20px;
}
.img {
  max-height: 60vh;
  display: block;
  margin-bottom: 10px;
  width: 100%;
  object-fit: contain;
}
.table {
  border-collapse: collapse;
  border-spacing: 0px;
}
.table,
.table th,
.table td {
  border: 1px solid black;
  padding: 10px;
}
.action-bar {
  display: flex;
}
.spacer {
  flex: 1;
}
.add-to-cart {
  background: white;
  border-radius: 20px;
  cursor: pointer;
}
</style>
