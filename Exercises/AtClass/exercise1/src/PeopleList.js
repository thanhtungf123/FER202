import React from 'react';
import "./App.css";

function PeopleList() {
  const people = [
    { name: 'Jack', age: 30, occupation: 'Engineer' },
    { name: 'Michael', age: 9, occupation: 'Student' },
    { name: 'John', age: 40, occupation: 'Doctor' },
    { name: 'Ann', age: 19, occupation: 'Teacher' },
    { name: 'Elisabeth', age: 16, occupation: 'Student' }
  ];

  // Ex3, 4: Display a list of people and table of people
  const displayPersonDetails = (person) => {
    return `Name: ${person.name}, Age: ${person.age}, Occupation: ${person.occupation}`;
  };

  const firstTeenager = people.find(person => person.age >= 10 && person.age <= 20);
  return (
    <div>
      <h1>1. People List</h1>
      <ul>
        {people.map((person, index) => (
          <li key={index}>
            {displayPersonDetails(person)}
          </li>
        ))}
      </ul>
      <h1>2. People Table</h1>
      <table style={{ width: "50%", textAlign: "center", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid black", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Age</th>
            <th style={{ border: "1px solid black", padding: "8px" }}>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td style={{ border: "1px solid black", padding: "8px" }}>{person.name}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{person.age}</td>
              <td style={{ border: "1px solid black", padding: "8px" }}>{person.occupation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
}

export default PeopleList;
