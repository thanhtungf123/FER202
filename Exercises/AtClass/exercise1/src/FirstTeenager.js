import React from 'react';
import "./App.css";

function FirstTeenager() {
  const people = [
    { name: 'Jack', age: 30, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];
  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);

  return(
    <div>
      <h1>3. First Teenager</h1>
      <p>
        <strong>First Teenager:</strong>{' '}
        {firstTeenager ? `${firstTeenager.name} (Age: ${firstTeenager.age})` : 'None'}
      </p>
      </div>
  )
}
export default FirstTeenager;