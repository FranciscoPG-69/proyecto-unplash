<template>
    <div class="unsplash-images">
      <div v-for="artist in artists" :key="artist.id" class="artist-card">
        <div class="foto" @click="showImage(artist)">
          <img :src="artist.image" :alt="artist.description" class="thumbnail" />
          <div class="descripcion">
            <h1>{{ artist.name }}</h1>
            <p>{{ artist.description }}</p>
          </div>
        </div>
      </div>
  
      <div v-if="selectedImage" class="modal" @click="hideImage">
        <div class="modal-content">
          <span class="close" @click="hideImage">&times;</span>
          <img :src="selectedImage.image" :alt="selectedImage.description" />
          <div class="descripcion">
            <h1>{{ selectedImage.name }}</h1>
            <p>{{ selectedImage.description }}</p>
            <!-- Utiliza el componente router-link para navegar a la nueva vista -->
            <router-link :to="{ name: 'UserImages', params: { username: selectedImage.username } }">
              <button>Ver más</button>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import { mapActions } from 'vuex';
  
  export default {
    name: 'UnsplashImages',
    data() {
      return {
        artists: [],
        selectedImage: null,
      };
    },
    mounted() {
      this.fetchUnsplashImages();
    },
    methods: {
      ...mapActions('user', ['storeUserInfo']),
      async fetchUnsplashImages() {
        try {
          const response = await axios.get('https://api.unsplash.com/photos/', {
            params: {
              client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
              per_page: 50,
            },
          });
  
          this.artists = response.data.map((photo) => ({
            id: photo.id,
            name: `Foto Usuario: ${photo.user.name}`,
            image: photo.urls.regular,
            description: photo.alt_description,
            username: photo.user.username,
          }));
        } catch (error) {
          console.error('Error fetching Unsplash images', error);
        }
      },
      showImage(artist) {
        this.selectedImage = artist;
      },
      hideImage() {
        this.selectedImage = null;
      },
      async fetchUserInfo(username) {
        try {
          const response = await axios.get(`https://api.unsplash.com/users/${username}`, {
            params: {
              client_id: 'y6h3aphBHWC_HEc5iFbbcCtLSDuVPyKg8mMCuwSSfnU',
            },
          });
  
          this.storeUserInfo(response.data);
        } catch (error) {
          console.error('Error fetching user info', error);
        }
      },
    },
  };
  </script>
  
  <style s0coped>
  .unsplash-images {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .artist-card {
    width: 100%;
    max-width: 300px;
  }
  
  .foto {
    position: relative;
    overflow: hidden;
    cursor: pointer;
  }
  
  .thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s;
  }
  
  .foto:hover .thumbnail {
    transform: scale(1.1);
  }
  
  .descripcion {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 10px;
    box-sizing: border-box;
    transition: height 0.5s, bottom 0.5s;
    height: 0;
    overflow: hidden;
  }
  
  .foto:hover .descripcion {
    height: 30%;
    bottom: 0;
  }
  
  .modal {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.7);
  }
  
  .modal-content {
    position: relative;
    background: white;
    padding: 20px;
    border-radius: 10px;
    text-align: center;
  }
  
  .modal img {
    width: 100%;
    max-height: 80vh;
    object-fit: contain;
  }
  
  .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    color: white;
    cursor: pointer;
  }
  </style>