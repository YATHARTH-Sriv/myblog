import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function RegisterPage() {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const [email, setemail] = useState('')
  const [error, seterror] = useState('')
  const navigate=useNavigate()
  const register=async(e)=>{
    e.preventDefault()

    try {
      const res=await fetch(`${import.meta.env.VITE_APP_BASE_URL}/users/register`,{
        method: 'POST',
        body: JSON.stringify({username,password,email}),
        headers:{'Content-Type':'application/json'}
      })
      console.log(res)
      
      navigate('/login')
    } catch (error) {
       seterror(error.response.data.message)
    }
  }
  
  return (
    
    <div className=" text-white flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-white text-center text-2xl font-bold leading-9 tracking-tight ">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={register}>
          {error && <p className=' text-white p-2 text-2xl'>{error}</p>}
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 ">
              email
            </label>
            <div className="mt-2">
              <input
              type="text" placeholder='email' name='email' value={email} onChange={e=>setemail(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium leading-6">
                Password
              </label>
              
            </div>
            <div className="mt-2">
              <input
               type="password" placeholder='password' value={password} onChange={e=>setpassword(e.target.value)}
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium leading-6 ">
              Username
            </label>
            <div className="mt-2">
              <input
              type="text" placeholder='username' name='username' value={username} onChange={e=>setusername(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Sign in
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-sm text-gray-500">
          Already have a account?{' '}
          <Link to="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Login
          </Link>
        </p>
      </div>
    </div>
    
  )
}


export default RegisterPage


