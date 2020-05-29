<template>
  <div class="clip-area">
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
          :class="{ white: color == 'white', open: open }"
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

  .menu-icon {
    bottom: 0;
    height: 15px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 15px;
  }

  .menu-line {
    background-color: $gold;
    height: 3px;
    position: absolute;
    transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
  }

  .menu-line-1 {
    top: 0;
  }

  .menu-line-2 {
    bottom: 0;
  }

  .white {
    .menu-circle {
      border-color: $light-neutral;
    }

    .menu-line {
      background-color: $light-neutral;
    }
  }

  .open {
    .menu-line-1 {
      transform: translateY(7.5px) translateY(-50%) rotate(-45deg);
    }

    .menu-line-2 {
      transform: translateY(-7.5px) translateY(50%) rotate(45deg);
    }
  }
</style>