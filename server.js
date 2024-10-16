// index.js
const axios = require('axios');

// URL de la API de Pokémon
const url = 'https://pokeapi.co/api/v2/pokemon/1'; // Obtener información sobre Bulbasaur

// Función para obtener datos del Pokémon
const getPokemon = async () => {
  try {
    // Realizar la solicitud GET
    const response = await axios.get(url);
    
    // Manejar la respuesta
    console.log('Nombre:', response.data.name);
    console.log('ID:', response.data.id);
    console.log('Altura:', response.data.height);
    console.log('Peso:', response.data.weight);
    console.log('Tipos:', response.data.types.map(type => type.type.name).join(', '));
  } catch (error) {
    // Manejar errores
    if (error.response) {
      // La solicitud se realizó y el servidor respondió con un código de estado
      // que está fuera del rango de 2xx
      console.error('Error de respuesta:', error.response.status);
      console.error('Datos de error:', error.response.data);
    } else if (error.request) {
      // La solicitud se realizó pero no se recibió respuesta
      console.error('No se recibió respuesta de la API:', error.request);
    } else {
      // Algo sucedió al configurar la solicitud
      console.error('Error al hacer la solicitud:', error.message);
    }
  }
};

// Llamar a la función
getPokemon();
