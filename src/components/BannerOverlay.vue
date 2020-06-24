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

    <div
      class="cell small-10 small-offset-1 large-8 large-offset-2 overlay-contents"
      :class="{ 'has-slot': $slots.default }"
    >
      <div>
        <img
          v-if="src"
          class="title"
          :src="require('@/assets/images/' + src)"
        />

        <h1
          v-if="h1"
          class="title"
        >
          {{ h1 }}
        </h1>

        <p class="intro">
          <slot></slot>
        </p>
      </div>
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
      h1: String,
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
    min-height: 75vh;
    position: relative;
    z-index: 1;

    @include breakpoint(large) {
      min-height: 100vh;
    }

    &.tint {
      background-color: rgba(0, 0, 0, .35);
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

  .overlay-contents {
    align-items: center;
    display: flex;
    justify-content: center;

    &.has-slot {
      padding-bottom: 19.6%;

      @include breakpoint(large) {
        display: block;
      }
    }

    .title {
      color: $light-neutral;
      font: 25px Termina;
      letter-spacing: 13.5px;
      margin: 40% auto 0;
      text-align: center;

      @include breakpoint(large) {
        font-size: 48px;
      }
    }
  }

  .animated-line {
    @include breakpoint(large) {
      animation: animated-line 2s cubic-bezier(0.22, 1, 0.36, 1) infinite;
      background-color: $light-neutral;
      bottom: 0;
      content: ' ';
      height: 0;
      position: absolute;
      right: 9%;
      width: 2px;
      z-index: 1;
    }

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
