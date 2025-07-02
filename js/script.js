let city = "rouen";
let apiKey = "379a99adac6672b321cbd6175e3c6efd";
// let tabVilles = ["rouen", "caen", "paris"];

let url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&lang=fr&units=metric`;

// Fonction pour consoleloguer l'url
function consoleloguerURL() {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    });
}
consoleloguerURL();
