<template lang="pug">
.payment-amount
  input.payment-amount-input(
    placeholder="СУММА ПЛАТЕЖА",
    v-model="amount",
    v-money="{precision: 0, suffix: ' ₸', thousands: ' ', masked: false}",
    @input="inputHandler"
  )
  .payment-amount-error(v-if="showError && !(this.intAmount > 0)") Введите сумму
  .payment-amount-data
    .desc-list
      .desc-item
        .desc-item-key Комиссия:
        .desc-item-value {{ comission }}
      .desc-item.mt-1
        .desc-item-key Итоговая сумма:
        .desc-item-value {{ completeAmount }}
  .payment-amount-action.mt-1
    button.btn.btn--primary.btn--full(:class="{'btn--loading': loading}" @click="submitClick") Оплатить

    label.checkbox.mt-1
      input.checkbox-input(type="checkbox", v-model="checked")
      span.checkbox-desc
        | Я ознокомлен и присоединяюсь&nbsp;
        a(
          target="_blank",
          href="https://paybox.money/uploads/docs/kz/public-offer-paybox-money.pdf"
        ) к договору
    .payment-amount-error(v-if="showError && !checked") Отметьте

  .payment-amount-message.mt-1 Комиссия может быть удержана банком эмитентом карты отправителя
</template>

<script>
export default {
  props: {
    loading: {
      type: Boolean,
      default: () => false
    },
  },
  data() {
    return {
      amount: "",
      checked: false,
      showError: false,
    };
  },
  computed: {
    comission() {
      const amount = parseInt(this.amount.replace(/ /g, ""));
      const comission = amount / 100;
      if (amount <= 0) {
        return 0;
      }
      if (comission <= 500) {
        return 500;
      }
      return amount / 100;
    },
    intAmount() {
      return parseInt(this.amount.replace(/ /g, ""));
    },
    completeAmount() {
      const amount = parseInt(this.amount.replace(/ /g, ""));
      return amount + this.comission;
    },
  },

  methods: {
    submitClick() {
      if (this.checked && this.intAmount > 0) {
        this.$emit("submitClick", {
          amount: this.intAmount,
          comission: this.comission
        });
        this.showError = false;
      } else {
        this.$emit("submitClick", false);
        this.showError = true;
      }
    },
    inputHandler() {
      if (parseInt(this.amount) < 0) {
        this.amount = Math.abs(this.amount);
      }
    },
  },
};
</script>

<style lang="stylus" scoped>
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

  &-error {
    color: $colorPrimary;
    font-weight: normal;
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
</style>