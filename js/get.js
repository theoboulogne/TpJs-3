var getPlat = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        name: (plat) => {
            return plat.name;
        },
        preparation: (plat) => {
            return plat.preparation+' min';
        },
        listeIngredients: (plat) => {
            let listeIngredients = "";
            for(let i in plat.ingrédients){
                listeIngredients += ingredients[plat.ingrédients[i]].name + ", ";
            }
            return listeIngredients;
        },
        prixPreparation: (plat) => {
            return plat.prixPreparation+' €';
        },
        prixTotal: (plat) => {
            let prixTotal = parseFloat(plat.prixPreparation);
            for(let i in plat.ingrédients){
                prixTotal += parseFloat(ingredients[plat.ingrédients[i]].prix);
            }
           return prixTotal;
        },
    }
})();

var getIng = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        name: (ingredient) => {
            return ingredient.name;
        },
        prix: (ingredient) => {
            return ingredient.prix + ' €';
        },
        local: (ingredient) => {
            if(ingredient.local=='0') {return ("Etrangère");} // provenance
            else {return ("Locale");}
        },
    }
})();