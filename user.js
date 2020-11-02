default class User {
  constructor(name, age) {
    this.name = name
    this.age = age
  }
}

function printName(user) {
  console.log(`user's name is: ${user.name}`)
}

function printAge(user) {
  console.log(`User is ${user.age} years old`)
}

// using exports touse this code in main js file --> index html
// exporting the class and 2 funcs

export default User
export {printName, printAge}

// but can do it differently - at top using export default without needing to do it at end of file
// can only default export 1 thing -usually the class you're defining


// printName()
// printAge()