var Ligne = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        Plat: (plat) => {
            let listeIngredients = "", prixTotal = parseFloat(plat.prixPreparation);
            for(let i in plat.ingrédients){
                listeIngredients += ingredients[plat.ingrédients[i]].name + ", ";
                prixTotal += parseFloat(ingredients[plat.ingrédients[i]].prix);
            }
            console.log("ligne")
            Affichage.LignePlat([plat.name,plat.preparation+' min',listeIngredients,plat.prixPreparation+' €',prixTotal+' €'], plat.ingrédients);
        },
        Ingredient: (ingredient) => { 
            let tab = [ingredient.name, '0', ingredient.prix + ' €'];
            if(ingredient.local=='0') {tab[1] = ("Etrangère")} // provenance
            else {tab[1] = ("Locale")}
            Affichage.LigneIng(tab);
        },
    }
})();