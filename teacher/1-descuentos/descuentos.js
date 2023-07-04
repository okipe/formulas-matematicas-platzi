const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount')
const btn = document.querySelector('#calcular');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    // (P * (100 -D)) / 100
    const price = Number(inputPrice.value); 
    const discount = Number(inputDiscount.value);

    console.log({price, discount});

    if (!price || !discount) {
        pResult.innerText = 'Por favor, llena el formulario';
        return;
    }

    if (discount > 100) {
        outputResult.innerText = 'Ajá, ya quisieras, no te daremos dinero. ¡PAGA!';
        return;
    }
    
    const newPrice = (price * (100 - discount) ) / 100;

    outputResult.innerText = 'El nuevo precio con descuento es $' + newPrice;
}