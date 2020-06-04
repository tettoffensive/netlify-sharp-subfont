import Vue from 'vue';

Vue.directive('scroll', {
  inserted(el, binding) {
    if (process.client) {
      const f = function f(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('scroll', f, { passive: true });
        }
      };
      window.addEventListener('scroll', f, { passive: true });
    }
  },
});
