<template>
  <div class="clip-path-box grid-x">
    <router-link ref="box" class="box large-6 large-offset-3" :class="{ inactive: !mouseOver }" :to="to">
      <p>{{ text }}</p>

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink" ref="overlay">
        <rect width="100%" height="100%" fill="#EEEEEE" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink= "http://www.w3.org/1999/xlink">
        <defs>
          <clipPath id="mask">
            <circle ref="clipPath" cx="50%" cy="50%" r="8%" />
          </clipPath>
        </defs>
        <image clip-path="url(#mask)" xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="require('@/assets/' + image)" width="100%" height="100%" />
        <circle ref="circle" cx="50%" cy="50%" r="8%" style="fill: transparent;" />
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ClipPathBox',
    
    props: {
      image: String,
      text: String,
      to: String
    },

    data() {
      return {
        svgPoint: null,
        mouseOver: false
      }
    },

    methods: {
      cursorPoint(e, svg) {
        this.svgPoint.x = e.clientX
        this.svgPoint.y = e.clientY
        return this.svgPoint.matrixTransform(svg.getScreenCTM().inverse())
      },

      update(svgCoords) {
        this.$refs.clipPath.setAttribute('cx', svgCoords.x)
        this.$refs.clipPath.setAttribute('cy', svgCoords.y)
        this.$refs.circle.setAttribute('cx', svgCoords.x)
        this.$refs.circle.setAttribute('cy', svgCoords.y)
      },

      reset() {
        this.update({
          x: '50%',
          y: '50%'
        })
      }
    },

    mounted() {
      this.svgPoint = this.$refs.overlay.createSVGPoint()

      this.onMouseMove = (e) => {
        const rect = this.$refs.overlay.getBoundingClientRect()

        if( (e.pageX > rect.left && e.pageX < rect.right) && (e.pageY > (rect.top + window.scrollY) && e.pageY < (rect.bottom + window.scrollY)) ) {
          this.mouseOver = true
          this.update(this.cursorPoint(e, this.$refs.overlay))
        } else {
          this.mouseOver = false
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

    .inactive {
      circle {
        transition: cx 0.2s cubic-bezier(0.19, 1, 0.22, 1), cy 0.2s cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
</style>
