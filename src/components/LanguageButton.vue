<template>
  <button class="language-button">
      <select>
          <option>
            <img alt="Vue logo" src="../assets/flag-brazil.svg">
            BRL
          </option>
      </select>
      
  </button>
</template>

<script>
export default {
  name: 'LanguageButton',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.language-button{
  display:flex;  
  border: none;  
  cursor: pointer;
  font-size: 16px;
  line-height: 19px;
  color: #FFFFFF;
  background: none;
}
</style>
