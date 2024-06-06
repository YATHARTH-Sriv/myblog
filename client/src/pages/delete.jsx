
import React, { useContext,useState,useEffect } from 'react'
import { Usercontext  } from '../Usercontext';
import { useNavigate } from 'react-router-dom';

function Delete() {
 const {currentuser}=useContext(Usercontext)
  const navigate=useNavigate()
  useEffect(() => {
    const token=currentuser.token
    if(!token){
      navigate("/login")
    }
  }, [])
  
  return (
    <div>delete</div>
  )
}

export default Delete