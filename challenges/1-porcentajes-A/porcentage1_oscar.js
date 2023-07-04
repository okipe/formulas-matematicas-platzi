// Obtenemos el elemento HTML con la clase "get-amount", que probablemente es un botón que el usuario presionará para calcular el descuento.
let getAmount = document.querySelector(".get-amount");

// Obtenemos el elemento HTML con la clase "result", que es donde se mostrará el resultado del cálculo.
let result = document.querySelector(".result");

// Agregamos un detector de eventos al botón "get-amount". Cuando se hace clic en el botón, se ejecutará la función "calculate".
getAmount.addEventListener("click", calculate);

function calculate () {
    // Obtenemos el valor del elemento con la clase "amount--original" y lo convertimos a un número flotante.
    let number = parseFloat(document.querySelector(".amount--original").value);
    // Hacemos lo mismo para el valor del elemento con la clase "discount--porcentage" 
    let porcentage = parseFloat(document.querySelector(".discount--porcentage").value);

    // Calculamos el monto después de aplicar el descuento.
    getAmount = ( number * (100 - porcentage) ) / 100;

    // Finalmente, mostramos el resultado en el elemento "result".
    result.innerHTML = `Su nuevo monto a pagar, con el descuento de ${porcentage}%, es de S/${getAmount}.`;
}