<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <div class="foreground dark-neutral pb-large-large-only">
      <NavBar
        :tintClass="pageHasScrolled ? 'dark' : ''"
        :showRouteLabel="true"
      />

      <div ref="fadingTim">
        <div ref="fadingTimImage">
          <div
            class="fading-tim"
            :style="{ 'background-image': `url(${require('@/assets/images/tim-smith-bg.jpg')})` }" />
        </div>

        <div class="grid-x intro">
          <div class="cell small-10 small-offset-1 large-4 large-offset-2">
            <p class="text light-neutral xxlarge-text">Tim Smith</p>
            <p class="text light-neutral medium-text position">Managing Director</p>

            <p class="bio text light-neutral medium-text">An energetic, passionate Australian, Tim grew up in Perth and currently resides in Singapore.</p>
            <p class="text light-neutral medium-text">He is the founder, owner and Principal Investor of Gold Rhino, and the driving force behind two entrepreneurial software companies: <strong>HardHat</strong> and <strong>OnePlace</strong>.</p>
          </div>
        </div>
      </div>

      <PinnedTextWithImages
        image1="hardhat.jpg"
        layout="layout-4"
        title="HardHat"
        :triggerHook="0.08"
      >
        HardHat is an enterprise project collaboration solution built on the Salesforce Customer 360 platform, specifically for the Resources (Mining, Oil & Gas), Engineering & Construction, Architecture & Design sectors.<br>
        OnePlace, also built on the Salesforce platform, is a client lifecycle management solution for the professional services industry.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="oneplace.jpg"
        layout="layout-5"
        title="OnePlace"
      >
        Tim and his team rapidly grew the OnePlace business to a market-leading position across the globe, which led to its acquisition by US software company, Intapp in May 2019.
      </PinnedTextWithImages>

      <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-4 large-offset-1">
          <div class="tim">
            <ParallaxImage src="tim-smith.jpg" />
          </div>
        </div>

        <div class="cell small-10 small-offset-1 large-5 large-offset-1">
          <p class="text light-neutral medium-text">Prior to entering the start-up space, Tim worked in the finance industry, and in project management and technology consultant roles for professional service firms (legal and accounting).</p>
        </div>
      </div>

      <div class="grid-x grid-margin-x mt-large">
        <div class="small-10 small-offset-1 cell large-4 large-offset-2">
          <p class="text light-neutral small-text">As a two-time entrepreneurial founder, and someone who successfully self-funded OnePlace from start to finish, Tim believes he and his team can offer you the edge in shaping your company for growth, and making it attractive for investment or eventual sale.</p>
        </div>

        <div class="small-10 small-offset-1 cell large-4 large-offset-0">
          <p class="text light-neutral small-text">Outside of software development, Tim is a fanatic of cricket, rugby union, and Formula 1.</p>
          <p class="text light-neutral small-text">He also has a deep-rooted passion for South Africa, and the conservation of the rhinoceros population there. OnePlace, and now HardHat, have both been underpinned by a strong desire to provide financial support to causes and charities that exist to protect rhinoceroses.</p>
        </div>
      </div>

      <div class="grid-x tree">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <ParallaxImage src="who-we-are-1.jpg" />
        </div>
      </div>

      <div
        class="rhino"
        ref="fadingRhino"
      >
        <div ref="fadingRhinoImage">
          <div
            class="fading-rhino"
            :style="{ 'background-image': `url(${require('@/assets/images/who-we-are-2.jpg')})` }" />
        </div>

        <div class="grid-x divider light-neutral">
          <div class="cell small-10 small-offset-1 large-8 large-offset-2">
            <p class="text light-neutral xlarge-text center">Looking ahead, Gold Rhino’s vision is to take an even more active role in the conservation of the species.</p>
          </div>
        </div>
      </div>

      <div class="clip-path-box">
        <ClipPathBox
          counter="06"
          image="our-vision-banner.jpg"
          text="Our vision"
          to="/our-vision"
        />
      </div>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import throttle from 'lodash/throttle'
  import { TimelineMax, TweenMax } from 'gsap'
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import NavBar from '@/components/NavBar.vue'
  import ParallaxImage from '@/components/ParallaxImage.vue'
  import PinnedTextWithImages from '@/components/PinnedTextWithImages.vue'

  export default {
    name: 'WhoWeAre',
    
    components: {
      ClipPathBox,
      NavBar,
      ParallaxImage,
      PinnedTextWithImages
    },

    data() {
      return {
        imageLoadCounter: 0,
        pageHasScrolled: false
      }
    },

    methods: {
      handleScroll() {
        this.pageHasScrolled = window.scrollY > 100
      }
    },

    created() {
      this.handleDebouncedScroll = throttle(this.handleScroll, 100)
      window.addEventListener('scroll', this.handleDebouncedScroll)
    },

    beforeDestroy() {
      window.removeEventListener('scroll', this.handleDebouncedScroll)
    },

    mounted() {
      imagesLoaded(this.$refs.fadingTimImage, () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            offset: 0,
            triggerElement: this.$refs.fadingTim,
            triggerHook: 0,
            duration: this.$screen.large ? '150%' : '80%'
          })
            .setPin(this.$refs.fadingTimImage, { spacerClass: 'no-push-followers-pin-spacer' })
            .setTween(new TimelineMax().add([
              TweenMax.to(this.$refs.fadingTimImage, 10, { opacity: 0, delay: 20 })
            ]))
        )
      })

      imagesLoaded(this.$refs.fadingRhinoImage, () => {
        this.$scrollmagic.addScene(
          this.$scrollmagic.scene({
            offset: -400,
            triggerElement: this.$refs.fadingRhino,
            triggerHook: 0,
            duration: this.$screen.large ? '80%' : '50%'
          })
            .setPin(this.$refs.fadingRhinoImage, { spacerClass: 'no-push-followers-pin-spacer' })
            .setTween(new TimelineMax()
                .from(this.$refs.fadingRhinoImage, 10, { opacity: 0 })
                .to(this.$refs.fadingRhinoImage, 10, { opacity: 0, delay: 2 })
            )
        )
      })

      imagesLoaded(this.$refs.page, () => {
        this.$emit('update:progress', 1)
      })
        .on('progress', () => {
          this.imageLoadCounter++

          this.$emit('update:progress', this.imageLoadCounter / this.$refs.page.querySelectorAll('img').length)
        })
    }
  }
