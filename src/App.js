import React, { createContext } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from "./Components/Header/Header";
import DmsNav from "./Components/DmsNav/DmsNav";
import Home from "./Components/Home/Home";
// import DmsNav from "./Components/DmsNav/DmsNav";

export const UserContext = createContext();

function App() {
  return (
    <UserContext.Provider value={[]}>
      <Router>
        <Header/>
        <DmsNav/>
        <Home/>
        <Switch>
          {/* Header Link */}
          {/* <Route exact path="/fb" component={}/>
          <Route exact path="/linkedin" component={}/>
          <Route exact path="/twitter" component={}/>
          <Route exact path="/pinterest" component={}/> */}
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
