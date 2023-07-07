// Obtenemos los elementos de entrada
let inputPrice = document.querySelector('#price');
let inputCoupon = document.querySelector('#coupon');
let btn = document.querySelector('#calculate');
let outputResult = document.querySelector('#result');

// Detector de eventos en el botón
btn.addEventListener('click', calculatePriceCoupon);

function calculatePriceCoupon() {
    // Convertimos y obtenemos valores
    let price = Number(inputPrice.value);
    let coupon = inputCoupon.value;
    let discount1 = 0;

    // Verificamos el ingreso del precio y cupón
    if (!price) {
        outputResult.innerHTML = 'por favor, completa el formulario';
        return;
    }

    if (!coupon) {
        outputResult.innerHTML = `El precio a pagar es ${price}`;
        return;
    }

    // Verificamos los cupones ingresados
    switch (coupon) {
        case 'ATX001':
            discount1 = 10;
            console.log('ATX001 applied');
            break;
        case 'ATX002':
            discount1 = 20;
            console.log('ATX002 applied');
            break;
        case 'ATX003':
            console.log('ATX003 applied');
            break;
        default:
            outputResult.innerHTML = 'El cupón es incorrecto.';
            return;
    }

    // Calculamos el precio
    let newPrice = ( price * (100 - discount1)) / 100;

    // Mensaje final
    outputResult.innerHTML = `El precio con descuento es S/${newPrice}`;
}