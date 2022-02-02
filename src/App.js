import React, { useState } from 'react'
import './App.css';
import Nav from './components/Nav/Nav';
import News from './components/News/News'
import Photo from './Photo.jpeg'
import { BrowserRouter, Routes, Route, Link, Router } from 'react-router-dom'





function App() {

  return (

    <div>
      <main>
        <Nav />
      </main>
      <img src={Photo} style={{ width: "30%" }} />
    </div>

  );
}

export default App;
