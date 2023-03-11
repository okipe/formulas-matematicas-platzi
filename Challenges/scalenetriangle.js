// Respuesta de Luis Monroy

export function solution1(lado1, lado2, lado3) {

    let a = lado1;
    let b = lado2;
    let c = lado3;
  
    // Si no es escaleno, no continuamos
    if (a == b || b == c || c == a) {
      return false;
    }
  
    // Si es escaleno, calculamos primero su area
    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
  
    // Ahora usamos que A = bh/2, por lo que h = 2A/b
    let altura_a = Math.floor(2 * area / a);
    let altura_b = Math.floor(2 * area / b);
    let altura_c = Math.floor(2 * area / c);
  
    // IMPTE: No se especifica cual de las alturas se quiere, tras probar el codigo conclui que se busca la altura respecto a 'a' como base
    return altura_a;
  
  }




  // My solution
export function solution(lado1, lado2, lado3) {
    if (lado3 != lado2 && lado2 != lado1) {
        return Math.trunc( ( 2 / lado1) * Math.sqrt( ( ( lado3 + lado2 + lado1 ) / 2 ) * ( ( ( lado3 + lado2 + lado1 ) / 2 ) - lado1 ) * ( ( ( lado3 + lado2 + lado1 ) / 2 ) - lado3) * ( ( ( lado3 + lado2 + lado1 ) / 2 ) - lado2 ) ) )
    } else {
        return false
    }

};

// My solution original

function triangleScaleneHeightCalc(triangleSide1, triangleSide2, triangleSideBase) {
    if (triangleSide1 == triangleSide2 && triangleSide2 == triangleSideBase) {
        console.warn ('This is not an isosceles triangle')
    } else {
        return Math.trunc( ( 2 / triangleSideBase) * Math.sqrt( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSideBase ) * (( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide1) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide2 ) ) )
    }
}; 