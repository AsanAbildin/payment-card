<template lang="pug">
.user-card-group.user-card-group--name
  label.user-card-label(for="user-card-name") Имя на карте
  .user-card-inputs
    input#user-card-name.user-card-input.user-card-input--name(
      v-mask="{ mask: 'S'.repeat(255), tokens: {S: { pattern: /[a-z A-Z]/ }}}",
      v-model="localValue",
      :readonly="readonly",
      @input="inputHandler",
      @focus="onFocus()",
      @blur="onBlur()"
    )
  .user-card-group-message(v-if="showError") Поле обязательное
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
      if (!this.localValue.length) this.showError = true;
      else this.showError = false;
    },
  },
};
</script>

<style lang="stylus">
.user-card {
  &-input {
    &--name {
      width: 240px;
    }
  }

  &-group {
    &--name {
      float: left;
    }
  }
}
</style>