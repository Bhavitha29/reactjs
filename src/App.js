import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';

import Political from './pages/Political/Political';
import Entertainment from './pages/Entertainment/Entertainment';
import Home from './pages/Home/Home';
import Sports from './pages/Sports/Sports';
import Business from './pages/Business/Business';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer';
import Header from './Components/header';

const App = () => {
  return (
   <Router>
     <Header />
    <Navbar/>
    <main>
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
        <Route path="/Political" exact>
          <Political/>
        </Route>
        <Route path="/Sports" exact>
          <Sports/>
        </Route>
        <Route path="/Business" exact>
          <Business/>
        </Route>
        <Route path="/Entertainment" exact>
          <Entertainment/>
        </Route>
        <Redirect to="/" />
      </Switch>
    </main>
    <Footer/>
   </Router>
   
  );
}

export default App;
