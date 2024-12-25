import React, { createContext, useState } from 'react'
import './Assets/CSS/Font.css'
import NavBar from './Components/NavBar/NavBar'

import Home from './Components/Home/Home.jsx'
import Men from './Components/Men/Men.jsx'
import Women from './Components/Women/Women.jsx'
import SmartWatches from './Components/SmartWatches/SmartWatches.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


export const cartContext = createContext();



function ReactApp() {

  const [cart, setCart] = useState([]);


  return (
    <>

      <BrowserRouter>


        <cartContext.Provider value={{ cart, setCart }}>

          <NavBar />



          <Routes>

            <Route path="/" element={<Home />}></Route>

            <Route path="/mens-collection" element={<Men />}></Route>

            <Route path="/womens-collection" element={<Women />}></Route>

            <Route path="/smart-watches" element={<SmartWatches />}></Route>

          </Routes>

        </cartContext.Provider>


      </BrowserRouter>

    </>
  )
}

export default ReactApp