<template>
  <button class="b-navbar-button">
      <slot></slot>
  </button>
</template>

<script>
export default {
  name: '',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.b-navbar-button{
  display:inline-block;
  padding: 10px 15px;
  border: 2px solid #FFFFFF;
  border-radius: 12px;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: none;
  margin: 0 16px;
}
</style>
