<template>
  <div class="home-items dark:bg-slate-900 h-screen flex justify-center flex-col">
    <pre class="text-2xl text-center text-red-500">{{ count }}</pre>
    <div class="flex justify-center" v-if="isTrue">
      <button
        @click="decrement"
        class="px-10 py-2 mt-20 text-xl text-slate-200 font-medium rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500"
      >
        Remove
      </button>
      <button
        @click="increment"
        class="px-10 py-2 mt-20 ml-4 text-xl text-slate-200 font-medium rounded-lg bg-indigo-500 shadow-lg shadow-indigo-500"
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
  </div>
</template>
<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    let count = ref(0);
    const increment = () => {
      count.value++;
    };
    const decrement = () => {
      count.value--;
    };
    const isTrue = ref(true);

    return {
      count,
      increment,
      decrement,
      isTrue,
    };
  },
};
</script>
<style>
@import url(https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;800;900&display=swap);

body {
  font-family: "Montserrat", sans-serif;
}
</style>
