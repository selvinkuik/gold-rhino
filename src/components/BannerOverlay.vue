<template>
  <div
    class="overlay grid-x"
    :class="{ tint: tint }"
    ref="overlay"
  >
    <NavBar
      color="white"
      :showRouteLabel="true"
    />

    <div class="cell small-10 small-offset-1 large-8 large-offset-2">
      <img
        v-if="src"
        class="title"
        :src="require('@/assets/images/' + src)"
      />

      <p class="intro">
        <slot></slot>
      </p>
    </div>

    <div
      class="animated-line paused"
      :class="{ fixed: overlayTallerThanWindow }"
      ref="animatedLine"
    ></div>
  </div>
</template>

<script>
  import throttle from 'lodash/throttle'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'BannerOverlay',
    
    props: {
      src: String,
      tint: Boolean
    },

    components: {
      NavBar
    },

    data() {
      return {
        overlayTallerThanWindow: false,
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
      this.overlayTallerThanWindow = parseInt(getComputedStyle(this.$refs.overlay).height) > window.innerHeight

      this.$refs.animatedLine.addEventListener('animationiteration', () => {
        if (this.pageHasScrolled) {
          this.$refs.animatedLine.classList.add('paused')
        }
      })

      setTimeout(() => {
        this.handleScroll()
      }, 100)
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
  .overlay {
    padding-bottom: 19.6%;
    position: relative;
    z-index: 1;

    &.tint {
      background-color: rgba(0, 0, 0, .35);
    }

    .title {
      margin: 40% auto 0;
    }

    .intro {
      color: $light-neutral;
      font-size: 32px;
      line-height: 1.125em;
      margin-top: 18%;

      @include breakpoint(large) {
        font-size: 64px;
      }
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

    &.fixed {
      position: fixed;
    }

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
