<template>
  <section
    class="service"
    :class="slug + ' ' + layout"
  >
    <div class="pinned">
      <div class="counter">{{ scrollCounter }} / {{ scrollMax }}</div>
      <h3 v-html="title"></h3>

      <div class="grid-x">
        <div
          class="cell large-3"
          :class="slotGridClasses"
        >
          <p><slot></slot></p>
        </div>
      </div>
    </div>

    <div class="images" ref="images">
      <div class="grid-x">
        <div
          class="cell"
          :class="image1GridClasses"
        >
          <img
            class="image-1"
            :src="require('@/assets/images/' + image1)"
          />
        </div>
      </div>

      <div class="grid-x">
        <div
          class="cell"
          :class="image2GridClasses"
        >
          <img
            class="image-2"
            :src="require('@/assets/images/' + image2)"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
  import imagesLoaded from 'imagesloaded'

  export default {
    name: 'Service',
    
    props: {
      image1: String,
      image2: String,
      layout: String,
      title: String,
      slug: String,
      scrollCounter: Number,
      scrollMax: Number
    },

    computed: {
      slotGridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'large-offset-6'
        } else if (this.layout == 'layout-2') {
          return 'large-offset-2'
        }

        return 'large-offset-5'
      },

      image1GridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'large-2 large-offset-9'
        } else if (this.layout == 'layout-2') {
          return 'large-5 large-offset-6'
        }

        return 'large-2 large-offset-8'
      },

      image2GridClasses: function () {
        if (this.layout == 'layout-1') {
          return 'large-4 large-offset-1'
        } else if (this.layout == 'layout-2') {
          return 'large-3 large-offset-5'
        }

        return 'large-3 large-offset-1'
      }
    },

    mounted() {
      imagesLoaded(this.$refs.images, () => {
        const scene = this.$scrollmagic.scene({
          triggerElement: `.${this.slug}`,
          triggerHook: 0.2,
          duration: getComputedStyle(this.$refs.images).height
        })
          .setPin(`.${this.slug} .pinned`)
          .on('enter', () => {
            this.$emit('update:scrollPosition', (this.scrollCounter - 1) / this.scrollMax)
          })

        this.$scrollmagic.addScene(scene)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .service {
    position: relative;

    .pinned {
      padding-bottom: 30%;
    }

    .counter {
      color: $light-neutral;
      font: 10px Termina;
      letter-spacing: 2px;
      text-align: center;
    }

    h3 {
      color: $light-neutral;
      font-size: 136px;
      font-weight: 300;
      line-height: 1em;
      margin-top: 25px;
      text-align: center;
    }

    p {
      color: $light-neutral;
      line-height: 1.5em;
      margin-top: 134px;
    }

    .images {
      padding-top: 20%;
      pointer-events: none;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 2;
    }

    img {
      max-width: 100%;
    }

    .image-2 {
      margin-top: 100px;
    }
  }
</style>
