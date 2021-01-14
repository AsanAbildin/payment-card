<template lang="pug">
.user-card-group.user-card-group--name
  label.user-card-label Имя на карте
  .user-card-inputs
    input.user-card-input.user-card-input--name(v-mask="'S'.repeat(255)")
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