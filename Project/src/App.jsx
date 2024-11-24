import React from 'react'
import Dashboard from './Component/Dashboard'
import { Routes, Route } from "react-router-dom";
import "./App.css"
import AddUser from './Component/AddUser'
import Edit from './Component/Edit'
import Login from './Component/Login'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Dashboard' element={<Dashboard/>}/>
      </Routes>
    </>
  )
}

export default App