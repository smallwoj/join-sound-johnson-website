import { createRouter, createWebHistory } from 'vue-router';
import routes from '@/router/routes';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const title = document.querySelector('title');
  if (title) {
    title.innerHTML = `${String(to.name)} - Join Sound Johnson`;
  }
  next();
});

export default router;
