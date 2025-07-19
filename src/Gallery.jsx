import React from 'react'
import posts from './assets/posts'
import PostCard from './PostCard'

const Gallery = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-3 gap-4  p-4'>
            {posts.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
        </div>
    )
}

export default Gallery