<template>
  <div class="video-full-width">
    <NavBar v-if="showNav" :color="showNav" />

    <video
      autoplay
      loop
      muted
      playsinline
      :src="src"
    />

    <div class="overlay">
      <div class="name">{{ name }}</div>
      <img :src="require('@/assets/images/' + title)" />
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'VideoFullWidth',
    
    props: {
      name: String,
      showNav: String,
      src: String,
      title: String
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

  .overlay {
    align-items: center;
    background-color: rgba(0, 0, 0, .35);
    display: flex;
    height: 100%;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;

    .name {
      bottom: 14%;
      color: $light-neutral;
      font: 10px Termina;
      left: .6%;
      letter-spacing: 2px;
      position: absolute;
      transform: rotate(270deg);
    }

    &:after {
      background-color: $light-neutral;
      bottom: 0;
      content: ' ';
      height: 100px;
      position: absolute;
      right: 9%;
      width: 2px;
    }
  }
</style>
