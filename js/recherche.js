var Recherche = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        Plat: (filtre, tab) => {
            let normalisefiltre = filtre.toUpperCase();
            var Resultat = [];
            for(let i  in tab){
                normaliseplat = tab[i].name.toUpperCase();
                if(normaliseplat.indexOf(normalisefiltre) > -1){ // Si on a trouver notre filtre
                    console.log(tab[i])
                    Resultat.push(tab[i]);
                }
            }
            console.log(Resultat);
            return Resultat;
        },
        Ingredient: (filtre, tab) => {
            let normalisefiltre = filtre.toUpperCase();
            var Resultat = [];
            for(let i  in tab){
                normaliseplat = tab[i].name.toUpperCase();
                if(normaliseplat.indexOf(normalisefiltre) > -1){ // Si on a trouver notre filtre
                    Resultat.push(tab[i].idIng);
                }
            }
            console.log(Resultat);
            return (Resultat);
        },
    }
})();