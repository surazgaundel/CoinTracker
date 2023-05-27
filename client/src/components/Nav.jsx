import React from 'react'

export default function Nav({mode}) {

  return (
    <nav className="flex flex-col flex-1 items-center">
        <h1 className='uppercase font-semibold font-serif tracking-wider m-3 text-3xl'>Crypto Tracker</h1>
        <input type='text' placeholder='Search' name='crypto_info' className='border-1 shadow-md w-fit px-2 py-1 rounded-lg hover:ring-1 ring-slate-400 '/>
    </nav>
  )
}
