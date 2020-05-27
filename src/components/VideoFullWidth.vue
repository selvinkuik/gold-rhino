<template>
  <div class="video-full-width">
    <NavBar v-if="showNav" />

    <video
      autoplay
      loop
      muted
      playsinline
      :src="src"
    />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'VideoFullWidth',
    
    props: {
      showNav: Boolean,
      src: String
    },

    components: {
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
  .video-full-width {
    clip: rect(auto, auto, auto, auto);
    padding-top: 56.25%; // 16:9
    position: relative;

    video {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
</style>
