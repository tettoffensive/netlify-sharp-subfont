/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
// import axios from 'axios';

const generateRoutes = async () => {
  const { routes } = await new Promise(res => res([]));

  return [...routes];
};

export default {
  generateRoutes,
};
