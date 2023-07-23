console.log(salarios);

// Análisis de persona
function encontrarPersona(personaEnBusqueda) {
    // Usamos el método "find" de los arrays para buscar en el array "salarios" la primera persona cuyo nombre coincida con "personaEnBusqueda".
    // Retorna el objeto persona correspondiente o undefined si no lo encuentra.
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* Otra forma de hacerlo ****************
    // Algunas personas pueden encontrarla más fácil de entender si no están acostumbradas a las funciones flecha.
    const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
    });

    return persona
    *************************************/
}

function medianaPorPersona(nombrePersona) {
    // Llamamos a la función "encontrarPersona" para obtener el objeto persona correspondiente al nombre. Luego, accedemos a la propiedad "trabajos" de ese objeto, que debe ser un array de objetos trabajo.
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    // Usamos el método "map" de los arrays para transformar el array "trabajos" en un array de salarios. La función que pasamos a "map" toma un objeto trabajo y devuelve el valor de la propiedad "salario".
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    // Llamamos a la función "calcularMediana" del objeto "PlatziMath" (que está definido en PlatziMath.js) para calcular la mediana de los salarios.
    const medianaSalarios = PlatziMath.calcularMediana(salarios); 

    console.log(medianaSalarios);
    return medianaSalarios;
}