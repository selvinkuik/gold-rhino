<template>
  <div class="app">
    <transition name="fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style lang="scss" scoped>
  .fade-enter-active,
  .fade-leave-active {
    transition: opacity 0.4s cubic-bezier(0.19, 1, 0.22, 1);
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0;
  }
</style>