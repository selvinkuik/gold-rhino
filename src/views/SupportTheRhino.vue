<template>
  <div class="grid-container full">
    <Banner src="support-the-rhino-banner.jpg" />

    <BannerOverlay>
      The Southern White and Black African rhinoceroses are truly two of the most beautiful and rarest of animals facing a real. 
    </BannerOverlay>

    <div class="foreground dark-neutral">
      <NavBar tintClass="dark" />

      Support The Rhino
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue'
  import BannerOverlay from '@/components/BannerOverlay.vue'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'SupportTheRhino',
    
    components: {
      Banner,
      BannerOverlay,
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
</style>
