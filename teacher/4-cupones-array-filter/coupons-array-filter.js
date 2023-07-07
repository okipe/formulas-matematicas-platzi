const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

const couponsList = [];
couponsList.push({
    name: 'Juan_DC',
    discount: 30,
});
couponsList.push({
    name: 'NoSe',
    discount: 25,
});
couponsList.push({
    name: 'xd',
    discount: 20,
});

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

    function isCouponInArray(couponElement) { //{name, discount}
        return couponElement.name == coupon;
    }

    const couponInArray = couponsList.filter(isCouponInArray);

    if (couponInArray.length > 0) { // Indica que al menos haya un elemento
        discount = couponInArray[0].discount; 
    } else {

        outputResult.innerText = 'El cupón no es válido';
        return;
    }

    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    const newPrice = (price * (100 - discount) ) / 100;

    outputResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}