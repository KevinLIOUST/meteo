let tabVilles = [
  ["rouen", "Rouen"],
  ["caen", "Caen"],
  ["paris", "Paris"],
  ["havre", "Le Havre"],
  ["honfleur", "Honfleur"],
  ["lisieux", "Lisueux"],
  ["bernay", "Bernay"],
  ["pont-audemer", "Pont-Audemer"],
  ["etretat", "Etretat"],
  ["fécamp", "Fécamp"],
  ["dieppe", "Dieppe"],
  ["ouistreham", "Ouistreham"],
  ["sainte-adresse", "Sainte-Adresse"],
  ["marseille", "Marseille"],
  ["gruchet-le-valasse", "Gruchet-Le-Valasse"],
  ["versailles", "Versailles"],
  ["creteil", "Créteil"],
  ["villejuif", "Villejuif"],
  ["melun", "Melun"],
  ["lille", "Lille"],
  ["arras", "Arras"],
  ["douai", "Douai"],
  ["saint-romain-de-colbosc", "Saint-Romain-De-Colbosc"],
  ["amiens", "Amiens"],
  ["corbie", "Corbie"],
  ["poix-de-picardie", "Poix-De-Picardie"],
  ["saint-roch", "Saint-Roch"],
  ["morgny", "Morgny"],
  ["serqueux", "Serqueux"],
  ["abancourt", "Abancourt"],
  ["vieux-manoir", "Vieux-Manoir"],
  ["longuerue", "Longuerue"],
  ["achiet-le-grand", "Achiet-Le-Grand"],
  ["bréauté", "Bréauté"],
  ["beuzeville", "Beuzeville"],
  ["etainhus", "Etainhus"],
  ["saint-laurent-de-brévedent", "Saint-Laurent-De-Brévedent"],
  ["gonfreville", "Gonfreville"],
  ["montivilliers", "Montivilliers"],
  ["harfleur", "Harfleur"],
  ["octeville-sur-mer", "Octeville-Sur-Mer"],
  ["yvetot", "Yvetot"]
];
tabVilles.sort();
let tabJoursSemaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];
// let tabMeteos = [
//   "ciel dégagé",
//   "peu nuageux",
//   "partiellement nuageux",
//   "nuageux",
//   "couvert",
//   "légère pluie",
// ];
// let tabJourNuit = ["Jour", "Nuit"];

// Fonction pour consoleloguer l'url
// function consoleloguerURL() {
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       console.log(data);
//     });
// }
// consoleloguerURL();

// // Pour le menu burger avec toutes les villes à traiter pour la météo
// let menuBurger = document.getElementById("monMenuBurger");
// let closeBtn = document.getElementById("closeBtn");
// let openBtn = document.getElementById("openBtn");

// // Fonction pour ouvrir le menu burger
// function openNav() {
//   menuBurger.classList.add("active");
// }

// // Fonction pour fermer le menu burger
// function closeNav() {
//   menuBurger.classList.remove("active");
// }

// // Les événements pour ouvrir et fermer le menu burger
// openBtn.onclick = openNav();
// closeBtn.onclick = closeNav();

// Pour le menu burger
const burger = document.getElementById('burger');
const navLinks = document.getElementById('navLinks');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Ajout des boutons des villes de manière dynamique
tabVilles.forEach(ville => {
  document.getElementById("navLinksVilles").innerHTML += `
  <button class="btn colorBtn w-100 flex-wrap mb-3" onclick="recupererDonneesMeteo('${ville[0]}', 0);">${ville[0]}</button>
  `;
});

// Fonction pour retourner le nouveau tableau contenant les villes avec la chaine de caractères correspondante présente dans ce mot là
function filtreTexte(tableau, requete) {
  return tableau.filter(function (el) {
    return el[0].toLowerCase().includes(document.getElementById("search").value);
  });
}

// Fonction pour filtrer le tableau des villes pour chercher la ville correspondante pour l'utilisateur
function filtrer() {

  let filtre = document.getElementById("search").value;
  console.log(filtre);

  let newTabVilles = filtreTexte(tabVilles, filtre);
  console.log(newTabVilles);

  document.getElementById("navLinksVilles").innerHTML = ``;

  newTabVilles.forEach(ville => {
    document.getElementById("navLinksVilles").innerHTML += `
  <button class="btn colorBtn w-100 flex-wrap mb-3" onclick="recupererDonneesMeteo('${ville[0]}', 0);">${ville[0]}</button>
  `;
  });
}


