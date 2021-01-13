<template lang="pug">
.user-card-wrap
  form.user-card-form
    .user-card.user-card--front
      .user-card-header
        .payment-systems-icons
          img(src="../assets/imgs/visa.svg")
          img(src="../assets/imgs/mastercard.svg")
      form.user-card-form
        .user-card-group
          label.user-card-label Номер карты
          .user-card-inputs
            input.input.input--card-number
            input.input.input--card-number
            input.input.input--card-number
            input.input.input--card-number
        .user-card-group
          label.user-card-label Имя на карте
          .user-card-inputs
            input.input
        .user-card-group
          label.user-card-label Срок действия
          .user-card-inputs
            input.input
    .user-card.user-card--back
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.payment-systems-icons {
  text-align: right;

  img {
    max-width: 77px;
    max-height: 40px;
    line-height: 40px;
    vertical-align: middle;
    margin-left: 4px;
  }
}

.input {
  border-radius: 2px;
  border: none;
  background-color: #A2172D;
  height: 44px;
  padding: 4px;
  font-size: $fz2;

  &--card-number {
    width: 90px;
  }
}

.user-card {
  border-radius: 14px;
  padding: 12px 20px 35px;

  &--front {
    padding-bottom: 35px;
    border: 1px solid $colorBorderPrimary;
    background: #ff005c;
    background: linear-gradient(135deg, #ff005c 0%, #ff0d1f 100%);
  }

  &--back {
    padding-bottom: 24px;
    background: linear-gradient(135deg, #BAB8B8 0%, #939292 100%);
  }
}
</style>