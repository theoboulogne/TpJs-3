var Ajouter = (function () { //Génère un tableau avec les informations à afficher et affiche une ligne
    return {
        Plat: (plat) => {
            plats.push(plat);
        },
        Ingredient: (ingredient) => { 
            ingredients.push(ingredient);
        },
    }
})();