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
            input.user-card-input.user-card-input--card-number
            input.user-card-input.user-card-input--card-number
            input.user-card-input.user-card-input--card-number
            input.user-card-input.user-card-input--card-number
        .user-card-group.user-card-group--name
          label.user-card-label Имя на карте
          .user-card-inputs
            input.user-card-input.user-card-input--name
        .user-card-group.user-card-group--expire
          label.user-card-label.user-card-label--expire Срок действия
          .user-card-inputs
            input.user-card-input.user-card-input--expire
            span.user-card-divider /
            input.user-card-input.user-card-input--expire
    .user-card.user-card--back
      .user-card-group.user-card-group--cvc
        label.user-card-label CCV/CVC
        input.user-card-input.user-card-input--cvc
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.payment-systems-icons {
  text-align: right;

  img {
    max-width: 77px;
    max-height: 30px;
    line-height: 40px;
    vertical-align: middle;
    margin-left: 10px;
    max-width: 50px;
    max-height: 20px;

    @media (min-width: 500px) {
      max-width: 77px;
      max-height: 30px;
      line-height: 40px;
      margin-left: 15px;
    }
  }
}

.user-card {
  border-radius: 14px;
  padding: 12px 20px 35px;
  position: relative;
  overflow: hidden;
  text-align: left;
  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.5);
  width: 300px;

  @media (min-width: 500px) {
    padding: 12px 20px 35px;
    width: auto;
  }

  &--front {
    z-index: 2;
    padding-bottom: 17px;
    border: 1px solid $colorBorderPrimary;
    background: #ff005c;
    background: linear-gradient(135deg, #ff005c 0%, #ff0d1f 100%);

    @media (min-width: 500px) {
      padding-bottom: 35px;
    }
  }

  &--back {
    padding-top: 176px;
    padding-bottom: 24px;
    padding-right: 40px;
    height: 248px;
    margin-top: -186px;
    background: linear-gradient(135deg, #BAB8B8 0%, #939292 100%);
    left: 20px;
    border: 1px solid $colorBorderGrey;

    @media (min-width: 500px) {
      padding-bottom: 24px;
      height: 266px;
    }

    &:before {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      top: 50px;
      height: 50px;
      background-color: #2C2C2C;
    }
  }

  &-divider {
    color: $colorWhite;
    line-height: 44px;
    font-size: $fz3;
    margin: 0 5px;
  }

  &-group {
    margin-top: 10px;

    @media (min-width: 500px) {
      margin-top: 20px;
    }

    &--name {
      float: left;
    }

    &--expire {
      float: right;
      text-align: right;
      margin-left: 17px;
    }

    &--cvc {
      text-align: right;
    }
  }

  &-label {
    color: $colorWhite;
    text-transform: uppercase;
    display: inline-block;
    font-size: $fz1;

    @media (min-width: 500px) {
      font-size: $fz2;
    }

    &--expire {
      text-align: right;
    }
  }

  &-input {
    margin-top: 10px;
    border-radius: 5px;
    border: none;
    background-color: #A2172D;
    color: $colorWhite;
    height: 36px;
    font-size: $fz1;
    padding: 6px 6px 4px;

    @media (min-width: 500px) {
      height: 44px;
      padding: 6px 6px 4px;
      font-size: $fz3;
    }

    &:focus {
      outline: none;
      box-shadow: 0 0 4px #fff;
    }

    &--card-number {
      width: 57px;
      margin-right: 10px;
      padding: 6px 8px 4px 6px;
      letter-spacing: 3px;

      @media (min-width: 500px) {
        margin-right: 17px;
        width: 90px;
        height: 44px;
        padding: 6px 6px 4px;
        font-size: $fz3;
      }

      &:last-child {
        margin-right: 0;
      }
    }

    &--name {
      width: 240px;
    }

    &--expire {
      width: 70px;
    }

    &--cvc {
      width: 65px;
      margin-left: 15px;
      background-color: #77595A;
    }
  }
}
</style>