import Vue from 'vue'
import VueRouter from 'vue-router'

import PaymentAmount from '../views/payment/PaymentAmount.vue'
import PaymentError from '../views/payment/PaymentError.vue'
import PaymentSuccess from '../views/payment/PaymentSuccess.vue'

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
    component: PaymentSuccess
  },
  {
    path: '/error',
    name: 'error',
    component: PaymentError
  }
]

const router = new VueRouter({
  routes
})

export default router
