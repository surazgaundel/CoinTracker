import { useState,useEffect } from 'react'
import './index.css'
import Coin from './components/Coin'
import Nav from './components/Nav'
const url='https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
export default function App() {
    const [coin,setCoin]=useState([])
    const [mode,setMode]=useState(true)
    const [search,setSearch]=useState('')

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
    
    const handleChange=(e)=>{
        setSearch(e.target.value)
    }

    const filteredCoins=coin.filter(item=>{
        return item.name.toLowerCase().includes(search.toLowerCase())
    })
    const nightColor={
        backgroundColor:'#2B2B2B',
        color:"#EDF7F1"
    }

    const dayColor={
        backgroundColor:'#F1FEFE',
        color:'#4F65D1'
    }
  return (
    <div style={mode?dayColor:nightColor} >
      <Nav mode={mode} handleChange={handleChange}/>
      <button className='absolute top-0 right-5' onClick={()=>setMode(prev=>!prev)} >{mode? '🌙':'🔆'}</button>
      {filteredCoins.map(item=>{
        return (
        <Coin key={item.id}
            name={item.name} 
            image={item.image} 
            symbol = {item.symbol}
            marketCap={item.market_cap}
            price={item.current_price} 
            priceChange = {item.price_change_percentage_24h}
            volume = {item.total_volume} 
            />)
      })}
    </div>
  )
}
