<template>
  <div>
    <Navbar />
  </div>
  <div class="router-view">
    <RouterView />
  </div>
</template>
<script>
import { RouterView } from "vue-router";
import Navbar from "./components/navbar.vue";
export default {
  components: {
    Navbar,
  },
};
</script>
<style></style>
