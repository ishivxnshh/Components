import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <div className='flex justify-between items-center bg-slate-800 text-white border border-white px-6 py-3'>
            <div className='text-lg font-bold border border-blue-500 bg-gradient-to-tr from-fuchsia-400 to-black px-6 py-3 rounded-3xl hover:bg-gradient-to-bl hover:from-teal-400 hover:to-black'>
                <button>NavBar</button>
            </div>

            <div className='flex gap-6'>
                <Link to="/about" className='border border-blue-500 bg-gradient-to-tr from-fuchsia-400 to-black px-6 py-3 rounded-3xl hover:bg-gradient-to-bl hover:from-teal-400 hover:to-black'>About</Link>
                <Link to="/contact" className='border border-blue-500 bg-gradient-to-tr from-fuchsia-400 to-black px-6 py-3 rounded-3xl hover:bg-gradient-to-bl hover:from-teal-400 hover:to-black'>Contact</Link>
                <a
                    href="https://www.linkedin.com/in/ishivxnshh/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='border border-blue-500 bg-gradient-to-tr from-fuchsia-400 to-black px-6 py-3 rounded-3xl hover:bg-gradient-to-bl hover:from-teal-400 hover:to-black hidden md:inline'
                >
                    LinkedIn
                </a>
                <a
                    href="https://github.com/ishivxnshh/Components"
                    target="_blank"
                    rel="noopener noreferrer"
                    className='border border-blue-500 bg-gradient-to-tr from-fuchsia-400 to-black px-6 py-3 rounded-3xl hover:bg-gradient-to-bl hover:from-teal-400 hover:to-black hidden md:inline'
                >
                    GitHub
                </a>
            </div>
        </div>
    )
}

export default NavBar