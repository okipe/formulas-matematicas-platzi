/* En este desafío vas a recibir un array de objetos. Cada objeto representa a un usuario. Debes encontrar al usuario con cierto ID y retornar su nombre. En caso de no existir, debes retornar false.

Input

const users = [];
users.push({ id: 123, name: 'Juanito Alcachofa' });
users.push({ id: 456, name: 'Juanita Alcaparra' });

solution(users, 456);
solution(users, 999);

Output

Juanita Alcaparra
false  */

// Primera manera

// La función se exporta para poder ser utilizada en otros módulos de JavaScript
export function solution(users, id) {

	// Se utiliza el método .find() de los Arrays para encontrar al usuario con el id proporcionado. .find() toma una función anónima como parámetro, que se aplica a cada elemento del array.
    // En este caso, la función anónima toma cada 'user' (un objeto en el array 'users') y retorna true si el id del 'user' es igual al id proporcionado.
    let findUser = users.find(function (user) { // lo pone como función anónima. 
    	return user.id == id;
    })
    
    // Si .find() no encuentra ningún elemento que satisfaga la función proporcionada, retorna undefined. Por lo tanto, si findUser es undefined (lo que se evalúa como false en un contexto booleano), significa que no se encontró ningún usuario con el id proporcionado.
    // En este caso, la función retorna false.
    if (!findUser) { // primero busca la negación
    	return false;
    } else {
    // Si findUser no es undefined, significa que se encontró un usuario con el id proporcionado.
    // En este caso, la función retorna el nombre de ese usuario.
    	return findUser.name;
    }
  }
  

  // IGUAL QUE EL ANTERIOR

  export function solution(users, id) {

    let findUser2 = users.find(getUser);
    function getUser(user) {
      return user.id == id;
    }
  
    if (findUser2) {
      return findUser2.name;
    } else {
      return false;
    }
  }

  // Otra manera, se parece a la primera

  export function solution(users, id) {
    let findUser3 = users.find(user => user.id == id);
    if (findUser3) {
      return findUser3.name;
    } else {
      return false;
    }
  }
