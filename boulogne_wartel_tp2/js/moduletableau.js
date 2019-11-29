//Remplis le tableau sélectionné
var Table = (function () {
    return {
        Plat : () => {for(let i in plats) { Ligne.Plat(plats[i], i);}}, 
        Ingredient : (value) => {for(let i in plats[value].ingrédients) {Ligne.Ingredient(ingredients[plats[value].ingrédients[i]]);}},
    }
})();