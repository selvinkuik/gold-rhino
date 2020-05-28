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
      <img :src="require('@/assets/images/' + title)" />

      <div
        class="animated-line"
        ref="animatedLine"
      ></div>
    </div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'VideoFullWidth',
    
    props: {
      name: String,
      showNav: String,
      src: String,
      title: String
    },

    data() {
      return {
        pageHasScrolled: false
      }
    },

    components: {
      NavBar
    },

    methods: {
      handleScroll() {
        this.pageHasScrolled = window.scrollY > 0

        if (!this.pageHasScrolled) {
          this.$refs.animatedLine.classList.remove('paused')
        }
      }
    },

    mounted() {
      this.$refs.animatedLine.addEventListener('animationiteration', () => {
        if (this.pageHasScrolled) {
          this.$refs.animatedLine.classList.add('paused')
        }
      })
    },

    created() {
      this.handleDebouncedScroll = throttle(this.handleScroll, 100)
      window.addEventListener('scroll', this.handleDebouncedScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.handleDebouncedScroll)
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
  }

  .animated-line {
    animation: animated-line 2s cubic-bezier(0.19, 1, 0.22, 1) infinite;
    background-color: $light-neutral;
    bottom: 0;
    content: ' ';
    height: 0;
    position: absolute;
    right: 9%;
    width: 2px;

    &.paused {
      animation: '';
    }
  }

  @keyframes animated-line {
    0% {
      height: 0;
    }

    50% {
      height: 100px;
    }

    100% {
      height: 0;
    }
  }
</style>
