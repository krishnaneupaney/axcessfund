import ContactForm from './components/pages/Contact';
import About from './components/pages/About';
import Footer from './components/pages/Footer';
import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/Home';
import Navbar from './components/Navbar';
import Auth from './components/Auth/Auth';
import { Container } from '@material-ui/core';
function App() {


  return (
    <BrowserRouter>
      <Container maxWidth="lg">

        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/auth" exact component={Auth} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={ContactForm} />

        </Switch>
        <Footer />
      </Container>
    </BrowserRouter>
  )
}
;

export default App;