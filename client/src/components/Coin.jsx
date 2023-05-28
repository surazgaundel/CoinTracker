import { useState } from 'react'

export default function Coin({name,image,symbol,price,volume,priceChange,marketCap}) {
  return (
    <div className="grid grid-cols-6 place-items-center border-2 hover:shadow-md hover:-translate-y-0.5 hover:scale-100 my-3 rounded-md">
        <div className="flex flex-row items-center">
            <img className='h-12 w-12 rounded-full object-cover hover:ring-1 ring-secondary shadow-md hover:scale-20 my-1 p-1'src={image} alt={image}/>
            <div className='uppercase font-semibold mx-2' title='symbol'>{symbol}</div>
        </div>
            <div className='font-semibold text-center'>{name}</div>
            <div title="Current price" className=''>${price}</div>
            <div title='Total Volume'>${volume.toLocaleString()}</div>
            {priceChange>0?(
                <div className='text-green-500 text-center'>{priceChange.toFixed(2)}%</div>
            ):(
                <div className='text-red-500 text-center'>{priceChange.toFixed(2)}%</div>
            )}
            <div className='mx-1' title='Market Cap'>${marketCap.toLocaleString()}</div>
    </div>
    
  )
}
