import React ,{useState,useContext, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Usercontext  } from '../Usercontext';
import axios from 'axios'

function Profile() {
  const [avatar, setavatar] = useState("")
  const [details, setdetails] = useState("")
  const {currentuser}=useContext(Usercontext)
  const token=currentuser?.token
  const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate('/')
    }
  })

  useEffect(() => {
    const getdetails=async()=>{
      const res=await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/users/profile`,{
        withCredentials: true,
        headers: {Authorization: `Bearer ${token}`}
      })
      console.log(res)
      setdetails(res.data)

    }
    getdetails()
  },[currentuser])
  
  
  return (
    <div className="max-w-2xl mx-auto p-4">
    <div className="bg-white shadow-md rounded-lg p-6">
      <div className="flex items-center space-x-4">
        <img
          className="w-16 h-16 rounded-full"
          src="https://via.placeholder.com/150"
          alt="User Avatar"
        />
        <div>
          <h2 className="text-xl font-semibold">{details.username}</h2>
          <Link to={`/myposts/${currentuser.id}`}>
          <button className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
            Show All Posts
          </button>
          </Link>
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div>
          <p className="block text-gray-700">Username:</p>
          <p className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500">
            {details.username}
          </p>
        </div>
        <div>
          <p className="block text-gray-700">Email</p>
          <p
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            
          >{details.email}</p>
        </div>
        <div className=' gap-2 flex'>
          <p className="block text-gray-700">Posts:</p>
          <p
            className=" block w-full  rounded-md focus:ring-blue-500 focus:border-blue-500"
            
          >3</p>
        </div>
        
      </div>
    </div>
  </div>
  )
}

export default Profile