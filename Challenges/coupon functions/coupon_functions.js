const inputPrice = document.querySelector('#price');
const inputCoupon = document.querySelector('#coupon');
const btn = document.querySelector('#calcular');
const pResult = document.querySelector('#result');

class Coupon {
    constructor(name, discount) {
        this.name = name,
        this.discount = discount
    }
}

const coupons = [];

coupons.push(new Coupon('JuanDC', 30), new Coupon('NoSe', 25), new Coupon('toma',20));

function calcularPrecioConDescuento() {
    
    const cuponValido = coupons.find(item => item.name == inputCoupon.value);
    
    if(cuponValido != undefined) {
        const precioConDescuento = Number((price.value) * (100 - cuponValido.discount) / 100);
        pResult.innerText = `EL precio con descuento aplicado es de S/${precioConDescuento}`;
        console.log(Holaa);
        return;
    } else {
        pResult.innerText = `Descuento no válido`;
        return
    }
}

// Nofuncionó