// Obtenemos el elemento de entrada del precio original y el descuento.
const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');

// El botón que activará el cálculo y el elemento que mostrará el resultado
const btn = document.querySelector('#calculate');
const outputResult = document.querySelector('#result');

btn.addEventListener("click", calcularPrecioDescuento);

function calcularPrecioDescuento() {
    // Convertimos el valor de entrada del precio y el descuento a números.
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);
    let newPrice = 0;

    // Verificamos si el precio o el descuento están vacíos. Si es así, mostramos un mensaje de error y terminamos la ejecución de la función.
    if(!price || !discount) {
        outputResult.innerText = `Por favor, rellena el formulario`;
        return;
    } else if (discount > 100) {
        outputResult.innerText = `No te vamos a dar un descuento tan grande`;
        return; 
    } else {
        // Calculamos el nuevo precio con el descuento
        newPrice = (price * (100 - discount) ) / 100;
        
        outputResult.innerText = `El nuevo precio con descuento es S/${newPrice}.`;
    }
}