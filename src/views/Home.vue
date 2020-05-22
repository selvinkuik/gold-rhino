<template>
  <div class="grid-container full">
    <VideoFullWidth src="/placeholder.mp4" />

    <div class="foreground">
      <TextWithHorizontalTicker ticker="Forward Together">Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.</TextWithHorizontalTicker>
      <TextWithHorizontalTicker ticker="Forward Together">Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.</TextWithHorizontalTicker>
      <TextWithHorizontalTicker ticker="Forward Together">Gold Rhino is both a private equity firm, and also a company that is actively involved in the preservation of the South African rhinoceros population. Gold Rhino brings together the solidarity, dependability and resilience of the unique animal it is named after, combined with a track record of innovation, charging ahead of the competition, and moving <strong>Forward Together</strong>, whether rhinoceroses’ preservation remaining at our core.</TextWithHorizontalTicker>
    </div>
  </div>
</template>

<script>
  import VideoFullWidth from '@/components/VideoFullWidth.vue'
  import TextWithHorizontalTicker from '@/components/TextWithHorizontalTicker.vue'

  export default {
    name: 'Home',
    components: {
      VideoFullWidth,
      TextWithHorizontalTicker
    }
  }
</script>
