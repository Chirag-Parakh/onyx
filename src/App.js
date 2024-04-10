import React from 'react';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import { Routes ,Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/pages/Home';
import About from './Components/pages/About';
import Team from './Components/pages/Team';
import Mem from './Components/pages/Mem';
import Footer from './Components/Footer';
import Event from './Components/pages/Event';
import Entravaganza from './Components/pages/Entravaganza';


function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
        <Route path='/' exact element={ <Home />}></Route>
        <Route path='/about' Component={About}></Route>\
        <Route path='/team' Component={Team}></Route>
        <Route path='/mem' Component={Mem}></Route>
        <Route path='/event' Component={Event}></Route>
        <Route path='/Entravaganza' Component={Entravaganza}></Route>
        </Routes>
        <Footer/>
      </Router>
      

    </div>
      
    
  );
}

export default App;
