<template>
  <section
    class="pinned-text-with-images"
    :class="layout"
  >
    <div
      class="pinned"
      ref="pinned"
    >
      <div
        class="counter"
        :class="{ hidden: !scrollCounter || !scrollMax }"
      >
        {{ scrollCounter }} / {{ scrollMax }}
      </div>
      
      <h3
        v-html="title"
        :class="titleGridClasses"
      ></h3>

      <div class="grid-x">
        <div
          class="cell small-8 large-3"
          :class="slotGridClasses"
        >
          <p><slot></slot></p>
        </div>
      </div>
    </div>

    <div
      class="images"
      ref="images"
    >
      <div class="grid-x grid-padding-x">
        <div
          class="cell"
          :class="image1GridClasses"
        >
          <div
            class="image-mask image-1"
            ref="imageMask1"
          >
            <img
              ref="image1"
              :src="require('@/assets/images/' + image1)"
            />
          </div>
        </div>
      </div>

      <div
        v-if="image2"
        class="grid-x grid-padding-x"
      >
        <div
          class="cell"
          :class="image2GridClasses"
        >
          <div
            class="image-mask image-2"
            ref="imageMask2"
          >
            <img
              ref="image2"
              :src="require('@/assets/images/' + image2)"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax, TweenMax } from 'gsap'

  export default {
    name: 'PinnedTextWithImages',
    
    props: {
      image1: String,
      image2: String,
      layout: String,
      title: String,
      scrollCounter: Number,
      scrollMax: Number
    },

    computed: {
      titleGridClasses: function () {
        if (this.layout == 'layout-4') {
          return 'custom-h3 large-offset-5'
        } else if (this.layout == 'layout-5') {
          return 'custom-h3 large-offset-2'
        }

        return ''
      },

      slotGridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'small-offset-3 large-offset-6'
        } else if (this.layout == 'layout-2') {
          return 'small-offset-1 large-offset-2'
        } else if (this.layout == 'layout-3') {
          return 'small-8 large-3 large-offset-1'
        } else if (this.layout == 'layout-4') {
          return 'large-4 large-offset-6'
        }

        return 'large-4 large-offset-4' // layout-5
      },

      image1GridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'small-5 small-offset-7 large-2 large-offset-9'
        } else if (this.layout == 'layout-2') {
          return 'small-8 small-offset-4 large-5 large-offset-6'
        } else if (this.layout == 'layout-3') {
          return 'small-8 large-3 large-offset-1'
        } else if (this.layout == 'layout-4') {
          return 'large-3 large-offset-3'
        }

        return 'large-3 large-offset-1' // layout-5
      },

      image2GridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'small-8 large-4 large-offset-1'
        } else if (this.layout == 'layout-2') {
          return 'small-5 large-3 large-offset-5'
        }

        return 'small-8 large-3 large-offset-1' // layout-3
      }
    },

    mounted() {
      imagesLoaded(this.$refs.images, () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: this.$refs.pinned,
            triggerHook: 0.2,
            duration: parseInt(getComputedStyle(this.$refs.pinned).height) // Balances with...
          })
            .setPin(this.$refs.pinned)
            .on('enter', () => {
              this.$emit('update:scrollPosition', this.scrollCounter)
            })
        )

        let tween = new TimelineMax().add([
          TweenMax.to(this.$refs.imageMask1, 1, { yPercent: -50 }) // Balances with...
        ])

        if (this.layout == 'layout-1') {
          tween.add([
            TweenMax.to(this.$refs.image1, 1, { scale: 1.2 })
          ], 0)
        } else if (this.layout == 'layout-2') {
          tween.add([
            TweenMax.to(this.$refs.image1, 1, { scale: 1.1 })
          ], 0)
        } else {
          tween.add([
            TweenMax.to(this.$refs.image1, 1, { scale: 1.2 })
          ], 0)
        }

        if (this.image2) {
          tween.add([
            TweenMax.to(this.$refs.image2, 1, { scale: 1.2 })
          ], 0)

          if (this.layout == 'layout-1') {
            tween.add([
              TweenMax.to(this.$refs.imageMask2, 1, { yPercent: -125 })
            ], 0)
          } else if (this.layout == 'layout-2') {
            tween.add([
              TweenMax.to(this.$refs.imageMask2, 1, { yPercent: -200 })
            ], 0)
          } else {
            tween.add([
              TweenMax.to(this.$refs.imageMask2, 1, { yPercent: -150 })
            ], 0)
          }
        }

        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            triggerElement: this.$refs.images,
            triggerHook: 1,
            duration: '150%'
          })
            .setTween(tween)
        )
      })
    }
  }
</script>

<style lang="scss" scoped>
  .pinned-text-with-images {
    position: relative;

    .pinned {
      height: 100vh;
    }

    .counter {
      color: $light-neutral;
      font: 10px Termina;
      letter-spacing: 2px;
      text-align: center;

      &.hidden {
        visibility: hidden;
      }
    }

    h3 {
      color: $light-neutral;
      font-size: 48px;
      font-weight: 300;
      line-height: 1em;
      margin-top: 25px;
      text-align: center;

      &.custom-h3 {
        text-align: left;
        opacity: .4;
      }

      @include breakpoint(large) {
        font-size: 136px;
      }
    }

    p {
      color: $light-neutral;
      line-height: 1.5em;
      margin-top: 134px;
    }

    .images {
      pointer-events: none;
      position: absolute;
      top: 30%; // Balances with...
      width: 100%;
      z-index: 2;

      .image-mask {
        border: 1px solid transparent;
        overflow: hidden;
      }
    }
  }
</style>
