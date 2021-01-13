<template lang="pug">
#app
  .container
    UserCardForm
    router-view
</template>

<script>
import UserCardForm from "./components/UserCardForm";
export default {
  components: {
    UserCardForm,
  },
};
</script>

<style lang="stylus">
body {
  margin: 0;
}

#app {
}
</style>
