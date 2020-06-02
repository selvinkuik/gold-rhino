<template>
  <div class="text-with-horizontal-ticker grid-x">
    <div class="ticker">
      <div
        ref="ticker"
        :style="{ width: tickerWidth }"
      >
        {{ ticker }}
      </div>
    </div>

    <div class="text medium-text cell small-10 small-offset-1 large-5 large-offset-6">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'TextWithHorizontalTicker',

    props: {
      ticker: String
    },

    data() {
      return {
        tickerWidth: 'auto'
      }
    },

    mounted() {
      this.tickerWidth = getComputedStyle(this.$refs.ticker).width

      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          triggerElement: '.text-with-horizontal-ticker',
          triggerHook: .5,  // {0,0.5,1} - animations starts from {top,center,end} of window
          duration: '150%' // The full height of the window
        })
          .setTween(this.$refs.ticker, { 
            left: -parseInt(this.tickerWidth),
            ease: 'Linear.easeNone'
          })
      )
    }
  }
</script>

<style lang="scss" scoped>
  .text-with-horizontal-ticker {
    position: relative;
  }

  .ticker {
    align-items: center;
    display: flex;
    font-size: 320px;
    font-weight: 300;
    height: 100%;
    opacity: .05;
    position: absolute;
    user-select: none;
    width: 100%;

    div {
      position: absolute;
      left: 100%;
      white-space: nowrap;
    }
  }

  .text {
    margin-bottom: 21.2%;
    margin-top: 19.8%;
    position: relative;
    z-index: 1;

    @include breakpoint(large) {
      font-size: 32px;
    }
  }
</style>
