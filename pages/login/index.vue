<template>
  <section class="container">
    <div>
      <app-logo/>
      <h1 class="title">
        nuxt-distribution Login
      </h1>
      <h2 class="subtitle">
        vue vuex nuxt element axios
      </h2>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          class="button--green">Documentation</a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          class="button--grey">GitHub</a>
        <nuxt-link to="/"> Index </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
}
</script>

<style>

</style>

