<script setup>
import { ref } from 'vue'

const products = ref([
  { id: 1, name: 'Laptop Pro', price: 1200, category: 'Electronique' },
  { id: 2, name: 'Souris Gamer', price: 50, category: 'Electronique' },
  { id: 3, name: 'T-shirt Coton', price: 20, category: 'Vetements' },
])

const cartCount = ref(0)
</script>

<template>
  <div style="padding: 20px; font-family: Arial;">
    <h1>Catalogue de Produits (Vue)</h1>
    <p>Panier : {{ cartCount }} articles</p>
    
    <div style="display: grid; gap: 10px;">
      <div v-for="product in products" :key="product.id" style="border: 1px solid #ccc; padding: 10px;">
        <h3>{{ product.name }}</h3>
        <p>Prix : {{ product.price }}€</p>
        <button @click="cartCount++">
          Ajouter au panier
        </button>
      </div>
    </div>
  </div>
</template>
