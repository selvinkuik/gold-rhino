<template>
  <div class="grid-container full">
    <Banner src="support-the-rhino-banner.jpg" />

    <BannerOverlay>
      The Southern White and Black African rhinoceroses are truly two of the most beautiful and rarest of animals facing a real. 
    </BannerOverlay>

    <div class="pb-large foreground white">
      <NavBar
        tintClass="light"
        :showRouteLabel="true"
      />

      <div class="grid-x pt-large">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <p class="text medium-text">In addition to Australia-based foundations, there are a number of South African and UK-based organisations working hard to protect, conserve, and increase the population of the Southern White and Black Rhinoceroses in South Africa.</p>
          <p class="text medium-text">In recent years, we have supported Save the Rhino International and Stop Rhino Poaching.  Save the Rhino International are working hard to increase the population of all five rhino species across Africa and Asia.  The world's most critically endangered rhino species, the Sumatran and Javan rhinos, have fewer than 80 animals remaining in the wild.  As partners of Save the Rhino International, Gold Rhino will be helping to tackle the key threats of poaching and habitat loss, working towards a world where all five species of rhinos thrive in the wild for generations to come.</p>

          <div class="grid-x grid-margin-x logos pt-small">
            <div class="cell small-8 small-offset-2 large-auto large-offset-0 logo">
              <a href="https://www.savetherhino.org/" target="_blank">
                <img src="@/assets/images/save-the-rhino.svg" />
              </a>
            </div>
            <div class="cell small-8 small-offset-2 large-auto large-offset-1 logo">
              <a href="https://www.oursorai.com/" target="_blank">
                <img src="@/assets/images/sorai.jpg" />
              </a>
            </div>
            <div class="cell small-8 small-offset-2 large-auto large-offset-1 logo">
              <a href="http://www.stoprhinopoaching.com/" target="_blank">
                <img src="@/assets/images/stop-rhino-poaching.jpg" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-x mt-small">
        <div class="cell small-10 small-offset-1 large-4 large-offset-6">
          <p class="text small-text">
            These organisations desperately need your help. If you care about the conservation of this majestic creature, please support these causes.<br>
            Every contribution counts.
          </p>
        </div>
      </div>

      <div class="grid-x rhino">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <ParallaxImage src="support-the-rhino.jpg" />
        </div>
      </div>

      <div class="grid-x contact divider">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <p class="text large-text center">If you are interested in helping with our “More Rhinos Program”, TARP and Zoos SA’s Insurance Population Project in Australia, please email:</p>
          <p class="text large-text center"><a class="hover-link light thick" href="mailto:morerhinos@goldrhino.com.au">morerhinos@goldrhino.com.au</a></p>
          <p class="text large-text center">or</p>
          <p class="text large-text center">
            TARP<br>
            <a class="hover-link light thick" href="https://www.theaustralianrhinoproject.org" target="_blank">www.theaustralianrhinoproject.org</a>
          </p>
          <p class="text large-text center">
            Zoos SA<br>
            <a class="hover-link light thick" href="https://www.zoossa.com.au" target="_blank">www.zoossa.com.au</a>
          </p>
        </div>
      </div>

      <ClipPathBox
        counter="06"
        image="our-vision-banner.jpg"
        text="Our vision"
        to="/our-vision"
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

  export default {
    name: 'SupportTheRhino',
    
    components: {
      Banner,
      BannerOverlay,
      ClipPathBox,
      NavBar,
      ParallaxImage
    }
  }
</script>

<style lang="scss" scoped>
  .logos {
    .logo {
      align-items: center;
      display: flex;
    }
  }

  .rhino {
    margin-top: 9.6%;
  }

  .contact {
    margin-top: 35%;
  }
</style>
