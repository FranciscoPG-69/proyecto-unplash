<!-- UserImages.vue -->
<template>
    <div class="user-images">
      <h2>{{ username }} - Imágenes</h2>
      <div v-for="image in userImages" :key="image.id" class="image-card">
        <img :src="image.urls.regular" :alt="image.alt_description" class="thumbnail" />
        <div class="description">
          <p>{{ image.alt_description }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UserImages',
    data() {
      return {
        username: '',
        userImages: [],
      };
    },
    mounted() {
      // Obtener el nombre de usuario de la ruta
      this.username = this.$route.params.username;
      // Cargar imágenes del usuario
      this.fetchUserImages();
    },
    methods: {
      async fetchUserImages() {
        try {
          const response = await axios.get(`https://api.unsplash.com/users/${this.username}/photos/`, {
            params: {
              client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU', // Reemplaza con tu clave de acceso de Unsplash
              per_page: 10, // Puedes ajustar la cantidad de imágenes
            },
          });
  
          this.userImages = response.data.map((photo) => ({
            id: photo.id,
            alt_description: photo.alt_description,
            urls: photo.urls,
          }));
        } catch (error) {
          console.error('Error fetching user images', error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos de la vista de imágenes del usuario, si es necesario */
  </style>
  