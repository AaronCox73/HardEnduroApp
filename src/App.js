import React from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News'
import Home from './components/Home/Home'

import { Routes, Route } from 'react-router-dom'








function App() {

  return (

    <div>

      <Nav />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/News" element={<News />} />
   

        </Routes>


      </main>
    </div>


  );
}

export default App;
