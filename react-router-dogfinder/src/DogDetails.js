import React from 'react';

function DogDetails({ dog }) {
  return (
    <div>
      <h1>{dog.name}</h1>
      <p>Age: {dog.age}</p>
      <img src={dog.src} alt={dog.name} />
      <ul>
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
