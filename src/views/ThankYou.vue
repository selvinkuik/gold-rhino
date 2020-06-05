<template>
  <div class="grid-container full">
    <div class="foreground dark-neutral">
      <NavBar
        tintClass="dark"
        :showRouteLabel="true"
      />

      Thank You
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'ThankYou',
    
    components: {
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
</style>
