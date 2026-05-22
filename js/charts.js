let chart;

export function crearGrafica(generos){

    const ctx =
    document.getElementById("genreChart");
    
    //DESTRUIR GRAFICA ANTERIOR

    if(chart){
        chart.destroy();
    }

    chart = new Chart(ctx,{
        type: "doughnut",

        data: {
            labels: generos.map(
                genero => genero.name
            ),

            datasets: [{
                label: "Genres",
                
                data: generos.map (() => 1)

            }]
        }

    });     
}