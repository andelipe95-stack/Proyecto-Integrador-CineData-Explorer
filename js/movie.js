import { IMG } from "./api.js";

export class Movie {
    constructor(data){
        this._title = data.title;

        this._year = data.release_date ? data.release_date : "Unkown";
        this._rating = data.vote_average ? data.vote_average : "Pending";
        this._poster = data.poster_path ? IMG + data.poster_path : "img/no-poster.png";
        this._overview = data.overview ? data.overview : "No description available";

    }

    toCard(){
        const div = document.createElement("div");

        div.classList.add("movie-card");

        div.innerHTML = `
             <img src="${this._poster}" alt="${this._title}">
             <div class="movie-info">
                <h3>${this._title}</h3>
                <p><strong>Year:</strong> ${this._year}</p>
                <p><strong>Rating:</strong> ⭐ ${this._rating}</p>
             </div>
             
        `;
        return div;
        


    }
}