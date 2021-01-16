<template lang="pug">
.user-card-wrap
  form.user-card-form
    .user-card.user-card--front
      .user-card-header
        .payment-systems-icons
          img(src="../assets/imgs/visa.svg")
          img(src="../assets/imgs/mastercard.svg")
      .user-card-body
        UserCardNumber(v-model="userCard.number" :readonly="loading")
        UserCardName(v-model="userCard.name" :readonly="loading")
        UserCardExpireDate(v-model="userCard.expires" :readonly="loading")
    .user-card.user-card--back
      UserCardCvc(v-model="userCard.cvc" :readonly="loading")
</template>

<script>
import UserCardNumber from "./UserCardInputs/UserCardNumber";
import UserCardName from "./UserCardInputs/UserCardName";
import UserCardExpireDate from "./UserCardInputs/UserCardExpireDate";
import UserCardCvc from "./UserCardInputs/UserCardCvc";
export default {
  components: {
    UserCardNumber,
    UserCardName,
    UserCardExpireDate,
    UserCardCvc,
  },

  props: {
    loading: {
      type: Boolean,
      default: () => false
    },
  },

  data() {
    return {
      userCard: {},
    };
  },

  methods: {
    getFormData() {
      return this.userCard
    }
  },
};
</script>

<style lang="stylus">
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
  text-align: left;
  box-shadow: 0 2px 19px rgba(0, 0, 0, 0.5);
  width: 300px;

  &:after {
    content: '';
    display: table;
    clear: both;
  }

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

    &:after {
      content: '';
      display: table;
      clear: both;
    }

    @media (min-width: 500px) {
      margin-top: 20px;
    }

    &-message {
      color: $colorWhite;
      font-size: 12px;
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
  }
}
</style>