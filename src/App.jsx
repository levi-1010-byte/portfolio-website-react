// App.js

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/homepage';
import Work from './components/works';
import { About } from './components/about';
import { Services } from './components/services';

const App = () => {
  return (
    <Router>
    <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/work" element={<Work/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
        
        </Routes>
    
         </Router>
 
  );
};

export default App;
