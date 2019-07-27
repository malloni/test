<template>
  <div class="navbar-link-container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'NavBarLinkContainer'
}
</script>

<style scoped>
.navbar-link-container {
  display: flex;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 100%;
}
</style>
