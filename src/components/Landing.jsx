import { useEffect, useState } from 'react';
import { getCoin} from '../services/api';
import Loader from './Loader';
import Coin from './Coin';

const Landing = () => {
    const[coins,setCoins]=useState([])
    const[search,setSearch]=useState("")
    useEffect(()=>{
     const fetchAPI=async()=>{
         const data=await getCoin();
         console.log(data);
         setCoins(data)
     }
     fetchAPI();
    },[])
    const searchHandler=(e)=>{
        setSearch(e.target.value)
    }
    const searchCoins=coins.filter(coin=>coin.name.toLowerCase().includes(search.toLowerCase()))
    return ( 
       < >
       <input className='form form-control my-3' type="text" placeholder='Search' value={search} onChange={searchHandler}/>
       {
           coins.length?
           <div>
           {
               searchCoins.map(coin=><Coin
               key={coin.id}
               name={coin.name}
               image={coin.image}
               symbol={coin.symbol}
               current_price={coin.current_price}
               price_change_24h={coin.price_change_24h}
               market_cap={coin.market_cap}
               />)
           }
       </div>:
       <Loader/>

       }
       
       </>

     );
}
 
export default Landing;