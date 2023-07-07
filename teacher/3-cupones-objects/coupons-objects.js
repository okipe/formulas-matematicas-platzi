const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponsObjects = {
    'JuanDC': 30,
    'Nose': 25,
    '123': 15,
}

function calcularPrecioConDescuento() {
    // (P * (100 -D)) / 100
    const price = Number(inputPrice.value); 
    const coupon = inputCoupon.value; 

    // Si no hay cupón, enviará este mensaje de error.
    if (!price || !coupon) {
        outputResult.innerText = 'Por favor, llena el formulario';
        return;
    }

    let discount; // sin asignarle valor todavía

    if (couponsObjects[coupon]) {
        discount = couponsObjects[coupon];
    } else {
        outputResult.innerText = 'El cupón no es válido';
        return;
    }

    const newPrice = (price * (100 - discount) ) / 100;

    outputResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}