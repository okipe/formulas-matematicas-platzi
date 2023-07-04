console.group('Cuadrado');

/* CUADRADO */

console.log("Ingrese el valor del lado del cuadrado");
 
/* console.group('Cuadrado') 

const ladoCuadrado = 5;
const perimetroCuadrado = ladoCuadrado * 4;
const areaCuadrado = Math.pow(ladoCuadrado,2); // equivalente a ladoCuadrado * ladoCuadrado

// Está raro que yo busque las variables en la consola, por ello usaré console.log
console.log({
    ladoCuadrado,
    perimetroCuadrado,
    areaCuadrado,
}) */



function calcularCuadrado(lado) {
    return {
        perimetro: lado * 4,
        area: lado * lado,
    }
}

console.groupEnd('Cuadrado');

console.group('Triangulo');

/* TRIÁNGULO */

console.log("Ingrese los cuatros valores del triángulo");

/* Sin usar funciones */
const ladoTriangulo1B = 6;
const ladoTriangulo2B = 6;
const ladoTrianguloBaseB = 4;
const semiperimetroTrianguloB = (ladoTriangulo1B + ladoTriangulo2B + ladoTrianguloBaseB) / 2;

const alturaTrianguloB = (2 / ladoTrianguloBaseB) * Math.sqrt(semiperimetroTrianguloB * (semiperimetroTrianguloB - ladoTriangulo1B) * (semiperimetroTrianguloB - ladoTriangulo2B) * (semiperimetroTrianguloB - ladoTrianguloBaseB));

const perimetroTrianguloB = ladoTriangulo1B + ladoTriangulo2B + ladoTrianguloBaseB;
const areaTrianguloB = (ladoTrianguloBaseB * alturaTrianguloB) / 2;

console.log({
    ladoTriangulo1B,
    ladoTriangulo2B,
    ladoTrianguloBaseB,
    semiperimetroTrianguloB,
    alturaTrianguloB,
    perimetroTrianguloB,
    areaTrianguloB,
})


function calcularTriangulo(ladoTriangulo1, ladoTriangulo2, ladoTrianguloBase, alturaTriangulo) {
    return {
        perimetroTriangulo: ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase,
        // alturaTriangulo: (2 / ladoTrianguloBase) * Math.sqrt( ( (ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase) / 2) * ((ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase / 2) - ladoTriangulo1) * ((ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase / 2) - ladoTriangulo2) * ((ladoTriangulo1 + ladoTriangulo2 + ladoTrianguloBase / 2) - ladoTrianguloBase)),
        areaTriangulo: (ladoTrianguloBase * alturaTriangulo) / 2,
    }
}

function calcularAlturaTriangulo(ladoTriangulo1, ladoTrianguloBase) {
   if (ladoTriangulo1 == ladoTrianguloBase) {
    console.warn('Este no es un triángulo isosceles');
   } else {
    // h = raizcuadrada(lado1**2 - (b**2)/4)
    return Math.sqrt( ( ladoTriangulo1 ** 2) - ( (ladoTrianguloBase ** 2) ) / 4 );
   }
}

console.groupEnd('Triangulo');

/* CIRCULO */

console.group('Circulo');

const radioCirculo = 3;
const diametroCirculo = radioCirculo * 2;
const PI = 3.1415
const circunferencia = diametroCirculo * PI;
const areaCirculo = (radioCirculo ** 2) * PI;

console.log ({
    radioCirculo,
    diametroCirculo,
    PI, 
    circunferencia, 
    areaCirculo,
})

function calcularCirculo(radio) {
    const diametro = radio * 2;
    const radioAlCuadrado = Math.pow(radio, 2);

    return {
        circunferencia: diametro * Math.PI.toFixed(4), //toFixed limita el número de dígitos
        area: radioAlCuadrado * Math.PI.toFixed(4),
    }
}

console.groupEnd('Circulo');

console.group('Triángulo Escaleno');

console.log('Escriba los 3 valores de los lados del triángulo')

/* RETO TRIÁNGULO ESCALENO - aprobado por verificador Platzi */
function calcularTrianguloEscaleno(ladoTriangulo1, ladoTriangulo2, ladoTriangulo3) {
    if (ladoTriangulo3 != ladoTriangulo2 && ladoTriangulo1 != ladoTriangulo2) {

        let a = ladoTriangulo1;
        let b = ladoTriangulo2;
        let c = ladoTriangulo3;

        return Math.trunc ( ( 2 / a) * Math.sqrt( ( ( c + b + a ) / 2 ) * ( ( ( c + b + a ) / 2 ) - a ) * ( ( ( c + b + a ) / 2 ) - c) * ( ( ( c + b + a ) / 2 ) - b ) ) );
    } else {
        return false;
    }
}

console.groupEnd('Triángulo Escaleno');