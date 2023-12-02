<template>
  <div id="app">
    <div class="subtitle">
      <svg>
            <text x="50%" y="50%" dy=".35em" text-anchor="middle">LE PETIT LOUVRE</text>
        </svg>
      <h2>galeria de arte</h2>
    </div>
    <NavBarComponent />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'; 

export default {
  name: 'App',
  components: {
    NavBarComponent,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;500;600;700&display=swap');

:root {
    --blanco: #ffffff;
    --oscuro: #212121;
    --primario: #ffc107;
    --secundario: #0097a7;
    --gris: #9a2c2c;
    --grisclaro: #dfe9f3;
 
 }
html {
    box-sizing: border-box; /* Esto hace que el border y el padding no afecten el ancho de nuestros elementos */
    font-size: 62.5%; /* Esto hace que 1rem = 10px */
}

*, *:before, *:after {
    box-sizing: inherit;
}

svg {
	/* font-family: "Russo One", sans-serif; */
    font-family: "Dancing Script", sans-serif;
	width: 100%;
    height: 100%;
}

svg text {
	animation: stroke 5s infinite alternate;
	stroke-width: 2;
	stroke: black;
	font-size: 40px;
}

@keyframes stroke {
	0%   {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-dashoffset: 25%; stroke-dasharray: 0 50%; stroke-width: 2;}
	70%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); }
	80%  {fill: rgba(72,138,204,0); stroke: rgba(54,95,160,1); stroke-width: 3;}
	100% {fill: rgba(72,138,204,1); stroke: rgba(54,95,160,0); stroke-dashoffset: -25%; stroke-dasharray: 50% 0; stroke-width: 0;}
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.subtitle {
  background-color: rgba(97, 255, 250, 0.142); /* Fondo del subtítulo */
  padding: 10px;
}

.subtitle h2 {
  margin: 0;
}

body {
  background-color: rgba(97, 255, 250, 0.208); /* Fondo */
  background-image: url("./assets/36343-pinturas.jpg");
}

.nav-button {
  background-color: rgb(255, 111, 97); /* Fondo del botón */
  color: #FFFFFF; /* Color del texto en el botón */
}

.nav-button:hover {
  background-color: rgb(255, 78, 58); /* Cambiar el color al pasar el ratón sobre el botón */
}
</style>