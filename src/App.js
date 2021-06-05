import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import NavBar from "./components/navbar";
import LoginForm from "./components/loginForm";
import NotFound from './components/NotFound';
import Home from './components/home';
import Products from './components/products';
import About from './components/about';
import Contact from './components/contact';
import Footer from './components/footer';
import Cart from './components/cart';
import Register from './components/registerForm';
import './App.css';

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container min-vh-100">
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/products" component={Products} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={Register} />
          <Route path="/cart" component={Cart} />
          <Route path="/not-found" component={NotFound} />
          <Redirect from="/" exact to="/home" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
      <Footer />
    </React.Fragment>

  );
}

export default App;
