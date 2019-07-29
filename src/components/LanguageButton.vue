<template>
  <div>
    <bl-select v-model="selectedLanguage" :has-icon="true">
      <bl-select-option
        v-for="(value, index) in languageOptions"
        :key="index"
        :value="value"
      >{{value.label}}</bl-select-option>
    </bl-select>
  </div>
</template>

<script>
import BlSelect from './BleuSelect.vue'
import BlSelectOption from './BleuSelectOption.vue'

export default {
  name: 'LanguageButton',
  data() {
    return {
      languageOptions: [
        {
          label: 'BRL',
          icon: 'flag-brazil.svg'
        },
        {
          label: 'EUA',
          icon: 'flag-brazil-inverse.svg'
        }
      ],
      selectedLanguage: {
        label: 'BRL',
        icon: 'flag-brazil.svg'
      }
    }
  },
  components: { BlSelect, BlSelectOption }
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
</style>
