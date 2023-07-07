// Seleccionamos elementos
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calculate');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceWithDiscount);

// Objeto con los códigos de cupón como claves
const couponsObjects = {
    'JuanDC': 30,
    'NoSe': 25,
    '123': 20,
    'abc': 15,
};

// Función de calcular precio
function calculatePriceWithDiscount() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        outputResult.innerText = 'Por favor, rellene el formulario';
        return;
    }

    let discount;

    // Si el cupón ingresado existe en el objeto couponsObjects, se obtiene su descuento
    if (couponsObjects[coupon]) {
        discount = couponsObjects[coupon]
    } else {
        outputResult.innerText = 'El cupón no es válido.';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    outputResult.innerText = `El nuevo producto con descuento es S/${newPrice}`;
}