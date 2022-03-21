import React, {useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Welcome from './scenes/Welcome';
import ArtCard from "./componets/ArtCard"

function App() {

  useEffect(() => {
    console.log('here is my useEffect and user', 'userName')
  }, [])

  return (
    <Routes>
      <Route path='/login' element={<Login setUser={'setUsers'} user={'usersName'} />} />
      <Route path='/signup' element={<Signup setUser={'setUsers'} />} />
      {/* <Route path='/' element={'user' ? <Welcome user={'user'} /> : <Login setUser={'setUser'} />} /> */}
      <Route path='/' element={<ArtCard />} />
    </Routes>
  )
}

export default App
