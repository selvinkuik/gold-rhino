<template>
  <div ref="banner">
    <div class="media-sizer">
      <video
        v-if="video"
        class="video"
        autoplay
        loop
        muted
        playsinline
        ref="media"
        :src="src"
      />

      <div
        v-else
        class="image"
        ref="media"
        :style="{ 'background-image': `url(${require('@/assets/images/' + src)})` }"
      ></div>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'

  export default {
    name: 'Banner',
    
    props: {
      navColor: String,
      slug: String,
      src: String,
      video: Boolean
    },

    methods: {
      pinMedia() {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: this.$refs.banner,
            triggerHook: 0
          })
            .setPin(this.$refs.banner, { spacerClass: 'no-push-followers-pin-spacer' })
        )
      }
    },

    mounted() {
      if (this.video) {
        this.$refs.media.addEventListener('loadeddata', this.pinMedia)
      } else {
        imagesLoaded(this.$refs.media, this.pinMedia)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .media-sizer {
    overflow: hidden;

    .video {
      height: 100%;
      left: 50%;
      min-width: 100%;
      min-height: 55vw; // 100 * 9 / 16 (rounded down a bit)
      position: relative;
      transform: translateX(-50.1%); // ?
      // width: 177.77777778vh; /* 100 * 16 / 9 */
      width: 144vh;
    }

    .image {
      background-position: 20% 50%;
      background-size: cover;
      padding-top: 153.27vw;

      @include breakpoint(large) {
        padding-top: 55vw;
      }
    }
  }
</style>
