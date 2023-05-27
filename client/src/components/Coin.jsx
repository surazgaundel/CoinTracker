import { useState } from 'react'

export default function Coin({name,image,symbol,price,volume,priceChange,marketcap}) {
  return (
    <div className="border-2 border-separate flex flex-row justify-start hover:shadow-md m-1 hover:-translate-y-0.5 hover:scale-100 my-3 rounded-md">
        <div>
            <img className='h-12 w-12 rounded-full object-cover hover:ring-1 ring-green-400 shadow-md hover:scale-20 my-1' onClick={()=>console.log(name)} src={image} alt={image}/>
        </div>
        <div>
            <h1>{symbol}</h1>
            <h1>{name}</h1>
        </div>

    </div>
    
  )
}
