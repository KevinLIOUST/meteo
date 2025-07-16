
for (var i = 0; i < window.localStorage.length; i++) {
    var cle = window.localStorage.key(i);
    var value = window.localStorage.getItem(cle);
    if (value.length > 50) {
        value = value.substring(0, 50) + "...";
    }
    console.log("Clé N°" + i + " " + cle + " = " + value);
}