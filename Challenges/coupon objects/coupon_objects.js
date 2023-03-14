const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

//const arrayUObject = undefined, // ['cupones': descuento] {}?

const couponsObj = {
    'JuanDC': 30,
    'NoSe': 25,
    '123': 20,
};

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if(!price || !coupon) {
        pResult.innerText = `Por favor, llene el formulario`;
        return;
    }

    let discount;

    if (couponsObj[coupon]) {
        discount = couponsObj[coupon];
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = `El nuevo producto con descuento es S/${newPrice}`;
}