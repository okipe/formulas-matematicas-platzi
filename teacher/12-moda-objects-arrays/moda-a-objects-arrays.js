function esPar(lista) {
    // Devuelve true si es par (sin residuo) y false si es impar, 
    return !(lista.length % 2);
}

function esImpar(lista) {
    // Devuelve 1 si es impar, 0 si es par.
    return lista.length % 2;
}

function calcularMediana(listaDesordenada) {
    const lista = ordenarLista(listaDesordenada);

    // Verificamos si la longitud de la lista es par
    const listaEsPar = esPar(lista);
    
    if (listaEsPar) {
        // Si la longitud de la lista es par, tomamos los dos elementos en medio de la lista
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        // Creamos una lista con los dos elementos en medio: calcularPromedio( [ lista[indexMitad1ListaPar], lista[indexMitad2ListaPar] ] );
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]); // Así es más facil agregar elementos.
        listaMitades.push(lista[indexMitad2ListaPar]);
        
        // calcularPromedio(listaMitades);
        const medianaListaPar = calcularPromedio(listaMitades);
        return medianaListaPar;
    
    } else {
        // Si la longitud de la lista es impar, tomamos el elemento en medio de la lista
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar]; 

        // Imprimimos el índice y el valor del elemento en medio
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
        return medianaListaImpar;
    }
}
 
function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    // Usamos el método reduce para sumar todos los elementos de la lista
    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}
    
function ordenarLista(listaDesordenada) {
    
    /* Esta función ya no se usa, pero estuvo en la clase del profe

    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // Función de comparación para ser usada en el método sort
        return valorAcumulado - nuevoValor;
        // return 5 - 10 => -5;
        // return 5 - 5 => 0;
        // return 10 - 5 => 5;
    } */

    // Usamos el método sort con una función de comparación para ordenar la lista
    // La función de comparación resta dos elementos adyacentes
    // Si el resultado es positivo, el primer elemento va después del segundo en la lista ordenada
    // Si el resultado es negativo, el primer elemento va antes del segundo
    // Si el resultado es cero, los elementos son iguales y su orden no cambia
    
    /* Es función flecha.
    const lista = listaDesordenada.sort((a, b) => a - b); 
    return lista; */
    const lista = listaDesordenada.sort(function(valorAcumulado, nuevoValor) {
        return valorAcumulado - nuevoValor;
    }); 
    return lista;
}