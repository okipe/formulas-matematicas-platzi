const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const coupon = inputCoupon.value;

    if(!price || !coupon) {
        pResult.innerHTML = 'Por favor, llena el formulario.';
        return;
    }

    let discount;

// Método con switch
    switch(coupon) {
        case 'JuanDC':
            discount = 30;
            break;
        case 'NoSe':
            discount = 25;
            break;
        default:
            pResult.innerText = 'El cupón no es válido';
            return;
    }

// TAREA: Reducir todo a un if/else y un array. Que haya un condicional.

// Método con if - else
/*     if (coupon == 'JuanDC') {
        discount = 30;
    } else if (coupon == 'NoSe') {
        discount = 25;
    } else {
        pResult.innerText = 'El cupón no es válido';
        return;
    } */




    const newPrice = ( price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es S/' + newPrice;

}