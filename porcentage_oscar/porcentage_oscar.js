let getAmount = document.querySelector(".get-amount");
let result = document.querySelector(".result");

getAmount.addEventListener("click", calculate);

function calculate (){
    let number = parseFloat(document.querySelector(".amount--original").value);
    let porcentage = parseFloat(document.querySelector(".discount--porcentage").value);

    getAmount = ( number * ( 100 - porcentage ) ) / 100;

    result.innerHTML = `Su nuevo monto a pagar, con el descuento de ${porcentage}%, es de S/${getAmount}.`;

}