import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Nav from './components/Nav/Nav';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <div>
        < Nav/>

        <Switch>
          <Route path="/project/:id​">
            <ProjectPage />
          </Route>

          <Route path="/Login">
            <LoginPage />
          </Route>

          <Route path="SignUpPage">
            <SignUpPage />
          </Route>

          <Route path="/About">
            <About />
          </Route>

          <Route path="/">
            <HomePage />
          </Route>
          
        </Switch>
      </div>
    </Router>
  )
}

  

export default App;
