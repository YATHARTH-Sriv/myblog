import React, { useState,useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Usercontext } from '../Usercontext'

const getCookie =  (name) => {
  const match =  document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  return match ? match[2] : null;
};

function Login() {
  const [username, setusername] = useState('')
  const [cookieValue, setCookieValue] = useState('');
  const [password, setpassword] = useState('')
  const [error, seterror] = useState('')
  const [redirect,setRedirect] = useState(false);
  const {setcurrent} = useContext(Usercontext);
  const navigate=useNavigate()
  async function login(ev) {
    ev.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_APP_BASE_URL}/users/login`, {
      method: 'POST',
      body: JSON.stringify({username, password}),
      headers: {'Content-Type':'application/json'},
      // credentials: 'include',
    });
    if (response.ok) {
      response.json().then(userInfo => {
        console.log(userInfo)
        const cookieName = 'token'; 
        const value = getCookie(cookieName);
        if (value) {
          console.log(value)
          localStorage.setItem(cookieName, value);
          setCookieValue(value);
        }
        console.log(cookieValue)
        setcurrent(userInfo);
        setRedirect(true);
      });
    } else {
      alert('wrong credentials');
    }
  }

  if (redirect) {
    navigate('/')
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
          Log in to your account
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form className="space-y-6" onSubmit={login}>
          {error && <p className=' text-white p-2 text-2xl'>{error}</p>}
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
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Log in
            </button>
          </div>
        </form>
        <p className="mt-10 text-center text-sm text-gray-500">
          Do not have a account?{' '}
          <Link to="/register" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
            Register
          </Link>
        </p>
      </div>
    </div>
    
  )
}


export default Login


