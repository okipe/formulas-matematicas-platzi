console.log(salarios);

// Análisis de persona
function encontrarPersona(personaEnBusqueda) {
    // Buscando la primera persona cuyo nombre coincida con "personaEnBusqueda".
    return salarios.find(persona => persona.name == personaEnBusqueda);

    /* Forma más larga ****************
    const persona = salarios.find((persona) => {
        return persona.name == personaEnBusqueda;
    });
    return persona
    *************************************/

    /* CONSOLE ************************
    > encontrarPersona('Daniela')
    {name: 'Daniela', trabajos: Array(6)}
    name
    : 
    "Daniela"
    trabajos
    : 
    Array(6)
    0
    : 
    {year: 2018, empresa: 'Freelance', salario: 500}
    1
    : 
    {year: 2019, empresa: 'Freelance', salario: 500}
    2
    : 
    {year: 2020, empresa: 'Freelance', salario: 500}
    ...

    **********************************/
}

function medianaPorPersona(nombrePersona) {
    const trabajos = encontrarPersona(nombrePersona).trabajos;
    
    // Usamos el método "map" de los arrays para transformar el array "trabajos" en un nuevo array de salarios.
    const salarios = trabajos.map(function (elemento) {
        return elemento.salario;
    });

    // Llamamos a la función "calcularMediana" del objeto "PlatziMath" (que está definido en PlatziMath.js) para calcular la mediana de los salarios.
    const medianaSalarios = PlatziMath.calcularMediana(salarios); 

    console.log(medianaSalarios);
    return medianaSalarios;

    /* CONSOLE ************
    > medianaPorPersona('Juanita')
    950
    **********************/
}