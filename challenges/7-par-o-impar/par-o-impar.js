// Declaramos la función de flecha esPar que toma una lista de números como argumento
const esPar = (lista) => { // Lo que está en paréntesis es la condición
    // Almacena la longitud de la lista en una variable llamada cantidadElementos
    const cantidadElementos = lista.length;

    // Utiliza un operador ternario para verificar si la cantidad de elementos es par
    // Si la cantidad de elementos dividida por 2 da un residuo de 0, entonces es par.En ese caso, retorna true. 
    // Si no es par, retorna false
    return ((cantidadElementos % 2) == 0)
        ? true 
        : false;
};

// Llamamos a la función esPar con un array [1, 2, 3] y muestra el resultado en consola
// Como la longitud de la lista es 3, que es un número impar, entonces la función debería retornar false

console.log(esPar([1, 2, 3]));

/* CONSOLE ******************
Debería imprimir 'false'
****************************/