<template>
  <div class="grid-container full">
    <div class="foreground dark-neutral pb-large">
      <NavBar
        tintClass="dark"
        :showRouteLabel="true"
      />

      <FadingImage src="tim-smith-bg.jpg">
        <div class="grid-x intro">
          <div class="cell large-4 large-offset-2">
            <p class="text light-neutral xxlarge-text">Tim Smith</p>
            <p class="text light-neutral medium-text">Managing Director</p>

            <p class="bio text light-neutral medium-text">An energetic, passionate Australian, Tim grew up in Perth and currently resides in Singapore.</p>
            <p class="text light-neutral medium-text">He is the founder, owner and Principal Investor of Gold Rhino, and the driving force behind two entrepreneurial software companies: <strong>HardHat</strong> and <strong>OnePlace</strong>.</p>
          </div>
        </div>
      </FadingImage>

      <PinnedTextWithImages
        image1="hardhat.jpg"
        layout="layout-4"
        title="HardHat"
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
          <ParallaxImage
            src="tim-smith.jpg"
            marginTop="-70%"
          />
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

      <FadingImage
        :fadeIn="true"
        src="who-we-are-2.jpg"
      >
        <div class="grid-x divider light-neutral">
          <div class="cell small-10 small-offset-1 large-8 large-offset-2">
            <p class="text light-neutral xlarge-text center">Looking ahead, Gold Rhino’s vision is to take an even more active role in the conservation of the species.</p>
          </div>
        </div>
      </FadingImage>

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
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import FadingImage from '@/components/FadingImage.vue'
  import NavBar from '@/components/NavBar.vue'
  import ParallaxImage from '@/components/ParallaxImage.vue'
  import PinnedTextWithImages from '@/components/PinnedTextWithImages.vue'

  export default {
    name: 'WhoWeAre',
    
    components: {
      ClipPathBox,
      FadingImage,
      NavBar,
      ParallaxImage,
      PinnedTextWithImages
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    padding: 21.5% 0 34.2%;

    .bio {
      margin-top: 57%;
    }
  }

  .tree {
    margin-top: 9.6%;
  }

  .divider {
    margin-top: 35.5%;
  }
</style>
