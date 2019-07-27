<template>
  <div class="navbar-link">
    <a :class="{ isSelected: isCurrentRoute }" href="#">
      <slot></slot>
    </a>
  </div>
</template>

<script>
export default {
  name: 'NavBarLink',
  props: {
    routeName: String
  },
  computed: {
    isCurrentRoute() {
      return this.$route && this.routeName == this.$route.name
    }
  }
}
</script>

<style scoped>
.navbar-link {
  display: inline-block;
}
.navbar-link > a {
  font-size: 16px;
  line-height: 19px;
  text-decoration: none;
  color: #ffffff;
  margin: 0 16px;
}
.navbar-link > a.isSelected {
  border-bottom: #ffffff solid 2px;
  padding-bottom: 8px;
}
</style>
