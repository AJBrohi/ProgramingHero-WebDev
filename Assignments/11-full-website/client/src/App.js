import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import AddService from './components/Dashboard/AddService/AddService';
import ManageService from './components/Dashboard/ManageService/ManageService';
import AddPrice from './components/Dashboard/AddPrice/AddPrice';
import ManagePrices from './components/Dashboard/ManagePrices/ManagePrices';
import AddAdmin from './components/Dashboard/AddAdmin/AddAdmin';
import AddReview from './components/Dashboard/AddReview/AddReview';
import AddOrder from './components/Dashboard/AddOrder/AddOrder';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  const [isAdmin, setIsAdmin] = useState(false);
  return (
    <UserContext.Provider value = {[loggedInUser, setLoggedInUser, isAdmin, setIsAdmin]}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          {/* <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute> */}
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
          <Route path="/addService">
            <AddService></AddService>
          </Route>
          <PrivateRoute path="/manageService">
            <ManageService></ManageService>
          </PrivateRoute>
          <PrivateRoute path="/addPrice">
            <AddPrice></AddPrice>
          </PrivateRoute>
          <PrivateRoute path="/managePrice">
            <ManagePrices></ManagePrices>
          </PrivateRoute>
          <PrivateRoute path="/addAdmin">
            <AddAdmin></AddAdmin>
          </PrivateRoute>
          <PrivateRoute path="/addOrder">
            <AddOrder></AddOrder>
          </PrivateRoute>
          <PrivateRoute path="/viewOrders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/myOrders">
            <MyOrders></MyOrders>
          </PrivateRoute>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;



