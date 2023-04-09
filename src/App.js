import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Cred from './components/Cred/Cred'
import Allbabyis from './components/AllBaby/Allbabyis'
import Futal from './components/Footer/Futal'
import Navboal from './components/Navbar/Navboal'
import Cardsbex from './components/Shopcards/Cardsbex'

export default function App() {
  return (
    <>
    <Router>
      <Navboal/>
        <Routes>
          <Route path="/Create" element={<Cred/>} />
          <Route path="/home" element={<Allbabyis/>} />
          <Route path="/Shop" element={<Cardsbex/>} />
        </Routes>
      </Router>
      <Futal/>
    </>
  )
}
