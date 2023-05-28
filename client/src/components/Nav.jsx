import React from 'react'

export default function Nav({mode,handleChange}) {

  return (
    <nav className="flex flex-col flex-1 items-center bg-local">
        <h1 className='uppercase font-semibold font-serif tracking-wider m-3 text-3xl'>Kripto Lister</h1>
        <input type='text' placeholder='Search' name='crypto_info' onChange={handleChange} className='border-2 shadow-md w-fit px-2 py-1 rounded-lg bg-inherit hover:ring-1 ring-slate-400 '/>
    </nav>
  )
}
