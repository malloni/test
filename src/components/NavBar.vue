<template>
  <div class="navbar">
    <div class="navbar-container">
      <img alt="Vue logo" src="../assets/logo.png" id="logo">

      <nav-bar-link-container>
        <nav-bar-link>BleuTest Buy</nav-bar-link>
        <nav-bar-link :route-name="'compare'">Compare</nav-bar-link>
        <nav-bar-link>Remittance</nav-bar-link>
        <nav-bar-link>Exchanges</nav-bar-link>
        <nav-bar-link>Exchanges' Fees</nav-bar-link>
        <nav-bar-button>Login</nav-bar-button>
        <language-button></language-button>
      </nav-bar-link-container>
    </div>
  </div>
</template>

<script>
import NavBarButton from './NavBarButton.vue'
import NavBarLink from './NavBarLink.vue'
import NavBarLinkContainer from './NavBarLinkContainer.vue'
import LanguageButton from './LanguageButton.vue'

export default {
  name: 'NavBar',
  components: { NavBarButton, NavBarLink, NavBarLinkContainer, LanguageButton }
}
</script>

<style scoped>
.navbar {
  background-color: #0080dd;
  height: 100px;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1280px;
  margin: 0 auto;
  height: 100%;
}
</style>
