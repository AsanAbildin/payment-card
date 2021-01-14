<template lang="pug">
.user-card-group
  label.user-card-label(for="card-part-1") Номер карты
  .user-card-inputs
    input.user-card-input.user-card-input--card-number(
      v-for="(number, index) in splitNumbers",
      :key="`number-${index}`",
      :readonly="readonly",
      :id="`card-part-${index + 1}`",
      v-mask="'####'",
      ref="card-part",
      v-model="splitNumbers[index]",
      @input="inputHandler(index)"
    )
  .user-card-message(v-if="showError") Некорректный номер карты
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: () => "",
    },
    readonly: {
      type: Boolean,
      default: false,
    },
  },

  data() {
    return {
      splitNumbers: ["", "", "", ""],
      localValue: this.value + "",
      showError: false,
    };
  },

  methods: {
    luhnAlgorithm(digits) {
      let sum = 0;

      for (let i = 0; i < digits.length; i++) {
        let cardNum = parseInt(digits[i]);

        if ((digits.length - i) % 2 === 0) {
          cardNum = cardNum * 2;

          if (cardNum > 9) {
            cardNum = cardNum - 9;
          }
        }

        sum += cardNum;
      }

      return sum % 10 === 0;
    },

    inputHandler(index) {
      const val = this.splitNumbers[index];

      if (val.length === 4) {
        if (this.splitNumbers.length !== index + 1) {
          this.$refs["card-part"][index + 1].focus();
        }
      }

      if (this.value.length === 16) {
        if (!this.luhnAlgorithm(this.value)) {
        }
        console.log(this.luhnAlgorithm(this.value));
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