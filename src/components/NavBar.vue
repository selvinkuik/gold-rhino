<template>
  <div class="nav-bar grid-x">
    <div
      class="cell large-6"
      :class="color"
    >
      Logo
    </div>

    <div class="cell large-6">
      <Menu />
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'

  export default {
    name: 'NavBar',

    props: {
      color: String
    },

    components: {
      Menu
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 2;
  }

  .red {
    color: red;
  }
</style>