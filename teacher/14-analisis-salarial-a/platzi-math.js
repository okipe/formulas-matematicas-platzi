const PlatziMath = {};


PlatziMath.esPar = function esPar(lista) {
    // Devuelve true si es par (sin residuo) y false si es impar, 
    return !(lista.length % 2);
}

PlatziMath.esImpar = function esImpar(lista) {
    // Devuelve 1 si es impar, 0 si es par.
    return lista.length % 2;
}

PlatziMath.calcularModa = function calcularModa(lista) {
    const listaCount = {};

    for (let i = 0; i < lista.length; i++) {
        const elemento = lista[i];
        
        if(listaCount[elemento]) {
            listaCount[elemento] += 1;
        } else {
            listaCount[elemento] = 1;
        }
    }

    console.log(listaCount);

    const listaArray = Object.entries(listaCount);
    const listaOrdenada = ordenarListaBidimensional(listaArray, 1);
    const listaMaxNumber = listaOrdenada[listaOrdenada.length - 1]; // Se pone -1 porquela numeración termina en 0.
    const moda = listaMaxNumber[0];
    // console.log({listaCount, listaArray, listaOrdenada, listaMaxNumber}); 
    // console.log(`La moda es: ${listaMaxNumber[0]}`);
    return moda;
}

PlatziMath.calcularMediana = function calcularMediana(listaDesordenada) {
    const lista = PlatziMath.ordenarLista(listaDesordenada);

    // Verificamos si la longitud de la lista es par
    const listaEsPar = PlatziMath.esPar(lista);
    
    if (listaEsPar) {
        // Si la longitud de la lista es par, tomamos los dos elementos en medio de la lista
        const indexMitad1ListaPar = (lista.length / 2) - 1;
        const indexMitad2ListaPar = lista.length / 2;

        // Creamos una lista con los dos elementos en medio: calcularPromedio( [ lista[indexMitad1ListaPar], lista[indexMitad2ListaPar] ] );
        const listaMitades = [];
        listaMitades.push(lista[indexMitad1ListaPar]); // Así es más facil agregar elementos.
        listaMitades.push(lista[indexMitad2ListaPar]);
        
        // calcularPromedio(listaMitades);
        const medianaListaPar = PlatziMath.calcularPromedio(listaMitades);
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
 
PlatziMath.calcularPromedio = function calcularPromedio(lista) {
    function sumarTodosElementos(valorAcumulado, nuevoValor) {
        return valorAcumulado + nuevoValor;
    }

    // Usamos el método reduce para sumar todos los elementos de la lista
    const sumaLista = lista.reduce(sumarTodosElementos);
    const promedio = sumaLista / lista.length;
    // console.log(promedio);
    return promedio;
}

// [ [0,1], [0,1], [0,1] ]
PlatziMath.ordenarListaBidimensional = function ordenarListaBidimensional(listaDesordenada) {
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        return valorAcumulado[1] - nuevoValor[1];
    }

    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}

    
PlatziMath.ordenarLista = function ordenarLista(listaDesordenada) {
    
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