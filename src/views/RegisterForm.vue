<template>
    <div>
      <h1>Registro</h1>
      <form @submit.prevent="submitForm">
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="formData.name" required>
  
        <label for="lastName">Apellidos:</label>
        <input type="text" id="lastName" v-model="formData.lastName" required>
  
        <label for="email">Correo Electrónico:</label>
        <input type="email" id="email" v-model="formData.email" required>
  
        <label for="phone">Número de Celular:</label>
        <input type="tel" id="phone" v-model="formData.phone" required>
  
        <button type="submit">Registrar</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'RegistrationForm',
    data() {
      return {
        formData: {
          name: '',
          lastName: '',
          email: '',
          phone: '',
        },
      };
    },
    methods: {
      submitForm() {
        // Lógica para enviar el formulario
        console.log('Formulario enviado:', this.formData);
        // Puedes enviar los datos al servidor aquí
      },
    },
  };
  </script>
  
  <style scoped>
  /* Estilos específicos de Register aquí */
  h1 {
    text-align: center;
    color: #fff;
  }
  
  form {
    max-width: 400px;
    margin: 0 auto;
    background-color: #ffffff78;
    padding: 20px;
    border-radius: 10px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-bottom: 15px;
  }
  
  button {
    background-color: #3498db;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  </style>
  