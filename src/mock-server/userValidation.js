import { user } from './user';

const userValidation = (login, password) => {
  return user.some(val => val.login === login && val.password === password);
}

// debug 
// console.log(userValidation('user1', 'pw1')); // true
// console.log(userValidation('user1', 'pw2')); // false
// console.log(userValidation('user2', 'pw2')); // true
// console.log(userValidation('user2', '')); // false

export default userValidation;