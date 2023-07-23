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

function proyeccionPorPersona(nombrePersona) {
    // Llamamos a la función encontrarPersona con el nombre dado y guardamos la lista de trabajos de la persona encontrada
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    // Creamos un array vacío para almacenar los porcentajes de crecimiento
    let porcentajesCrecimiento = [];

    // Iteramos sobre la lista de trabajos de la persona
    for (let i = 1; i < trabajos.length; i++) {// empezamos en 1 porque no empezaremos de 'ganar cero dinero'.
        // Obtenemos el salario del trabajo actual y el anterior
        const salarioActual = trabajos[i].salario;
        const salarioPasado = trabajos[i - 1].salario; // queremos irnos un año hacia atrás.
        // Calculamos el crecimiento en términos absolutos y luego lo convertimos a un porcentaje
        const crecimiento = salarioActual - salarioPasado;
        const porcentajeCrecimiento = crecimiento / salarioPasado;
        // Imprimimos el array de porcentajes de crecimiento y su mediana
        porcentajesCrecimiento.push(porcentajeCrecimiento);
    }

    // Calculamos la mediana de los porcentajes de crecimiento utilizando una función externa (PlatziMath.calcularMediana)
    const medianaPorcentajeCrecimiento = PlatziMath.calcularMediana(porcentajesCrecimiento);
    console.log({porcentajesCrecimiento, medianaPorcentajeCrecimiento}); // Nos da el crecimiento por cada año

    // Obtenemos el último salario registrado para la persona
    const ultimoSalario = trabajos[trabajos.length - 1].salario;
    // Calculamos cuánto sería el aumento si se mantiene la mediana de los porcentajes de crecimiento 
    const aumento = ultimoSalario * medianaPorcentajeCrecimiento; 
    const nuevoSalario = ultimoSalario + aumento;
    console.log(`El nuevo salario es ${nuevoSalario}`);
}