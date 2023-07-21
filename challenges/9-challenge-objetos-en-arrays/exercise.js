/* Instrucciones ********************************

En este desafío debes convertir las llaves y valores de un objeto en propiedades (id y name) de un objeto dentro de un array.

Input

const obj = {
  123: 'Juanito Alcachofa',
  456: 'Juanita Alcaparra',
};

solution(obj);

Output

[
  {
    id: "123",
    name: 'Juanito Alcachofa',
  },
  {
    id: "456",
    name: 'Juanita Alcaparra',
  },
]

********************************************/


// Definimos una función llamada "solution" que toma un objeto como argumento
export function solution(obj) {
    // Creamos un arreglo vacío donde almacenaremos los nuevos objetos
    const listaArray = [];
  
    // Usamos Object.entries para convertir el objeto en un arreglo de arreglos, donde cada subarreglo es un par [clave, valor] del objeto original
    const objEntries = Object.entries(obj);
  
    // Iteramos sobre el arreglo de pares [clave, valor]
    for (let i = 0; i < objEntries.length; i++) {
        // Para cada par, creamos un nuevo objeto donde la propiedad "id" es la clave y la propiedad "name" es el valor. Luego, añadimos este nuevo objeto al arreglo.
        listaArray.push({
            id: objEntries[i][0],
            name: objEntries[i][1],
      });
    }
  
    // Devolvemos el arreglo de objetos
    return listaArray;
  }