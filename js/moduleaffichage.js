
var Affichage =  (function(){
    return{
        Suggestion : (myArray) => 
        {
            
            let elem = document.getElementById("suggestion-recherche");
            for(let i in myArray){
                let OPTION = document.createElement('option');
                OPTION.setAttribute("value", myArray[i].name);
                OPTION.setAttribute("id", "supprRecherche");
                elem.appendChild(OPTION);
                console.log(OPTION);
            }
            console.log(myArray);
        },
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
        LignePlat : (myArray, tab) => 
        {
            let TR = Affichage.Ligne(myArray, 'plat');
            TR.setAttribute("id", "supprPlat");

            let TD = document.createElement('td');
            TR.appendChild(TD);

            let INPUT = document.createElement('input');
            INPUT.setAttribute('type', 'radio');
            INPUT.setAttribute('name', 'selection');
            INPUT.setAttribute('id', myArray[0]);
            INPUT.setAttribute("onClick", 'ChoixIng(TabIng([' + tab + ']))');
            console.log(tab);
            TD.appendChild(INPUT)
        },
//On affiche les ingrédients sélectionnés et on ajoute 
//un attribut 'suppr' pour les retirer par la suite
        LigneIng : (myArray) => 
        {
            let TR = Affichage.Ligne(myArray, 'ing');
            TR.setAttribute("id", "supprIng");
            TR.setAttribute("class", "bg-info");
        },

    }
})();


var Liste =  (function(){
    return{
        Ingredient : () => 
        {
        /*
            <div class="list-group-item list-group-item-info">
                <input type="checkbox"> 
                <span class="list-group-item-text"> Default</span>
            </div>
        */

            let elem = document.getElementById("listeingredients");
            for(let i in ingredients){
                let DIV = document.createElement('div');
                DIV.setAttribute("class", "list-group-item list-group-item-info ");
                let INPUT = document.createElement('input');
                INPUT.setAttribute("type", "checkbox");
                INPUT.setAttribute("value", ingredients[i].idIng);
                let SPAN = document.createElement('span');
                SPAN.setAttribute("class", "list-group-item-text ");
                SPAN.innerHTML = "&nbsp" + ingredients[i].name;
                DIV.appendChild(INPUT);
                DIV.appendChild(SPAN);
                elem.appendChild(DIV);
            }
        },
    }
})();