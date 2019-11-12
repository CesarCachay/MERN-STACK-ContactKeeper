import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import About from "./views/About";
import Register from "./views/Register";
import Login from "./views/Login";
import ContactState from "./context/contact/ContactState";
import AuthContext from "./context/auth/AuthState";

const App = () => {
  return (
    <AuthContext>
      <ContactState>
        <Router>
          <>
            <Navbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </>
        </Router>
      </ContactState>
    </AuthContext>
  );
};

export default App;
