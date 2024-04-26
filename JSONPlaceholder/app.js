// app.js

// Obtener los datos de la API
fetch('https://jsonplaceholder.typicode.com/photos')
  .then(response => response.json())
  .then(data => {
    const listaHolder = document.getElementById('listaHolder');

    // Mostrar las primeras 15 imágenes
    for (let i = 0; i < 15; i++) {
      const img = document.createElement('img');
      img.src = data[i].url;
      img.alt = data[i].title;

      listaHolder.appendChild(img);
    }
  })
  .catch(error => console.error('Error al obtener los datos:', error));
