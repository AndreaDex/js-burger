//Creare lista ingredienti dinamica
//Lista dati ingredienti
var ingredientsList = [
    ["Cheese", "1"],
    ["Egg", "1"],
    ["Mustard", "0.2"],
    ["Tomato", "1"],
    ["Lettuce", "0.5"],
    ["Ketchup", "0.2"],
];
/* Ciclo per inserire gli elementi nel markup */
for (var i = 0; i < ingredientsList.length; i++) {
    var element = ingredientsList[i];
    document.querySelector(".ingredients").insertAdjacentHTML(
        "beforeend", `
            <div class="form-card">
                <img src="./assets/img/${ingredientsList[i][0] + '.svg'}" alt="${ingredientsList[i][0]}">
                <label for="${ingredientsList[i][0]}">${ingredientsList[i][0]}</label>
                <input type="checkbox" name="${ingredientsList[i][0]}" id="${ingredientsList[i][0]}" data-price="${ingredientsList[i][1]}">
                <span>add</span>
            </div>
        `
    )
    
}

/**
 * #Calcola il prezzo finale del panino
 */
function calcPrice() {
    var basePrice = 6 ;
    
    var addOnCost = null;
    /* selezionare checked box */
    var checks = document.querySelectorAll("input[type='checkbox']");
    console.log(checks);
    /* Calcolare il totale delle aggiunte tramite controllo checked box */
    
}
