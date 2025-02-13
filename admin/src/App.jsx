import React from 'react'
import Navbar from './component/Navbar/Navbar'
import SideBar from './component/SideBar/SideBar'
import { Routes,Route } from 'react-router-dom'
import Add from './pages/Add/add'
import Orders from './pages/Orders/Orders'
import List from './pages/List/List'
import { ToastContainer } from 'react-toastify'

const App = () => {

  const url = "http://localhost:5000"

  return (
    <div>
      <ToastContainer/>
      <Navbar/>
      <hr/>
      <div className='app-content'>
        <SideBar/>
        <Routes>
          <Route path="/add" element={<Add url={url}/>}/>
          <Route path="/list" element={<List url={url}/>}/>
          <Route path="/orders" element={<Orders url={url}/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default App
