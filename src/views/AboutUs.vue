<template>
  <div class="grid-container full">
    <Banner
      src="/videos/about-us.mp4"
      :video="true"
    />

    <BannerOverlay>
      As a Private Equity firm, Gold Rhino funds and works closely with Australasian-based software development companies.
    </BannerOverlay>

    <div class="foreground white">
      <NavBar tintClass="light" />

      <div class="grid-x">
        <div class="cell large-3 large-offset-2">
          <img src="@/assets/images/about-us-1.jpg" />
        </div>

        <div class="cell large-5 large-offset-1">
          <p class="text">We help our investments accelerate growth, maximise returns, and get set-up for future success or eventual sale.</p>
          <p class="small-text">Our ethos and mantra is simply, <strong>Forward Together</strong>. This guides all our actions – from the companies we invest in, to the services and support we offer. It also represents a much broader vision. We have to actively support the conservation and population growth of one of Africa’s most endangered wildlife animals, the rhinoceros. This is a cause that we are deeply passionate about, committed to, and have been for some time.</p>
        </div>
      </div>

      <ParallaxImageWithBorder src="about-us-2.jpg" />

      <div class="grid-x grid-margin-x">
        <div class="cell large-4 large-offset-2">
          <p class="small-text">The provenance of our company’s name lies in the story of the Golden Rhinoceros of Mapungubwe (South Africa), an archaeological find that showed a civilisation existed in Southern Africa that was far more advanced than previously thought.</p>
        </div>

        <div class="cell large-4">
          <p class="small-text">To us, the “Gold Rhino” is literally a symbol of being ahead of the game. It speaks to culture, rugged determination, refinement, financial success, and prosperity. The rhinoceros is a beautiful, rare and unique animal. Gold symbolises our shining track record of innovation, problem solving, and principled ways of working with others.</p>
        </div>
      </div>

      <div class="grid-x">
        <div class="cell large-8 large-offset-2">
          <p class="big-text">We are an investment company with a difference.</p>
        </div>
      </div>

      <ParallaxImage src="about-us-3.jpg" />

      <div class="grid-x">
        <div class="cell large-3 large-offset-2">
          <img src="@/assets/images/about-us-4.jpg" />
        </div>

        <div class="cell large-3 large-offset-1">
          <p class="small-text">We play an active role in mentoring and helping the CEOs and founders of tech companies achieve their full potential. We openly share our knowledge, experience, and understanding of what it takes to build a successful business, and we have empathy for the founder journey.</p>
          <p>We’ve been there, and done that, with great success and it’s our desire to help others achieve the same.</p>
        </div>
      </div>

      <div class="grid-x grid-margin-x">
        <div class="cell large-4 large-offset-2">
          <p class="small-text">In addition to providing smart money (funding and advice), we also offer Accelerator Services through <router-link class="standard-text-link" to="/rhino-labs">RhinoLabs</router-link> where we bring trusted third-party partners into the mix to co-assist the companies we invest in to create a better first impression, develop distinct branding, and build out a cohesive strategy and plan.</p>
        </div>

        <div class="cell large-4">
          <p class="small-text">The backbone of our business has always been to financially assist South African rhinoceros conservation charities.</p>
          <p class="small-text">Our vision is to take an even more active role, by increasing the rhinoceros population in a non-threatening environment, and reducing the demand for rhinoceros horn in Asia.</p>
        </div>
      </div>

      <ClipPathBox
        counter="02"
        image="placeholder.jpg"
        text="Rhino Labs"
        to="/rhino-labs"
      />
    </div>
  </div>
</template>

<script>
  import Banner from '@/components/Banner.vue'
  import BannerOverlay from '@/components/BannerOverlay.vue'
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import NavBar from '@/components/NavBar.vue'
  import ParallaxImage from '@/components/ParallaxImage.vue'
  import ParallaxImageWithBorder from '@/components/ParallaxImageWithBorder.vue'

  export default {
    name: 'AboutUs',
    
    components: {
      Banner,
      BannerOverlay,
      ClipPathBox,
      NavBar,
      ParallaxImage,
      ParallaxImageWithBorder
    }
  }
</script>

<style lang="scss" scoped>
</style>
