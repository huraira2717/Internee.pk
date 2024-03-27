import { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Contect from './Components/Contect/Map/Map'
import { BrowserRouter, Route, Routes } from 'react-router-dom'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route index='/' element={<Home />}/>
      <Route path='Contect' element={<Contect />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
