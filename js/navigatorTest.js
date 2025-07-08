document.getElementById("navigator").innerText =
    "Langage du navigator : " + navigator.language +
    "Cookies utilisés : " + navigator.cookieEnabled +
    "Platforme utilisée : " + navigator.platform;

function coordonnees(pos) {
    let coord = pos.coords;

    let latitude = coord.latitude;
    let longitude = coord.longitude;

    document.getElementById("latitude").innerText = "Latitude = " + latitude;
    document.getElementById("longitude").innerText = "Longitude = " + longitude;
}

navigator.geolocation.getCurrentPosition(coordonnees);