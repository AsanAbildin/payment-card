import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTheMask from 'vue-the-mask'
import money from 'v-money'

Vue.use(VueTheMask)
Vue.use(money)

Vue.config.productionTip = false

const emitRunner = (vnode, emit, eventData) => {
  if (vnode.componentInstance) {
    vnode.componentInstance.$emit(emit, eventData)
  } else {
    const newEvent = new Event(emit);
    vnode.elm.addEventListener(newEvent, eventData);
    vnode.elm.dispatchEvent(newEvent)
  }
}

const clickBody = (el, vnode) => (event) => {
  if (event.target === el || event.path.includes(el)) {
    event.stopPropagation()
  } else {
    emitRunner(vnode, 'clickoutside', event);
  }
}

Vue.directive('click-outside', {
  inserted: (el, _binding, vnode) => {
    document.body.addEventListener('click', clickBody(el, vnode));
  },

  unbind: () => {
    document.body.removeEventListener('click', clickBody);
  }
})


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
