<template>
  <div class="nav-bar grid-x">
    <div class="cell large-6">
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

    components: {
      Menu
    },
    
    mounted() {
      const scene = this.$scrollmagic.scene({
        triggerElement: '.foreground',
        triggerHook: 0 // {0,0.5,1} - animations starts from {top,center,end} of window
      })
        .setPin('.nav-bar')
        // .addIndicators({ name: 'nav-bar' })

      this.$scrollmagic.addScene(scene)
    }
  }
</script>

<style lang="scss" scoped>
  .nav-bar {
    z-index: 2;
  }
</style>