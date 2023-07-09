const inputNumber1 = document.querySelector('#number1');
const inputNumber2 = document.querySelector('#number2');
const inputNumber3 = document.querySelector('#number3');
const inputNumber4 = document.querySelector('#number4');
const btn = document.querySelector('#calculate');
const outputResult = document.querySelector('#result');

btn.addEventListener('click', calcultateAverage);

function calcultateAverage() {
    // Convertismo y obtenemos valores
    let number1 = Number(inputNumber1.value);
    let number2 = Number(inputNumber2.value);
    let number3 = Number(inputNumber3.value);
    let number4 = Number(inputNumber4.value);

    // Verificamos el ingreso de los números
    if (!number1 && !number2 && !number3 && !number4) {
        outputResult.innerText = `Por favor, ingrese los números`;
        return;
    } else {
        // Calculamos el promedio
        let average = (number1 + number2 + number3 + number4) / 4;

        // Mensaje final
        outputResult.innerText = `El número promedio es ${average}`;
    }
}