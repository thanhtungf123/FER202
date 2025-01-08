import './App.css';

function App() {
  const people = [
    { name: 'Son', age: 20 },
    { name: 'Tung', age: 21 },
    { name: 'Thai', age: 30 },
    { name: 'Hung', age: 22 },
    { name: 'Thanh', age: 19 },
    { name: 'Ben', age: 17 },
  ];

  return (
    <>
      <h1>List People</h1>
      <div className="people-container">
        {people.map((person, index) => {
          return (
            <div className="person-card" key={index}>
              <h3>Number: {index + 1}</h3>
              <p>Name: {person.name}</p>
              <p>Age: {person.age}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
