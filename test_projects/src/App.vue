<template>
  <div>
    <Navbar :id="obj.id" :greeting="obj.hello" :likes="42" :isArr="[1, 3, 6]" />
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
  setup() {
    const obj = {
      id: 12,
      hello: "Hello",
    };
    return {
      obj,
    };
  },
};
</script>
<style></style>
