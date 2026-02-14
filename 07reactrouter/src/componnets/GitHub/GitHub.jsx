import React, { useLayoutEffect, useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

const GitHub = () => {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(() => {
    //   fetch('https://api.github.com/users/buildwithsandeep')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //     setData(data)

        
    //   })
    
    //   }, [])
    

  return (
    <div className='text-center bg-gray-600 m-4 text-white p-4 text-3xl'>
        GitHub Follwers:{data.followers}
        <img src={data.avatar_url} alt="Git Picture" width={300}/>
      
    </div>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
const response = await fetch('https://api.github.com/users/buildwithsandeep')
return response.json()
}
