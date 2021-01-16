import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentData: {}
  },
  mutations: {
    SET_PAYMENT_DATA(state, val) {
      state.paymentData = val
    }
  },
  actions: {
    setPaymentData({commit}, val) {
      commit('SET_PAYMENT_DATA', val)
    }
  },
  getters: {
    getPaymentData(state) {
      return state.paymentData
    }
  }
})
