<template lang="pug">
#app
  .container.text-center
    .col.col-card
      UserCardForm(ref="userCardForm", :loading="loading")
    .col.col-payment
      transition(name="fade")
        router-view(@submitClick="submitClick", :loading="loading")
</template>

<script>
import UserCardForm from "./components/UserCardForm";
import { mapActions } from 'vuex'

const randomResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const res = Math.round(Math.random(2))
      resolve(res)
    }, 1000)
  })
}
export default {
  components: {
    UserCardForm,
  },

  data() {
    return {
      loading: false,
    }
  },

  methods: {
    ...mapActions(['setPaymentData']),
    submitClick(val) {
      let hasError = false
      this.$refs.userCardForm.$children.forEach(comp => {
        comp.checkValue()
        if (comp.showError) hasError = true
      })

      const userData = this.$refs.userCardForm.getFormData()

      this.valid = !hasError && val

      if (!this.valid) return

      this.setPaymentData({...userData, ...val})

      this.getRequest()
      .then((res) => {
        if (res) {
          this.$router.push({name: 'success'})
        }
        else {
          this.$router.push({name: 'error'})
        }
      })
    },

    async getRequest () {
      this.loading = true
      const response = await randomResponse()
      .then((res) => res)
      .finally(() => {
        this.loading = false
      })

      return response
    }
  },
};
</script>

<style lang="stylus">
#app {
  padding: 40px 0;
  overflow-x: hidden;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}

.fade-enter, .fade-leave-to {
  position absolute
  opacity: 0;
}

.container {
  max-width: 960px;
  padding: 0 10px;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}

.col {
  display: inline-block;
  vertical-align: top;
  position: relative;

  &-card {
    padding-bottom: 20px;

    @media (min-width: 550px) {
      padding-right: 70px;
    }
  }

  &-payment {
    max-width: 250px;
  }
}
</style>
