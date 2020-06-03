<template>
  <div
    class="image-mask"
    ref="imageMask"
    :style="{ 'margin-top': marginTop || '-10%' }"
  >
    <img
      ref="imageParallax"
      :src="require('@/assets/images/' + src)"
    />
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax, TweenMax } from 'gsap'

  export default {
    name: 'ParallaxImage',
    
    props: {
      src: String,
      marginTop: String
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
              TweenMax.to(this.$refs.imageParallax, 1, { scale: 1.2 }),
              TweenMax.to(this.$refs.imageMask, 1, { yPercent: 50 })
            ]))
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .image-mask {
    border: 1px solid transparent;
    overflow: hidden;
  }
</style>
