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

    <div class="text cell large-6 large-offset-6">
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
          triggerHook: 1,  // {0,0.5,1} - animations starts from {top,center,end} of window
          duration: '100%' // The full height of the window
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
    height: 100%;
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
    position: relative;
    z-index: 1;
  }
</style>
