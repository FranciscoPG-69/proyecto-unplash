import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import RegisterView from '../views/RegisterForm.vue';
import ArtistsGallery from '../views/ArtistsGallery.vue';
import UserImages from '../views/UserImages.vue';
import ArtistDetails from '../views/ArtistDetail.vue'; // Nuevo componente

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView,
  },
  {
    path: '/artists',
    name: 'ArtistsGallery',
    component: ArtistsGallery,
  },
  {
    path: '/artists/:username/images',
    name: 'UserImages',
    component: UserImages,
  },
 
  {
    path: '/artists/:username',
    name: 'ArtistDetails',
    component: ArtistDetails,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
