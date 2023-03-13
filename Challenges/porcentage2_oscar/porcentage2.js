const inputPrice = document.querySelector('#price');
const inputDiscount = document.querySelector('#discount');
const btn = document.querySelector('#calculate');
const pResult = document.querySelector('#result');

btn.addEventListener("click", calcularPrecioConDescuento);

function calcularPrecioConDescuento() {
    const price = Number(inputPrice.value);
    const discount = Number(inputDiscount.value);

    if(!price || !discount) {
        pResult.innerText = 'Por favor, llena el formulario';
        return;
    }

    if (discount > 100) {
        pResult.innerText = 'No te vamos a dar un descuento tan grande. Vas a tener que pagar.';
        return;
    }

    const newPrice = (price * (100 - discount)) / 100;

    pResult.innerText = `Èl nuevo precio con descuento es S/${newPrice}.`;

}
