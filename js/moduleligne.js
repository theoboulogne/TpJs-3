var Ligne = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        Plat: (plat) => {
            Affichage.LignePlat([getPlat.name(plat),getPlat.preparation(plat),getPlat.listeIngredients(plat),getPlat.prixPreparation(plat),getPlat.prixTotal(plat)+' €'], plat.ingrédients);
        },
        Ingredient: (ingredient) => { 
            //console.log('ing')
            //console.log(ingredient);
            Affichage.LigneIng([getIng.name(ingredient), getIng.local(ingredient), getIng.prix(ingredient)]);
        },
    }
})();