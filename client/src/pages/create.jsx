import React, { useContext,useState,useEffect } from 'react'
import { Usercontext  } from '../Usercontext';
import { useNavigate } from 'react-router-dom';
import ReactQuill from "react-quill"
import 'react-quill/dist/quill.snow.css'
import axios from "axios"


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

function Create() {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [error, seterror] = useState("")
  const [content, setcontent] = useState("")
  const {currentuser}=useContext(Usercontext)
  const token=currentuser?.token
  const navigate=useNavigate()
  useEffect(() => {
    if(!token){
      navigate("/login")
    }
  }, [])

  const handleChange = (value) => {
    setcontent(value);
  };

  

  async function createNewPost(ev) {
    const data = new FormData();
    data.set('title', title);
    data.set('description', description);
    data.set('content', content);
    data.set('thumbnail', thumbnail);
    console.log(thumbnail)
    ev.preventDefault();
    const response = await axios.post(`${import.meta.env.VITE_APP_URL}/api/posts`, data, {
      withCredentials: true,
      headers: {Authorization: `Bearer ${token}`}
    });
    if (response) {
      navigate("/")
    }
  }

  
  const [thumbnail, setthumbnail] = useState("")
  return (
    <div className=' bg-white text-black'>
    <section className=' ml-40 mr-30 mt-20 mb-20 m-20 p-3 border-green-600 items-center'>
      <div className=' text-2xl gap-4 items-center '>
        <h2 className=' p-2 m-3 text-2xl   border-green-600 text-black'>Create Post</h2>
        <form className=' ' onSubmit={createNewPost} action="/posts" method="POST" enctype="multipart/form-data">
          <input className=' rounded-lg m-3 w-fit ' type="text" placeholder='title' value={title} onChange={(e)=> settitle(e.target.value)}/>
          {/* <input className=' m-3 rounded-md' name='id' placeholder='id' type='text' onChange={e=>setid(e.target.value)} /> */}
          <input className=' rounded-lg m-3 w-fit ' type="text" placeholder='description' value={description} onChange={(e)=> setdescription(e.target.value)}/>
          <ReactQuill className=' m-3 w-full text-black' modules={modules} formats={formats} value={content} onChange={handleChange}/>
          
          <input className=' m-3 rounded-md' name='thumbnail' type='file' onChange={e=>setthumbnail(e.target.files[0])} accept='png, jpg, jpeg'/>
          <button type='submit' className=' m-3 text-xl p-2 hover:bg-green-500 rounded-xl bg-purple-600 text-white' >Create</button>
        </form>
      </div>
    </section>
  
  </div>
  )
}

export default Create