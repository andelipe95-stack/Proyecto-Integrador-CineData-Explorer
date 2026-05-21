

import { obtenerPeliculas, obtenerDetallesPelicula } from "./api.js";
import { Movie } from "./movie.js";
import { mostrarPaises } from "./map.js";


// ========== ELEMENTOS DEL DOM ==========
const searchInput = document.getElementById("searchInput");
const movieGrid = document.getElementById("moviesGrid");
const themeToggle = document.getElementById("themeToggle");

// Variable global para almacenar las películas
let rawMovies = [];

// ========== FUNCIONES PRINCIPALES ==========

function pintarPeliculas(listaPelis) {
    movieGrid.innerHTML = "";

    if (listaPelis.length === 0) {
        movieGrid.innerHTML = "<h2>No results found</h2>";
        return;
    }

    const movieInstances = listaPelis.map(data => new Movie(data));


    movieInstances.forEach(movie => {

        const card = movie.toCard();

        card.addEventListener("click", async () => {
            const detalles =
            await obtenerDetallesPelicula(movie._id);
            console.log(detalles);

            mostrarPaises(
                detalles.production_countries
            );
        });


        movieGrid.append(card);
        
    });
}

function filtrarPorTitulo(peliculas, texto) {
    return peliculas.filter(pelicula =>
        pelicula.title.toLowerCase().includes(texto)
    );
}

function playTitle(event) {
    if (!rawMovies || rawMovies.length === 0) return;

    const texto = event.target.value.trim().toLowerCase();
    guardarBusqueda(texto);

    const resultados = filtrarPorTitulo(rawMovies, texto);
    pintarPeliculas(resultados);
}

function guardarBusqueda(texto) {
    if (texto === "") return;

    let busquedas = JSON.parse(localStorage.getItem("busquedas")) || [];

    busquedas = busquedas.filter(item => item !== texto);
    busquedas.unshift(texto);

    if (busquedas.length > 10) {
        busquedas.pop();
    }

    localStorage.setItem("busquedas", JSON.stringify(busquedas));
}

// ========== DEBOUNCE ==========

function debounce(callback, delay) {
    let timeoutId;

    return (...args) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            callback(...args);
        }, delay);
    };
}

const busquedaDebounce = debounce(playTitle, 400);

// ========== TEMA (LIGHT/DARK) ==========

const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light-mode");
    themeToggle.textContent = "☀️";
} else {
    themeToggle.textContent = "🌙";
}

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "light");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "dark");
    }
});

// ========== INICIALIZACIÓN ==========

async function init() {
    try {
        rawMovies = await obtenerPeliculas();
        pintarPeliculas(rawMovies);
    } catch (error) {
        console.error("Error al cargar películas:", error);
        movieGrid.innerHTML = "<h2>Error al cargar las películas. Intenta más tarde.</h2>";
    }

    searchInput.addEventListener("input", busquedaDebounce);
}

init();

