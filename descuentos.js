const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount) {
        pResult.innerHTML = 'Por favor, llena el formulario.';
        return;
    }

    if (discount > 100) {
        pResult.innerHTML = 'No te vamos a dar un descuento tan grande. Vas a tener que pagar.';
        return;
    }

    const newPrice = ( price * (100 - discount)) / 100;

    pResult.innerHTML = 'El nuevo precio con descuento es S/' + newPrice;

}