</script>

<style lang="scss" scoped>
  .no-push-followers-pin-spacer > div { // ScrollMagic fudge
    position: fixed !important;
    top: 0 !important;
  }

  .fading-tim {
    background-position: 100% 50%;
    background-size: cover;
    padding-top: 144vw;

    @include breakpoint(large) {
      padding-top: 81.5vw;
    }
  }

  .intro {
    padding: 97% 0 34.2%;
    position: relative;
    z-index: 1;

    @include breakpoint(large) {
      padding-top: 21.5%;
    }

    .position {
      @include breakpoint(small only) {
        margin-top: 0;
      }
    }

    .bio {
      margin-top: 31%;

      @include breakpoint(large) {
        margin-top: 57%;
      }
    }
  }

  .tim {
    margin: -90% 0 70%;

    @include breakpoint(large) {
      margin: -90% 0 0;
    }
  }

  .tree {
    margin-top: 9.6%;
    position: relative;
    z-index: 1;
  }

  .rhino  {
    @include breakpoint(small only) {
      margin-bottom: 50%;
    }

    .divider {
      margin-top: 35.5%;
    }

    .fading-rhino {
      background-position: 50% 50%;
      background-size: cover;
      padding-top: 100vh;

      @include breakpoint(large) {
        padding-top: 64vw;
      }
    }
  }
</style>
