<template>
  <div class="scroll-indicator">
    <div class="scroll-container">
      0{{ scrollPosition }}

      <div class="bar">
        <div
          class="handle"
          :style="{ height: ((scrollPosition / scrollMax) * 100) + '%' }"
        />
      </div>

      0{{ scrollMax }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ScrollIndicator',
    
    props: {
      scrollMax: Number,
      scrollPosition: Number
    },

    mounted() {
      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          triggerElement: '.scroll-indicator',
          triggerHook: 0.4
        })
          .setPin('.scroll-indicator')
      )
    }
  }
</script>

<style lang="scss" scoped>
  .scroll-indicator {
    color: $light-neutral;
    font: 10px Termina;
    letter-spacing: 2px;
    top: 0;
    width: 100%;

    @include breakpoint(small only) {
      display: none;
    }

    .scroll-container {
      position: absolute;
      right: 4%;
      text-align: center;
      width: 20px;
    }

    .bar {
      background-color: rgba(248, 247, 241, .2);
      height: 108px;
      margin: 8px auto;
      position: relative;
      width: 3px;
    }

    .handle {
      background-color: $light-neutral;
      height: 18px; // 108 ÷ 6
      position: absolute;
      transition: height 0.4s cubic-bezier(0.19, 1, 0.22, 1);
      width: 3px;
    }
  }
</style>
