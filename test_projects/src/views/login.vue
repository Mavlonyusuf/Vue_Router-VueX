<template>
  <div class="flex justify-center mt-80 flex-col">
    <input
      type="text"
      v-model="text"
      placeholder="Enter your email"
      class="w-52 self-center px-6 py-2 border-2 border-gray-400 rounded"
    />
    <pre class="self-center">{{ text }}</pre>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  setup() {
    let text = ref("");

    return { text };
  },
};
</script>
<style></style>
