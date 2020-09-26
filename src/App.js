import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import "./App.css";
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import Nav from './components/Nav/Nav';
import ProjectCard from './components/ProjectCard/ProjectCard';
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";



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
          <Route path="/SignUp">
            <SignUpPage />
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
