import React from 'react';
import { Link } from 'react-router-dom';

function Nav({ dogNames }) {
  return (
    <nav>
      <ul>
        {dogNames.map(name => (
          <li key={name}>
            <Link to={`/dogs/${name.toLowerCase()}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Nav;
