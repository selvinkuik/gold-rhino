<template>
  <svg
    :height="radius * 2"
    :width="radius * 2"
  >
    <circle
      ref="circle"
      stroke="#4a525b"
      fill="transparent"
      :stroke-dasharray="circumference + ' ' + circumference"
      :style="{ strokeDashoffset }"
      :stroke-width="stroke"
      :r="normalizedRadius"
      :cx="radius"
      :cy="radius"
    />
  </svg>
</template>

<script>
  export default {
    name: 'ProgressRing',

    props: {
      radius: Number,
      progress: Number,
      stroke: Number
    },
    
    computed: {
      normalizedRadius() {
        return this.radius - this.stroke * 2
      },

      circumference() {
        return this.normalizedRadius * 2 * Math.PI
      },

      strokeDashoffset() {
        return this.circumference - this.progress * this.circumference
      }
    },

    watch: {
      progress: function() {
        // Force a re-draw
        this.$refs.circle.style.transformOrigin = '0'
        this.$refs.circle.getBoundingClientRect()
        this.$refs.circle.style.transformOrigin = '50% 50%'
      }
    }
  }
</script>

<style lang="scss" scoped>
  circle {
    transition: stroke-dashoffset 0.35s;
    transform: rotate(-90deg);
    transform-origin: 50%;
  }
</style>
