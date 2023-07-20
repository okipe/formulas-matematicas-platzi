// Función para verificar si la longitud de la lista es par
function esPar(lista) {
    // Devuelve true si es par (sin residuo) y false si es impar, 
    return !(lista.length % 2);
}

// Función para verificar si la longitud de la lista es impar
function esImpar(lista) {
    // Devuelve 1 si es impar, 0 si es par.
    return lista.length % 2;
}

function calcularMediana(lista) {

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
    
    // Función de comparación para ser usada en el método sort
    function ordenarListaSort(valorAcumulado, nuevoValor) {
        // Si el valor acumulado es mayor que el nuevo valor, retorna 1, indicando que el elemento actual debe ir después del siguiente. Si es igual, retorna 0 (la posición de los elementos no deben cambiar). Si es menor, retorna -1 (indicando que el elemento actual debe ir antes que el siguiente).
        if (valorAcumulado > nuevoValor) {
            return 1;
        } else if (valorAcumulado == nuevoValor) {
            return 0;
        } else if (valorAcumulado < nuevoValor) {
            return -1;
        }
    }

    // Utilizamos el método sort con la función de comparación para ordenar la lista. El método sort muta la lista original, por lo que no necesitamos hacer una copia
    const lista = listaDesordenada.sort(ordenarListaSort);
    return lista;
}