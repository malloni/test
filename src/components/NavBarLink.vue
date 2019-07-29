<template>
  <div class="navbar-link">
    <router-link class="link" :to="toName">
      <slot></slot>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'NavBarLink',
  props: {
    routeName: String,
    toName: {
      type: String,
      default: '/'
    }
  }
}
</script>

<style scoped>
.navbar-link {
  display: inline-block;
}
.navbar-link > .link {
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #ffffff;
  margin: 0 16px;
}
.navbar-link > .link.router-link-exact-active {
  border-bottom: #ffffff solid 2px;
  padding-bottom: 8px;
}
</style>
