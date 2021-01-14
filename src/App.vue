<template lang="pug">
#app
  .container.text-center
    .col.col-card
      UserCardForm
    .col.col-payment
      router-view
</template>

<script>
import UserCardForm from "./components/UserCardForm";
export default {
  components: {
    UserCardForm,
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
