import axios from 'axios'
import React, { useEffect, useState } from 'react'
import PostCard from './PostCard'
import Loading from './Loading'

const Home = () => {

    const [data,setData] = useState([])
    const [page,setPage] = useState(1)
    const [loading,setLoading] = useState(false)

    const fetchData = async() => {
      let res = await axios.get(`https://jsonplaceholder.typicode.com/photos?_limit=9&_page=${page}`)
    //   console.log(res.data)
      setData((prev)=>[...prev,...res.data])
      setLoading(false)
    }

    const handleInfiniteScroll = () => {
        // console.log("scrollHeight" , document.documentElement.scrollHeight) //whole height of content of webpage  from start of webpage to end
        // console.log("innerHeight" ,window.innerHeight) // height which is visible to user without scroll
        // console.log("scrollTop",document.documentElement.scrollTop) // after scrolling height remained
  
        try {
            if(window.innerHeight +  document.documentElement.scrollTop +1  >=  document.documentElement.scrollHeight){
                setLoading(true)
                setPage((prev)=>prev + 1)
            }
        } catch (error) {
            console.log(error)
        }

    }

    useEffect(()=>{
      fetchData()
    },[page])

    useEffect(()=>{
        window.addEventListener("scroll",handleInfiniteScroll)
        return () => window.removeEventListener("scroll",handleInfiniteScroll)
    },[])

  return (
    <div className='bg-gray-800' style={{minHeight:"100vh"}}>
       <h1 className='text-white text-6xl'>My Posts</h1>
       <PostCard data={data} />
       {loading && <Loading/>}
    </div>
  )
}

export default Home