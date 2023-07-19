function esPar(lista) {
    /* // método básico
    if (lista.length % 2) {
        return false;
    } else {
        return true;
    } */

    return !(lista.length % 2);
}

function esImpar(lista) {
    return lista.length % 2;
}

function calcularMediana(lista) {
    const listaEsPar = esPar(lista);

    if (listaEsPar) {
        // Probar cómo calcular lista par
    } else {
        const indexMitadListaImpar = Math.floor(lista.length / 2);
        const medianaListaImpar = lista[indexMitadListaImpar]; 
        console.log(indexMitadListaImpar);
        console.log(medianaListaImpar);
    }
}
    
    
    // Usa la función reduce de los arrays en JavaScript para sumar todos los elementos de la lista
    // reduce toma una función de flecha que suma los elementos actuales (a y b) de la lista
    // Esto se hace en una sola línea, lo que hace este código más conciso que el anterior const sumaLista = lista.reduce((a, b) => a + b);
    // const sumaLista = lista.reduce((a, b) => a + b);
    
    // const promedio = sumaLista / lista.length;
    // console.log(promedio);
    // return promedio;
 