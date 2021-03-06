<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <Banner src="support-the-rhino-banner.jpg" />

    <BannerOverlay>
      The Southern White and Black African rhinoceroses are truly two of the most beautiful and rarest of animals facing a real threat of extinction. 
    </BannerOverlay>

    <div class="pb-large-large-only foreground white">
      <NavBar
        color="inverted"
        tintClass="light"
        :showRouteLabel="true"
      />

      <div class="grid-x pt-large">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <p class="text medium-text">In addition to Australia-based foundations, there are a number of other organisations working hard to protect, conserve, and increase the population of the Southern White and Black Rhinoceros in South Africa.</p>
          <p class="text medium-text">In recent years, we have supported Save the Rhino International and Stop Rhino Poaching. Save the Rhino International are working hard to increase the population of all five rhino species across Africa and Asia. The world’s most critically endangered rhino species, the Sumatran and Javan rhinos, have fewer than 80 animals remaining in the wild. As partners of Save the Rhino International, Gold Rhino will be helping to tackle the key threats of poaching and habitat loss, working towards a world where all five species of rhinos thrive in the wild for generations to come.</p>

          <div class="grid-x logos pt-small">
            <div class="cell large-6 logo mb-small-small-only">
              <div class="grid-x grid-margin-x">
                <div class="cell small-8 small-offset-2 large-auto logo mb-small-small-only">
                  <a href="https://www.savetherhino.org/" target="_blank">
                    <img src="@/assets/images/save-the-rhino.svg" />
                  </a>
                </div>
                <div class="cell small-8 small-offset-2 large-auto large-offset-1 logo">
                  <a href="http://www.stoprhinopoaching.com/" target="_blank">
                    <img src="@/assets/images/stop-rhino-poaching.jpg" />
                  </a>
                </div>
              </div>
            </div>

            <div class="cell large-5 large-offset-1 help">
              <p class="text medium-text">
                These organisations desperately need your help. If you care about the conservation of this majestic creature, please support these causes. Every contribution counts.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div class="grid-x rhino">
        <div class="cell small-10 small-offset-1 large-8 large-offset-2">
          <ParallaxImage src="support-the-rhino-1.jpg" />
        </div>
      </div>

      <div class="grid-x contact">
        <div class="cell small-5 small-offset-1 large-3 large-offset-2 contact-image">
          <ParallaxImage
            :overlapAndFade="true"
            src="support-the-rhino-2.jpg"
          />
        </div>

        <div class="cell small-6 small-offset-4 large-5 large-offset-6">
          <p class="text medium-alt-text">
            If you are interested in helping with our “More Rhinos Program”, TARP and Zoos SA’s Insurance Population Project in Australia,
            <span class="link large inline">please email:</span>
            <span class="link small"><a class="hover-link gold thick" href="mailto:morerhinos@goldrhino.net">please email.</a></span>
          </p>
          <p class="text medium-alt-text link large"><a class="hover-link gold thick" href="mailto:morerhinos@goldrhino.net">morerhinos@goldrhino.net</a></p>
          <p class="text medium-alt-text">or visit</p>

          <p class="text medium-alt-text link large">
            TARP<br>
            <a class="hover-link gold thick" href="https://www.theaustralianrhinoproject.org" target="_blank">www.theaustralianrhinoproject.org</a>
          </p>
          <p class="text medium-alt-text link large">
            Zoos SA<br>
            <a class="hover-link gold thick" href="https://www.zoossa.com.au" target="_blank">www.zoossa.com.au</a>
          </p>

          <p class="text medium-alt-text link small">
            <a class="hover-link gold thick" href="https://www.theaustralianrhinoproject.org" target="_blank">TARP</a>
          </p>
          <p class="text medium-alt-text link small">
            <a class="hover-link gold thick" href="https://www.zoossa.com.au" target="_blank">Zoos SA</a>
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
  import imagesLoaded from 'imagesloaded'
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
    },

    data() {
      return {
        imageLoadCounter: 0
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
  .logos {
    .logo {
      align-items: center;
      display: flex;
    }

    img {
      filter: grayscale(100%);
      transform: scale(.95);
      transition: filter 0.4s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);

      &:hover {
        filter: grayscale(0%);
        transform: scale(1);
      }
    }
  }

  .help {
    display: flex;
    align-items: center;
  }

  .rhino {
    margin-top: 9.6%;
  }

  .contact {
    margin-top: 35%;

    .contact-image {
      margin-top: -5%;
    }
  }

  .link {
    &.small {
      @include breakpoint(large) {
        display: none;
      }
    }

    &.large {
      display: none;

      @include breakpoint(large) {
        display: block;

        &.inline {
          display: inline;
        }
      }
    }
  }

  .hover-link {
    display: inline-block;
  }
</style>
