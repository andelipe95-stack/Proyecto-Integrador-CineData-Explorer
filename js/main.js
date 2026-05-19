import { obtenerPeliculas } from "./api.js";
import { Movie } from "./movie.js";




const searchInput = document.getElementById("searchInput");
const contenedor = document.getElementById('moviesGrid');

function pintarPeliculas(listaPelis){

    movieGrid.innerHTML = listaPelis.length === 0
    ? "<h2>No results found</h2>":"";
    
    const movieInstances = listaPelis.map(data => new Movie(data));
    movieInstances.forEach(movie =>{
        movieGrid.append(movie.toCard()
    );

  });
}

function filtrarPorTitulo(peliculas, texto){
    return peliculas.filter(pelicula => pelicula.title
        .toLowerCase()
        .includes(texto)
    );

    
}

function playTitle(event){
        const texto = event.target.value.trim().toLowerCase();
        guardarBusqueda(texto);

        const res = filtrarPorTitulo(rawMovies, texto);
        pintarPeliculas(res);
    }

function debounce(callback, delay) {

    let timeoutId;
    
    return (...args) => {

        clearTimeout(timeoutId);

        timeoutId = setTimeout (() => {
            callback(...args);
        }, delay);
    };
}
const busquedaDebounce = debounce(playTitle, 400);

function guardarBusqueda(texto){

    if(texto === "") return;

    let busquedas =
    JSON.parse(localStorage.getItem("busquedas"))
    || [];

    busquedas = busquedas.filter(
        item => item !== texto
    );

    busquedas.unshift(texto);

    if(busquedas.length > 10){

        busquedas.pop();

    }

    localStorage.setItem(
        "busquedas",
        JSON.stringify(busquedas)
    );

}


const themeToggle = document.getElementById("themeToggle");

const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
        document.body.classList.add("light-mode");

        themeToggle.textContent = "☀️";
    }

themeToggle.addEventListener("click", () =>{

    

    document.body.classList.toggle("light-mode");

    if(document.body.classList.contains("light-mode")){
        themeToggle.textContent = "☀️";

        localStorage.setItem("theme", "light");

    }else{

        themeToggle.textContent = "🌙";

        localStorage.setItem("theme", "dark");
    }

    

});

const rawMovies = await obtenerPeliculas();
const MovieInstances = rawMovies.map(
    data => new Movie(data)
);
const movieGrid = document.getElementById("moviesGrid");
pintarPeliculas(rawMovies);
console.log(rawMovies);
searchInput.addEventListener(
    "input",
    busquedaDebounce
);
