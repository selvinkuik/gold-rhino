<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <Banner
      src="/videos/home.mp4"
      :video="true"
    />

    <BannerOverlay src="forward-together.svg" />

    <div class="foreground white">
      <NavBar
        tintClass="light"
        :showRouteLabel="true"
      />

      <TextWithHorizontalTicker
        additionalClass="pt-large mb-large"
        ticker="Forward Together"
      >
        Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, with rhinoceros preservation remaining at our core.
      </TextWithHorizontalTicker>
      
      <div
        v-if="!holdingMode"
        class="pb-large grid-x"
      >
        <template v-for="(item, index) in $router.options.routes">
          <router-link
            class="link cell small-10 small-offset-1 large-8 large-offset-2"
            v-if="item.image"
            :key="item.path"
            :to="item.path"
          >
            <div class="overlay">
              <div class="index">0{{ index }}</div>
              <div class="name">{{ item.name }}</div>
              <div class="description">{{ item.description }}</div>
            </div>

            <div class="image-opacity-limiter">
              <img
                class="image"
                :class="`image-hover-${index}`"
                ref="routerImages"
                :src="require('@/assets/images/' + item.image)"
              />
            </div>
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import { TimelineMax } from 'gsap'
  import Banner from '@/components/Banner.vue'
  import BannerOverlay from '@/components/BannerOverlay.vue'
  import NavBar from '@/components/NavBar.vue'
  import TextWithHorizontalTicker from '@/components/TextWithHorizontalTicker.vue'

  export default {
    name: 'Home',
    
    components: {
      Banner,
      BannerOverlay,
      NavBar,
      TextWithHorizontalTicker
    },

    data() {
      return {
        holdingMode: process.env.VUE_APP_HOLDING_MODE == 'true'
      }
    },

    mounted() {
      console.log(this.$refs.page.querySelectorAll('img'))

      imagesLoaded(this.$refs.page, () => {
        if (!this.$screen.large) {
          this.$refs.routerImages.forEach(element => {
            this.$scrollmagic.addScene(
              this.$scrollmagic.scene({
                offset: -400,
                triggerElement: element,
                triggerHook: 0,
                duration: '20%'
              })
                .setTween(new TimelineMax()
                  .from(element, 1, { opacity: 0 })
                  .to(element, 1, { opacity: 0, delay: 2 })
                )
            )
          })
        }

        this.$emit('update:loading', false)

        console.log('BOOM!')
      })
        .on('progress', (instance, image) => {
          var result = image.isLoaded ? 'loaded' : 'broken'
          console.log( 'image is ' + result + ' for ' + image.img.src )
        })
    }
  }
</script>

<style lang="scss" scoped>
  .link {
    position: relative;

    .overlay {
      border-bottom: 2px solid $dark-neutral;
      padding: 3% 0 6.2%;
      position: relative;
      z-index: 1;
    }

    &:first-child {
      .overlay {
        border-top: 2px solid $dark-neutral;
      }
    }

    .index {
      font: 10px Termina;
      letter-spacing: 2px;
    }

    .name {
      font-size: 40px;
      margin-top: 3%;
      transform: translateY(10px);
      transition: transform .4s cubic-bezier(0.22, 1, 0.36, 1);

      @include breakpoint(large) {
        font-size: 104px;
      }
    }

    .description {
      margin-top: 1%;
      opacity: 0;
      transition: opacity .4s;
    }

    .image-opacity-limiter {
      @include breakpoint(small only) {
        opacity: .4;
      }
    }

    .image {
      height: 216px;
      position: absolute;
      top: -23%;

      @include breakpoint(large) {
        height: 396px;
        opacity: 0;
        transition: opacity .4s;
      }

      &.image-hover-1 {
        right: 14.8%;
      }

      &.image-hover-2,
      &.image-hover-4,
      &.image-hover-5,
      &.image-hover-7 {
        right: -11.8%;
      }

      &.image-hover-3 {
        right: 24.5%;
      }

      &.image-hover-6 {
        right: 18.8%;
      }
    }

    @include breakpoint(large) {
      @media (hover: hover) {
        &:hover {
          .name {
            transform: translateY(0);
          }

          .description,
          .image {
            opacity: 1;
          }
        }
      }
    }
  }
</style>
