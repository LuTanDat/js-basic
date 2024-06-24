console.log("Hello world");

// object {key : value}
const obj = {
  name: "John",
  age: 30,
  occupation: "Developer",
  f: function () {
    console.log("inside function")
    return 'hi'
  }
};
// chinh sua Obj
let b = 'name'
obj[b] = 'Harry' // obj.name = 'Harry'

// JSON 
// "{
// name: "John",
// age: 30,
// }"

console.log(`My name's `, obj.name); // console.log(`My name's `, obj['name']);
console.log(`My function's`, obj.f());