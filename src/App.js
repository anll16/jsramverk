import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AboutMe from "./components/AboutMe";
import Reports from "./components/Reports";

const App = () => (
  <Router>
      <Route path="/" exact component={AboutMe} />
      <Route path="/reports/week/:week" component={Reports} />
  </Router>
);

export default App;
