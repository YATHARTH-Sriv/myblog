
import React, { useContext,useState,useEffect } from 'react'
import { Usercontext  } from '../Usercontext';
import { useNavigate, useParams } from 'react-router-dom';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import axios from 'axios'

const modules={
  toolbar: [
    [{ 'header': [1,2,3,4,5,6,false]}],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, { 'indent':'-1'}, { "indent":"+1"}],
    ['link','image'],
    ['clean']
  ]
}

const formats=[
  'header',
  'bold', 'italic','underline','strike','blockquote',
  'list','bullet','indent',
  'link','image'
]

function Edit() {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [content, setcontent] = useState("")
  const {currentuser}=useContext(Usercontext)
  const navigate=useNavigate()
  const {id}=useParams()


  useEffect(() => {
    const token=currentuser.token
    if(!token){
      navigate("/login")
    }
  }, [])


  useEffect(() => {
    const getpost=async()=>{
      try {
        const post= await axios.get(`${import.meta.env.VITE_APP_URL}/api/posts/${id}`)
        settitle(post.data.title)
        setcontent(post.data.content)
        setdesc(post.data.description)
      } catch (error) {
        console.log(error)
      }
    }
    getpost()
  },[currentuser])
  
  const editpost=async (e)=>{
    ev.preventDefault();
    const data = new FormData();
    data.set('title', title);
    data.set('description', description);
    data.set('content', content);
    const response = await axios.patch(`${import.meta.env.VITE_APP_URL}/api/posts/${id}`, data, {
      // withCredentials: true,
      headers: {Authorization: `Bearer ${token}`}
    });
  }
  return (
    <section className='ml-40 mr-30 mt-20 mb-20 m-20 p-3'>
      <div className=' text-2xl gap-4 items-center '>
        <h2 className=' p-2 m-3 text-2xl   border-green-600 text-white'>Edit Post</h2>
        <form onSubmit={editpost}  method="POST" enctype="multipart/form-data">
          <input className=' rounded-lg m-3 w-fit ' type="text" placeholder='Title' value={title} onChange={(e)=> settitle(e.target.value)}/>
          <ReactQuill className=' m-3 w-full text-white' modules={modules} formats={formats} value={desc} onChange={setdesc}/>
          <button className=' m-3 text-xl p-2 hover:bg-green-500 rounded-xl bg-purple-600 text-white' type='submit' >Update</button>
        </form>
        {/* <button className=' m-3 text-xl p-2 hover:bg-green-500 rounded-xl bg-purple-600 text-white' type='submit' >Update</button> */}
      </div>
    </section>
  )
}

export default Edit