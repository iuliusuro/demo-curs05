import './App.css';
import React from 'react';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Page404 from './pages/Page404';
import About from './pages/About';

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  
  render() {
    return (
       <div>
          <Routes>
              <Route path='/' element={<Home />} />ws
              <Route path='/login' element={<Login />} />
              <Route path='/about' element={<About />} />
              <Route path='*' element={<Page404 />} />
          </Routes>
       </div>
    );
  }
}


export default App;