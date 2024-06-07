import React, {useEffect,useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


function Posts() {
  const [posts, setposts] = useState([])
  

  useEffect(() => {
    const fetchposts= async()=>{
      
      try {
        const res=await axios.get(`${import.meta.env.VITE_APP_URL}/api/posts`)
        setposts(res.data)
        console.log(res)
        
      } catch (error) {
       console.log(error)
      }
      
 }
 fetchposts()
  }, [])
   
  
  return (

    
    <div className=" bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className=" text-black ">Products</h2>
  
          <div className=" text-black grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {posts && posts.map(({ title, content, description, _id, thumbnail }) => (
                <div key={_id}>
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                     src={thumbnail}
                     alt="post-thumbnail"
                     className="h-full w-full object-cover object-center group-hover:opacity-75"
                   />
                 </div>
                 <Link to={`posts/${_id}`}><h3 className="mt-4 text-sm text-gray-700">{title}</h3></Link>
                 <p className="mt-1 text-lg font-medium text-gray-900">{description}</p>
               </div> 
                
              )
            
          )
        }

            
          </div>
        </div>
      </div>
  )
}

export default Posts

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/


