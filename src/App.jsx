import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Componets/Dashboard/Dashboard'
import Home from './Componets/Dashboard/AdminPanel'

const App = () => {
  return (
    <>
      <Routes>
         <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
       <Home/>
    </>
  )
}

export default App
