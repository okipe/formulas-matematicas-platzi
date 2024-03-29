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

    /* Enviamdo un console.log ***********
    console.log(porcentajeCrecimiento);

    > proyeccionPorPersona('Juanita')
    [0, 2.4, 0.23529411764705882, 0.19047619047619047, 0] 
    ************************************/

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


/* CONSOLE ******************
    > proyeccionPorPersona('Juanita')
    
    2
    0.19047619047619047
    {porcentajesCrecimiento: Array(5), medianaPorcentajeCrecimiento: 0.19047619047619047}
    medianaPorcentajeCrecimiento: 0.19047619047619047
    porcentajesCrecimiento: (5) [0, 0, 0.19047619047619047, 0.23529411764705882, 2.4]
    [[Prototype]]: Object
    El nuevo salario es 1488.095238095238
*****************************/

// Análisis empresarial en Objetos
/* {
    Industrias Mokepon: {
        2018: [salario, salario, salario]
        2019:
    },
    Industrias Mokepon: {},
    Industrias Mokepon: {},
    Industrias Mokepon: {},
}
 */

const empresas = {};
// Esto también saldría con un MAP, pero lo haremos con FOR
for (persona of salarios) {
    // Recorremos los trabajos de cada persona
    for (trabajo of persona.trabajos) { 
        // Si no existe la empresa, la vamos a crear como un objeto. Si nos saltamos, es que ya existe.
        if (!empresas[trabajo.empresa]) {
            empresas[trabajo.empresa] = {};
        }

        // Si no existe el año, la vamos a crear como un array. Si nos saltamos, es que ya existe.
        if(!empresas[trabajo.empresa][trabajo.year]) {
            empresas[trabajo.empresa][trabajo.year] = [];
        }

        empresas[trabajo.empresa][trabajo.year].push(trabajo.salario);
    }
}

console.log({empresas});

/* CONSOLE *******************
{empresas: {…}}
empresas: 
Daily Planet:  {2018: Array(4), 2019: Array(4), 2020: Array(4), 2021: Array(4), 2022: Array(4), 2023: Array(4)}
Freelance: {2018: Array(8), 2019: Array(8), 2020: Array(7), 2021: Array(3), 2022: Array(5), 2023: Array(4)}
Industrias Mokepon: {2020: Array(1), 2021: Array(2), 2022: Array(2), 2023: Array(2)}
.....
******************************/


// Me voy a los cursos de Closures, Scope y Arrays, para entender mejor estas clases.

