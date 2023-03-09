<template>
  <NavBar />
  <RouterView />
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'
import NavBar from '@/components/Layout/NavBar.vue'

</script>
<style>
</style>