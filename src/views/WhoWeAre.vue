<template>
  <div class="grid-container full">
    <div class="foreground dark-neutral">
      <NavBar backgroundClass="dark-neutral" />

      Tim Smith
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'WhoWeAre',
    
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
</style>
