<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";
components: {
  Navbar;
}
</script>

<template>
  <Navbar />
  <RouterView />
</template>

<style scoped></style>
