import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ItemsContext } from '../App'
import Header from './Header'
import ContactInfo from './ContactInfo'

const ShopAll = () => {
    const items =useContext(ItemsContext)
  return (
    
    <div className='bg-[#f2f1ed] '>
        <Header/>
        <h1 className='text-5xl font-normal text-center pt-[150px] pb-10'>SHOP BLENDS</h1>

    <div className='flex flex-wrap gap-12 justify-center pb-[100px] '>
{items.map((item) => ( 
             <Link key={item.sku} to={`/Blends/${item.sku}`}>
            
          <div  className=" w-[445px] h-[445px]  p-[10px] ">
            <img  src={item.img} alt={item.name} className="mx-auto shadow-lg rounded-lg" />
            <p className="text-lg font-semibold">{item.name}</p>
            <p className="text-gray-600">${item.price}</p>
          </div>
          </Link>
        ))}
    </div>
    <ContactInfo/>
    </div>
  )
}

export default ShopAll