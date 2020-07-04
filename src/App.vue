<template>
  <div class="app">
    <div :class="`wipe ${wipeStatus}`">
      <div
        class="circle-in"
        ref="circleIn"
      >
        <svg
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <circle
            class="fill"
            fill="#1C2936"
            cx="100"
            cy="100"
            r="0"
          />
        </svg>
      </div>

      <div
        class="circle-out"
        ref="circleOut"
      >
        <svg
          viewBox="0 0 200 200"
          preserveAspectRatio="none"
        >
          <defs>
            <mask id="hole">
              <rect
                width="100%"
                height="100%"
                fill="white"
              />
              <circle
                fill="black"
                cx="100"
                cy="100"
                r="0"
              />
            </mask>
          </defs>
          <rect
            class="fill"
            fill="#1C2936"
            width="100%"
            height="100%"
            mask="url(#hole)"
          />
        </svg>
      </div>
    </div>

    <div :class="['loader', wipeStatus, miniLoader ? 'mini' : '']">
      <img
        v-if="miniLoader"
        class="loader-logo"
        :src="wipeColor == 'dark-neutral' ? require('@/assets/images/gold-rhino-only.svg') : require('@/assets/images/gold-rhino-inverted-only.svg')"
      />

      <img
        v-else
        class="loader-logo"
        :src="wipeColor == 'dark-neutral' ? require('@/assets/images/gold-rhino.svg') : require('@/assets/images/gold-rhino-inverted.svg')"
      />

      <ProgressRing
        :radius="miniLoader ? 60 : 160"
        :progress="progress"
        :stroke="miniLoader ? 2 : 4"
      />
    </div>

    <div
      v-if="!holdingMode"
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
      v-if="!holdingMode"
      class="menu-overlay"
      :class="{ open: menuOpen, visible: menuOpen || menuAnimating }"
      ref="menu"
    >
      <NavBar
        :open="true"
        color="white"
        :showRouteLabel="false"
        @toggleMenu="toggleMenu"
      />

      <div class="label">MENU</div>

      <div
        class="menu-overflow"
        :class="{ overflowing: menuOverflowing }"
        ref="menuOverflow"
      >
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
                  @click.native="toggleMenu(true)"
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
                href="mailto:info@goldrhino.com.au"
              >
                info@goldrhino.com.au
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
    </div>

    <div
      class="content"
      ref="app"
    >
      <transition mode="out-in">
        <router-view :progress.sync="progress" />
      </transition>
    </div>
    
    <footer>
      <NavBar
        color="white"
        :showRouteLabel="false"
      />

      <div class="footer-content">
        <div
          class="footer-bg"
          ref="footer"
        ></div>

        <div class="footer-grid grid-x">
          <div class="footer-nav cell small-10 small-offset-1 large-5 large-offset-2">
            <template v-for="item in $router.options.routes">
              <div
                v-if="item.showInNav && !holdingMode"
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

            <div
              v-if="holdingMode"
              class="pdf"
            >
              <a
                class="white-link"
                href="/presentation"
              >
                Click here to find out more
              </a>
            </div>
          </div>

          <div class="contact-info cell small-10 small-offset-1 large-5 large-offset-0">
            <div class="email">
              <p>Email:</p>
              <a
                class="hover-link"
                href="mailto:info@goldrhino.com.au"
              >
                info@goldrhino.com.au
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

        <div class="footer-grid grid-x">
          <div class="cell small-7 small-offset-1 large-12 large-offset-0">
            <p class="text xxsmall-text">Copyright © {{ new Date().getFullYear() }}.  All rights reserved by Gold Rhino Pty Ltd under licence from White Lion (NZ) Trustees Limited.</p>
          </div>
        </div>

        <img
          class="logo"
          src="@/assets/images/gold-rhino-inverted.svg"
        />
      </div>
    </footer>
  </div>
</template>

