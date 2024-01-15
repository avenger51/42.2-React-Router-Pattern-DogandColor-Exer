import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const NewColorForm = ({ addColor }) => {
  const [input, setInput] = useState('');
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    addColor(input);
    history.push('/colors');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="color">Color Name:</label>
      <input
        type="color"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        id="color"
        required
      />
      <button type="submit">Add Color</button>
    </form>
  );
};

export default NewColorForm;
