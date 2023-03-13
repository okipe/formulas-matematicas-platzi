const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

/* // con Objeto

const arrayUObject = undefined; // ['cupones': descuento] {}?

const couponObj = {
    'JuanDC': 15,
    'NoSe': 25,
    '123': 5,
    '456': 10,
}; */

const couponList = [];
couponList.push({
    name: 'JuanDC',
    discount: 15, 
});
couponList.push({
    name: 'NoSe',
    discount: 25,
})

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerText = 'Por favor, llena el formulario.';
        return;
    }

    let discount;

    function isCouponInArray(couponElement) { // {name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(isCouponInArray); // {}

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = 'El cupón no es valido';
        return;
    }

/*     if (couponObj[coupon]) {
        discount = couponObj[coupon];
    } else {
        pResult.innerText = 'El cupón no es válido';
    } */

    const newPrice = ( price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es S/' + newPrice;

}