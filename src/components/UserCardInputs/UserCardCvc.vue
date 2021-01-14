<template lang="pug">
.user-card-group.user-card-group--cvc
  label.user-card-label CCV/CVC
  input.user-card-input.user-card-input--cvc(v-mask="'###'")
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

<style lang="stylus"></style>