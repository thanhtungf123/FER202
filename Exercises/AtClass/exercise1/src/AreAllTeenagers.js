import React from 'react';
import "./App.css";

function AreAllTeenagers() {
  const people = [
    { name: 'Jack', age: 30, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];
  const areAllTeenagers = people.every(person => person.age >= 10 && person.age <= 20);

  return(
    <div>
      <h1>4. Are All Teenagers?</h1>
      <p>{areAllTeenagers ? "Yes, all are teenagers." : "No, not all are teenagers."}</p>
    </div>
  )
}
export default AreAllTeenagers;