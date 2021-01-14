<template lang="pug">
.user-card-group
  label.user-card-label Номер карты
  .user-card-inputs
    input.user-card-input.user-card-input--card-number(
      v-for="(number, index) in splitNumbers",
      :key="`number-${index}`",
      :readonly="readonly",
      v-mask="'####'",
      ref="card-part",
      v-model="splitNumbers[index]",
      @input="inputHandler(index)"
    )
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: null,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      localValue: this.value + "",
      splitNumbers: ["", "", "", ""],
    };
  },

  methods: {
    inputHandler(index) {
      const val = this.splitNumbers[index];

      if (val.length === 4) {
        if (this.splitNumbers.length !== index + 1) {
          this.$refs["card-part"][index + 1].focus();
        }
      }

      this.emitValue(this.splitNumbers.join(""));
    },
    emitValue(value) {
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="stylus">
.user-card {
  &-input {
    &--card-number {
      width: 57px;
      margin-right: 10px;
      padding: 6px 8px 4px 6px;
      letter-spacing: 3px;

      @media (min-width: 500px) {
        margin-right: 17px;
        width: 90px;
        font-size: $fz3;
        letter-spacing: 6px;
        padding: 6px 6px 6px 13px;
      }

      &:last-child {
        margin-right: 0;
      }
    }
  }
}
</style>