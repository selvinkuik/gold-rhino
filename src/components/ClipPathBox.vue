<template>
  <div class="clip-path-box grid-x mt-large">
    <router-link
      ref="box"
      class="box cell large-8 large-offset-2"
      :to="to"
    >
      <div class="overlay">
        <div class="counter">{{ counter }}</div>
        <h4>{{ text }}</h4>

        <img
          class="arrow"
          src="@/assets/images/arrow.svg"
        />
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
              cx="-100%" 
              cy="-100%"
              :r="mouseOver ? '24%' : '10%'" 
            />
          </clipPath>
        </defs>
        <image
          v-if="image"
          clip-path="url(#mask)"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          :xlink:href="require('@/assets/images/' + image)"
          width="100%"
          height="100%"
        />
        <rect
          v-else
          clip-path="url(#mask)"
          width="100%"
          height="100%"
          fill="#1C2936"
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
       mouseOver: false,
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
        this.$refs.clipPath.setAttribute('cx', svgCoords.x)
        this.$refs.clipPath.setAttribute('cy', svgCoords.y)
      }
    },

    mounted() {
      this.svgPoint = this.$refs.overlay.createSVGPoint()

      this.onMouseMove = (e) => {
        const rect = this.$refs.overlay.getBoundingClientRect()
        this.mouseOver = (e.pageX > rect.left && e.pageX < rect.right) && (e.pageY > (rect.top + window.scrollY) && e.pageY < (rect.bottom + window.scrollY))
        this.update(this.cursorPoint(e, this.$refs.overlay))
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
    svg {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }

    circle {
      transition: cx 0.4s cubic-bezier(0.22, 1, 0.36, 1), cy 0.4s cubic-bezier(0.22, 1, 0.36, 1), r 0.4s cubic-bezier(0.22, 1, 0.36, 1);

      @include breakpoint(small only) {
        r: 0;
      }
    }

    .box {
      padding-top: 92%;
      position: relative;

      @include breakpoint(large) {
        padding-top: 37.04%;
      }
    }

    .overlay {
      height: 100%;
      padding: 13% 10.8%;
      position: absolute;
      top: 0;
      width: 100%;
      z-index: 1;

      @include breakpoint(large) {
        padding: 5.2% 5.8%;
      }
    }

    .counter {
      color: $light-neutral;
      font: 10px Termina;
      letter-spacing: 2px;
    }

    h4 {
      color: $light-neutral;
      font-size: 40px;
      line-height: 1.14em;
      margin-top: 22px;

      @include breakpoint(large) {
        font-size: 56px;
        margin-top: 10px;
      }
    }

    .arrow {
      bottom: 15.4%;
      position: absolute;
      transition: transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
      width: 86px;

      @include breakpoint(large) {
        right: 6.8%;
        width: auto;
      }
    }

    a:hover {
      .arrow {
        transform: translateX(10px);
      }
    }
  }
</style>
