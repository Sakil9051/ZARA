import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from './Cart'
import Child from './child'
import Home from './Home'
import Login from './Login'
import Men from './Men'
import Moredetails from './moredetails'
import Search from './Search'
import Singup from './Singup'
import Women from './Women';
import Privaterout from '../Components/Privaterout'
const Allrouts = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/singup' element={<Singup />}></Route>
      <Route path='/men' element={<Men />}></Route>
      <Route path='/women' element={<Women />}></Route>
      <Route path='/child' element={<Child />}></Route>
      <Route path='/search' element={<Search />}></Route>
      <Route path='/cart' element={
        <Privaterout>
          <Cart />
        </Privaterout>
      }></Route>
      <Route path='/moredetails:id' element={<Moredetails />}></Route>
    </Routes>


  )
}

export default Allrouts
