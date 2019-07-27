<template>
  <button class="language-button">
    <img alt="brazil flag" src="../assets/flag-brazil.svg">
    <span>BRL</span>
    <img alt="arrow down" src="../assets/icon-arrow-down.png">
  </button>
</template>

<script>
export default {
  name: 'LanguageButton',
}
</script>

<style scoped>
.language-button {
  display: flex;
  border: none;
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #ffffff;
  background: none;
  justify-content: center;
  align-items: center;
}

.language-button > span {
  margin: 0 6px;
}
</style>
