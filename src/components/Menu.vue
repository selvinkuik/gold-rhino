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

    <div
      class="menu-overlay"
      ref="menu"
    >
      <template v-for="item in $router.options.routes">
        <router-link
          v-if="item.image"
          :key="item.path"
          :to="item.path"
        >
          {{ item.name }}
        </router-link>
      </template>
    </div>
  </div>
</template>

<script>
  import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'

  export default {
    name: 'Menu',

    data() {
      return {
        menuOpen: false
      }
    },

    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen

        if (this.menuOpen) {
          disableBodyScroll(this.$refs.menu, {
            reserveScrollBarGap: true
          })
        } else {
          enableBodyScroll(this.$refs.menu)
        }
      }
    },

    beforeDestroy() { 
      clearAllBodyScrollLocks()
    }
  }
</script>

<style lang="scss" scoped>
  .menu {
    height: 46px;
    position: absolute;
    right: 20px;
    top: 20px;
    width: 46px;
  }

  .menu-link {
    height: 100%;
    position: absolute;
    width: 100%;
  }

  .menu-icon {
    bottom: 0;
    height: 14px;
    left: 0;
    margin: auto;
    position: absolute;
    right: 0;
    top: 0;
    width: 20px;
  }

  .menu-circle {
    background-color: gold;
    border-radius: 50%;
    height: 100%;
    position: absolute;
    transform: scale(1);
    transition: transform 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
  }

  .menu-line {
    background-color: #333;
    border-radius: 2px;
    height: 2px;
    left: 0;
    position: absolute;
    transition: transform 0.5s cubic-bezier(0.19, 1, 0.22, 1);
    width: 100%;
  }

  .menu-line-1 {
    top: 0;
  }

  .menu-line-2 {
    bottom: 0;
  }

  .menu-overlay {
    color: #333;
    height: 100%;
    left: 0;
    opacity: 0;
    position: absolute;
    text-align: center;
    top: 0;
    transition: opacity 0.2s cubic-bezier(0.19, 1, 0.22, 1);
    visibility: hidden;
    width: 100%;
  }

  .open {
    .menu-circle {
      transform: scale(70);
    }

    .menu-line-1 {
      transform: translateY(7px) translateY(-50%) rotate(-45deg);
    }

    .menu-line-2 {
      transform: translateY(-7px) translateY(50%) rotate(45deg);
    }

    .menu-overlay {
      opacity: 1;
      visibility: visible;
    }
  }
</style>
