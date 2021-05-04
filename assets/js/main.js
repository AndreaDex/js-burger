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
    console.log(addOnCost);
    /* selezionare checked box */
    var checks = document.querySelectorAll("input[type='checkbox']");
    console.log(checks);
    /* Calcolare il totale delle aggiunte tramite controllo checked box */
    for (let index = 0; index < checks.length; index++) {
        const element = checks[index];
        console.log(element);
        var elPrice = element.getAttribute("data-price");
        console.log(elPrice);
        if (element.checked == true){
            addOnCost += Number(elPrice)
         }
        
    }
    //Prezzo con aggiunte utente
    var addBurgerPrice = basePrice + addOnCost;
    console.log(addBurgerPrice);
    //Lista coupon sconto
    var couponSconto = ["sconto10","sconto15","sconto20"]
    //Verifica coupon, applica sconto, stampa
    var userFinalPrice = document.getElementById("show_price");
    console.log(userFinalPrice);
    var inputCoupon = document.getElementById("coupon").value;
    if (couponSconto.includes(inputCoupon) && inputCoupon === "sconto10" ){
        addBurgerPrice -= addBurgerPrice * 0.1;
        userFinalPrice.innerHTML = "$ " + addBurgerPrice;
        
    } else if (couponSconto.includes(inputCoupon) && inputCoupon === "sconto15") {
        addBurgerPrice -= addBurgerPrice * 0.15;
        userFinalPrice.innerHTML = "$ " + addBurgerPrice;
    }else if (couponSconto.includes(inputCoupon) && inputCoupon === "sconto20"){
        addBurgerPrice -= addBurgerPrice * 0.15;
        userFinalPrice.innerHTML = "$ " + addBurgerPrice;
    } else {
        userFinalPrice.innerHTML = "$ " + addBurgerPrice;
    }
}
