import React from 'react'

const PostCard = ({ post }) => {
  return (
    <div className='bg-white rounded-lg shadow-md overflow-hidden border box-border border-fuchsia-950 text-gray-800 shadow-fuchsia-900'>
        <img src={post.image} alt="Post Visual" className='w-full h-auto  object-cover'/>
        <div className='p-4'>
            <p className='text-gray-800 text-sm'>{post.content}</p>
        </div>
    </div>
  )
}

export default PostCard