import React from 'react';
import { Link } from 'react-router-dom';

const ColorList = ({ colors }) => {
  return (
    <div>
      <h1>Colors</h1>
      {colors.map(color => (
        <p key={color}>
          <Link to={`/colors/${color}`}>{color}</Link>
        </p>
      ))}
      <Link to="/colors/new">Add a color</Link>
    </div>
  );
};

export default ColorList;
