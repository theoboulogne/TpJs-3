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

// Génère le tableau si nécessaire, sinon le vide puis le remplit des ingrédients du plat sélectionné
function ChoixIng(value) { 
    if(document.getElementById('suppr')==undefined) {Generation();}
    else while(document.getElementById('suppr')){
        let suppr = document.getElementById('suppr');
        suppr.remove();
    }
    console.log(value);
    Table.Ingredient(value);
}