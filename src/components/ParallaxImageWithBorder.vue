<template>
  <div
    class="grid-x"
    ref="triggerElement"
  >
    <div class="image-border cell small-10 small-offset-1 large-8 large-offset-2">
      <div
        class="image-mask"
        ref="imageMask"
      >
        <img
          ref="imageParallax"
          :src="require('@/assets/images/' + src)"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax, TweenMax } from 'gsap'

  export default {
    name: 'ParallaxImageWithBorder',
    
    props: {
      src: String
    },

    mounted() {
      imagesLoaded(this.$refs.triggerElement, () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: this.$refs.triggerElement,
            triggerHook: 1,
            duration: '200%'
          })
            .setTween(new TimelineMax().add([
              TweenMax.to(this.$refs.imageParallax, 1, { scale: 1.2 }),
              TweenMax.fromTo(this.$refs.imageMask, 1, { yPercent: -40 }, { yPercent: 10 })
            ]))
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .image-border {
    background-color: $light-neutral;
    padding: 10% 0;
  }

  .image-mask {
    border: 1px solid transparent;
    margin: 0 auto;
    overflow: hidden;
    width: 50%;
  }
</style>
