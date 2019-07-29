<template>
  <div @click="onOptionClicked">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BlSelectOption',
  props: ['value'],
  inject: {
    BlSelect: {}
  },
  methods: {
    onOptionClicked() {
      this.BlSelect.setSelectedItem(this.value);
    }
  }
}
</script>

<style scoped>
</style>
