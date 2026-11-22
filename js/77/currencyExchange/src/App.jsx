import { useState,useEffect } from 'react'
import './App.css'
import NoCurrency from './noRecipe'
import CC from './CC'

function App() {
 
  return (
    <>
      <h1>Currency Convertor</h1>
      <NoCurrency />
      <CC/>
    </>
  )
}

export default App
