import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Cred from './components/Cred/Cred'
import Navboal from './components/Navbar/Navboal'
import Cardsbex from './components/Shopcards/Cardsbex'
import Subex from './components/Subex'

export default function App() {
  return (
    <>
    <Router>
      <Navboal/>
        <Routes>
          <Route path="/Create" element={<Cred/>} />
          <Route path="/home" element={<Subex/>} />
          <Route path="/Shop" element={<Cardsbex/>} />
        </Routes>
      </Router>
    </>
  )
}
