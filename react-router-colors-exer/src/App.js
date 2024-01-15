import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import ColorList from './ColorList';
import ColorPage from './ColorPage';
import NewColorForm from './NewColorForm';
import NotFound from './NotFound';

function App() {
  const [colors, setColors] = useState(['red', 'blue', 'green']);

  const addColor = (newColor) => {
    setColors([newColor, ...colors]);
  };

  return (
    <Router>
      <Switch>
        <Route exact path="/colors" render={() => <ColorList colors={colors} />} />
        <Route path="/colors/new" render={() => <NewColorForm addColor={addColor} />} />
        <Route path="/colors/:color" render={(routeProps) => <ColorPage colors={colors} {...routeProps} />} />
        <Route exact path="/" render={() => <Redirect to="/colors" />} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}

export default App;
