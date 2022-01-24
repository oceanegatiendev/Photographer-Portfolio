import React from 'react';
import './App.css';

import { Route, Switch, BrowserRouter as Router, } from 'react-router-dom';
import Home from './components/Home/Home';
import Galery from './components/galery/Galery';
import NavBar from './components/NavBar';
import Contact from './components/Contact/Contact';
import Paysages from './components/Paysages/Paysages';
import Footer from './components/Footer/Footer';
import Event from './components/Evenements/event';
import Animaux from './components/Animaux/animaux';
import Portraits from './components/Portraits/portraits';
import VideoGallery from './components/VideoGallery/VideoGallery';

function App() {
  return (
    <div className="App" >
        <Router>
          <NavBar />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/galery'>
              <Galery />
            </Route>
            <Route exact path='/contact'>
              <Contact />
            </Route>
            <Route exact path='/paysages'>
              <Paysages />
            </Route>
            <Route exact path='/event'>
              <Event />
            </Route>
            <Route exact path='/portraits'>
              <Portraits />
            </Route>
            <Route exact path='/animaux'>
              <Animaux />
            </Route>
            <Route exact path='/videos'>
              <VideoGallery/>
            </Route>
            
          </Switch>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
