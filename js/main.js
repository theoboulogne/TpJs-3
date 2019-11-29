$(document).ready(function(){
    $('.header').height($(window).height());
})

Ajouter.Plat({ name: 'Quesadillas', preparation: '30', ingrédients: ['17', '13', '20', '18'], prixPreparation: '3' });

Table.Plat(plats); // on remplit le tableau présent dans le code HTML ( Plats )