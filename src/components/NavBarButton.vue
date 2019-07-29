<template>
  <button class="navbar-button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'NavbarButton'
}
</script>

<style scoped>
.navbar-button {
  display: inline-block;
  padding: 10px 15px;
  border: 2px solid #ffffff;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: none;
  margin: 0 16px;
}
</style>
