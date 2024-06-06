import React from 'react'
import { Link } from 'react-router-dom';

function Myposts() {
    const posts = [
        { id: 1, title: "First Post" },
        { id: 2, title: "Second Post" },
        { id: 3, title: "Third Post" },
      ];
    
      return (
        <div className="container mx-auto p-4">
          <h1 className=" text-white text-2xl font-bold mb-4">Dashboard</h1>
          <div className="bg-white shadow-md rounded-lg p-6">
            {posts.map((post) => (
              <div key={post.id} className="flex justify-between items-center mb-4 p-4 border-b border-gray-200">
                <Link to="/posts/feff"><h2 className="text-xl font-semibold">{post.title}</h2></Link>
                <div>
                    <Link to="/posts/ssss/edit">
                  <button className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-600">Edit</button>
                  </Link>
                  <Link to="/delete">
                  <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )
}

export default Myposts