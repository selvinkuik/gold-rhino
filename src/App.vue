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
            <div class="menu-nav cell small-10 small-offset-1 large-6 large-offset-2">
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

            <div class="contact-info cell small-10 small-offset-1 large-4 large-offset-0">
              <div class="email">
                <p>Email:</p>
                <a
                  class="hover-link"
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
                <a
                  class="hover-link"
                  href="https://goo.gl/maps/Fma5qx6YFUAck2Ya9"
                  target="_blank"
                >
                  Map
                </a>
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
            <div class="footer-nav cell small-10 small-offset-1 large-5 large-offset-2">
              <template v-for="item in $router.options.routes">
                <div
                  v-if="item.showInNav"
                  :key="item.path"
                >
                  <router-link
                    class="hover-link"
                    :to="item.path"
                  >
                    {{ item.shortName || item.name }}
                  </router-link>
                </div>
              </template>
            </div>

            <div class="contact-info cell small-10 small-offset-1 large-5 large-offset-0">
              <div class="email">
                <p>Email:</p>
                <a
                  class="hover-link"
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
                <a
                  class="hover-link"
                  href="https://goo.gl/maps/Fma5qx6YFUAck2Ya9"
                  target="_blank"
                >
                  Map
                </a>
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
      const offset = parseInt(getComputedStyle(this.$refs.footer).height) - window.innerHeight // The gap above the footer at max. scroll
      const yPosition = window.innerWidth < 1024 ? -320 : 0 // The width required to reveal the swoosh on small screens

      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          offset: offset < 0 ? offset : 0,
          triggerElement: this.$refs.footer,
          triggerHook: 0
        })
          .setTween(TweenMax.fromTo(this.$refs.footer, 1, { backgroundPosition: window.innerWidth + 'px 0px' }, { backgroundPosition: yPosition + 'px 0px' }))
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
    height: 48px;
    position: fixed;
    right: 16px;
    top: 16px;
    transform: scale(1);
    transition: background-color 0.4s, border 0.4s, transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 48px;
    z-index: 4;

    @include breakpoint(large) {
      height: 64px;
      right: 22px;
      top: 28px;
      width: 64px;
    }

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
      transition: background-color 0.4s, border 0.4s, transform 6s cubic-bezier(0.19, 1, 0.22, 1);

      @include breakpoint(large) {
        transition: background-color 0.4s, border 0.4s, transform 1.6s cubic-bezier(0.19, 1, 0.22, 1);
      }

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
    z-index: 5;

    &.open {
      opacity: 1;
      visibility: visible;

      .nav-link {
        opacity: 1;
        transform: translateY(0px);

        @for $i from 1 through 7 {
          &.link-delay-#{$i} {
            transition-delay: #{.4 + ($i * .2)}s;
          }
        }
      }
    }

    .nav-link {
      opacity: 0;
      transform: translateY(-20px);
      transition: opacity .4s .4s, transform .4s .4s cubic-bezier(0.19, 1, 0.22, 1);
    }

    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include breakpoint(large) {
        border-left: 2px solid $light-neutral;
      }

      .email,
      .address {
        @include breakpoint(large) {
          margin-left: 20px;
        }

        p {
          line-height: 1.5em;
          opacity: .6;
        }

        a {
          font-size: 20px;

          @include breakpoint(large) {
            font-size: 24px;
          }
        }
      }
    }

    .menu-nav {
      font-size: 40px;
      line-height: 1.125em;

      @include breakpoint(large) {
        font-size: 64px;
      }

      @include breakpoint(small only) {
        margin-top: 40px;
      }

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
      background-size: cover;
      color: $light-neutral;
      padding: 8.2% 0 17.3%;
      position: relative;
      width: 100%;

      .contact-info {
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        @include breakpoint(large) {
          border-left: 2px solid $light-neutral;
        }

        .email,
        .address {
          @include breakpoint(large) {
            margin-left: 20px;
          }
          
          p {
            line-height: 1.5em;
            opacity: .6;
          }

          a {
            font-size: 20px;

            @include breakpoint(large) {
              font-size: 24px;
            }
          }
        }
      }

      .footer-nav {
        line-height: 2em;
        padding-bottom: 17.7%;

        @include breakpoint(small only) {
          font-size: 14px;
        }
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