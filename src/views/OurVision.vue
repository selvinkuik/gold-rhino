<template>
  <div class="grid-container full">
    <Banner src="support-the-rhino-banner.jpg" />

    <BannerOverlay>
      Our ultimate vision is to further support the protection and growth of the South African rhinoceros population.
    </BannerOverlay>

    <div class="foreground dark-neutral">
      <NavBar backgroundClass="dark-neutral" />

      Our Vision
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue'
  import BannerOverlay from '@/components/BannerOverlay.vue'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'OurVision',
    
    components: {
      Banner,
      BannerOverlay,
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
</style>
