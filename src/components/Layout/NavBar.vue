<template>
	<nav class="navbar navbar-dark bg-primary navbar-expand-sm">
	<div class="container">
		<router-link to="/" class="navbar navbar-brand text-white">Notes App</router-link>
	 <div class="nav collapse navbar-collapse">
     <ul class="navbar-nav">
       <li class="nav-item">
         <RouterLink class="nav-link px-4" to="/">Notes</RouterLink>
       </li>
       <li class="nav-item">
         <RouterLink class="nav-link px-4" to="/stats">Stats</RouterLink>
       </li>
     </ul>
   </div>
  </div>
</nav>
</template>
<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref, reactive } from 'vue'

</script>
<style scoped>
	.active {

	}
</style>