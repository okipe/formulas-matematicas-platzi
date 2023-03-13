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

/* 

EXPLICACIÓN GPT-3:

Este código de JavaScript tiene como objetivo calcular el precio de un producto después de aplicar un descuento, usando un cupón de descuento, y mostrar el resultado en una página web. A continuación, se explican las funciones específicas del código:

Las cuatro primeras líneas crean variables que apuntan a elementos del DOM de una página web. inputPrice y inputCoupon apuntan a elementos de formulario HTML que permiten ingresar el precio del producto y el código de descuento, respectivamente. btn apunta a un botón HTML que activa el cálculo del precio con descuento, y pResult apunta a un elemento HTML donde se mostrará el resultado.

La línea btn.addEventListener('click', calcularPrecioConDescuento) agrega un evento de clic al botón btn, que llamará a la función calcularPrecioConDescuento().

La función calcularPrecioConDescuento() se encarga de obtener los valores de price y coupon, y validar que ambos tengan valores. Si alguno de los valores no está presente, se muestra un mensaje en el elemento pResult y se interrumpe la ejecución de la función usando return.

La función usa un switch para determinar el descuento que se aplicará al precio, dependiendo del valor del cupón de descuento ingresado. Si se ingresa el código 'JuanDC', se aplicará un descuento del 30%, y si se ingresa el código 'NoSe', se aplicará un descuento del 25%. Si se ingresa cualquier otro valor, se muestra un mensaje de error en el elemento pResult y se interrumpe la ejecución de la función.

La función calcula el nuevo precio con descuento usando la fórmula ( price * (100 - discount)) / 100, donde price es el precio ingresado en el formulario y discount es el descuento que se obtuvo del cupón.

Finalmente, la función muestra el resultado en el elemento pResult, usando innerHTML para agregar el valor de newPrice al mensaje que se muestra.

*/