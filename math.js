// SQUARE

console.group('Square');

const squareSide= 5;
const squarePerimeter = squareSide * 4;

const squareArea = squareSide * squareSide;

console.log({
    squareSide,
    squarePerimeter,
    squareArea,
});

function squareCalc (side) {
    return {
        perimeter: side * 4,
        area: side * side,
    }
};

console.groupEnd('Square');

// TRIANGLE

console.group('Triangle');

const triangleSide1 = 6;
const triangleSide2 = 6;
const triangleSideBase = 6;
const triangleHeight = 4;

const trianglePerimeter = triangleSide1 + triangleSide2 + triangleSideBase;
const triangleArea = (triangleHeight * triangleHeight) / 2;

function triangleCalc (triangleSide1, triangleSide2, triangleSideBase, triangleHeight) {
    return {
        trianglePerimeter: triangleSide1 + triangleSide2 + triangleSideBase,
        triangleArea: (triangleSideBase * triangleHeight) / 2,
    }
};

// Heigh triagle (Pitaphora)

function triangleHeightCalc(triangleSide1, triangleSideBase) {
    if (triangleSide1 == triangleSideBase) {
        console.warn('This is not an isosceles triangle')
    } else {
        // h = squareRoot(side1**2 - (base**2)/4)
        return Math.sqrt( (triangleSide1 ** 2) - ( (triangleSideBase ** 2) / 4 ) );
    }
};

/* Scalene triangle

function triangleScaleneHeightCalc(triangleSide1, triangleSide2, triangleSideBase) {
    return {
        triangleScaleneHeight: Math.trunc( ( 2 / triangleSideBase) * Math.sqrt( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSideBase ) * (( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide1) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide2 ) ) )
    }
};
*/

// Scalene triangle 

/* function triangleScaleneHeightCalc(triangleSide1, triangleSide2, triangleSideBase) {
    if (triangleSide1 == triangleSide2 && triangleSide2 == triangleSideBase) {
        console.warn ('This is not an isosceles triangle')
    } else {
        return Math.trunc( ( 2 / triangleSideBase) * Math.sqrt( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSideBase ) * (( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide1) * ( ( ( triangleSide1 + triangleSide2 + triangleSideBase ) / 2 ) - triangleSide2 ) ) )
    }
}; */


function solution(lado1, lado2, lado3) {
    if (lado1 != lado2 && lado2 != lado3) {
        return Math.trunc( ( 2 / lado3) * Math.sqrt( ( ( lado1 + lado2 + lado3 ) / 2 ) * ( ( ( lado1 + lado2 + lado3 ) / 2 ) - lado3 ) * ( ( ( lado1 + lado2 + lado3 ) / 2 ) - lado1) * ( ( ( lado1 + lado2 + lado3 ) / 2 ) - lado2 ) ) )
    } else {
        return false;
    }
};

// Math.truc devuelve número entero

console.log({
    triangleSide1, 
    triangleSide2,
    triangleSideBase,
    triangleHeight,
    trianglePerimeter,
    triangleArea,
});



console.groupEnd('Triangle');

// CIRCLE

console.group('Circle');

const circleRadius = 3;
const circleDiameter = circleRadius * 2;
const PI = 3.1415;

const circumference = circleDiameter * PI;
const circleArea = (circleRadius ** 2) * PI;

console.log({
    circleRadius,
    circleDiameter,
    PI,
    circumference,
    circleArea,
});

function circleCalc(radius) {
    const diameter = radius * 2;
    const radiussquared = Math.pow(radius, 2);

    return {
        //to fixed is for limit the quantity of digits.
        circumference: diameter * Math.PI.toFixed(6),
        area: radiussquared * Math.PI.toFixed(6),
    }
};

console.groupEnd('Circle');

