let city = "rouen";
let apiKey = "379a99adac6672b321cbd6175e3c6efd";
// let tabVilles = ["rouen", "caen", "paris"];
let tabJoursSemaine = ["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi", "dimanche"];

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

// Fonction pour consoleloguer l'url
// function consoleloguerURL() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// consoleloguerURL();

// Fonction pour récupérer les données avec l'API pour la météo
function recupererDonneesMeteo() {
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(); de test !!!! :) :) :) :)
      console.log(json);

      // Vrai Affichage des données
      document.getElementById("localisation").innerText = json.city.name;

      document.getElementById("date").innerText = json.list[0].dt_txt;

      document.getElementById(
        "temperature"
      ).innerText = `${json.list[0].main.temp} °`;

      document.getElementById("infos-meteo-pression-atmosphérique").innerText =
        json.list[0].main.pressure + " mmhg";

      document.getElementById("infos-meteo-humidite").innerText =
        json.list[0].main.humidity + " %";

      document.getElementById("infos-meteo-vit-wind").innerText =
        json.list[0].wind.speed + " km/h";

        let j = 0;
        for (let i=0; i<json.list.length; i+=8) {
          document.getElementById("temperature-max-" + tabJoursSemaine[j]).innerText = json.list[i].main.temp_max;
          document.getElementById("temperature-min-" + tabJoursSemaine[j]).innerText = json.list[i].main.temp_min;
          j++;
        }

        let jour = 0;
        for (let i = 0; i < json.list.length; i+=8) {
          document.getElementById("date-" + tabJoursSemaine[jour]).innerText = json.list[i].dt_txt;
          jour++;
        }
    });
}
recupererDonneesMeteo();
