<template>
  <div>
    <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-gray-900">
      <div class="container flex flex-wrap items-center justify-between mx-auto">
        <RouterLink to="/" class="flex items-center">
          <img src="../assets/web_mentor__white.png" class="h-6 mr-3 sm:h-9" alt="Logo" />
          <span
            class="self-center text-xl font-semibold whitespace-nowrap dark:text-indigo-500"
          >
            Web_Mentor
          </span>
        </RouterLink>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
          >
            <li>
              <RouterLink
                to="/login"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-500 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                aria-current="page"
                >Login</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/register"
                class="text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800"
                aria-current="page"
                >Register</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import { RouterLink, RouterView } from "vue-router";
export default {};
</script>
<style></style>
