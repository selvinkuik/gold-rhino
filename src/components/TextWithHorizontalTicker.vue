<template>
  <div class="text-with-horizontal-ticker grid-x">
    <div class="ticker">
      <p ref="ticker">{{ ticker }}</p>
    </div>

    <div class="text cell large-6 large-offset-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import debounce from 'lodash/debounce'

  export default {
    name: 'TextWithHorizontalTicker',
    props: {
      ticker: String
    },

    methods: {
      handleScroll() {
        // this.$refs.ticker
        console.log('scroll', window.scrollY, 'resize', this.$root.windowHeight)
      }
    },

    mounted() {
      this.handleDebouncedScroll = debounce(this.handleScroll, 100)
      window.addEventListener('scroll', this.handleDebouncedScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.handleDebouncedScroll)
    }
  }
</script>

<style lang="scss" scoped>
  .text-with-horizontal-ticker {
    position: relative;
  }

  .ticker {
    height: 100%;
    position: absolute;
    user-select: none;
    width: 100%;

    p {
      position: absolute;
    }
  }

  .text {
    position: relative;
    z-index: 1;
  }
</style>
