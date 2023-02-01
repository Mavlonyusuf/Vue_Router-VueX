<template>
  <div class="register-items flex justify-center h-screen dark:bg-slate-900">
    <form
      class="w-1/3 flex flex-col dark:bg-slate-800 mx-auto my-auto shadow-2xl shadow-indigo-300 p-5 rounded-xl dark:shadow-slate-900"
    >
      <div class="mb-6">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-200"
          >Your Username</label
        >
        <input
          v-model="username"
          type="text"
          id="name"
          class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Username"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="email"
          class="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-200"
          >Your Email</label
        >
        <input
          v-model="email"
          type="email"
          id="email"
          class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="user12345@gmail.com"
          required
        />
      </div>
      <div class="mb-6">
        <label
          for="password"
          class="block mb-2 text-sm font-medium text-slate-900 dark:text-slate-200"
          >Your Password</label
        >
        <input
          placeholder="user12345"
          v-model="password"
          type="password"
          id="password"
          class="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-slate-900 dark:border-slate-600 dark:placeholder-slate-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-slate-300 rounded bg-slate-50 focus:ring-3 focus:ring-blue-300 dark:bg-slate-700 dark:border-slate-600 dark:focus:ring-blue-600 dark:ring-offset-slate-900 dark:focus:ring-offset-slate-900"
            required
          />
        </div>
        <label
          for="remember"
          class="ml-2 text-sm font-medium text-slate-900 dark:text-slate-200"
          >Remember me</label
        >
      </div>
      <button
        @click="submitForm"
        :disabled="isLoading"
        :class="{ disabled: isLoading }"
        type="submit"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  </div>
</template>
<script>
import axios from "axios";
import { RouterLink } from "vue-router";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const router = useRouter();
    const store = useStore();
    const username = ref();
    const email = ref();
    const password = ref();
    const isLoading = computed(() => store.state.Auth.isLoading);
    const submitForm = (e) => {
      e.preventDefault();
      const data = {
        username: username.value,
        email: email.value,
        password: password.value,
      };
      store.dispatch("register", data);
      router.push("/login");
      console.log("Done");
    };

    return {
      isLoading,
      submitForm,
      username,
      email,
      password,
    };
  },
};
</script>
<style>
.disabled {
  opacity: 0.7;
}
</style>
