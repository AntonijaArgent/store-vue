<template>
  <div class="product-item">
    <p>{{ p.title }}</p>
    <img class="img" :src="p.thumbnail" />
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: { p: Object },
};
</script>

<style scoped>
.product-item {
  max-width: 200px;
  padding: 10px;
}
.img {
  max-width: 100%;
}
</style>
