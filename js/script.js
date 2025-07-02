let city = "rouen";
let apiKey = "379a99adac6672b321cbd6175e3c6efd";
// let tabVilles = ["rouen", "caen", "paris"];

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

// Fonction pour consoleloguer l'url
function consoleloguerURL() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);
        });
}
consoleloguerURL();

// Fonction pour récupérer la température max
function recupererTempMax() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data);

            data.forEach(meteo => {
                document.getElementById("");
            });
        });
}

// // Fonction pour afficher les villes dans la navbar
// function affichageVilles() {
//     for (let i = 0; i < tabVilles.length; i++) {
//         city = tabVilles[i];
//         document.getElementById("meteo-ville").innerHTML += `
//             <a href="${url}">${tabVilles[i]}</a>
//         `;
//     }
// }
// affichageVilles();