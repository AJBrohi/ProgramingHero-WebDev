import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Appointment from "./components/Appointment/Appoinment/Appointment";
import AddDoctor from "./components/Dashboard/AddDoctor/AddDoctor";
import Dashboard from "./components/Dashboard/Dashboard/Dashboard";
import Home from "./components/Home/Home/Home";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <Appointment></Appointment>
        </Route>
        <Route path="/dashboard/appointment">
          <Dashboard></Dashboard>
        </Route>
        <Route path="/dashboard/addDoctor">
          <AddDoctor></AddDoctor>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;