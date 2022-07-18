import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Login';


function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Login} />
        {/* <Route exact path="/gamescreen" component={GameScreen} />
        <Route exact path="/feedback" component={Feedback} />
        <Route exact path="/settings" component={Settings} />
        <Route exact path="/ranking" component={Ranking} /> */}
      </Switch>
    </div>
  );
}

export default App;
