<script setup>
import { RouterView } from 'vue-router'
</script>

<template>
  <NavBar />

  <RouterView />

  <Footer />
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
export default {
  components: {
    NavBar,
    Footer
  }
}
</script>