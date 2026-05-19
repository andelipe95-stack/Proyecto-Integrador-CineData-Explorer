export const API_KEY = "1ab24470e1aa7f585910b240929430f1";
export const BASE = "https://api.themoviedb.org/3";
export const IMG = "https://image.tmdb.org/t/p/w500";


export async function obtenerPeliculas() {
    try{
        const res = await fetch(
            BASE + "/movie/popular?api_key=" + API_KEY + "&language=en-US"
        );

        const datos = await res.json();

        return datos.results;
    }catch(error){
        console.log(error);

        return[];
    }finally {
        console.log("Movies loaded");
    }
}

