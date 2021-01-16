import Vue from 'vue'
import VueRouter from 'vue-router'

import PaymentAmount from '../views/payment/PaymentAmount.vue'
import PaymentError from '../views/payment/PaymentError.vue'
import PaymentSuccess from '../views/payment/PaymentSuccess.vue'

import store from '../store/index.js'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'payment',
    component: PaymentAmount
  },
  {
    path: '/success',
    name: 'success',
    component: PaymentSuccess,
    // eslint-disable-next-line no-unused-vars
    beforeEnter: (to, from, next) => {
      if (store.getters.getPaymentData.cvc) next()
      else next({name: 'payment'})
    }
  },
  {
    path: '/error',
    name: 'error',
    component: PaymentError,
    beforeEnter: (to, from, next) => {
      if (store.getters.getPaymentData.cvc) next()
      else next({name: 'payment'})
    }
  },

  {
    path: '*',
    redirect: { name: 'payment' }
  }
]

const router = new VueRouter({
  routes
})

export default router
