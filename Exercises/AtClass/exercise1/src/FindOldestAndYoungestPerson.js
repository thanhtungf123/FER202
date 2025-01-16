import React from 'react';
import "./App.css";

function FindOldestAndYoungestPerson() {
  const people = [
    { name: 'Jack', age: 50, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];

  const { oldest, youngest } = people.reduce(
    (acc, person) => {
      if (person.age > acc.oldest.age) {
        acc.oldest = person;
      }
      if (person.age < acc.youngest.age) {
        acc.youngest = person; 
      }
      return acc;
    },
    { oldest: people[0], youngest: people[0] } 
  );

  return (
    <div>
      <h1>9. Oldest and Youngest Person</h1>
      <div>
        <h2>Oldest Person:</h2>
        <p>Name: {oldest.name}, Age: {oldest.age}</p>
      </div>
      <div>
        <h2>Oldest and Youngest Person:</h2>
        <p>Name: {youngest.name}, Age: {youngest.age}</p>
      </div>
    </div>
  );
}

export default FindOldestAndYoungestPerson;
