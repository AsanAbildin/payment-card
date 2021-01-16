<template lang="pug">
.user-card-group.user-card-group--cvc
  label.user-card-label(for="user-card-cvc") CCV/CVC
  input#user-card-cvc.user-card-input.user-card-input--cvc(
    v-mask="'###'",
    v-model="localValue",
    :readonly="readonly",
    @change="inputHandler",
    @focus="onFocus()",
    @blur="onBlur()"
  )
  .user-card-group-message(v-if="showError") 
    span(v-if="!this.localValue.length") Поле обязательное
    span(v-if="this.localValue.length !== 3") Некорректное значение
</template>

<script>
import UserCardNumber from "./UserCardNumber";
export default {
  extends: UserCardNumber,
  methods: {
    inputHandler() {
      this.emitValue(this.localValue);
    },
    checkValue() {
      if (!this.localValue.length || this.localValue.length !== 3 ) this.showError = true;
      else this.showError = false;
    },
  },
};
</script>

<style lang="stylus">
.user-card {
  &-input {
    &.user-card-input--cvc {
      width: 65px;
      margin-left: 15px;
      background-color: #77595A;

      @media (min-width: 500px) {
        padding-left: 15px;
      }
    }
  }

  &-group {
    &--cvc {
      text-align: right;
    }
  }
}
</style>