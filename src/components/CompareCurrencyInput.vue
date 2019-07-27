<template>
  <div>
    <currency-input v-model="currentValue" :currency-options="currencies"></currency-input>
    <currency-input :value="convertedValue" :currency-options="currencies" :isDisable="true"></currency-input>
  </div>
</template>

<script>
import CurrencyInput from './CurrencyInput.vue'
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex'

export default {
  name: 'CompareCurrencyInput',
  computed: {
    currentValue: {
      get() {
        return this.$store.state.currentValue
      },
      set(value) {
        this.updateCurrentValue(value)
      }
    },
    ...mapGetters([
      'convertedValue'
    ]),
    ...mapState({
      currencies: state => state.currencies,
      bid: state => state.bid
    })
  },
  mounted() {
    this.updateBidAsync()
  },
  methods: {
    ...mapActions(['updateBidAsync']),
    ...mapMutations(['updateCurrentValue'])
  },
  components: { CurrencyInput }
}
</script>

<style scoped>
</style>
