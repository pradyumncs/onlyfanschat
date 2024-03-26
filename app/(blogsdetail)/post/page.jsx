import React from 'react'
import {notFound} from 'next/navigation'



async function getData() {
    const response = await fetch('http://localhost:3000/api/languages')
   if(!response.ok) return notFound()
    
    return response.json()
   }

const Post= async() => {

    const data = await getData()
   console.log(data)
return (
    <div>
        <h1>Post</h1>
    </div>
)

}
export default Post

