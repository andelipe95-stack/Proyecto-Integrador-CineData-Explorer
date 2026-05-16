# Proyecto Integrador — CineData Explorer

## Aplicación web interactiva con API, Mapas y Gráficas (JavaScript Avanzado)

Construye **CineData Explorer**, una aplicación web interactiva que permite buscar películas usando la API de **TheMovieDB**, visualizar sus países de producción en ç
un **mapa Leaflet** interactivo y explorar estadísticas de géneros y ratings mediante **gráficas Chart.js**. El historial de búsquedas se persiste en `localStorage` y la app se despliega en **GitHub Pages**.

---

## Objetivos

- Consumir una API REST externa con **`async/await`** y manejo de errores.
- Aplicar **Programación Orientada a Objetos** (clases, encapsulación).
- Implementar **funciones puras** para filtrado y transformación de datos.
- Integrar librerías externas: **Leaflet** (mapas) y **Chart.js** (gráficas).
- Persistir datos en el navegador con **`localStorage`**.
- Optimizar la experiencia de usuario con técnicas como **debounce**.
- Publicar el resultado en **GitHub Pages**.

---

## Requisitos mínimos

La aplicación debe incluir, como mínimo, las siguientes funcionalidades:

1. **Buscador de películas** con `debounce`, `async/await` y una clase `Movie` (OOP).
2. **Mapa Leaflet** con marcadores de los países de producción de la película seleccionada.
3. Al menos **una gráfica Chart.js** (doughnut de géneros) alimentada con datos reales de la API.
4. **`localStorage`** para guardar el historial de las últimas 10 búsquedas.
5. **Repositorio GitHub público** con `README.md` y despliegue en **GitHub Pages**.

### Requisitos técnicos

- JavaScript moderno (ES6+): módulos, `async/await`, `fetch`, clases.
- Al menos **una clase** (`Movie`) que represente el dominio de la aplicación.
- Uso correcto de **`async/await`** con manejo de errores (`try/catch`).
- Implementación de **`debounce`** en el buscador para evitar peticiones excesivas.
- HTML semántico y CSS responsive.
- API key de TheMovieDB **no expuesta de forma evidente** (puede ir en un archivo `config.js` ignorado por `.gitignore`, o asumir que es una clave pública con limitaciones).
- Estructura de carpetas ordenada (por ejemplo):
  ```
  index.html
  css/
  js/
    ├── main.js
    ├── api.js
    ├── Movie.js
    ├── map.js
    ├── charts.js
    └── storage.js
  img/
  ```

---

## Extras valorados

Funcionalidades adicionales que suman a la nota final:

- **Filtros** por género, año o rating implementados con **funciones puras**.
- **Segunda gráfica**: bar chart de popularidad de los resultados.
- **Modo oscuro** persistido en `localStorage`.
- **Firebase Realtime Database** para historial compartido entre usuarios.
- **Paginación** de resultados (botón "cargar más películas").

---

## Entrega

- **Fecha límite:** 23/05/2026
- **Formato de entrega:**
  1. Sube el código a tu rama `evaluables_<tu_nombre>` dentro de la carpeta `proyecto_integrador_cinedata/`.
  2. **Despliega la aplicación en GitHub Pages** y comparte la URL pública en el PR.
  3. Abre un Pull Request a `main` siguiendo el flujo descrito en el [README](../README.md).
  4. Incluye un `README.md` en el proyecto con: descripción, capturas, instrucciones de instalación y enlace al despliegue.

---

## Criterios de evaluación

| Criterio | Peso |
|---|---|
| Funcionalidad: la app hace lo que promete y no tiene errores de consola | 40% |
| Calidad del código: uso correcto de JS avanzado, OOP, `async/await` y funciones puras | 30% |
| Visualización: mapa y gráficas integrados con datos dinámicos reales | 20% |
| Presentación: claridad en la demo y defensa del código | 10% |

---

## Recursos recomendados

- [TheMovieDB API — Documentación](https://developer.themoviedb.org/reference/intro/getting-started) (registro gratuito para obtener API key)
- [Leaflet 1.9](https://leafletjs.com/) — librería de mapas interactivos
- [Chart.js](https://www.chartjs.org/docs/latest/) — librería de gráficas
- [MDN — `async`/`await`](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN — Clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [MDN — `localStorage`](https://developer.mozilla.org/es/docs/Web/API/Window/localStorage)
- [Firebase Console](https://console.firebase.google.com/) (opcional, para el extra de RTDB)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) — para pruebas iniciales sin API key
- [GitHub Pages](https://pages.github.com/) — despliegue gratuito

---

## Estructura y patrón de diseño recomendado

Se recomienda separar responsabilidades en módulos independientes:

- **`api.js`** — capa de acceso a TheMovieDB (todas las llamadas `fetch`).
- **`Movie.js`** — clase que modela una película y sus métodos.
- **`map.js`** — gestión del mapa Leaflet y sus marcadores.
- **`charts.js`** — creación y actualización de las gráficas Chart.js.
- **`storage.js`** — funciones puras para leer/escribir en `localStorage`.
- **`main.js`** — punto de entrada que orquesta los módulos y maneja eventos del DOM.

Este enfoque modular facilita el mantenimiento, las pruebas y la defensa del código durante la presentación.
