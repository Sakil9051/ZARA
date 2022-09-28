import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Child from './child'
import Home from './Home'
import Login from './Login'
import Men from './Men'
import Singup from './Singup'
import Women from './Women'
const Allrouts = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/singup' element={<Singup/>}></Route>
        <Route path='/men' element={<Men/>}></Route>
        <Route path='/women' element={<Women/>}></Route>
        <Route path='/child' element={<Child/>}></Route>
    </Routes>
      
    
  )
}

export default Allrouts
