<template>
  <footer class="footer grid-x">
    <div class="footer-nav cell large-5 large-offset-2">
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
</template>

<script>
  export default {
    name: 'Footer'
  }
</script>

<style lang="scss" scoped>
  .footer {
    background: url('~@/assets/images/footer-bg.svg');
    color: $light-neutral;
    padding: 8.2% 0 17.3%;
    position: absolute;
    width: 100%;
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
</style>