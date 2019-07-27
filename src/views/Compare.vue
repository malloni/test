<template>
  <main-layout>
    <div id="content">
      <h1>USD Best Price in Brazil</h1>
      <p>
        Compare and find in realtime the best effective prices in Brazil's top USD exchanges, considering fees.
        <br>
        <span class="mark">Click on the exchange row</span> to view operation details.
      </p>
      <div id="compare-currency-container">
        <compare-currency-input></compare-currency-input>
      </div>
    </div>
  </main-layout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout.vue'
import CompareCurrencyInput from '@/components/CompareCurrencyInput.vue'

export default {
  name: '',
  props: {
    msg: String
  },
  components: { MainLayout, CompareCurrencyInput }
}
</script>

<style scoped>
#content {
  max-width: 840px;
  margin: 200px auto;
  text-align: center;
}
#compare-currency-container {
  margin-top: 80px;
}
</style>
