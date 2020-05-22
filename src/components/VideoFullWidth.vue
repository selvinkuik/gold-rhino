<template>
  <div class="video-full-width">
    <video autoplay loop muted playsinline :src="src"></video>
  </div>
</template>

<script>
  export default {
    name: 'VideoFullWidth',
    props: {
      src: String
    }
  }
</script>

<style lang="scss" scoped>
  .video-full-width {
    padding-top: 56.25%; // 16:9
    position: relative;

    video {
      position: fixed;
      top: 0;
      width: 100%;
    }
  }
</style>
