<template lang="pug">
.user-card-group.user-card-group--expire
  label.user-card-label.user-card-label--expire(for="card-expire-month") Срок действия
  .user-card-inputs
    .user-card-input-wrap
      input#card-expire-month.user-card-input.user-card-input--expire(
        v-mask="'##'",
        v-model="month",
        ref="card-expire-month",
        :readonly="readonly",
        @focus="onFocus()",
        @blur="onBlur()"
      )
      label.user-card-select-label(
        @click="cardExpireClick('month')",
        for="card-expire-month-label"
      )
      UserCardDropdown(
        :options="monthOptions",
        :show="showDropdownMonth",
        @change="setValue($event, 'month')"
      )
      select#card-expire-month-label.user-card-select(
        tabindex="-1",
        ref="card-expire-month-select"
        :readonly="readonly",
      )
        option(v-for="opt in monthOptions") {{ opt }}
    span.user-card-divider /
    .user-card-input-wrap
      input.user-card-input.user-card-input--expire(
        v-mask="'##'",
        v-model="year",
        ref="card-expire-year",
        :readonly="readonly",
        @focus="onFocus()",
        @blur="onBlur()"
      )
      label.user-card-select-label(
        @click="cardExpireClick('year')",
        for="card-expire-year-label"
      )
      UserCardDropdown(
        :options="yearOptions",
        :show="showDropdownYear",
        @change="setValue($event, 'year')"
      )
      select#card-expire-year-label.user-card-select(
        tabindex="-1",
        :readonly="readonly",
        ref="card-expire-month-select"
      )
        option(v-for="opt in monthOptions") {{ opt }}
  .user-card-group-message(v-if="showError") Поле обязательное
</template>

<script>
import UserCardDropdown from "./UserCardDropdown";
import UserCardNumber from "./UserCardNumber";
export default {
  extends: UserCardNumber,
  components: {
    UserCardDropdown,
  },
  props: {
    value: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      monthOptions: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
      ],
      yearOptions: ["21", "22", "23", "24"],
      month: "",
      year: "",
      showDropdownMonth: false,
      showDropdownYear: false,
    };
  },

  methods: {
    checkValue() {
      if (!this.month || !this.year) this.showError = true;
      else this.showError = false;
    },
    setValue(val, name) {
      if (name === "month") this.showDropdownMonth = false;
      else this.showDropdownYear = false;
      this[name] = val;
    },
    cardExpireClick(selectName) {
      if (this.readonly) return
      if (selectName === "month") {
        this.showDropdownMonth = !this.showDropdownMonth;
        this.$refs["card-expire-month"].focus();
      } else {
        this.showDropdownYear = !this.showDropdownYear;
        this.$refs["card-expire-year"].focus();
      }
    },
  },
};
</script>

<style lang="stylus">
.user-card {
  &-select {
    position: absolute;
    left: 4px;
    right: 0;
    top: 12px;
    width: 1px;
    height: 1px;
    z-index: 1;

    &-label {
      position: absolute;
      z-index: 3;
      left: 0;
      right: 0;
      bottom: 0;
      top: 10px;
    }
  }

  &-input {
    &-wrap {
      display: inline-block;
      position: relative;
      margin-top: 10px;

      .user-card-input {
        margin-top: 0;
      }
    }

    &--expire {
      width: 70px;
      z-index: 2;
      position: relative;
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