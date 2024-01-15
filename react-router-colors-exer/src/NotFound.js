import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>The requested URL was not found.</p>
      <Link to="/colors">Go to the color list</Link>
    </div>
  );
};

export default NotFound;
