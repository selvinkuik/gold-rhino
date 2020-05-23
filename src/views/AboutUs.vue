<template>
  <div class="grid-container full">
    <VideoFullWidth src="/placeholder.mp4" />

    <div class="foreground">
      <NavBar />

      <div style="height: 500px"></div>
      <ClipPathBox src="placeholder.jpg" text="Home" to="/" />
      <div style="height: 1000px"></div>
    </div>
  </div>
</template>

<script>
  import ClipPathBox from '@/components/ClipPathBox.vue'
  import NavBar from '@/components/NavBar.vue'
  import VideoFullWidth from '@/components/VideoFullWidth.vue'

  export default {
    name: 'Home',
    
    components: {
      ClipPathBox,
      NavBar,
      VideoFullWidth
    },
  }
</script>
