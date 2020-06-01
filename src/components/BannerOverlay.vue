<template>
  <div class="overlay grid-x">
    <NavBar color="white" />

    <div class="cell small-10 small-offset-1 large-8 large-offset-2">
      <img
        v-if="src"
        class="title"
        :src="require('@/assets/images/' + src)"
      />

      <p class="intro">
        <slot></slot>
      </p>
    </div>
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'BannerOverlay',
    
    props: {
      src: String
    },

    components: {
      NavBar
    }
  }
</script>

<style lang="scss" scoped>
  .overlay {
    // background-color: rgba(0, 0, 0, .35);
    padding-bottom: 19.6%;
    position: relative;
    z-index: 1;

    .title {
      margin: 40% auto 0;
    }

    .intro {
      color: $light-neutral;
      font-size: 32px;
      line-height: 1.125em;
      margin-top: 18%;

      @include breakpoint(large) {
        font-size: 64px;
      }
    }
  }
</style>
