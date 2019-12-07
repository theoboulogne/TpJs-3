$(document).ready(function(){
    $('.header').height($(window).height());
})

window.onload = function(){
    
    var form = document.getElementById("auto-suggest");
    var input = form.search;

	input.onkeyup = function(){
		var txt = this.value;
        let Tab = RecherchePlat.name(txt, plats);
        Table.Plat(Tab);
        reset("supprRecherche");
        Affichage.Suggestion(Tab);

    };
    //var selection = document.getElementsByName('selection');
    //selection.onclick = function() {
    //    console.log('aaaaaa')
        //document.getElementById('display1').innerHTML += '<br />' + this.value  + ' clicked';
    //};
    //$('input:radio[name=selection]').change(function() {
        //let idx=0;
        //while(plats[idx].name!=$('input:radio[name=selection]:checked').attr('id')){
        //    idx++;
        //}
        //console.log(idx);
        //ChoixIng(plats[idx].ingrédients);
    //});
    
};
/*
$(document).ready(function() {
    $('input:radio[name=selection]').change(function() {
        let idx=0;
        while(plats[idx].name!=$('input:radio[name=selection]:checked').attr('id')){
            idx++;
        }
        console.log(idx);
        ChoixIng(plats[idx].ingrédients);
    });
});*/




Table.Plat(plats); // on remplit le tableau présent dans le code HTML ( Plats )
//Affichage.Suggestion(plats); // on met tout les plats en suggestion
//Liste.Ingredient();
//Test de recherche basique
/*ChoixIng(RechercheIng.name('s', ingredients))
Table.Plat(RecherchePlat.name('pate', plats)); 


// Fonctionnalités fonctionnelles à implémenter:

//On ajoute un plat( à relier au formulaire d'event pour en ajouter )
Ajouter.Plat({ name: 'Test', preparation: '30', ingrédients: ['17', '13', '20', '18', '1', '2', '3'], prixPreparation: '3' });

//Changement de filtre principal de la barre de recherche
let filtre = 'te';
Table.Plat(RecherchePlat.name(filtre, plats)); // on remplit le tableau présent dans le code HTML ( Plats )   

//Changement de filtre (preparation décroissant) de la barre de recherche
Table.Plat(RecherchePlat.preparation(0, plats)); // 1 pour croissant

//Changement de filtre (prix de preparation décroissant) de la barre de recherche
Table.Plat(RecherchePlat.prixPreparation(0, plats)); // 1 pour croissant

//Changement de filtre (prix total décroissant) de la barre de recherche
Table.Plat(RecherchePlat.prixTotal(0, plats)); // 1 pour croissant

// changer les codes dans input pour adapter la recherche 
// au lieu d'une page dédiée ? ?

//Changement filtre barre de recherche page ingrédient
filtre = 't';
ChoixIng(RechercheIng.name(filtre, ingredients)) 

//Changement de filtre (prix décroissant) de la barre de recherche
ChoixIng(RechercheIng.prix(0, ingredients)) 

//Changement de filtre (prix décroissant) de la barre de recherche
ChoixIng(RechercheIng.local(0, ingredients)) 

*/