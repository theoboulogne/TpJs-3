function compare_preparation(x, y) {
    return y.preparation - x.preparation;
}
function compare_prixPreparation(x, y) {
    return y.prixPreparation - x.prixPreparation;
}
function compare_prixTotal(x, y) {
    return getPlat.prixTotal(y) - getPlat.prixTotal(x);
}
function compare_prix(x, y) {
    return y.prix - x.prix;
}

var RecherchePlat = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        name: (filtre, tab) => {
            let normalisefiltre = filtre.toUpperCase();
            var Resultat = [];
            for(let i  in tab){
                normaliseplat = tab[i].name.toUpperCase();
                if(normaliseplat.indexOf(normalisefiltre) > -1){ // Si on a trouvé notre filtre
                    console.log(tab[i])
                    Resultat.push(tab[i]);
                }
            }
            console.log(Resultat);
            return Resultat;
        },
        preparation: (ordre, tab) => {
            let Tab = tab.slice();
            Tab.sort(compare_preparation);
            if(ordre == 1) Tab.reverse();
            return Tab;
        },
        prixPreparation: (ordre, tab) => {
            let Tab = tab.slice();
            Tab.sort(compare_prixPreparation);
            if(ordre == 1) Tab.reverse();
            return Tab;
        },
        prixTotal: (ordre, tab) => {
            let Tab = tab.slice();
            Tab.sort(compare_prixTotal);
            if(ordre == 1) Tab.reverse();
            return Tab;
        },
    }
})();

var RechercheIng = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        name: (filtre, tab) => {
            let normalisefiltre = filtre.toUpperCase();
            let Resultat = [];
            for(let i  in tab){
                normaliseplat = tab[i].name.toUpperCase();
                if(normaliseplat.indexOf(normalisefiltre) > -1){ // Si on a trouver notre filtre
                    Resultat.push(tab[i]);
                }
            }
            return (Resultat);
        },
        local: (provenance, tab) => {
            let Resultat = [];
            for(let i  in tab){
                if(provenance == tab[i].local){ // Si on a trouver notre filtre
                    Resultat.push(tab[i]);
                }
            }
            return (Resultat);
        },
        prix: (ordre, tab) => {
            let Tab = tab.slice();
            Tab.sort(compare_prix);
            if(ordre == 1) Tab.reverse();
            return Tab;
        },
    }
})();

window.onload = function(){
    
    var form = document.getElementById("auto-suggest");
	var input = form.search;

	input.onkeyup = function(){
		var txt = this.value;
        let Tab = RecherchePlat.name(txt, plats);
        Table.Plat(Tab);
	};
};

