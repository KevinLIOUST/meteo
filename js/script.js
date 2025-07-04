let city = "rouen";
let apiKey = "379a99adac6672b321cbd6175e3c6efd";
// let tabVilles = ["rouen", "caen", "paris"];
let tabJoursSemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
let tabMeteos = [
  "ciel dégagé",
  "peu nuageux",
  "partiellement nuageux",
  "nuageux",
  "couvert",
  "légère pluie",
];
let tabJourNuit = ["Jour", "Nuit"];

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

      if (
        json.list[0].weather[0].description == "ciel dégagé" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Ciel dégagé";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil.ico" alt="Soleil.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
      } else if (json.list[0].weather[0].description == "ciel dégagé") {
        document.getElementById("meteo").innerText = "Ciel dégagé";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune.ico" alt="Lune.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
      } else if (
        json.list[0].weather[0].description == "peu nuageux" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Peu nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Peu nuageux</p>
        `;
      } else if (json.list[0].weather[0].description == "peu nuageux") {
        document.getElementById("meteo").innerText = "Peu nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Peu nuageux</p>
        `;
      } else if (
        json.list[0].weather[0].description == "partiellement nuageux" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Partiellement nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
      } else if (
        json.list[0].weather[0].description == "partiellement nuageux"
      ) {
        document.getElementById("meteo").innerText = "Partiellement nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
      } else if (
        json.list[0].weather[0].description == "nuageux" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
      } else if (json.list[0].weather[0].description == "nuageux") {
        document.getElementById("meteo").innerText = "Nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
      } else if (
        json.list[0].weather[0].description == "couvert" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Couvert";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
      } else if (json.list[0].weather[0].description == "couvert") {
        document.getElementById("meteo").innerText = "Couvert";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
      } else if (
        json.list[0].weather[0].description == "légère pluie" &&
        (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
          parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
      ) {
        document.getElementById("meteo").innerText = "Légère pluie";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Légère-Pluie.ico" alt="Lune-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
      } else if (json.list[0].weather[0].description == "légère pluie") {
        document.getElementById("meteo").innerText = "Légère pluie";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Légère-Pluie.ico" alt="Soleil-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
      }

      document.getElementById("infos-meteo-pression-atmosphérique").innerText =
        json.list[0].main.pressure + " mmhg";

      document.getElementById("infos-meteo-humidite").innerText =
        json.list[0].main.humidity + " %";

      document.getElementById("infos-meteo-vit-wind").innerText =
        json.list[0].wind.speed + " km/h";

      let indiceBtn = 0;
      for (let i = 0; i < json.list.length; i += 8) {
        document.getElementById("btns-jour").innerHTML += `
        <button
          type="button"
          class="d-flex justify-content-center btn colorBtn rounded-4 p-3 ms-1 mx-1 text-white"
        >
          <div>
            <p class="taille-texte-btn">${json.list[i].dt_txt}</p>
            <i class="bi bi-sun taille-icon-btn" id="icon-btn-meteo"></i>
            <p class="taille-texte-btn">${json.list[i].main.temp_max}</p>
            <p class="taille-texte-btn">${json.list[i].main.temp_min}</p>
          </div>
        </button>
        `;
        indiceBtn++;
      }

      let j = 0;
      for (let i = 0; i < json.list.length; i += 8) {
        document.getElementById(
          "temperature-max-" + tabJoursSemaine[j]
        ).innerText = json.list[i].main.temp_max;
        document.getElementById(
          "temperature-min-" + tabJoursSemaine[j]
        ).innerText = json.list[i].main.temp_min;
        j++;
      }

      let jour = 0;
      for (let i = 0; i < json.list.length; i += 8) {
        document.getElementById("date-" + tabJoursSemaine[jour]).innerText =
          json.list[i].dt_txt;
        jour++;
      }

      for (let i = 0; i < json.list.length; i += 8) {
        if (
          json.list[0].weather[0].description == "ciel dégagé" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Ciel dégagé";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune.ico" alt="Lune.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
        } else if (json.list[0].weather[0].description == "ciel dégagé") {
          document.getElementById("meteo").innerText = "Ciel dégagé";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil.ico" alt="Soleil.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
        } else if (
          json.list[0].weather[0].description == "peu nuageux" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Peu nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">peu nuageux</p>
        `;
        } else if (json.list[0].weather[0].description == "peu nuageux") {
          document.getElementById("meteo").innerText = "Peu nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">peu nuageux</p>
        `;
        } else if (
          json.list[0].weather[0].description == "partiellement nuageux" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Partiellement nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
        } else if (
          json.list[0].weather[0].description == "partiellement nuageux"
        ) {
          document.getElementById("meteo").innerText = "Partiellement nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
        } else if (
          json.list[0].weather[0].description == "nuageux" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
        } else if (json.list[0].weather[0].description == "nuageux") {
          document.getElementById("meteo").innerText = "Nuageux";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
        } else if (
          json.list[0].weather[0].description == "couvert" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Couvert";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
        } else if (json.list[0].weather[0].description == "couvert") {
          document.getElementById("meteo").innerText = "Couvert";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
        } else if (
          json.list[0].weather[0].description == "légère pluie" &&
          (parseInt(json.list[0].dt_txt.substring(11, 13)) >= 21 ||
            parseInt(json.list[0].dt_txt.substring(12, 13)) < 6)
        ) {
          document.getElementById("meteo").innerText = "Légère pluie";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Légère-Pluie.ico" alt="Lune-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
        } else if (json.list[0].weather[0].description == "légère pluie") {
          document.getElementById("meteo").innerText = "Légère pluie";
          document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Légère-Pluie.ico" alt="Soleil-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
        }
        document.getElementById("date-" + tabJoursSemaine[jour]).innerText =
          json.list[i].dt_txt;
        jour++;
      }
    });
}
recupererDonneesMeteo();
