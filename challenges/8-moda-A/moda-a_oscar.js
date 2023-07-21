function calcularModa (numeros){
    // Este objeto almacenará las frecuencias de cada número. La clave será el número, y el valor será su frecuencia.
    var frecuencias = {};

    // Este bucle itera a través del array de números.
    for (let i = 0; i < numeros.length; i++) {

        // En cada iteración, obtenemos el número actual.
        let numeroActual = numeros[i];

        // Si ya hemos visto este número antes, incrementamos su frecuencia.
        if(frecuencias[numeroActual]) {
            frecuencias[numeroActual]++;
        } else {
            // Si no hemos visto este número antes, lo agregamos al objeto con una frecuencia de 1.
            frecuencias[numeroActual] = 1;
        }
    }

    // Al principio, no tenemos una moda, y la máxima frecuencia es 0.
    let moda = null;
    var maxFrecuencia = 0;

    // Ahora iteramos a través del objeto de frecuencias para encontrar el número con la máxima frecuencia.
    for(var numeroActual in frecuencias) {
        // Si la frecuencia del número actual es mayor que la máxima frecuencia que hemos visto hasta ahora, entonces este número se convierte en la nueva moda, y actualizamos la máxima frecuencia.
        if (frecuencias[numeroActual] > maxFrecuencia) {
            moda = numeroActual;
            maxFrecuencia = frecuencias[numeroActual];
        }
    }

    return moda;
}