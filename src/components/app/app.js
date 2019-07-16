import React from "react";
import { Switch, Route } from "react-router-dom";

import "./app.css";
import HomePage from "../../pages/homepage";

const HatsPage = () => {
  return <h1>HatsPage</h1>;
};

const App = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/hats" component={HatsPage} />
    </Switch>
  );
};

export default App;