<script>
  import { TweenMax } from 'gsap'
  import ScrollLock from '@/utils/ScrollLock'
  import NavBar from '@/components/NavBar.vue'
  import ProgressRing from '@/components/ProgressRing'

  export default {
    data() {
      return {
        holdingMode: process.env.VUE_APP_HOLDING_MODE == 'true',
        progress: 0,
        miniLoader: false,
        menuAnimating: false,
        menuOverflowing: false,
        menuOpen: false,
        wipeAnimatingIn: false,
        wipeColor: 'dark-neutral',
        wipeStatus: 'wiping-in'
      }
    },

    components: {
      NavBar,
      ProgressRing
    },

    methods: {
      toggleMenu(waitForWipe) {
        if (!this.menuAnimating || waitForWipe === true) {
          this.menuAnimating = true

          setTimeout(() => {
            this.menuOpen = !this.menuOpen

            if (this.menuOpen) {
              ScrollLock.disable(800) // Half the length of the menu transition

              this.menuOverflowing = this.$refs.menuOverflow.scrollHeight > this.$refs.menuOverflow.clientHeight
            } else {
              ScrollLock.enable()
            }
          }, waitForWipe === true ? 800 : 0) // Delay on close to allow the wipe animation to run first

          setTimeout(() => {
            this.menuAnimating = false // Prevent double-clicking for the duration of the animation
          }, 1600)
        }
      }
    },

    mounted() {
      const offset = parseInt(getComputedStyle(this.$refs.footer).height) - window.innerHeight - 100 // The gap above the footer at max. scroll (and then a bit)

      this.$scrollmagic.addScene(
        this.$scrollmagic.scene({
          offset: offset < 0 ? offset : 0,
          triggerElement: this.$refs.footer,
          triggerHook: 0
        })
          .setTween(TweenMax.to(this.$refs.footer, 1, { x: 0 }))
      )

      this.$refs.circleIn.addEventListener('transitionend', () => {
        this.wipeAnimatingIn = false

        if (this.progress == 1) {
          this.wipeStatus = 'wiping-out ' + this.wipeColor

          window.scrollTo(0, 0)
        }
      })

      this.$refs.circleOut.addEventListener('transitionend', () => {
        this.wipeStatus = ''

        this.progress = 0
      })
    },

    watch: {
      '$route': function(to, from) {
        if (from.name) { // No name indicates first load
          this.miniLoader = true
          this.wipeAnimatingIn = true
          this.wipeColor = this.menuOpen ? 'light-neutral' : from.meta.color
          this.wipeStatus = 'wiping-in ' + this.wipeColor
        }
      },

      progress: function(val) {
        if (val == 1 && !this.wipeAnimatingIn) {
          this.wipeStatus = 'wiping-out ' + this.wipeColor

          window.scrollTo(0, 0)
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .v-enter-active,
  .v-leave-active {
    transition-duration: 1s;
  }

  .wipe {
    left: -200%;
    pointer-events: none;
    position: fixed;
    top: -100%;
    width: 430%;
    z-index: 9;

    @include breakpoint(large) {
      left: -125%;
      top: -250%;
      width: 250%;
    }

    &.light-neutral {
      .fill {
        fill: $light-neutral;
      }
    }

    &.dark-neutral {
      .fill {
        fill: $dark-neutral;
      }
    }

    .circle-in,
    .circle-out {
      position: absolute;
      top: 0;
      visibility: hidden;
      width: 100%;
    }

    &.wiping-in {
      .circle-in {
        visibility: visible;

        circle {
          r: 70%;
          transition: r 1.2s cubic-bezier(0.22, 1, 0.36, 1);
        }
      }
    }

    &.wiping-out {
      .circle-out {
        visibility: visible;

        circle {
          r: 70%;
          transition: r 1.2s cubic-bezier(0.22, 1, 0.36, 1) .4s;
        }
      }
    }
  }

  .loader {
    left: 50%;
    margin: -10em 0 0 -10em;
    opacity: 0;
    pointer-events: none;
    position: fixed;
    top: 50%;
    transition: opacity .4s;
    z-index: 9;

    &.wiping-in {
      opacity: 1;
      transition-delay: .4s;
    }

    .loader-logo {
      position: absolute;
      margin: 111px 0 0 84px;
      width: 150px;
      z-index: 10;
    }

    &.mini {
      margin: -3.6em 0 0 -3.6em;

      .loader-logo {
        margin: 45px 0 0 29px;
        width: 60px;
      }
    }
  }

  @keyframes loader {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  .menu-circle-transform {
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 50%;
    cursor: pointer;
    height: 48px;
    position: fixed;
    right: 16px;
    top: 16px;
    transform: scale(1);
    transition: background-color 0.4s 0.2s, border-color 0.4s 0.2s, transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
    width: 48px;
    will-change: background-color, border-color, transform;
    z-index: 4;

    @include breakpoint(large) {
      height: 64px;
      right: 22px;
      top: 28px;
      transition: background-color 0.4s 0.2s, border-color 0.4s 0.2s, transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
      width: 64px;
    }

    .menu-icon {
      opacity: 0;
    }

    .menu-line {
      transition: background-color 0s 0.4s;
    }

    &:hover {
      @include breakpoint(large) {
        border: 2px solid $gold;
        background-color: $gold;
      }

      .menu-icon {
        opacity: 1;
      }
    }

    &.open {
      background-color: $gold;
      transform: scale(75);
      transition: background-color 0.4s, border-color 0.4s, transform 1.8s cubic-bezier(0.22, 1, 0.36, 1);

      @include breakpoint(large) {
        transition: background-color 0.4s, border-color 0.4s, transform 1.2s cubic-bezier(0.22, 1, 0.36, 1);
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

  .menu-overlay,
  footer {
    .contact-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      @include breakpoint(large) {
        border-left: 2px solid $light-neutral;
      }

      @include breakpoint(small only) {
        border-top: 2px solid $light-neutral;
        padding-top: 8%;
      }
    }

    .pdf {
      @include breakpoint(large) {
        padding: 23px 0 28.6%;
      }

      a {
        font-size: 20px;

        @include breakpoint(large) {
          font-size: 24px;
        }
      }
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

    .address {
      @include breakpoint(small only) {
        padding-top: 14%;
      }
    }
  }

  .menu-overflow {
    height: 100%;

    &.overflowing {
      overflow: scroll;
      padding-bottom: 20%;
    }
  }

  .menu-overlay {
    color: $light-neutral;
    height: 100%;
    left: 0;
    opacity: 0;
    padding-top: 20%;
    position: fixed;
    top: 0;
    transition: opacity .2s;
    visibility: hidden;
    width: 100%;
    z-index: 5;

    @include breakpoint(large) {
      padding-top: 8%;
    }

    &.visible {
      visibility: visible;
    }

    &.open {
      transition: opacity .2s .2s;
      opacity: 1;

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
      transition: opacity .4s .4s, transform .4s .4s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .menu-nav {
      font-size: 40px;
      line-height: 1em;

      @include breakpoint(large) {
        font-size: 48px;
        line-height: 1.5em;
      }

      @include breakpoint(small only) {
        padding-bottom: 11%;
      }

      .nav-link {
        @include breakpoint(small only) {
          padding: 2.6% 0;
        }

        a {
          transition: color .4s;
        }
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
      background-color: #18202A;
      color: $light-neutral;
      padding: 12.2% 0 31%;
      position: relative;
      width: 100%;

      @include breakpoint(large) {
        padding: 12.2% 0 3.3%;
      }

      .footer-bg {
        background: #18202A url('~@/assets/images/footer-bg.svg') no-repeat 100% 100%;
        height: 100%;
        left: 0;
        transform: translateX(400px);
        position: absolute;
        top: 0;
        width: 100%;
      }

      .footer-grid {
        position: relative;
        z-index: 1;
      }

      .footer-nav {
        line-height: 2em;
        padding-bottom: 17.7%;

        @include breakpoint(small only) {
          font-size: 14px;
          line-height: 2.3em;
        }
      }

      .logo {
        bottom: 30px;
        position: absolute;
        right: 18px;
        width: 66px;
      }
    }

    .contact-info {
      @include breakpoint(small only) {
        padding-top: 17.7%
      }
    }

    .xxsmall-text {
      margin-top: 20.9%;

      @include breakpoint(large) {
        margin: 13% 0 0 0.9375rem;
      }
    }
  }
</style>