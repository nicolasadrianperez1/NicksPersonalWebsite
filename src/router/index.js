import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Experiences from '../views/Experiences.vue';
import Projects from '../views/Projects.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/experiences', name: 'Experiences', component: Experiences },
  { path: '/projects', name: 'Projects', component: Projects }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
