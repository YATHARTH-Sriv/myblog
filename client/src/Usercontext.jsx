


import React, { createContext, useContext, useState, useEffect } from 'react';

export const Usercontext= createContext()

 const Userprovider=({children})=>{
 const [currentuser,setcurrent]= useState('')

 
 
 return <Usercontext.Provider value={{currentuser, setcurrent}}>{children}</Usercontext.Provider>
}

export { Userprovider}

