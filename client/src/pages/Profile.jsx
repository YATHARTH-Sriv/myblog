import React ,{useState} from 'react'
import { Link } from 'react-router-dom'

function Profile() {
  const [avatar, setavatar] = useState("")
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
          <h2 className="text-xl font-semibold">User Name</h2>
          <Link to="/myposts/sddds">
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
            Elon bezos
          </p>
        </div>
        <div>
          <p className="block text-gray-700">Email</p>
          <p
            className="mt-1 block w-full px-4 py-2 border rounded-md focus:ring-blue-500 focus:border-blue-500"
            
          >bezos@tesla.com</p>
        </div>
        <div className=' gap-2 flex'>
          <p className="block text-gray-700">Posts:</p>
          <p
            className=" block w-full  rounded-md focus:ring-blue-500 focus:border-blue-500"
            
          >3</p>
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Update Profile
        </button>
      </div>
    </div>
  </div>
  )
}

export default Profile