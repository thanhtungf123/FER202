import React from 'react';
import "./App.css";

function AverageAgeByOccupation() {
  const people = [
    { name: 'Jack', age: 50, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];

  const averageAgeByOccupation = people.reduce((acc, person) => {
    const { occupation, age } = person;

    if (!acc[occupation]) {
      acc[occupation] = { totalAge: 0, count: 0 };
    }

    acc[occupation].totalAge += age;
    acc[occupation].count += 1;

    return acc;
  }, {});

  const result = Object.keys(averageAgeByOccupation).map(occupation => {
    const { totalAge, count } = averageAgeByOccupation[occupation];
    const averageAge = (totalAge / count).toFixed(2);
    return { occupation, averageAge };
  });

  return (
    <div>
      <h1>10. Average Age By Occupation</h1>
      <ul>
        {result.map(({ occupation, averageAge }) => (
          <li key={occupation}>
            Occupation: {occupation}, Average Age: {averageAge}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AverageAgeByOccupation;
