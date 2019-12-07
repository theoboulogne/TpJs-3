//Remplis le tableau sélectionné
var Table = (function () {
    return {
        Plat : (tab) => {
            if(document.getElementById('supprPlat')!=undefined) {
                reset('supprPlat');
            }
            for(let i in tab) {
                Ligne.Plat(tab[i]);
            }
        }, 
        Ingredient : (tab) => {for(let i in tab) {Ligne.Ingredient(tab[i]);}},
    }
})();