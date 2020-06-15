<template>
  <div class="parallax-image">
    <div
      :class="{ 'overlap-and-fade': overlapAndFade }"
      class="image-mask"
      ref="imageMask"
    >
      <img
        ref="imageParallax"
        :src="require('@/assets/images/' + src)"
      />
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax, TweenMax } from 'gsap'

  export default {
    name: 'ParallaxImage',
    
    props: {
      overlapAndFade: Boolean,
      scale: {
        type: Number,
        default: 1.2
      },
      src: String,
      y: {
        type: Number,
        default: 50
      }
    },

    mounted() {
      imagesLoaded(this.$refs.imageMask, () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: this.$refs.imageMask,
            triggerHook: 1,
            duration: '200%'
          })
            .setTween(new TimelineMax().add([
              TweenMax.to(this.$refs.imageParallax, 1, { scale: this.scale }),
              TweenMax.to(this.$refs.imageMask, 1, { yPercent: this.y })
            ]))
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .parallax-image {
    position: relative;
  }

  .image-mask {
    border: 1px solid transparent;
    overflow: hidden;
  }

  .overlap-and-fade {
    opacity: .4;
    position: absolute;

    @include breakpoint(large) {
      opacity: 1;
    }
  }
</style>
