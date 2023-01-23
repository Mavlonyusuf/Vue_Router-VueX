<template>
  <pre class="text-2xl text-center mt-60 text-red-500">{{ count }}</pre>
  <div class="flex justify-center h-full" v-if="isTrue">
    <button
      @click="decrement"
      class="px-10 py-2 mt-20 text-xl text-slate-200 font-medium rounded bg-indigo-500 shadow-xl shadow-indigo-500"
    >
      Remove
    </button>
    <button
      @click="increment"
      class="px-10 py-2 mt-20 ml-4 text-xl text-slate-200 font-medium rounded bg-indigo-500 shadow-xl shadow-indigo-500"
    >
      Add
    </button>
  </div>
  <div class="h-full" v-else>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam accusantium odit
      nulla aspernatur odio corporis placeat tempora dolores illum sequi!
    </p>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const isTrue = ref(true);
    return { count, increment, decrement, isTrue };
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: "Montserrat", sans-serif;
}
</style>
