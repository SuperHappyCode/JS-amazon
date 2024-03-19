const person = {
  name: "John",
  sayHello() {
    console.log(`hello, my name is ${this.name}`);
  },
};
function greet(name) {
  this.sayHello();
}
const boundGreet = greet.bind(person);
boundGreet("Jack");
