<template lang="pug">
.user-card-group.user-card-group--expire
  label.user-card-label.user-card-label--expire Срок действия
  .user-card-inputs
    input.user-card-input.user-card-input--expire(v-mask="'##'")
    span.user-card-divider /
    input.user-card-input.user-card-input--expire(v-mask="'##'")
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
  },
};
</script>

<style lang="stylus">
.user-card {
  &-input {
    &--expire {
      width: 70px;
    }
  }

  &-label {
    &--expire {
      text-align: right;
    }
  }

  &-group {
    &--expire {
      float: right;
      text-align: right;
      margin-left: 17px;
    }
  }
}
</style>