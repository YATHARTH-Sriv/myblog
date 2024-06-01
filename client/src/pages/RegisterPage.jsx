import React, { useState } from 'react'


function RegisterPage() {
  const [username,setusername]=useState('')
  const [password, setpassword] = useState()
  const register=(e)=>{
    e.preventDefault()
    console.log(username)
    
   
  }
  return (
    <div>
      <h2>Sign up</h2>
      <form onSubmit={register} >
        <input type="text" placeholder='username' value={username} onChange={e=>setusername(e.target.value)}/>
        <input type="password" placeholder='password' value={password} onChange={e=>setpassword(e.target.value)}/>
        <button>Sign up</button>
      </form>
    </div>
  )
}

export default RegisterPage