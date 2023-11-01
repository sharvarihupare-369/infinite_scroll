import React from 'react'

const PostCard = ({data}) => {
    // console.log(data)
  return (
    <div className='grid grid-cols-3 gap-10 p-10'>
    {
        data?.map((el)=>{
            {/* console.log(el) */}
            return <div key={el.id} className='bg-purple-400' style={{boxShadow:"rgba(0, 0, 0, 0.24) 0px 3px 8px",padding:"10px"}}>
             <div className='w-10 text-center rounded-full border-2 p-2'>{el.id}</div>
             <h1>{el.title}</h1>
             <p>{el.body}</p>
             </div>
        })
    }
    </div>
  )
}

export default PostCard