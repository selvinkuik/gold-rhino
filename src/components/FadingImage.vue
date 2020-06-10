<template>
  <div ref="fadingImage">
    <div ref="image">
      <!-- <img
        class="image"
        :src="require('@/assets/images/' + src)"
      /> -->
      <div
        class="image"
        :style="{ 'background-image': `url(${require('@/assets/images/' + src)})` }"
      />
    </div>

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
        let duration = '100%'

        if (this.$screen.large) {
          duration = this.fadeIn ? '100%' : '150%'
        } else {
          duration = '80%'
        }

        if (this.fadeIn) {
          tween
            .from(this.$refs.image, 1, { opacity: 0 })
            .to(this.$refs.image, 1, { opacity: 0, delay: 2 })
        } else {
          tween.add([
            TweenMax.to(this.$refs.image, 10, { opacity: 0, delay: 20 })
          ])
        }

        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            // offset: 0,
            offset: this.fadeIn ? -400 : 0,
            triggerElement: this.$refs.fadingImage,
            triggerHook: 0,
            duration: duration
          })
            .setPin(this.$refs.image, { spacerClass: 'no-push-followers-pin-spacer' })
            .setTween(tween)
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .no-push-followers-pin-spacer > div { // ScrollMagic fudge
    position: fixed !important;
    top: 0 !important;
  }

  .image {
    // max-width: none;
    // right: 0;
    // width: 184%;

    background-position: 100% 50%;

    // background-position: 50% 50%;
    background-size: cover;
    padding-top: 153.27vw;
  }

  .slot {
    position: relative;
    z-index: 1;
  }
</style>
