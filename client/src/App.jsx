import { useState,useEffect } from 'react'
import './index.css'
import Coin from './components/Coin'
import Nav from './components/Nav'
const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
export default function App() {
    const [coin,setCoin]=useState([])
    const [mode,setMode]=useState(true)
    useEffect(()=>{
        coinFetch(url);
    },[])

    const coinFetch=async(url)=>{
        try{
            const response=await fetch(url)
            const data= await response.json();
            setCoin(data);
        }
        catch(err){
            console.error(err)
        }
    }
    const handleMood=()=>{
        setMode(prev=>!prev);

    }
    const dayColor={
        backgroundColor:'#121212'
    }

    const nightColor={
        backgroundColor:'#235658'
    }
  return (
    <div style={mode?dayColor:nightColor}>
      <Nav mode={mode} />
      <button className='absolute top-0 right-5' onClick={handleMood} >{mode? '🌙':'🔆'}</button>
      {coin.map(item=>{
        return (<Coin key={item.id} {...item} />)
      })}
    </div>
  )
}
