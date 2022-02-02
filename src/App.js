import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News'
import Photo from './Photo.jpeg'
import { Link, Routes, Route } from 'react-router-dom'






function App() {

  return (

    <div>

      <Nav />
      <img src={Photo} style={{ width: "30%" }} />
      <main>
        <Routes>
          <Route path="/News" element={<News />} />


        </Routes>


      </main>
    </div>


  );
}

export default App;
