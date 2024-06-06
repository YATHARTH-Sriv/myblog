import React, { useContext } from 'react'
import { Usercontext  } from '../Usercontext';
import { useNavigate } from 'react-router-dom';

function Logout() {
  const {setcurrent}=useContext(Usercontext)
  const navigate=useNavigate()
  setcurrent(null)
  navigate("login")
  return (
    <></>
  )
}

export default Logout