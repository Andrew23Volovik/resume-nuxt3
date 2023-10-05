import { defineNuxtRouteMiddleware } from '#app';

export default defineNuxtRouteMiddleware(({ fullPath }) => {
  if (fullPath === '/' || fullPath === '/resume') {
    return navigateTo({ path: '/resume', query: { page: 1 } });
  }
});
