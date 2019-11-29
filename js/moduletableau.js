//Remplis le tableau sélectionné
var Table = (function () {
    return {
        Plat : (tab) => {for(let i in tab) { Ligne.Plat(tab[i], i);}}, 
        Ingredient : (tab) => {for(let i in tab) {Ligne.Ingredient(ingredients[tab[i]]);}},
    }
})();