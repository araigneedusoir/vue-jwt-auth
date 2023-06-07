<script setup>
import { defineComponent, onMounted } from "vue"
import { AuthView, HomeView } from "@/views"
import userStore from "@/stores/user.store"
</script>

<template>
    <div id ="app-container bg-light">
      <div v-if="!userStore.getters.isLoggedIn" class="d-grid gap-2 col-6 mx-auto">
        <AuthView />
      </div>
      <div v-else class="text-center">
        <h2>Welcome, {{ userStore.state.name }}</h2>
        <HomeView />
        <button class="btn btn-secondary" @click="userStore.logout()">
          Logout
        </button>
      </div>
    </div>
  </template>

<script>

export default defineComponent({
  name: 'App',
  components: { AuthView, HomeView },
  setup() {
    onMounted(userStore.getUser)
    return { userStore }
  }
})
</script>