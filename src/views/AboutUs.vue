<template>
  <div class="grid-container full">
    <Banner
      src="/videos/about-us.mp4"
      :video="true"
    />

    <BannerOverlay>
      As a Private Equity firm, Gold Rhino funds and works closely with Australasian-based software development companies.
    </BannerOverlay>

    <div class="about-us foreground white">
      <NavBar tintClass="light" />

      <div class="grid-x intro">
        <div class="cell small-10 small-offset-1 large-3 large-offset-2">
          <ParallaxImage
            src="about-us-1.jpg"
            marginTop="-150%"
          />
        </div>

        <div class="cell small-10 small-offset-1 large-5 large-offset-1">
          <p class="text medium-text">We help our investments accelerate growth, maximise returns, and get set-up for future success or eventual sale.</p>
          <p class="text small-text">Our ethos and mantra is simply, <strong>Forward Together</strong>. This guides all our actions – from the companies we invest in, to the services and support we offer. It also represents a much broader vision. We have to actively support the conservation and population growth of one of Africa’s most endangered wildlife animals, the rhinoceros. This is a cause that we are deeply passionate about, committed to, and have been for some time.</p>
        </div>
      </div>

      <ParallaxImageWithBorder src="about-us-2.jpg" />

      <div class="grid-x grid-margin-x story">
        <div class="small-10 small-offset-1 cell large-4 large-offset-2">
          <p class="text small-text">The provenance of our company’s name lies in the story of the Golden Rhinoceros of Mapungubwe (South Africa), an archaeological find that showed a civilisation existed in Southern Africa that was far more advanced than previously thought.</p>
        </div>

        <div class="small-10 small-offset-1 cell large-4">
          <p class="text small-text">To us, the “Gold Rhino” is literally a symbol of being ahead of the game. It speaks to culture, rugged determination, refinement, financial success, and prosperity. The rhinoceros is a beautiful, rare and unique animal. Gold symbolises our shining track record of innovation, problem solving, and principled ways of working with others.</p>
        </div>
      </div>

      <div class="grid-x tagline">
        <div class="small-10 small-offset-1 cell large-8 large-offset-2">
          <p class="text xlarge-text center">We are an investment company with a difference.</p>
        </div>
      </div>

      <div class="grid-x tree">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <ParallaxImage src="about-us-3.jpg" />
        </div>
      </div>

      <div class="grid-x experience">
        <div class="cell small-10 small-offset-1 large-3 large-offset-2">
          <ParallaxImage
            src="about-us-4.jpg"
            marginTop="-100%"
          />
        </div>

        <div class="small-10 small-offset-1 cell large-3 large-offset-1">
          <p class="text small-text">We play an active role in mentoring and helping the CEOs and founders of tech companies achieve their full potential. We openly share our knowledge, experience, and understanding of what it takes to build a successful business, and we have empathy for the founder journey.</p>
          <p class="text small-text">We’ve been there, and done that, with great success and it’s our desire to help others achieve the same.</p>
        </div>
      </div>

      <div class="grid-x grid-margin-x">
        <div class="small-10 small-offset-1 cell large-4 large-offset-2">
          <p class="text small-text">In addition to providing smart money (funding and advice), we also offer Accelerator Services through <router-link class="dark-link" to="/rhino-labs">RhinoLabs</router-link> where we bring trusted third-party partners into the mix to co-assist the companies we invest in to create a better first impression, develop distinct branding, and build out a cohesive strategy and plan.</p>
        </div>

        <div class="small-10 small-offset-1 cell large-4 large-offset-0">
          <p class="text small-text">The backbone of our business has always been to financially assist South African rhinoceros conservation charities.</p>
          <p class="text small-text">Our vision is to take an even more active role, by increasing the rhinoceros population in a non-threatening environment, and reducing the demand for rhinoceros horn in Asia.</p>
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
  .about-us {
    padding-bottom: 20%;
  }

  .intro {
    padding: 37.3% 0 22%;

    .small-text {
      margin: 23.8% 20% 0 0;
    }
  }

  .story {
    margin-top: 26.7%;
  }

  .tagline {
    margin-top: 21.3%;
    padding-top: 9.9%;
    position: relative;

    &:before {
      background-color: $dark-neutral;
      content: ' ';
      height: 2px;
      left: 50%;
      margin-left: -40px;
      position: absolute;
      top: 0;
      width: 80px;
    }
  }

  .tree {
    margin-top: 9.6%;
  }

  .experience {
    padding: 45.8% 0 25.8%;
  }
</style>
