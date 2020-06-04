<template>
  <div>
    <a class="skip-to-content-link" href="#main">
      Skip to content
    </a>
    <Navigation ref="nav" />
    <div class="nav-blocker">
      <div class="container">
        <b-navbar-brand class="hidden d-flex">
          <!-- eslint-disable-next-line vue/no-v-html -->
          <div class="svg-header-logomark-hidden" v-html="require('@/assets/image.svg')" />
        </b-navbar-brand>
      </div>
    </div>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
export default {
  head() {
    return {
      link: [
        { rel: 'canonical', href: '' },
      ],
    };
  },
};
</script>

<style lang="scss">
html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  text-align: left;
}
.nav-blocker {
  display: flex;
  position: fixed;
  background: $background;
  padding: $spacer*0.5 $spacer $spacer*0.5 $spacer;
  top: 0;
  right: 0;
  left: 0;
  z-index: $zindex-fixed - 2;
  @include dark-mode {
    background: $primary-dark;
  }
}
</style>
<style lang="scss" scoped>
.svg-header-logomark-hidden {
  margin-right: auto;
  fill: none;
  visibility: hidden;
  & /deep/ svg, & /deep/ path {
    width: auto;
    height: 30px;
    fill: none;
    stroke: none;
  }
}
.skip-to-content-link {
  height: 30px;
  left: 50%;
  padding: 8px;
  position: absolute;
  transform: translateY(-100%);
  transition: transform 0.3s;
}

.skip-to-content-link:focus {
  transform: translateY(0%);
}
</style>
