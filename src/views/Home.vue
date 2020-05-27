<template>
  <div class="grid-container full">
    <VideoFullWidth
      src="/videos/placeholder.mp4"
      :showNav="true"
    />

    <div class="foreground">
      <NavBar color="red" />

      <TextWithHorizontalTicker ticker="Forward Together">Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.</TextWithHorizontalTicker>
      
      <template v-for="item in $router.options.routes">
        <router-link
          v-if="item.image"
          :key="item.path"
          :to="item.path"
        >
          {{ item.name }}
          <img :src="require('@/assets/images/' + item.image)" />
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'
  import VideoFullWidth from '@/components/VideoFullWidth.vue'
  import TextWithHorizontalTicker from '@/components/TextWithHorizontalTicker.vue'

  export default {
    name: 'Home',
    
    components: {
      NavBar,
      TextWithHorizontalTicker,
      VideoFullWidth
    }
  }
</script>
