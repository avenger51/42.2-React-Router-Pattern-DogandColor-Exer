import React from 'react';
import { Link } from 'react-router-dom';

function DogList({ dogs }) {
  return (
    <div>
      <h1>All Dogs</h1>
      {dogs.map(dog => (
        <div key={dog.name}>
          <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
        
        </div>
      ))}
    </div>
  );
}

export default DogList;
