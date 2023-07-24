// Creamos un objeto para almacenar la información ordenada por empresa
let salariosEmpresa = {};

// Iteramos a través de cada persona en la matriz salarios
for (let i = 0; i < salarios.length; i++) {
    let persona = salarios[i];


    // Iteramos a través de cada trabajo que ha tenido la persona
    for (let j =0; j < persona.trabajos.length; i++) {
        let trabajo = persona.trabajos[j];

        // Si la empresa no está en el objeto salariosPorEmpresa, la agregamos
        if (!salariosEmpresa[trabajo.empresa]) {
            salariosEmpresa[trabajo.empresa] = [];
        }

        // Agregamos la información del trabajo al arreglo de la empresa correspondiente
        salariosEmpresa[trabajo.empresa].push({
            name: persona.name,
            year: trabajo.year,
            salario: trabajo.salario,
        });
    }
}

console.log(salariosEmpresa);