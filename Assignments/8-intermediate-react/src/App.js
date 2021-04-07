import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import LeagueDetail from './components/LeagueDetail/LeagueDetail';

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/league/:lid">
            <LeagueDetail></LeagueDetail>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
