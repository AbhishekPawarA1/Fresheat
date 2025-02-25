import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavBar } from './components/NavBar'
import { Home } from './components/Home'
import { Popularfood } from './components/Popularfood'
import { AboutUs } from './components/AboutUs'
import { PopularDishes } from './components/PopularDishes'
import { SpecialFood } from './components/SpecialFood'

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Popularfood />
      <AboutUs />
      <PopularDishes />
      <SpecialFood/>
    </>
  )
}

export default App
