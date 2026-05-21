let map;
let markers = [];
const countryCoords = {
    "United States of America": [37.0902, -95.7129],

    "United Kingdom": [55.3781, -3.4360],

    "France": [46.2276, 2.2137],

    "Spain": [40.4637, -3.7492],

    "Japan": [36.2048, 138.2529],

    "South Korea": [35.9078, 127.7669],

    "Canada": [56.1304, -106.3468]

};

window.addEventListener("DOMContentLoaded", () => {
    map = L.map("map").setView([20, 0], 2);
    setTimeout(() => { 
        map.invalidateSize();
 }, 100);


    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:  "&copy; OpenStreetMap contributors"
        }
    ).addTo(map);
});



export function mostrarPaises(paises){

    if(!map) return;

     // BORRAR markers anteriores

    markers.forEach(marker => {
        map.removeLayer(marker);

    });

    // limpiar array
    markers = [];


    paises.forEach(pais => {

        const coords = countryCoords[pais.name];

        if(coords){

            const marker = L.marker(coords)
            .addTo(map)
            .bindPopup(pais.name);

            // guardar marker nuevo

            markers.push(marker);

            map.setView(coords, 4);

        }

    });

}