<template>
  <div ref="fadingImage">
    <img
      ref="image"
      :src="require('@/assets/images/' + src)"
    />

    <div class="slot">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax, TweenMax } from 'gsap'
  
  export default {
    name: 'FadingImage',
    
    props: {
      fadeIn: Boolean,
      src: String
    },

    mounted() {
      imagesLoaded(this.$refs.image, () => {
        let tween = new TimelineMax()

        if (this.fadeIn) {
          tween
            .from(this.$refs.image, 1, { opacity: 0 })
            .to(this.$refs.image, 1, { opacity: 0, delay: 2 })
        } else {
          tween.add([
            TweenMax.to(this.$refs.image, 10, { opacity: 0, delay: 20 }),
          ])
        }

        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            offset: this.fadeIn ? -400 : 0,
            triggerElement: this.$refs.fadingImage,
            triggerHook: 0,
            duration: this.fadeIn ? '100%' : '150%'
          })
            .setPin(this.$refs.image, { spacerClass: 'no-push-followers-pin-spacer' })
            .setTween(tween)
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .slot {
    position: relative;
    z-index: 1;
  }
</style>
