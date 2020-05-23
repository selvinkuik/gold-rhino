<template>
  <div class="clip-path-box grid-x">
    <router-link class="box large-6 large-offset-3" to="/">
      <p>{{ text }}</p>

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" ref="svgElement">
        <rect width="100%" height="100%" fill="#EEEEEE" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
        <defs>
          <clipPath id="mask">
            <circle ref="maskedElement" cx="50%" cy="50%" r="8%" />
          </clipPath>
        </defs>
        <image clip-path="url(#mask)" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="require('@/assets/' + src)" width="100%" height="100%" />
        <circle ref="circleFeedback" cx="50%" cy="50%" r="8%" style="stroke: #fff; fill: transparent; stroke-width: 5;" />
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ClipPathBox',
    
    props: {
      src: String,
      text: String,
      to: String
    },

    data() {
      return {
        svgPoint: null
      }
    },

    methods: {
      cursorPoint(e, svg) {
        this.svgPoint.x = e.clientX
        this.svgPoint.y = e.clientY
        return this.svgPoint.matrixTransform(svg.getScreenCTM().inverse())
      },

      update(svgCoords) {
        this.$refs.maskedElement.setAttribute('cx', svgCoords.x)
        this.$refs.maskedElement.setAttribute('cy', svgCoords.y)
        this.$refs.circleFeedback.setAttribute('cx', svgCoords.x)
        this.$refs.circleFeedback.setAttribute('cy', svgCoords.y)
      },

      reset() {
        this.update({
          x: '50%',
          y: '50%'
        })
      }
    },

    mounted() {
      this.svgPoint = this.$refs.svgElement.createSVGPoint()

      this.onMouseMove = (e) => {
        const rect = this.$refs.svgElement.getBoundingClientRect()
        if( (e.pageX > rect.left && e.pageX < rect.right) && (e.pageY > (rect.top + window.scrollY) && e.pageY < (rect.bottom + window.scrollY)) ) {
          this.update(this.cursorPoint(e, this.$refs.svgElement))
        } else {
          this.reset()
        }
      }
      window.addEventListener('mousemove', this.onMouseMove)
    },

    beforeDestroy() { 
      window.removeEventListener('mousemove', this.onMouseMove) 
    }
  }
</script>

<style lang="scss" scoped>
  .clip-path-box {
    .box {
      cursor: none;
      padding-top: 31%;
      position: relative;
    }

    p {
      position: absolute;
      top: 0;
      z-index: 1;
    }

    svg {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
</style>
