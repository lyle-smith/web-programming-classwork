<template>
  <div v-if="product" class="section">
    <div class="product-image">
      <img :src="product.thumbnail" :alt="product.title" />
    </div>
    <div class="product-info">
      <h3 class="title">{{ product.title }}</h3>
      <p>{{ product.description }}</p>
      <p class="price">
        <span class="currency">$</span>
        <span class="amount">
          {{ product.price }}
        </span>
      </p>
    </div>
  </div>
  <div v-else-if="isLoading">
    <img src="../assets/loading-product-placeholder.gif" />
  </div>
  <div v-else class="section">
    <h2 class="title">Product not found</h2>
  </div>
</template>

<script setup lang="ts">
import { isLoading } from "@/stores/session";
import { ref } from "vue";
import { useRoute } from "vue-router";
import { getProduct, type Product } from "../stores/products";

const route = useRoute();

const product = ref(null as Product | null);

getProduct(+route.params.id).then((x) => {
  product.value = x;
});
</script>

<style scoped>
.section {
  display: flex;
  background-color: aliceblue;
}

.product-info {
  padding: 1em;
}
</style>
