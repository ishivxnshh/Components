import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-black text-white border border-white px-6 py-3'>
            <div className='text-lg font-bold'> 
                <button>NavBar</button>
            </div>

            <div className='flex gap-6'>
                <a href="About">Home</a>
                <a href="Contact">Contact</a>
                <Link to={}>Linkedin</Link>
                <Link>Github</Link>
            </div>
        </div>
    )
}

export default NavBar