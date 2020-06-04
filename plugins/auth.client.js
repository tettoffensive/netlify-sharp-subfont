export default ({ app, store }) => {
  app.$auth.onAuthStateChanged((user) => {
    if (user) {
      store.commit('user/SET_AUTHENTICATION', user);
    } else {
      store.commit('user/LOGOUT');
    }
  });
};
