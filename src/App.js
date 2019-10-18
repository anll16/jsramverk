import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Reports from "./components/Reports";
import Form from "./components/Form";

const App = () => (
  <Router>
      <Route path="/" exact component={AboutMe} />
      <Route path="/form" component={Form} />
      <Route path="/reports/week/:week" component={Reports} />
  </Router>
);

export default App;
