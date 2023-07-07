const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon')
const btn = document.querySelector('#calcular');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 -D)) / 100
    const price = Number(inputPrice.value); 
    const coupon = inputCoupon.value; 

    // Si no hay cupón, enviará este mensaje de error.
    if (!price || !coupon) {
        pResult.innerText = 'Por favor, llena el formulario';
        return;
    }

    let discount; // sin asignarle valor todavía

    switch (coupon) {
        case 'JuanDC_es_Batman':
            discount = 30;
            break;
        
        case 'no_se_lo_digas_a_nadie':
            discount = 25;
            break;

        default:
            outputResult.innerText = 'El cupón no es válido';
            return;
    }

    /*  
    if (coupon == 'JuanDC_es_Batman') {
        discount = 30;
    } else if (coupon == 'no_se_lo_digas_a_nadie') {
        discount = 25;
    } else {
        outputResult.innerText = 'El cupón no es válido';
        return;
    } */

    const newPrice = (price * (100 - discount) ) / 100;

    outputResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}