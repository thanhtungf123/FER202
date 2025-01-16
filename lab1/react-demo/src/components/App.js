import React from "react";
import "../styles/App.css";

function HelloWorld() {
  return <div>Hello, World!</div>;
}

// ES6 Person class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

const person = new Person("John", 25);
const App = () => (
  <div>
    <h1>My React App!</h1>
    <HelloWorld />
    <p>{person.sayHello()}</p>
  </div>
  
);

export default App;
