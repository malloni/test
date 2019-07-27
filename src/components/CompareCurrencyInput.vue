<template>
  <div>
    <currency-input v-model="currentValue"></currency-input>
    <currency-input v-model="price" :isDisable="true"></currency-input>
  </div>
</template>

<script>
import CurrencyInput from './CurrencyInput.vue'
import Axios from 'axios'
const baseURL = 'https://economia.awesomeapi.com.br/'
const timeout = 10000

export default {
  name: 'CompareCurrencyInput',
  data() {
    return {
      bid: 0,
      currencies: ['BRL', 'USD'],
      currentValue: {
        value: 100.00,
        currency: 'BRL'
      }
    }
  },
  computed: {
    price() {
      if (this.currentValue.currency === 'BRL')
        return {
          value: (this.currentValue.value * this.bid).toFixed(2),
          currency: 'USD'
        }
      else
        return {
          value: (this.currentValue.value / this.bid).toFixed(2),
          currency: 'BRL'
        }
    }
  },
  mounted() {
    let http = Axios.create({ baseURL, timeout })
    http.request({
      method: 'get',
      url: 'all/USD-BRL'
    }).then(response => {
      this.bid = parseFloat(response.data.USD.bid.replace(',', '.'))
      console.log(this.bid)
    })
  },
  components: { CurrencyInput }
}
</script>

<style scoped>
</style>
