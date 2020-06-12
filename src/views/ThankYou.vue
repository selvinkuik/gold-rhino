<template>
  <div
    ref="page"
    class="grid-container full"
  >
    <div class="pb-large foreground dark-neutral">
      <NavBar tintClass="dark" />

      <div class="grid-x intro">
        <div class="cell small-10 small-offset-1 large-6 large-offset-2">
          <p class="text xxlarge-text light-neutral">Thank you.</p>
        </div>
      </div>

      <div class="grid-x small-print">
        <div class="cell small-10 small-offset-1 large-7 large-offset-2">
          <p class="text xsmall-text light-neutral">We will process your information and be in touch.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import imagesLoaded from 'imagesloaded'
  import NavBar from '@/components/NavBar.vue'

  export default {
    name: 'ThankYou',

    components: {
      NavBar
    },

    mounted() {
      imagesLoaded(this.$refs.page, () => {
        this.$emit('update:loading', false)
      })
    }
  }
</script>

<style lang="scss" scoped>
  .intro {
    padding-top: 40%;

    @include breakpoint(large) {
      padding-top: 13.5%;
    }
  }

  .small-print {
    padding-top: 6.3%;
  }
</style>