import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" component={Login}/>
        </Switch>
      </Router>
      
     
    </div>
  );
}

export default App;
