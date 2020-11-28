import './App.css';
import Register from './components/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Successful from './components/Successful';

function App() {
  return (
    <main className="app">
      <div className="app__container">
        <Router>
          <Switch>
            <Route path="/success">
              <Successful />
            </Route>
            <Route path="/">
              <Register />
            </Route>
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default App;
