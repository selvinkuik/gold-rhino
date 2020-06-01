<template>
  <div class="grid-container full">
    <Banner
      src="/videos/home.mp4"
      :video="true"
    />

    <BannerOverlay src="forward-together.svg" />

    <div class="home foreground white">
      <NavBar tintClass="light" />

      <TextWithHorizontalTicker ticker="Forward Together">
        Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.
      </TextWithHorizontalTicker>
      
      <div class="grid-x">
        <template v-for="(item, index) in $router.options.routes">
          <router-link
            class="link cell small-10 small-offset-1 large-8 large-offset-2"
            v-if="item.image"
            :key="item.path"
            :to="item.path"
          >
            <div class="index">0{{ index }}</div>
            <div class="name">{{ item.name }}</div>
            <div class="description">{{ item.description }}</div>
            <!-- <img :src="require('@/assets/images/' + item.image)" /> -->
          </router-link>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
  }
</script>

<style lang="scss" scoped>
  .home {
    padding-bottom: 30%;
  }

  .link {
    border-bottom: 2px solid $dark-neutral;
    padding: 2% 0 4%;

    &:first-child {
      border-top: 2px solid $dark-neutral;
    }

    .index {
      font: 10px Termina;
      letter-spacing: 2px;
    }

    .name {
      font-size: 40px;
      margin-top: 3%;

      @include breakpoint(large) {
        font-size: 104px;
      }
    }

    .description {
      margin-top: 1%;
    }
  }
</style>
