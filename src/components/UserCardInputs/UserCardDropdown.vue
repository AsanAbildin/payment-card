<template lang="pug">
.user-card-dropdown(:class="{ active: show }")
  .user-card-dropdown-option(
    v-for="option in options",
    @click="clickHandler(option)"
  ) {{ option }}
</template>

<script>
export default {
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: String,
      default: () => "",
    },
    show: {
      type: Boolean,
      default: () => false,
    },
  },

  methods: {
    clickHandler(option) {
      this.$emit("change", option);
    },
  },
};
</script>

<style lang="stylus">
.user-card-dropdown {
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  right: 0;
  opacity: 0;
  pointer-events: none;
  transition: 0.2s;
  background-color: #fff;
  max-height: 150px;
  overflow: auto;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.6);

  &.active {
    opacity: 1;
    pointer-events: all;
  }

  &-option {
    padding: 4px 5px;
    cursor: pointer;

    &:hover {
      color: $colorPrimary;
    }
  }
}
</style>