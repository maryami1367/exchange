import Landing from "./Landing";
import React from "react";

const Coin = ({name,image,symbol,current_price,market_cap,price_change_24h}) => {
    return ( 
        <>
        <div className=" container bg-lightn d-flex justify-content-around mb-2">
        <img src={image} alt={image} className="" style={{width:"60px"}} />
        <span>{name}</span>
        <span>{symbol.toUpperCase()}</span>
        <span>{current_price.toLocaleString()}</span>
        <span>{price_change_24h.toLocaleString()}</span>
        <span>{market_cap.toLocaleString()}</span>
        </div>
        
        </>
     );
}
 
export default Coin;