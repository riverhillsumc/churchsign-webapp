import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

// import CreateTodo from "./components/create-todo.component";
// import EditTodo from "./components/edit-todo.component";
// import TodosList from "./components/todos-list.component";
import ChurchSign from "./components/church-sign.component";
import ChurchSignAdvanced from "./components/church-sign-advanced.component";

// import logo from "./logo.svg";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              {/* <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" /> */}
            </a>
            <Link to="/" className="navbar-brand">Church Sign Controller</Link>
            <div className="collpase navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Basic</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/advanced" className="nav-link">Advanced</Link>
                </li>
              </ul>
            </div>
          </nav>
          <br />
          <Route path="/" exact component={ChurchSign} />
          <Route path="/advanced" exact component={ChurchSignAdvanced} />
          {/* <Route path="/edit/:id" component={EditTodo} />
          <Route path="/create" component={CreateTodo} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
