import React from 'react'
import Navbar from './Components/Navbar'
import Signin from './Components/Signin'
import Signup from './Components/Signup'
import Add from './Components/Add'
import Home from './Components/Home'
import Edit from './Components/Edit'
import './App.css'
import {BrowserRouter ,Routes,Route} from 'react-router-dom'

function App() {
  return (
 <BrowserRouter>
    <Navbar />
      <Routes>
      <Route path='/home' element ={<Home />}/>
        <Route path='/signin' element ={<Signin />}/>
        <Route path='/signup' element ={<Signup />}/>
        <Route path='/add' element ={<Add />}/>
        <Route path='/edit' element ={<Edit />}/>
      </Routes>
 </BrowserRouter>
  )
}

export default App