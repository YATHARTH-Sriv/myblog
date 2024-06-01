import React from 'react'
import Allposts from '../Allposts'
import Header from '../components/Header'

function Home() {
  return (
    <>
    <Header/>
    <div className=' rounded-md m-3 sm:w-full  mt-3 bg-slate-600 ml-3 p-3 w-full'>
    <Allposts/>
    <Allposts/>
    <Allposts/>
    <Allposts/>
    <Allposts/>
    <Allposts/>
    </div>
    </>
  )
}

export default Home