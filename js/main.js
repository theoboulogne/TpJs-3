$(document).ready(function(){
    $('.header').height($(window).height());
})

Ajouter.Plat({ name: 'Test', preparation: '30', ingrédients: ['17', '13', '20', '18', '1', '2', '3'], prixPreparation: '3' });
ChoixIng(Recherche.Ingredient('s', ingredients))
Table.Plat(Recherche.Plat('pate', plats)); // on remplit le tableau présent dans le code HTML ( Plats )