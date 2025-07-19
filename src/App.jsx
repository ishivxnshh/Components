import React from 'react'
import NavBar from './NavBar'
import Gallery from './Gallery'

const App = () => {

  return (
    <div className='bg-gradient-to-b from-slate-300 to-slate-900 min-h-screen flex flex-col'>
      <NavBar />
      <div className='flex-grow flex justify-center pt-5'>
        <h1 className='text-4xl md:text-6xl font-bold text-red-700 text-center tracking-tight leading-tight drop-shadow-lg'>Unleash the Chaos.🔥</h1>
      </div>
      <Gallery />
    </div>
  )
}

export default App