import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import SignUp from './components/pages/SignUpForm';
import SignUpContainer from "./components/pages/SignUpContainer";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Downloader from './components/pages/Downloader';
import Header from './components/pages/Header';
import Contact from './components/pages/Contact';
import About from './components/pages/About';
import Data from './components/pages/data'
import Form from './components/Form/Form'
import Posts from './components/Posts/Posts'
import useStyles from './styles';
import { useEffect } from 'react';
import { getPosts } from './action/posts'
import ContactForm from './components/pages/Contact';
import Login from './components/pages/Login';


function App() {
  // const classes = useStyles();
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getPosts());
  // }, [dispatch])


  return (
    <>

      <Router>
        <Navbar />
        {/* <Grid item xs={12} sm={7}>
          <Posts />
        </Grid>
        <Grid item xs={12} sm={7}> */}
        {/* <Form />
        </Grid> */}


        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
          {/* <Route path='/skills' component={Skills} /> */}
          <Route path='/contact' exact component={ContactForm} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </Router>
    </>
  )
}

export default App;
