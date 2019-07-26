<template>
  <div id="main-layout">
      <nav-bar></nav-bar>
      <slot></slot>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
  name: 'MainLayout',
  components: { NavBar }
}
</script>

<style scoped>
#main-layout{
    margin-top: 100px;
}
</style>
