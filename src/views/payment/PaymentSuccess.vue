<template lang="pug">
  .message
    .message-icon.message-icon--success

    h2.message-title Перевод совершен

    .message-body
      .message-body-item
        span.message-body-key Отправитель:
        span.message-body-value {{ paymentData.name }}

      .message-body-item
        span.message-body-key Сумма:
        span.message-body-value {{ paymentData.amount }}

      .message-body-item
        span.message-body-key Комисия:
        span.message-body-value {{ paymentData.comission }}

    .message-action
      button.btn.btn--primary.btn--full(@click="buttonClick()") Повторить

</template>

<script>
  import { mapGetters } from 'vuex'
  export default {
    computed: {
      ...mapGetters({
        paymentData: 'getPaymentData'
      })
    },

    methods: {
      buttonClick() {
        this.$router.push({ name: 'payment'})
      }
    },
  }
</script>

<style lang="stylus">

</style>