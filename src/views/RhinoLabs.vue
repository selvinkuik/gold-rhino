<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <Banner
      src="/videos/rhino-labs.mp4"
      :video="true"
    />

    <BannerOverlay src="rhino-labs.svg">
      At Rhino Labs we offer a commitment to financially support you and offer an Accelerator program to help you achieve your business goals.
    </BannerOverlay>

    <div
      class="foreground dark-neutral"
      ref="darkSection"
    >
      <NavBar
        tintClass="dark"
        :showRouteLabel="true"
      />

      <div class="rhino-labs grid-x grid-margin-x pt-large pb-large">
        <div class="cell small-10 small-offset-1 large-4 large-offset-2">
          At Gold Rhino, not only will you receive a commitment and a determination from us to financially support you, we also offer advice on how to establish or adjust your business to achieve your goals, charge ahead of your competition, and move <strong>Forward Together</strong> with the help of an experienced team.
        </div>
        <div class="cell small-10 small-offset-1 large-4 large-offset-0">
          Our “Rhino Labs” Accelerator Services provide you with a comprehensive package of additional assistance across different facets of your business.
        </div>
      </div>

      <ScrollIndicator
        :scrollMax="6"
        :scrollPosition="scrollPosition"
      />

      <PinnedTextWithImages
        image1="discovery-1.jpg"
        image2="discovery-2.jpg"
        layout="layout-1"
        title="Discovery"
        :scrollCounter="1"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        In-depth market research, competitor analysis, mining of data, and expertise to find gaps in the industry/market and identify potential opportunities.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="strategy-1.jpg"
        layout="layout-2"
        title="Strategy"
        :scrollCounter="2"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        Develop routes to market to best suit your offering, i.e. who are your customers, where will we find them, how to engage with them, to finalise your Business Plan, mission, vision, objectives and goals.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="branding-1.jpg"
        image2="branding-2.jpg"
        layout="layout-3"
        title="Visual Identity<br>and Branding"
        :triggerHook="0.1"
        :scrollCounter="3"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        Creation of your brand to connect with your future customers, from proposition to visual identity, and tone of voice.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="structure-1.jpg"
        image2="structure-2.jpg"
        layout="layout-1"
        title="Structure"
        :scrollCounter="4"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        Ensuring you have robust systems and structures in place, including advice on corporate and capital structures, resource and development planning, accounts and finance, book-keeping and financial compliance.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="gtm-1.jpg"
        layout="layout-2"
        title="Go-To-Market"
        :triggerHook="0.15"
        :scrollCounter="5"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        Advice around; what marketing and sales material needs to be created, mediums used to ensure your target customers are reached. We need to ensure your customers are seeing and hearing your brand and unique selling point.
      </PinnedTextWithImages>

      <PinnedTextWithImages
        image1="exit-1.jpg"
        image2="exit-2.jpg"
        layout="layout-3"
        title="Exit Strategy"
        :triggerHook="0.15"
        :scrollCounter="6"
        :scrollMax="6"
        :scrollPosition.sync="scrollPosition"
      >
        Gold Rhino have a proven track record when it comes to selling a business. It is the last and most crucial stage of the journey. We will guide you to an exit that delivers maximum value for all of your emotional investment and hard work in the company that you have built.
      </PinnedTextWithImages>
    </div>

    <div
      class="pb-large-large-only foreground light-neutral"
      ref="lightSection"
    >
      <NavBar
        color="inverted"
        tintClass="light"
        :showRouteLabel="true"
      />

      <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <ParallaxImage src="rhino-labs.jpg" />
        </div>
      </div>

      <div class="grid-x">
        <div class="cell small-10 small-offset-1 large-6 large-offset-3">
          <p class="text medium-text responsive para-1">We work in partnership with a range of trusted experts and advisors to deliver these services, including Ernst & Young, a highly-credentialed branding and marketing agency, and a finance and book-keeping services team, all of which we have worked closely with for over a decade.</p>

          <p class="text medium-text para-2">With this gold-standard team, we help you set up your business operations properly, giving you a jump-start past the usual hurdles of the start-up world, and catapulting you into a different class of business very quickly.</p>
        </div>
      </div>

      <ClipPathBox
        counter="03"
        text="Investment"
        image="investment-banner.jpg"
        to="/investment"
      />
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import Banner from '@/components/Banner.vue'
  import BannerOverlay from '@/components/BannerOverlay.vue'
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import NavBar from '@/components/NavBar.vue'
  import ParallaxImage from '@/components/ParallaxImage.vue'
  import PinnedTextWithImages from '@/components/PinnedTextWithImages.vue'
  import ScrollIndicator from '@/components/ScrollIndicator.vue'

  export default {
    name: 'RhinoLabs',
    
    components: {
      Banner,
      BannerOverlay,
      ClipPathBox,
      NavBar,
      ParallaxImage,
      PinnedTextWithImages,
      ScrollIndicator
    },

    data() {
      return {
        imageLoadCounter: 0,
        scrollPosition: 1
      }
    },

    mounted() {
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
  .rhino-labs {
    color: $light-neutral;
    font-size: 18px;
    line-height: 1.375em;

    @include breakpoint(large) {
      font-size: 32px;
    }
  }

  .para-1 {
    margin-top: 60%;
  }

  .para-2 {
    margin-top: 19.65%;
  }
</style>
