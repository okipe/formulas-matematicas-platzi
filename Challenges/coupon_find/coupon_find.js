const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponList = [];
couponList.push({
    name: 'JuanDC',
    discount: 30,
});
couponList.push({
    name: 'NoSe',
    discount: 20,
});
couponList.push({
    name: '123',
    discount: 15,
});

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;
    
    if(!price || !coupon) {
        pResult.innerText = `Por favor, llene el formulario`;
        return;
    }

    let discount;

    function isCouponInArray(couponElement){ // {name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponList.find(isCouponInArray); // {}

    if (couponInArray) {
        discount = couponInArray.discount;
    } else {
        pResult.innerText = `El cupón no es válido`;
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;
    pResult.innerText = `El nuevo precio con descuento es S/${newPrice}`;

/*     console.log({
        coupon,
        discount,
        couponInArray,
        couponList,
    }); */

}