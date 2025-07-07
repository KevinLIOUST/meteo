let tabVilles = ["rouen", "caen", "paris", "havre", "honfleur", "lisieux", "bernay", "pont-audemer", "etretat", "fécamp", "dieppe", "ouistreham", "sainte-adresse", "marseille", "gruchet-le-valasse", "versailles", "creteil", "villejuif", "melun", "lille", "arras", "douai", "saint-romain-de-colbosc", "amiens", "corbie", "poix-de-picardie", "saint-roch", "morgny", "serqueux", "abancourt", "vieux-manoir", "longuerue", "achiet-le-grand", "bréauté", "beuzeville", "etainhus", "saint-laurent-de-brévedent", "gonfreville", "montivilliers", "harfleur", "octeville-sur-mer", "yvetot"];

function filtreTexte(arr, requete) {
    return arr.filter(function (el) {
        return el.toLowerCase().indexOf(requete.toLowerCase()) !== -1;
    });
}

console.log("tabVilles de base : " + tabVilles);
console.log(filtreTexte(tabVilles, "an")); // ['banane', 'mangue'];
console.log(filtreTexte(tabVilles, "m")); // ['pomme', 'mangue'];