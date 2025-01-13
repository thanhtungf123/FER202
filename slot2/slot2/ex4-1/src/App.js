import React from 'react';

const PeopleAnalysis = () => {
  const people = [
    { name: 'Jack', age: 50 },
    { name: 'Michael', age: 9 },
    { name: 'John', age: 40 },
    { name: 'Ann', age: 19 },
    { name: 'Elisabeth', age: 16 },
  ];

  //1
  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);

  //2
  const allTeenagers = people.filter(person => person.age >= 10 && person.age <= 20);

  // Check if every person is a teenager
  const isEveryTeenager = people.every(person => person.age >= 10 && person.age <= 20);

  // Check if any person is a teenager
  const isAnyTeenager = people.some(person => person.age >= 10 && person.age <= 20);

  return (
    <div>
      <h1>People Analysis</h1>
      <p>
        <strong>First Teenager:</strong>{' '}
        {firstTeenager ? `${firstTeenager.name} (Age: ${firstTeenager.age})` : 'None'}
      </p>
      <p>
        <strong>All Teenagers:</strong>{' '}
        {allTeenagers.length > 0
          ? allTeenagers.map(person => `${person.name} (Age: ${person.age})`).join(', ')
          : 'None'}
      </p>
      <p>
        <strong>Is Every Person a Teenager?</strong> {isEveryTeenager ? 'Yes' : 'No'}
      </p>
      <p>
        <strong>Is Any Person a Teenager?</strong> {isAnyTeenager ? 'Yes' : 'No'}
      </p>
    </div>
  );
};

export default PeopleAnalysis;
