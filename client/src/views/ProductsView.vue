<template>
  <div>
    <div class="control">
      <input type="text" class="input" placeholder="Search" v-model="search" />
    </div>
    <div class="products">
      <RouterLink
        class="product"
        v-for="product in results"
        :key="product.id"
        :to="`/products/${product.id}`"
      >
        <div class="product-image">
          <img :src="product.thumbnail" :alt="product.title" />
        </div>
        <div class="product-info">
          <h2>{{ product.title }}</h2>
          <p>{{ product.description }}</p>
          <p class="price">
            <span class="currency">$</span>
            <span class="amount">
              {{ product.price }}
            </span>
          </p>
        </div>
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { getProducts } from "../stores/products";
import { computed, reactive, ref } from "vue";
import { RouterLink } from "vue-router";

const products = reactive(getProducts());

const search = ref("");

const results = computed(() =>
  products.filter((product) =>
    product.title.toLowerCase().includes(search.value.toLowerCase())
  )
);
</script>

<style scoped>
.products {
  display: flex;
  flex-wrap: wrap;
  background-color: aliceblue;
}

.product {
  flex-basis: 10em;
  width: 300px;
  margin: 1em;
  padding: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
}

.product-info {
  font-size: small;
}

.price {
  display: flex;
  align-items: flex-start;
}

.amount {
  font-size: x-large;
}
</style>
