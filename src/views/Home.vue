<template>
  <div class="grid-container full">
    <VideoFullWidth src="/placeholder.mp4" />

    <div class="foreground">
      <div class="nav-bar grid-x">
        <div class="cell large-6">
          Logo
        </div>

        <div class="cell large-6">
          <Menu />
        </div>
      </div>

      <div style="height: 500px"></div>
      <TextWithHorizontalTicker ticker="Forward Together">Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.</TextWithHorizontalTicker>
      <div style="height: 1000px"></div>
    </div>
  </div>
</template>

<script>
  import Menu from '@/components/Menu.vue'
  import VideoFullWidth from '@/components/VideoFullWidth.vue'
  import TextWithHorizontalTicker from '@/components/TextWithHorizontalTicker.vue'

  export default {
    name: 'Home',
    
    components: {
      Menu,
      TextWithHorizontalTicker,
      VideoFullWidth
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