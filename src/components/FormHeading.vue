<template>
  <div
    class="grid-x"
    ref="formHeading"
  >
    <div class="form-heading cell small-10 small-offset-1 large-7 large-offset-2">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FormHeading',
    
    props: {
      scrollCounter: Number,
      scrollMax: Number
    },

    mounted() {
      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          triggerElement: this.$refs.formHeading,
          triggerHook: 0,
          duration: parseInt(getComputedStyle(this.$refs.formHeading).height)
        })
          .on('enter', () => {
            this.$emit('update:scrollPosition', this.scrollCounter)
          })
      )
    }
  }
</script>

<style lang="scss" scoped>
  .form-heading {
    color: #747a7f;
    font: 10px Termina;
    letter-spacing: 2px;
    padding: 22.5% 0 12.5%;

    @include breakpoint(large) {
      padding: 8.5% 0 2.8%;
    }
  }
</style>
