<template>
  <div
    class="video-full-width"
    :class="slug"
  >
    <div>
      <video
        autoplay
        loop
        muted
        playsinline
        ref="video"
        :src="src"
      />

      <div
        class="animated-line"
        ref="animatedLine"
      ></div>
    </div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle'

  export default {
    name: 'VideoFullWidth',
    
    props: {
      navColor: String,
      slug: String,
      src: String
    },

    data() {
      return {
        pageHasScrolled: false
      }
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

      this.$refs.video.addEventListener('loadeddata', () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: `.${this.slug}`,
            triggerHook: 0
          })
            .setPin(`.${this.slug}`, { spacerClass: 'no-push-followers-pin-spacer' })
        )
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
    video {
      width: 100%;
    }
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
    z-index: 1;

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
