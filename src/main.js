
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import NavBar from './components/NavBarComponent.vue'; 


createApp(App)
  .use(router)
  .component('NavBarComponent', NavBar) 
  .mount('#app');