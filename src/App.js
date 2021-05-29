import React from 'react';
import { Route, Redirect, Switch } from 'react-router';
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import NotFound from './components/NotFound';
import Home from './components/home';
import Products from './components/products';
import './App.css';

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>

  );
}

export default App;
