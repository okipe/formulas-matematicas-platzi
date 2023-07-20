/* // método básico
if (lista.length % 2) {
    return false;
} else {
    return true;
} */

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
    
    // Usa la función 'reduce' de los arrays en JavaScript para sumar todos los elementos de la lista
    // reduce toma una función de flecha que suma los elementos actuales (a y b) de la lista
    // Esto se hace en una sola línea, lo que hace este código más conciso que el anterior const sumaLista = lista.reduce((a, b) => a + b);
    // const sumaLista = lista.reduce((a, b) => a + b);
    
    // const promedio = sumaLista / lista.length;
    // console.log(promedio);
    // return promedio;
 