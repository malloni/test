import Vue from 'vue'
import Vuex from 'vuex'
import { GetBRLToUSD } from '@/api/CurrencyApi.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bid: 0,
    currencies: ['BRL', 'USD'],
    currentValue: { value: 100.00, currency: 'BRL' }
  },
  getters: {
    convertedValue: state => {
      let currency = state.currentValue.currency
      return {
        value: (currency === 'BRL' ? state.currentValue.value * state.bid : state.currentValue.value / state.bid).toFixed(2),
        currency: currency === 'BRL' ? 'USD' : 'BRL'
      }
    }
  },
  mutations: {
    /**
     * Mutation to update bid value
     */
    updateBid(state, bid) {
      state.bid = bid
    },
    /**
     * Update current value currency and value,
     * replacing any comma (,) by dots (.)
     */
    updateCurrentValue(state, payload) {
      if (payload.value) {
        payload.value = payload.value.replace(',', '.')
      }
      state.currentValue.value = payload.value
      state.currentValue.currency = payload.currency
    }
  },
  actions: {
    /**
     * Update current bid value
     * based on an api call
     */
    updateBidAsync({ commit }) {
      GetBRLToUSD()
        .then(response => {
          commit('updateBid', parseFloat(response.data.USD.bid.replace(',', '.')))
        })
    }
  }
})
