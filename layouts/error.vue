<template>
  <main id="main">
    <section class="container py-5">
      <div class="row">
        <div class="illustration col-md-6 order-md-2">
          <lazy-image source-image="@/assets/image.jpg" alt="Earth" />
        </div>
        <div class="d-flex flex-column col-md-6">
          <template v-if="error.statusCode === 404">
            <h1>The page you’re looking for could not be found</h1>
            <p>We’d love to help you find it. Send us a message at</p>
          </template>
          <template v-else>
            <h1>Something went wrong</h1>
            <p>Try it again or send us a message at</p>
          </template>
          <nuxt-link class="mt-3 back-link-arrow align-self-start" to="/">
            Home
          </nuxt-link>
        </div>
      </div>
    </section>
  </main>
</template>

<script>


export default {
  props: {
    error: {
      type: Object,
      default: undefined,
    },
  },
};
</script>
<style lang="scss" scoped>
.illustration > img, .illustration > picture {
  width: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 0;
  margin-bottom: $spacer;
}
</style>