// Fonction qui permet d'afficher les jours de la semaine en temps réel
function afficherJoursSemaine() {

  // Le tableau des jours pour faire référence à la fonction getDay();
  const jours = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

  // On crée une nouvelle instance de Date pour l'utiliser pour afficher le jour de la semaine correspondant
  const aujourdHui = new Date();

  // Le tableau des jours de la semaine à afficher dynamiquement
  const joursAffiches = [];

  // On ajoute le jour d'aujourd'hui, puis les 4 jours suivants dans le tableau afficher
  for (let i = 0; i <= 4; i++) {

    // On recrée l'instance de la date avec celle de maintenant
    const jour = new Date(aujourdHui);

    // On modifie la date d'aujourd'hui par le jour suivant pour l'ajouter juste après dans le tableau
    jour.setDate(aujourdHui.getDate() + i);

    // On ajoute le jour suivant dans le tableau
    joursAffiches.push(jours[jour.getDay()]);
  }

  // On nettoie la console pour un affichage en temps réel
  // console.clear();

  // Affichage des jours de la semaine
  // console.log("Jours de la semaine :");
  // joursAffiches.forEach((jour, index) => {
  //   console.log(`Jour ${index + 1}: ${jour}`);
  // });

  // On retourne le nouveau tableau à afficher.
  return joursAffiches;
}

// Met à jour l'affichage toutes les secondes
// setInterval(afficherJoursSemaine, 1000);

