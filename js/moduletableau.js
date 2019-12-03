//Remplis le tableau sélectionné
var Table = (function () {
    return {
        Plat : (tab) => {
            if(document.getElementById('supprIng')!=undefined) {
                reset('supprPlat');
            }
            for(let i in tab) {
                Ligne.Plat(tab[i]);
            }
        }, 
        Ingredient : (tab) => {for(let i in tab) {Ligne.Ingredient(tab[i]);}},
    }
})();