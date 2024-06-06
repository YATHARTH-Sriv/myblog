


import React, { createContext, useContext, useState, useEffect } from 'react';

// const getCookie = (name) => {
//   const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
//   return match ? match[2] : null;
// };

// const LocalStorageContext = createContext();

// // export const useLocalStorage = () => useContext(LocalStorageContext);

// const LocalStorageProvider = ({ children }) => {
//   const [cookieValue, setCookieValue] = useState('');

//   useEffect(() => {
//     const cookieName = 'token'; 
//     const value = getCookie(cookieName);

//     if (value) {
     
//       console.log(value)
//       localStorage.setItem(cookieName, value);
//       setCookieValue(value);
//     }
//   }, []);

//   return (
//     <LocalStorageContext.Provider value={{ cookieValue, setCookieValue }}>
//       {children}
//     </LocalStorageContext.Provider>
//   );
// };
export const Usercontext= createContext()

 const Userprovider=({children})=>{
 const [currentuser,setcurrent]= useState('')

 
 
 return <Usercontext.Provider value={{currentuser, setcurrent}}>{children}</Usercontext.Provider>
}

export { Userprovider}

