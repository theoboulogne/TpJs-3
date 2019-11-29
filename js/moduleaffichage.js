
var Affichage =  (function(){
    return{
//On génère la balise <tr> dans le tableau sélectionné puis on y ajoute tout les éléments du tableau
        Ligne : (myArray, id) =>
        {
            let elem = document.getElementById(id);
            let TR = document.createElement('tr');
            elem.appendChild(TR);

            for(let i in myArray){
                let TD = document.createElement('td');
                TD.innerHTML = myArray[i];
                TR.appendChild(TD);
            }
            return TR;
        },
//On appelle 'Ligne' puis on ajoute une balise <input> de type radio 
//pour sélectionner les ingrédients affichés
        LignePlat : (myArray, idx) => 
        {
            let TR = Affichage.Ligne(myArray, 'plat');

            let TD = document.createElement('td');
            TR.appendChild(TD);

            let INPUT = document.createElement('input');
            INPUT.setAttribute('type', 'radio');
            INPUT.setAttribute('name', 'selection');
            INPUT.setAttribute('id', myArray[0]);
            INPUT.setAttribute("onClick", 'ChoixIng(' + idx + ')');

            TD.appendChild(INPUT)
        },
//On affiche les ingrédients sélectionnés et on ajoute 
//un attribut 'suppr' pour les retirer par la suite
        LigneIng : (myArray) => 
        {
            let TR = Affichage.Ligne(myArray, 'ing');
            TR.setAttribute("id", "suppr");
            TR.setAttribute("class", "bg-info");
        },

    }
})();
