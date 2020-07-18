import React from 'react';
import './App.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import Home from './pages/HomePage';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { AuthProvider } from './Auth';
import PrivateRoute from './hoc/PrivateRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route path="/login" component={Login}/>
            <Route path='/signUp' component={SignUp}/>
            <PrivateRoute path='/' component= {Home} />
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
