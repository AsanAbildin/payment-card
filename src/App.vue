<template lang="pug">
#app
  .container.text-center
    .col.col-card
      UserCardForm(ref="userCardForm")
    .col.col-payment
      router-view(@submitClick="submitClick")
</template>

<script>
import UserCardForm from "./components/UserCardForm";
export default {
  components: {
    UserCardForm,
  },

  data() {
    return {
      valid: false
    }
  },

  methods: {
    submitClick(val) {
      let hasError = false
      this.$refs.userCardForm.$children.forEach(comp => {
        comp.checkValue()
        if (comp.showError) hasError = true
      })
      console.log(val)

      this.valid = hasError

      if (this.valid) {
        
      }
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
