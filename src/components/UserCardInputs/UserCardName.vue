<template lang="pug">
.user-card-group.user-card-group--name
  label.user-card-label Имя на карте
  .user-card-inputs
    input.user-card-input.user-card-input--name(
      v-mask="{ mask: 'S'.repeat(255), tokens: {S: { pattern: /[a-z A-Z]/ }}}",
      v-model="localValue",
      @input="inputHandler"
    )
</template>

<script>
import UserCardNumber from "./UserCardNumber";
export default {
  extends: UserCardNumber,
  methods: {
    inputHandler() {
      this.emitValue(this.localValue);
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