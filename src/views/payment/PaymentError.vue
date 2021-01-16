<template lang="pug">
  .message
    .message-icon.message-icon--error
    h2.message-title Ошибка платежа
    .message-body Попробуйте еще раз
    .message-action
      button.btn.btn--primary.btn--full(@click="buttonClick()") Повторить
</template>

<script>
  export default {
    methods: {
      buttonClick() {
        this.$router.push({ name: 'payment'})
      }
    },
  }
</script>

<style lang="stylus">

</style>