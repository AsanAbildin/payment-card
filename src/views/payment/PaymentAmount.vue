<template lang="pug">
.payment-amount
  input.payment-amount-input(
    placeholder="СУММА ПЛАТЕЖА",
    v-money="{precision: 0, suffix: ' ₸', thousands: ' '}"
  )
  .payment-amount-data
    .desc-list
      .desc-item
        .desc-item-key Комиссия:
        .desc-item-value 100
      .desc-item.mt-1
        .desc-item-key Итоговая сумма:
        .desc-item-value 1000
  .payment-amount-action.mt-1
    button.btn.btn--primary.btn--full Оплатить

    label.checkbox.mt-1
      input.checkbox-input(type="checkbox")
      span.checkbox-desc
        | Я ознокомлен и присоединяюсь&nbsp;
        a(target="_blank", href="https://www.youtube.com/watch?v=j7CCH49Tohs") к договору

  .payment-amount-message.mt-1 Комиссия может быть удержана банком эмитентом карты отправителя
</template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.mt-1 {
  margin-top: 15px;
}

.desc {
  &-item {
    overflow: hidden;

    &-key {
      float: left;
    }

    &-value {
      float: right;
    }
  }

  &-list {
    text-align: left;
  }
}

.checkbox {
  display: block;

  &-input {
    vertical-align: middle;
  }

  &-desc {
    font-size: $fz1;

    a {
      color: $colorPrimary;
      text-decoration: none;
    }
  }
}

.payment-amount {
  color: $colorGrey;
  font-weight: bold;
  padding-top: 20px;
  font-size: $fz1;

  &-data {
    margin-top: 30px;
  }

  &-action {
    margin-top: 15px;

    .checkbox {
      margin-top: 15px;
    }
  }

  &-input {
    text-align: center;
    line-height: 34px;
    border: 2px solid #4D4D4D;
    padding: 2px 10px 0;
    border-radius: 50px;
    transition: 0.2s;
    font-size: $fz2;
    width: 100%;

    &:focus {
      box-shadow: 0 0 3px $colorPrimary;
      border-color: $colorPrimary;
      outline: none;
    }
  }
}

.btn {
  border-radius: 20px;
  border: 2px solid;
  text-transform: uppercase;
  font-size: $fz2;
  background-color: transparent;
  transition: 0.2s;
  padding: 10px 15px 8px;

  &--primary {
    color: $colorWhite;
    background-color: $colorPrimary;
    border-color: $colorPrimary;
  }

  &--full {
    width: 100%;
  }
}
</style>