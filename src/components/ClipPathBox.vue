<template>
  <div class="clip-path-box grid-x">
    <router-link
      ref="box"
      class="box large-8 large-offset-2"
      :class="{ inactive: !mouseOver }"
      :to="to"
    >
      <div class="overlay">
        <div class="counter">{{ counter }}</div>
        <h4>{{ text }}</h4>

        <img class="arrow" src="@/assets/images/arrow.svg" />
      </div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink= "http://www.w3.org/1999/xlink"
        ref="overlay"
      >
        <rect
          width="100%"
          height="100%"
          fill="#A6AAAE"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink= "http://www.w3.org/1999/xlink"
      >
        <defs>
          <clipPath id="mask">
            <circle 
              ref="clipPath" 
              cx="66%" 
              cy="50%"
              r="24%" 
            />
          </clipPath>
        </defs>
        <image
          clip-path="url(#mask)"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :xlink:href="require('@/assets/images/' + image)"
          width="100%"
          height="100%"
        />
        <circle
          ref="circle"
          cx="66%"
          cy="50%"
          r="24%"
          style="fill: transparent;"
        />
      </svg>
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'ClipPathBox',
    
    props: {
      counter: String,
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
          x: '66%',
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
    margin-top: 21%;

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

  .box {
    cursor: none;
    padding-top: 41.2%;
    position: relative;
  }

  .overlay {
    height: 100%;
    padding: 5.2% 5.8%;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  .counter {
    color: $light-neutral;
    font: 10px Termina;
    letter-spacing: 2px;
  }

  h4 {
    color: $light-neutral;
    font-size: 56px;
    line-height: 1.14em;
    margin-top: 10px;
  }

  .arrow {
    bottom: 10.4%;
    position: absolute;
    right: 5.8%;
  }
</style>
