<template>
  <div :class="{ 'clip-area': !open, 'menu-open': open }">
    <div class="nav-bar grid-x">
      <div class="cell large-6">
        <img
          v-if="color == 'white'"
          class="logo"
          :class="{ backgroundClass }"
          src="@/assets/images/gold-rhino-white.svg"
        />

        <img
          v-else
          class="logo"
          :class="{ backgroundClass }"
          src="@/assets/images/gold-rhino.svg"
        />
      </div>

      <div class="cell large-6">
        <div
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
        v-if="!open"
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
      backgroundClass: String,
      color: String,
      open: Boolean
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
    z-index: 2;

    .logo {
      margin: 40px 0 0 32px;
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
    height: 64px;
    position: absolute;
    right: 22px;
    top: 28px;
    width: 64px;
    z-index: 1;
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
      transform: translateY(5.5px) translateY(-50%) rotate(-45deg);
    }

    .menu-line-2 {
      transform: translateY(-5.5px) translateY(50%) rotate(45deg);
    }
  }
</style>