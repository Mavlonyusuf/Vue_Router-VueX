<template>
  <div>
    <Navbar />
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
