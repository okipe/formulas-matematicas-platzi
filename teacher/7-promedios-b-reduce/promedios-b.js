// Declaramos la función calcularPromedio que toma como argumento una lista de números
function calcularPromedio(lista) {

    // Declaramos una función sumarTodosElementos que toma dos argumentos: valorAcumulado y nuevoValor
    // Esta función se usará para sumar todos los elementos de la lista
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        // Retorna la suma de valorAcumulado y nuevoValor
        return valorAcumulado + nuevoValor;
    }

    // Usa la función reduce de los arrays en JavaScript para sumar todos los elementos de la lista
    // reduce toma como argumento la función sumarTodosElementos y la aplica a todos los elementos de la lista
    const sumaLista = lista.reduce(sumarTodosElementos);

    // Una vez que hemos sumado todos los elementos, calculamos el promedio dividiendo la suma total por la cantidad de elementos
    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}
 