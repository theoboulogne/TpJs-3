//Génère un tableau avec les informations à afficher et affiche une ligne
var Ajouter = (function () {
    return { 
        Plat: (plat) => {
            plats.push(plat);
        },
        Ingredient: (ingredient) => { 
            ingredients.push(ingredient);
        },
    }
})();

var AddDish = (function (){
    var form = document.getElementById("auto-suggest");
	var input = form.search;
    document.location.href="ajoutPLat.html";

    Ajouter.Plat({ name: 'Test', preparation: '30', ingrédients: ['17', '13', '20', '18', '1', '2', '3'], prixPreparation: '3' });
    
    
});