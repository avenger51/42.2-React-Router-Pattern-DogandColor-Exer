import React from 'react';
import { useParams, Redirect } from 'react-router-dom';

const ColorPage = ({ colors }) => {
  const { color } = useParams();

  if (!colors.includes(color)) {
    return <Redirect to="/colors" />;
  }

  const style = {
    backgroundColor: color,
    width: '100vw',
    height: '100vh'
  };

  return <div style={style}></div>;
};

export default ColorPage;
