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

export function solution(users, id) {

    let findUser = users.find(function (user) { // lo pone como función anónima. 
      return user.id == id;
    })
    if (!findUser) { // primero busca la negación
      return false;
    } else {
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