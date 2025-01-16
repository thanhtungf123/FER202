import React from 'react';
import "./App.css";

function SortByOccupationAndAge() {
  const people = [
    { name: 'Jack', age: 50, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];

  const sortedPeople = people.sort((a, b) => {
    if (a.occupation < b.occupation) return -1;
    if (a.occupation > b.occupation) return 1;

    return a.age - b.age;
  });

  return (
    <div>
      <h1>5. Sort By Occupation and Age</h1>
      <ul>
        {sortedPeople.map((person, index) => (
          <li key={index}>
            Name: {person.name}, Age: {person.age}, Occupation: {person.occupation}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SortByOccupationAndAge;
