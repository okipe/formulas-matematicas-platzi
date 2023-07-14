function calcularPromedio(lista) {
    // sumar todos los elementos del array / cantidad de elementos

    let sumaLista = 0;

    for (let i = 0; i < lista.length; i++) {
        sumaLista = sumaLista + lista[i]; 
    }

    const promedio = sumaLista / lista.length;
    console.log(promedio);
    return promedio;
}
