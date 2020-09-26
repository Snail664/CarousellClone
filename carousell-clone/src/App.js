import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import Home from './Home'
import Header from './Header'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
          <Route path='/test'>
            <div> This is a test</div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