function coordonnees(pos) {
  let coord = pos.coords;

  let latitude = coord.latitude;
  let longitude = coord.longitude;

  let apiKey = "379a99adac6672b321cbd6175e3c6efd";
  // let url = `http://api.openweathermap.org/geo/1.0/reverse?lat=${navigator.geolocation.getCurrentPosition(coordonneesLatitude)}&lon=${navigator.geolocation.getCurrentPosition(coordonneesLongitude)}&limit=1&appid=${apiKey}`;
  let url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=${apiKey}`;
  fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      console.log(json);
      document.getElementById("localisation").innerText = json[0].name;
      document.getElementById("latitudeActuelle").innerText = latitude.toFixed(10);
      document.getElementById("longitudeActuelle").innerText = longitude.toFixed(10);
      for (let i = 0; i < tabVilles.length; i++) {
        if (tabVilles[i][1] == json[0].name) {
          recupererDonneesMeteo(tabVilles[i][0], 0);
        }
      }
    });
}

function showError(error) {
  switch (error.code) {
    case error.PERMISSION_DENIED:
      alert("L'utilisateur a refusé la demande de géolocalisation.");
      break;
    case error.POSITION_UNAVAILABLE:
      alert("L'emplacement de l'utilisateur n'est pas disponible.");
      break;
    case error.TIMEOUT:
      alert("La demande de géolocalisation a expiré.");
      break;
    case error.UNKNOWN_ERROR:
      alert("Une erreur inconnue s'est produite.");
      break;
  }
}

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(coordonnees, showError);
} else {
  alert("La géolocalisation n'est pas supportée par ce navigateur.");
  recupererDonneesMeteo("rouen", 0);
}

// Fonction pour récupérer les données avec l'API pour la météo
function recupererDonneesMeteo(ville, indice) {
  console.log(ville.toLowerCase());
  let apiKey = "379a99adac6672b321cbd6175e3c6efd";
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${ville.toLowerCase()},FR&appid=${apiKey}&lang=fr&units=metric`;

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      // console.log(); de test !!!! :) :) :) :)
      console.log(json);

      // Vrai Affichage des données
      document.getElementById("localisation").innerText = json.city.name;

      document.getElementById("latitude").innerText = json.city.coord.lat.toFixed(10);
      document.getElementById("longitude").innerText = json.city.coord.lon.toFixed(10);

      document.getElementById("date").innerText = json.list[indice].dt_txt;

      document.getElementById(
        "temperature"
      ).innerText = `${json.list[indice].main.temp} °`;

      const date = new Date();
      const heureActuelle = date.getHours();
      console.log(heureActuelle);

      if (
        json.list[indice].weather[0].description == "ciel dégagé" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Ciel dégagé";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune.ico" alt="Lune.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
      } else if (json.list[indice].weather[0].description == "ciel dégagé") {
        document.getElementById("meteo").innerText = "Ciel dégagé";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil.ico" alt="Soleil.ico">
        <p class="text-center" id="meteo">Ciel dégagé</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "peu nuageux" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Peu nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Peu nuageux</p>
        `;
      } else if (json.list[indice].weather[0].description == "peu nuageux") {
        document.getElementById("meteo").innerText = "Peu nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Peu nuageux</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "partiellement nuageux" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Partiellement nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "partiellement nuageux"
      ) {
        document.getElementById("meteo").innerText = "Partiellement nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Partiellement nuageux</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "nuageux" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Nuages.ico" alt="Lune-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
      } else if (json.list[indice].weather[0].description == "nuageux") {
        document.getElementById("meteo").innerText = "Nuageux";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Nuages.ico" alt="Soleil-Nuages.ico">
        <p class="text-center" id="meteo">Nuageux</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "couvert" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Couvert";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
      } else if (json.list[indice].weather[0].description == "couvert") {
        document.getElementById("meteo").innerText = "Couvert";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Nuages.ico" alt="Nuages.ico">
        <p class="text-center" id="meteo">Couvert</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "légère pluie" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Légère pluie";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Légère-Pluie.ico" alt="Lune-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
      } else if (json.list[indice].weather[0].description == "légère pluie") {
        document.getElementById("meteo").innerText = "Légère pluie";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Légère-Pluie.ico" alt="Soleil-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Légère pluie</p>
        `;
      } else if (
        json.list[indice].weather[0].description == "pluie modérée" &&
        (heureActuelle >= 21 || heureActuelle < 8)
      ) {
        document.getElementById("meteo").innerText = "Pluie modérée";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Lune-Légère-Pluie.ico" alt="Lune-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Pluie modérée</p>
        `;
      } else if (json.list[indice].weather[0].description == "pluie modérée") {
        document.getElementById("meteo").innerText = "Pluie modérée";
        document.getElementById("icon-meteo").innerHTML = `
        <img src="img/Soleil-Légère-Pluie.ico" alt="Soleil-Légère-Pluie.ico">
        <p class="text-center" id="meteo">Pluie modérée</p>
        `;
      }
      document.getElementById("infos-meteo-pression-atmosphérique").innerText =
        json.list[indice].main.pressure + " mmhg";

      document.getElementById("infos-meteo-humidite").innerText =
        json.list[indice].main.humidity + " %";

      document.getElementById("infos-meteo-vit-wind").innerText =
        json.list[indice].wind.speed + " km/h";

      let curChart = null;

      const graphInit = () => {
        const canvas = document.getElementById("canvas").innerHTML = `
        <canvas id="meteoChart"></canvas>
        `;
        const ctx = document.getElementById("meteoChart").getContext("2d");

        if (curChart !== null) {
          curChart.destroy();
        }

        curChart = new Chart(ctx, {
          type: "line",
          data: {
            labels: afficherJoursSemaine(),
            datasets: [
              {
                label: "Température en °C",
                data: [json.list[0].main.temp, json.list[8].main.temp, json.list[16].main.temp, json.list[24].main.temp, json.list[32].main.temp],
                fill: {
                  target: 'origin',
                  above: 'rgba(131, 61, 223, 0.4)',
                },
                borderColor: [
                  'rgba(131, 61, 223, 0.65)'
                ],
                pointStyle: 'circle',
                pointRadius: 10,
                pointHoverRadius: 15
              },
            ],
          },
          options: {
            scales: {
              y: {
                beginAtZero: true
              },
            },
          },
        });
      }

      graphInit();

      // Pour afficher les icônes sur les boutons en bas de page
      // pour savoir en avance quel temps il fait pour les jours suivants à la même heure que maintenant
      // let tabIconesBtn = [
      //   "bi bi-sun",
      //   "bi bi-moon",
      //   "bi bi-cloud-drizzle",
      //   "bi bi-cloud-lightning-rain",
      //   "bi bi-cloud-rain-heavy",
      //   "bi bi-cloud-sun",
      //   "bi bi-cloud-moon",
      //   "bi bi-cloud",
      //   "bi bi-cloud-fog",
      //   "bi bi-cloud-lightning"
      // ];

      // Fonction pour créer une balise i avec l'icône correspondant au temps qu'il fait dans les jours suivants à la même heure que maintenant
      function createBaliseI(indice) {
        if (
          json.list[indice].weather[0].description == "ciel dégagé" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-moon taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "ciel dégagé") {
          let baliseI = `
          <i class="bi bi-sun taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "peu nuageux" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud-moon taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "peu nuageux") {
          let baliseI = `
          <i class="bi bi-cloud-sun taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "partiellement nuageux" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud-moon taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "partiellement nuageux") {
          let baliseI = `
          <i class="bi bi-cloud-sun taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "nuageux" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud-moon taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "nuageux") {
          let baliseI = `
          <i class="bi bi-cloud-sun taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "couvert" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "couvert") {
          let baliseI = `
          <i class="bi bi-cloud taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "légère pluie" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud-drizzle taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "légère pluie") {
          let baliseI = `
          <i class="bi bi-cloud-drizzle taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (
          json.list[indice].weather[0].description == "pluie modérée" &&
          (heureActuelle >= 21 || heureActuelle < 8)
        ) {
          let baliseI = `
          <i class="bi bi-cloud-drizzle taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        } else if (json.list[indice].weather[0].description == "pluie modérée") {
          let baliseI = `
          <i class="bi bi-cloud-drizzle taille-icon-btn" id="icon-btn-meteo"></i>
          `;
          return baliseI;
        }
        console.log(baliseI);
      }

      document.getElementById("btns-jour").innerHTML = ``;

      ville = json.city.name.toLowerCase();
      console.log("json.city.name.toLowerCase() = " + ville);
      let indiceBtn = 0;
      for (let i = 0; i < json.list.length; i += 8) {
        document.getElementById("btns-jour").innerHTML += `
        <button
          type="button"
          class="d-flex justify-content-center btn colorBtn rounded-4 p-3 m-2 text-white"
        onclick="recupererDonneesMeteo('${ville}', ${i}); ${console.log(ville)};">
          <div>
            <p class="taille-texte-btn">${afficherJoursSemaine()[indiceBtn]}</p>
            ${createBaliseI(i)}
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
    });
}
// recupererDonneesMeteo('rouen', 0);