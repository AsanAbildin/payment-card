import Vue from 'vue'
import VueRouter from 'vue-router'

import PaymentAmount from '../views/payment/PaymentAmount.vue'
import PaymentResponse from '../views/payment/PaymentResponse.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'payment',
    component: PaymentAmount
  },
  {
    path: '/response',
    name: 'response',
    component: PaymentResponse
  }
]

const router = new VueRouter({
  routes
})

export default router
