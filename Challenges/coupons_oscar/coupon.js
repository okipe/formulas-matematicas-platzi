let inputPrice = document.querySelector('#price');
let inputCoupon = document.querySelector('#coupon');
let btn = document.querySelector('#calculate');
let pResult = document.querySelector('#result');

btn.addEventListener('click', calculatePriceCoupon);

function calculatePriceCoupon() {
    let price = Number(inputPrice.value);
    let coupon = inputCoupon;
    let discount1 = 0; 

    if (!price) {
        pResult.innerHTML = 'Por favor, llena el formulario.';
        return;
    }

    if (!coupon) {
        pResult.innerHTML = 'El monto a pagar es ' + inputPrice;
        return;
    }

    if (coupon = 'ATX001') {
        discount1 = 10;
        console.log('ATX001');
        
    } else if (coupon = 'ATX002') {
        discount1 = 20;
        console.log('ATX002');
        
    } else {
        pResult.innerHTML = 'Elcupón es incorrecto.';
        
    }

    let newPrice = ( price * (100 - discount1)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento del cupón es S/' + newPrice + '.';

}