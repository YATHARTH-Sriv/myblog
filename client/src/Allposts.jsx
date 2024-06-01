import React from 'react'

function Allposts() {
  return (
    <div className=' mt-3 m-5 pl-3 pr-3 grid grid-cols-12 '>
        <div className=' m-2 rounded-xl  col-span-6'>
        <img src='https://cdn.britannica.com/01/94501-050-7C939333/Big-Ben-London.jpg' height={400} width={400} alt="post-image" className=' rounded-xl'/>
        </div>
        <div className=' border-black mt-3 text-xl gap-3 col-span-6'>
        <p>This is an example post with abstract title </p>
        <p>BY: Author Name</p>
        </div>
    </div>
  )
}

export default Allposts