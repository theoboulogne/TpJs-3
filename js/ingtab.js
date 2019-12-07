// Créer le tableau des ingrédients et l'en-tête correspondante
var Generation = () => { 
    let elem = document.getElementById('list');
    let TABLE = document.createElement('table');
    TABLE.setAttribute('id', 'ing');
    elem.appendChild(TABLE);

    let TH = document.createElement('th');
    TH.innerHTML = "Nom";
    TABLE.appendChild(TH);
    let TH2 = document.createElement('th');
    TH2.innerHTML = "Provenance";
    TABLE.appendChild(TH2);
    let TH3 = document.createElement('th');
    TH3.innerHTML = "Prix";
    TABLE.appendChild(TH3);
};

function reset(id){
    while(document.getElementById(id)){
        let suppr = document.getElementById(id);
        suppr.remove(); // remove juste les td ?
    }
}

function TabIng(tab){ 
    let Resultat = [];
    for(let i in tab){
        Resultat.push(ingredients[tab[i]]);
    }
    return Resultat;
}
// Génère le tableau si nécessaire, sinon le vide puis le remplit des ingrédients du plat sélectionné
function ChoixIng(tab) { 
    if(document.getElementById('supprIng')==undefined) {Generation();}
    else reset('supprIng')
    //console.log(tab);
    Table.Ingredient(tab);
}
