<template>
  <main id="home">
    <section id="hero" class="container pt-1 pt-md-5">
      <div class="row">
        <div class="col-md-6 d-lg-none mb-2 order-md-2 p-md-1">
          <div class="hero-image" v-html="require('@/assets/image.svg')" />
        </div>
        <div class="d-flex flex-column col-md-6">
          <h1>
            This is a template repo for Nuxt.js
          </h1>
          <p class="text-subtitle">
            Using it to demo sharp and subfont
          </p>
          <lazy-image source-image="@/assets/image.jpg" alt="Earth" />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>
