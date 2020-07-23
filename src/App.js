import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PricePage from './pages/PricePage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';
import { Error } from './components/Error/Error';
import { Navigation } from './components/Navigation/Navigation';
import './App.module.css';

function App() {
  return (
    <div>
      <Navigation />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/price" component={PricePage} />
        <Route path="/gallery" component={GalleryPage} />
        <Route path="/contacts" component={ContactPage} />
        <Route component={Error} />
      </Switch>
    </div>
  );
}

export default App;
