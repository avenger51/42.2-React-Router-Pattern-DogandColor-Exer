import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Nav from './Nav';
import DogList from './DogList';
import DogDetails from './DogDetails';

function App({ dogs }) {
  return (
    <Router>
      <Nav dogNames={dogs.map(dog => dog.name)} />
      <Switch>
        <Route exact path="/dogs" render={() => <DogList dogs={dogs} />} />
        <Route path="/dogs/:name" render={routeProps => {
          const name = routeProps.match.params.name;
          const dog = dogs.find(dog => dog.name.toLowerCase() === name.toLowerCase());
          return dog ? <DogDetails dog={dog} /> : <Redirect to="/dogs" />;
        }} />
        <Redirect to="/dogs" />
      </Switch>
    </Router>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: "/public/whiskey.jpg",
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: "/public/duke.jpg",
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: "/public/perry.jpg",
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
  
  ]
};


export default App;
