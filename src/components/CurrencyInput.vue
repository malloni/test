<template>
  <div class="currency-input">
    <div class="currency-container">
      <input
        class="value"
        type="text"
        :value="value.value"
        @input="changeValue($event.target.value, value.currency)"
        @blur="onInputBlur"
        :disabled="isDisable"
      >
      
      <span class="separator"></span>

      <span v-if="isDisable" class="currency disabled">{{value.currency}}</span>
      <select
        v-else
        class="currency"
        :value="value.currency"
        @input="changeValue(value.value, $event.target.value)"
      >
        <option>BRL</option>
        <option>USD</option>
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
    }
  },
  mounted() {
    this.onInputBlur();
  },
  methods: {
    /**
     * Emit input event to update value based on v-model
     * the new value will not be updated if is NaN
     */
    changeValue(newValue, newCurrency) {
      if (isNaN(newValue)) {
        newValue = this.value.value
      }

      this.$emit('input', { value: newValue, currency: newCurrency })
    },
    /**
     * Format current value on input blur
     */
    onInputBlur() {
      let floatValue = parseFloat(this.value.value)
      if (!isNaN(floatValue)) {
        this.changeValue(floatValue.toFixed(2), this.value.currency)
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
