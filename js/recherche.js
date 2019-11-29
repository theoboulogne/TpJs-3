var Recherche = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        Filtre: (filtre, tab) => {
            let normalisefiltre = filtre.toUpperCase();
            var Resultat;
            for(let i  in tab){
                normaliseplat = tab[i].name.toUpperCase();
                if(normaliseplat.indexOf(normalisefiltre) > -1){ // Si on a trouver notre filtre
                    Resultat.push(tab[i]);
                }
            }
            return Resultat;
        },
    }
})();