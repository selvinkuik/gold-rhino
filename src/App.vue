<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <div>
        <div
          class="menu-circle-transform"
          :class="{ open: menuOpen }"
          @click="toggleMenu"
        ></div>

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
              <template v-for="item in $router.options.routes">
                <div
                  v-if="item.showInNav"
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
        </div>

        <div ref="app">
          <router-view />
        </div>
        
        <footer class="footer grid-x" ref="footer">
          <div class="footer-nav cell large-5 large-offset-2">
            <template v-for="item in $router.options.routes">
              <div
                v-if="item.showInNav"
                :key="item.path"
              >
                <router-link :to="item.path">
                  {{ item.name }}
                </router-link>
              </div>
            </template>
          </div>

          <div class="contact-info cell large-5">
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

          <img class="logo" src="@/assets/images/gold-rhino.svg" />
        </footer>
      </div>
    </transition>
  </div>
</template>

<script>
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
      setInterval(() => { // Continuosly monitor the page
        let top = 0

        this.$refs.app.querySelector('.grid-container').children.forEach(function(el) {
          top += parseInt(getComputedStyle(el).height)
        })

        this.$refs.footer.style.top = top + 'px'
      }, 1000)
    }
  }
</script>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }

  .menu-circle-transform {
    border-radius: 50%;
    cursor: pointer;
    height: 64px;
    position: fixed;
    right: 22px;
    top: 28px;
    transform: scale(1);
    transition: background-color 0.4s cubic-bezier(0.19, 1, 0.22, 1), transform 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    width: 64px;
    z-index: 3;

    &.open {
      background-color: $gold;
      transform: scale(70);
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
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
    visibility: hidden;
    width: 100%;
    z-index: 4;

    &.open {
      opacity: 1;
      visibility: visible;
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

    .label {
      bottom: 14%;
      color: $light-neutral;
      font: 10px Termina;
      left: 2.5%;
      letter-spacing: 2px;
      position: absolute;
      transform: rotate(270deg);
    }
  }

  .footer {
    background: url('~@/assets/images/footer-bg.svg');
    background-size: cover;
    color: $light-neutral;
    padding: 8.2% 0 17.3%;
    position: absolute;
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
</style>