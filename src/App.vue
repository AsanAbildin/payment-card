<template lang="pug">
#app
  .container.text-center
    .col.col-card
      UserCardForm(ref="userCardForm", :loading="loading")
    .col.col-payment
      router-view(@submitClick="submitClick", :loading="loading")
</template>

<script>
import UserCardForm from "./components/UserCardForm";

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
      loading: true,
    }
  },

  methods: {
    submitClick() {
      let hasError = false
      this.$refs.userCardForm.$children.forEach(comp => {
        comp.checkValue()
        if (comp.showError) hasError = true
      })

      const userData = this.$refs.userCardForm.getFormData()

      console.log(userData)

      this.valid = !hasError

      if (this.valid) {
        this.getRequest()
        .then((res) => {
          console.log(res)
        })
      }
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

  &-card {
    @media (min-width: 550px) {
      padding-right: 70px;
    }
  }

  &-payment {
    max-width: 250px;
  }
}
</style>
