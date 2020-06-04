import Vue from 'vue';

Vue.directive('resize', {
  inserted(el, binding) {
    if (process.client) {
      const f = function f(evt) {
        if (binding.value(evt, el)) {
          window.removeEventListener('resize', f);
        }
      };
      window.addEventListener('resize', f);
    }
  },
});
