import React from 'react';
import "./App.css";

function GroupPeopleByOccupation() {
  const people = [
    { name: 'Jack', age: 50, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];

  const groupByOccupation = people.reduce((acc, person) => {
    if (!acc[person.occupation]) {
      acc[person.occupation] = [];
    }
    acc[person.occupation].push(person);
    return acc;
  }, {});

  return (
    <div>
      <h1>8. Group people by occupation</h1>
      {Object.keys(groupByOccupation).map(occupation => (
        <div key={occupation}>
          <h2>{occupation}</h2>
          <ul>
            {groupByOccupation[occupation].map((person, index) => (
              <li key={index}>
                Name: {person.name}, Age: {person.age}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default GroupPeopleByOccupation;
