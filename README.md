
CineData Explorer

Aplicación web interactiva desarrollada con JavaScript, Leaflet y Chart.js.
La aplicación permite explorar películas populares utilizando la API de TheMovieDB, visualizar los países de producción en un mapa interactivo y analizar géneros mediante gráficas dinámicas.

Características principales
Buscador de películas con debounce
Renderizado dinámico de tarjetas de películas
Mapa interactivo con Leaflet
Gráfica de géneros utilizando Chart.js
Modo oscuro y modo claro
Persistencia de datos con localStorage
Diseño responsive para móviles y escritorio
Consumo de API REST con async/await
Programación Orientada a Objetos (OOP)


Estructura del proyecto

CineData-Explorer/
│
├── index.html
├── css/
│   └── style.css
│
├── js/
│   ├── main.js
│   ├── api.js
│   ├── movie.js
│   ├── map.js
│   └── charts.js
│
└── assets/

Funcionalidades
Búsqueda de películas

El usuario puede buscar películas en tiempo real mediante un input dinámico.
La aplicación utiliza debounce para optimizar el rendimiento y evitar ejecuciones excesivas mientras el usuario escribe.

Mapa interactivo

Al seleccionar una película:

Se obtienen los detalles completos desde la API
Se extraen los países de producción
Se muestran marcadores en un mapa interactivo Leaflet

El mapa actualiza automáticamente los marcadores para mostrar únicamente la película seleccionada.

Gráfica de géneros

La aplicación genera una gráfica tipo doughnut utilizando Chart.js.

La gráfica cambia dinámicamente dependiendo de los géneros de la película seleccionada.

Persistencia con localStorage

La aplicación almacena:

Preferencia de tema (oscuro/claro)
Última película seleccionada
Últimas búsquedas realizadas

Esto permite mantener la experiencia del usuario incluso después de refrescar la página.

API utilizada
TheMovieDB API