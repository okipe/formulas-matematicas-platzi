// Seleccionamos los elementos HTML necesarios
const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

// Creamos una lista de cupones
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
    // Convertimos los valores ingresados en el formulario a variables
    const price = Number(inputPrice.value); 
    const coupon = inputCoupon.value; 

    // Si no hay cupón, enviará este mensaje de error.
    if (!price || !coupon) {
        outputResult.innerText = 'Por favor, llena el formulario';
        return;
    }

    // Variable para almacenar el descuento
    let discount; // sin asignarle valor todavía

    // Función para verificar si el cupón ingresado existe
    function isCouponInArray(couponElement) { //{name, discount}
        return couponElement.name == coupon;
    }

    // Usamos el método .find para buscar el cupón 
    const couponInArray = couponsList.find(isCouponInArray); // solo nos envía un objeto {}, no un array [{}]

    // Si el cupón se encuentra en la lista, se asigna su descuento. Si no, se lanza mensaje de error.
    if (couponInArray) { 
        discount = couponInArray.discount; 
    } else {
        outputResult.innerText = 'El cupón no es válido';
        return;
    }

    // Logs de deputación
    console.log({
        coupon,
        discount,
        couponInArray,
        couponsList,
    });

    const newPrice = (price * (100 - discount) ) / 100;

    outputResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}