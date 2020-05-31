<template>
  <div class="app">
      <div>
        <div
          class="menu-circle-transform white"
          :class="{ open: menuOpen }"
          @click="toggleMenu"
        >
          <span class="menu-icon">
            <span class="menu-line menu-line-1"></span>
            <span class="menu-line menu-line-2"></span>
          </span>
        </div>

        <div
          class="menu-overlay"
          :class="{ open: menuOpen }"
          ref="menu"
        >
          <NavBar
            color="white"
            :open="true"
            @toggleMenu="toggleMenu"
          />

          <div class="label">MENU</div>

          <div class="grid-x">
            <div class="menu-nav cell large-6 large-offset-2">
              <template v-for="(item, index) in $router.options.routes">
                <div
                  class="nav-link"
                  :class="`link-delay-${index}`"
                  v-if="item.showInNav"
                  :key="item.path"
                >
                  <router-link
                    :to="item.path"
                    @click.native="toggleMenu"
                  >
                    {{ item.name }}
                  </router-link>
                </div>
              </template>
            </div>

            <div class="contact-info cell large-4">
              <div class="email">
                <p>Email:</p>
                <a
                  class="text-link"
                  href="mailto:tim.smith@goldrhino.com.au"
                >
                  tim.smith@goldrhino.com.au
                </a>
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
        </div>

        <div ref="app">
          <transition
            name="fade"
            mode="out-in"
          >
            <router-view />
          </transition>
        </div>
        
        <footer>
          <NavBar color="white" />

          <div
            class="footer-content grid-x"
            ref="footer"
          >
            <div class="footer-nav cell large-5 large-offset-2">
              <template v-for="item in $router.options.routes">
                <div
                  v-if="item.showInNav"
                  :key="item.path"
                >
                  <router-link
                    class="text-link"
                    :to="item.path"
                  >
                    {{ item.name }}
                  </router-link>
                </div>
              </template>
            </div>

            <div class="contact-info cell large-5">
              <div class="email">
                <p>Email:</p>
                <a
                  class="text-link"
                  href="mailto:tim.smith@goldrhino.com.au"
                >
                  tim.smith@goldrhino.com.au
                </a>
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

            <img
              class="logo"
              src="@/assets/images/gold-rhino.svg"
            />
          </div>
        </footer>
      </div>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap'
  import ScrollLock from '@/utils/ScrollLock'
  import NavBar from '@/components/NavBar.vue'

  export default {
    data() {
      return {
        menuOpen: false
      }
    },

    components: {
      NavBar
    },

    methods: {
      toggleMenu() {
        this.menuOpen = !this.menuOpen

        if (this.menuOpen) {
          ScrollLock.disable()
        } else {
          ScrollLock.enable()
        }
      }
    },

    mounted() {
      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          triggerElement: this.$refs.footer,
          triggerHook: 0
        })
          .setTween(TweenMax.fromTo(this.$refs.footer, 1, { backgroundPosition: window.innerWidth + 'px 0px' }, { backgroundPosition: '0px 0px' }))
      )
    }
  }
</script>

<style lang="scss" scoped>
  // .fade-enter-active,
  // .fade-leave-active {
  //   transition: opacity 0.2s;
  // }

  // .fade-enter,
  // .fade-leave-active {
  //   opacity: 0;
  // }

  .menu-circle-transform {
    border-radius: 50%;
    cursor: pointer;
    height: 64px;
    position: fixed;
    right: 22px;
    top: 28px;
    transform: scale(1);
    transition: background-color 0.4s, border 0.4s, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 64px;
    z-index: 3;

    .menu-icon {
      opacity: 0;
      transition: opacity 0.4s;
    }

    .menu-line {
      transition: background-color 0s 0.4s;
    }

    &:hover {
      background-color: $gold;
      border: 2px solid $gold;

      .menu-icon {
        opacity: 1;
      }
    }

    &.open {
      background-color: $gold;
      transform: scale(70);
      transition: background-color 0.4s, border 0.4s, transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);

      .menu-icon {
        opacity: 0;
      }

      .menu-line {
        background-color: $gold;
        transition: background-color 0s;
      }
    }
  }

  .menu-overlay {
    color: $light-neutral;
    height: 100%;
    left: 0;
    opacity: 0;
    padding-top: 11%;
    position: fixed;
    top: 0;
    transition: opacity .4s .2s;
    visibility: hidden;
    width: 100%;
    z-index: 4;

    &.open {
      opacity: 1;
      visibility: visible;

      .nav-link {
        opacity: 1;
        transform: translateY(0px);
      }
    }

    .nav-link {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity .4s .4s, transform .4s .4s cubic-bezier(0.19, 1, 0.22, 1);

      &.link-delay-1 {
        transition-delay: .6s;
      }

      &.link-delay-2 {
        transition-delay: .8s;
      }
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

      .nav-link a {
        transition: color .4s;
      }

      .nav-link a:hover,
      .router-link-exact-active {
        color: $dark-neutral;
      }
    }

    .label {
      bottom: 7.8%;
      color: $light-neutral;
      font: 10px Termina;
      left: 5%;
      letter-spacing: 2px;
      position: absolute;
      transform: rotate(270deg);
      transform-origin: bottom left;
    }
  }

  footer {
    position: relative;

    .footer-content {
      background: #18202A url('~@/assets/images/footer-bg.svg') no-repeat 0 0;
      color: $light-neutral;
      padding: 8.2% 0 17.3%;
      position: relative;
      width: 100%;

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
            font-size: 32px;
          }
        }
      }

      .footer-nav {
        line-height: 2em;
        padding-bottom: 26.8%;
      }

      .logo {
        bottom: 30px;
        position: absolute;
        right: 18px;
        width: 66px;
      }
    }
  }
</style>