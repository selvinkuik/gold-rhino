<template>
  <div :class="{ 'clip-area': !open, 'menu-open': open }">
    <div class="nav-bar">
      <div
        class="tint"
        :class="tintClass"
      >
        <router-link
          class="logo"
          to="/"
          @click.native="$emit('toggleMenu')"
        >
          <img
            v-if="color == 'white'"
            src="@/assets/images/gold-rhino-white.svg"
          />

          <img
            v-else
            src="@/assets/images/gold-rhino.svg"
          />
        </router-link>

        <div
          v-if="!holdingMode"
          class="menu"
          :class="{ white: color == 'white' }"
          @click="$emit('toggleMenu')"
        >
          <div class="menu-circle">
            <span class="menu-icon">
              <span class="menu-line menu-line-1"></span>
              <span class="menu-line menu-line-2"></span>
            </span>
          </div>
        </div>
      </div>

      <div
        class="label"
        :class="{ white: color == 'white' }"
        v-if="showRouteLabel"
      >
        {{ $router.currentRoute.name }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',

    props: {
      open: Boolean,
      color: String,
      showRouteLabel: Boolean,
      tintClass: String
    },

    data() {
      return {
        holdingMode: process.env.VUE_APP_HOLDING_MODE == 'true'
      }
    }
  }
</script>

<style lang="scss" scoped>
  .clip-area {
    clip: rect(auto, auto, auto, auto);
    height: 100%;
    pointer-events: none;
    position: absolute;
    width: 100%;
  }
  
  .nav-bar {
    height: 100vh;
    pointer-events: none;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 3;

    .logo {
      display: inline-block;
      margin: 18px 0 0 25px;
      pointer-events: auto;

      @include breakpoint(large) {
        margin: 40px 0 0 32px;
      }

      @include breakpoint(small only) {
        img {
          width: 70px;
        }
      }
    }
  }

  @include breakpoint(small only) {
    .tint {
      padding-bottom: 12px;

      &.dark {
        background-color: rgba(11, 15, 20, .8);
      }

      &.light {
        background-color: rgba(248, 247, 241, .8);
      }
    }
  }

  .label {
    bottom: 7.8%;
    color: $gold;
    font: 10px Termina;
    left: 5%;
    letter-spacing: 2px;
    position: absolute;
    text-transform: uppercase;
    transform: rotate(270deg);
    transform-origin: bottom left;

    &.white {
      color: $light-neutral;
    }
  }

  .menu {
    cursor: pointer;
    height: 48px;
    position: absolute;
    right: 16px;
    top: 16px;
    width: 48px;
    z-index: 1;

    @include breakpoint(large) {
      height: 64px;
      right: 22px;
      top: 28px;
      width: 64px;
    }
  }

  .menu-circle {
    border: 2px solid $gold;
    border-radius: 50%;
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .menu-open {
    .menu {
      pointer-events: auto;
    }

    .menu-line-1 {
      transform: translateY(4px) translateY(-50%) rotate(-45deg);

      @include breakpoint(large) {
        transform: translateY(5.5px) translateY(-50%) rotate(-45deg);
      }
    }

    .menu-line-2 {
      transform: translateY(-4px) translateY(50%) rotate(45deg);

      @include breakpoint(large) {
        transform: translateY(-5.5px) translateY(50%) rotate(45deg);
      }
    }
  }
</style>