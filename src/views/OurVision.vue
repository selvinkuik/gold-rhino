<template>
  <div class="grid-container full">
    <Banner src="our-vision-banner.jpg" />

    <BannerOverlay>
      Our ultimate vision is to further support the protection and growth of the South African rhinoceros population.
    </BannerOverlay>

    <div class="padding-before-footer foreground white">
      <NavBar tintClass="dark" />

      <div class="grid-x intro">
        <div class="cell small-10 small-offset-1 large-4 large-offset-2">
          <p class="text medium-text">We want to make a direct and more active contribution to this effort by helping to increase the rhinoceros population, and so remove the real threat of their extinction.</p>
        </div>

        <div class="cell small-10 small-offset-1 large-3 large-offset-1">
          <ParallaxImage
            src="our-vision-1.jpg"
            marginTop="-100%"
          />
        </div>
      </div>

      <div class="grid-x grid-margin-x story-1">
        <div class="cell small-10 small-offset-1 large-4 large-offset-2">
          <p class="text small-text">By choosing to work with Gold Rhino, you are having a direct impact in assisting the fight to save the Southern White and Black African rhinoceros. Gold Rhino is committed to supporting a range of initiatives that help the global efforts to protect the rhino for future generations.</p>
          <p class="text small-text">The foundations and organisations that directly assist South African wildlife parks and African-based rhinoceros are carrying out incredible work to protect this species. Gold Rhino also understands that we need to actively grow rhinoceros insurance populations outside of Africa, if this majestic animal is to survive.</p>
        </div>

        <div class="cell small-10 small-offset-1 large-4 large-offset-0">
          <p class="text small-text">With this in mind, under our <strong>More Rhinos Program</strong>, Gold Rhino has entered into partnerships with The Australian Rhino Project (TARP) and Zoos South Australia (Zoos SA), two Australian-based organisations who share our passion for the African rhinoceros. They have worked tirelessly together over the past few years to gain import permits, build facilities, create partnerships and establish an environment as close to that which the African rhinoceros has called home since the beginning of time.</p>
        </div>
      </div>

      <ParallaxImageWithBorder src="our-vision-2.jpg" />

      <div class="grid-x grid-margin-x story-2">
        <div class="cell small-10 small-offset-1 large-4 large-offset-2">
          <p class="text small-text">Gold Rhino has committed to provide funding to assist in the relocation of ten Southern White Rhinoceros as part of an <strong>Insurance Population</strong> from Thaba Manzi Wildlife Sanctuary (South Africa) to open plain facilities in Australia and New Zealand.</p>
          <p class="text small-text">This is the first phase of plans to relocate a further twenty White Rhinos from South Africa, and further propagate the species in a safe haven outside of Africa.</p>
          <p class="text small-text">Many of these rhinos will make Monarto Safari Park in South Australia, one of the world’s largest open range safari parks outside of Africa, their home. We have also contributed to the funding to construct a quarantine rhino management facility at Orana Wildlife Park (Christchurch, New Zealand), where the White Rhinos are required to be quarantined for a period of time.</p>
        </div>

        <div class="cell small-10 small-offset-1 large-4 large-offset-0">
          <p class="text small-text">In addition, Gold Rhino is contributing directly to the Zoos South Australia’s Black Rhino project to expand the Black Rhino facility at Monarto Safari Park with the longer term objective to establish a breeding population of Black Rhinos (which are even more endangered than White Rhinos). This initiative will help facilitate the future possibility of relocating female Southern Black Rhinoceroses to Monarto Safari Park.</p>
          <p class="text small-text">At the same time as assisting TARP and Zoos SA, Gold Rhino will work with global media outlets to drive education in an effort to reduce Asian demand for rhinoceros horn.</p>

          <div class="grid-x grid-margin-x logos">
            <div class="cell small-8 small-offset-2 large-6 large-offset-0">
              <a href="https://www.theaustralianrhinoproject.org/" target="_blank">
                <img src="@/assets/images/tarp.svg" />
              </a>
            </div>

            <div class="cell small-8 small-offset-2 large-6 large-offset-0">
              <a href="https://www.monartosafari.com.au/" target="_blank">
                <img src="@/assets/images/monarto-safari-park.png" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <ClipPathBox
        counter="07"
        image="support-the-rhino-banner.jpg"
        text="Support the rhino"
        to="/support-the-rhino"
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
    name: 'OurVision',
    
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
  .intro {
    padding-top: 28.1%;
  }

  .story-1 {
    padding: 9.8% 0 19.6%;
  }

  .story-2 {
    padding-top: 20.1%;
  }

  .logos {
    padding-top: 31%;
  }
</style>
