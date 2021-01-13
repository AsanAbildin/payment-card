<template lang="pug">
#app
  #nav
    router-link(to="/") Home
    router-link(to="/about") About
  router-view
</template>

<style lang="stylus">
#app {
  background-color: #ccc;
}
</style>
