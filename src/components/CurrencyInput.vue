<template>
  <div class="currency-input">
    <div class="currency-container">
      <input
        class="value"
        type="text"
        :value="value.value"
        :disabled="isDisable"
        @input="changeValue($event.target.value, value.currency)"
        @blur="formatCurrentValue"
        @keypress="filter"
      >

      <span class="separator"></span>

      <span v-if="isDisable" class="currency disabled">{{value.currency}}</span>
      <select
        v-else
        class="currency"
        :value="value.currency"
        @input="changeValue(value.value, $event.target.value)"
      >
        <option v-for="(value, index) in currencyOptions" :key="index" :value="value">{{value}}</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CurrencyInput',
  props: {
    isDisable: {
      required: false,
      type: Boolean,
      default: false
    },
    value: {
      required: true,
      type: Object
    },
    currencyOptions: {
      required: true,
      type: Array
    }
  },
  mounted() {
    this.formatCurrentValue();
  },
  methods: {
    /**
     * Emit input event to update value based on v-model
     * the new value will not be updated if is NaN
     */
    changeValue(newValue, newCurrency) {
      this.$emit('input', { value: newValue, currency: newCurrency })
    },
    /**
     * Format current value to fixed 2
     */
    formatCurrentValue() {
      let floatValue = parseFloat(this.value.value)
      if (!isNaN(floatValue)) {
        this.changeValue(floatValue.toFixed(2), this.value.currency)
      }
    },
    /**
     * Get the current pressed key and check if new value
     * is a valid decimal. 
     */
    filter(event) {
      let newValue = this.value.value + event.key
      let validNumber = /^\d+(\.|,)?\d*(?!\S)$/g
      if (!validNumber.test(newValue)) {
        event.preventDefault()
      }
    }
  }
}
</script>

<style scoped>
.currency-input {
  display: inline-block;
}

.currency-container {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #dddddd;
  border-radius: 16px;
  width: 290px;
  height: 80px;
  margin: 7px;
}

.currency-input input[type="text"] {
  border: none;
  height: 75px;
  display: inline-block;
  width: 135px;
  font-size: 28px;
  line-height: 33px;
  color: #585858;
  text-align: right;
}

.currency-input input[type="text"]:disabled {
  color: #585858;
  background: none;
}

.separator {
  width: 2px;
  height: 48px;
  background: #dddddd;
  display: inline-block;
  margin: 0 16px;
}

.currency {
  color: #003358;
  font-weight: bold;
  font-size: 28px;
  line-height: 33px;
  display: inline-block;
  border: none;
}
.currency.disabled {
  color: #585858;
}
</style>
