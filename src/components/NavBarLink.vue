<template>
  <div class="navbar-link">
      <a href="#"><slot></slot></a>
  </div>
</template>

<script>
export default {
  name: 'NavBarLink'
}
</script>

<style scoped>
.navbar-link{
  display:inline-block;
}
.navbar-link > a{  
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #FFFFFF;
  margin: 0 16px;
}
</style>
