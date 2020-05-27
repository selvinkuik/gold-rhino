<template>
  <div
    class="menu-state"
    :class="{ open: menuOpen }"
  >
    <div class="menu">
      <span class="menu-circle"></span>

      <div
        class="menu-link"
        @click="toggleMenu"
      >
        <span class="menu-icon">
          <span class="menu-line menu-line-1"></span>
          <span class="menu-line menu-line-2"></span>
        </span>
      </div>
    </div>

    <!-- <div
      class="menu-overlay"
      ref="menu"
    >
      <img class="logo" src="@/assets/images/gold-rhino-white.svg" />
      <div class="label">MENU</div>

      <div class="grid-x">
        <div class="menu-nav cell large-6 large-offset-2">
          <template v-for="item in $router.options.routes">
            <div
              v-if="item.image"
              :key="item.path"
            >
              <router-link :to="item.path">
                {{ item.name }}
              </router-link>
            </div>
          </template>
        </div>

        <div class="contact-info cell large-4">
          <div class="email">
            <p>Email:</p>
            <a href="mailto:tim.smith@goldrhino.com.au">tim.smith@goldrhino.com.au</a>
          </div>

          <div class="address">
            <p>
              50 Miller Street<br />
              North Sydney NSW 2060<br />
              Australia
            </p>
            <a>Map</a>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
  // import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

  export default {
    name: 'Menu',

    data() {
      return {
        // menuOpen: false
      }
    },

    methods: {
      toggleMenu() {
        // this.menuOpen = !this.menuOpen

        // if (this.menuOpen) {
        //   disableBodyScroll(this.$refs.menu, {
        //     reserveScrollBarGap: true
        //   })
        // } else {
        //   enableBodyScroll(this.$refs.menu)
        // }
      }
    },

    beforeDestroy() { 
      // clearAllBodyScrollLocks()
    }
  }
</script>

<style lang="scss" scoped>
  .logo {
    left: 30px;
    position: absolute;
    top: 32px;
  }

  .label {
    bottom: 14%;
    color: $light-neutral;
    font: 10px Termina;
    left: .6%;
    letter-spacing: 2px;
    position: absolute;
    transform: rotate(270deg);
  }

  .menu {
    height: 64px;
    position: absolute;
    right: 22px;
    top: 28px;
    width: 64px;
    z-index: 1;
  }

  .menu-link {
    border: 2px solid $light-neutral;
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

  .menu-circle {
    border-radius: 50%;
    height: 100%;
    position: absolute;
    transform: scale(1);
    transition: background-color 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
  }

  .menu-line {
    background-color: $light-neutral;
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

  .menu-overlay {
    color: $light-neutral;
    height: 100%;
    left: 0;
    opacity: 0;
    padding-top: 11%;
    position: absolute;
    top: 0;
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    visibility: hidden;
    width: 100%;
    z-index: 1;
  }

  .contact-info {
    border-left: 2px solid $light-neutral;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .email,
    .address {
      margin-left: 20px;

      p {
        line-height: 1.5em;
        opacity: .6;
      }

      a {
        font-size: 24px;
      }
    }
  }

  .menu-nav {
    font-size: 64px;
    line-height: 1.125em;
    padding-bottom: 18.7%;

    .router-link-exact-active {
      color: $dark-neutral;
    }
  }

  .open {
    // .menu {
    //   margin-right: 15px;
    // }

    .menu-circle {
      background-color: $gold;
      transform: scale(70);
    }

    .menu-line-1 {
      transform: translateY(7.5px) translateY(-50%) rotate(-45deg);
    }

    .menu-line-2 {
      transform: translateY(-7.5px) translateY(50%) rotate(45deg);
    }

    .menu-overlay {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
