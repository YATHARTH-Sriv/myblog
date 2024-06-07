import React ,{useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Usercontext  } from '../Usercontext';
import axios from "axios"

function Myposts() {
     
      const navigate=useNavigate()
      const [post, setpost] = useState("")
      const {currentuser}=useContext(Usercontext)
      const token=currentuser?.token
      const id=currentuser.id

      useEffect(() => {
        
      if(!token){
        navigate('/login')
      }

      })

      useEffect(() => {
        const fetchpost=async()=>{
           try {
            const postsbyuser=await axios.get(`http://localhost:8000/api/posts/users/${id}`, {
              withCredentials: true,
              headers: {Authorization: `Bearer ${token}`}
            })
            setpost(postsbyuser.data)
            console.log(post)
           } catch (error) {
            
           }
        }
        fetchpost()
      },[currentuser])
      
      
    
      return (
        <div className="container mx-auto p-4">
          <h1 className=" text-white text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            {post && post.map((postone) => (
              <div key={postone._id} className="flex justify-between items-center mb-4 p-4 border-b border-gray-200">
                <Link to={`/posts/${postone._id}`}><h2 className="text-black text-xl font-semibold">{postone.title}</h2></Link>
                <div>
                    <Link to={`/posts/${postone._id}/edit`}>
                  <button className="bg-blue-500 text-black px-4 py-2 rounded-md mr-2 hover:bg-blue-600">Edit</button>
                  </Link>
                  <Link to={`/delete/${postone._id}`}>
                  <button className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Myposts