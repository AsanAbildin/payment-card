<template lang="pug">
#app
  .container
    .row
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
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.container {
  max-width: 960px;
  padding: 0 10px;
  margin: 0 auto;
}
</style>
