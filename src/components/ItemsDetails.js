import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';
import ContactInfo from './ContactInfo';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';

const ItemsDetails = ({ items }) => {
  const { sku } = useParams();
  const item = items.find((item) => item.sku === sku);
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    const itemWithNewQty = { ...item, qty };
    dispatch(addItem(itemWithNewQty));
  };

  return (
    <div>
      <div className='flex bg-[#f2f1ed] justify-center'>
        <Header />
        <div className='flex flex-col sm:flex-row gap-4 md:gap-10 h-auto sm:h-[100vh] pt-[150px] px-4 sm:pr-[200px]'>
          <img className='w-full sm:w-[500px] shadow-lg rounded-md h-[500px] object-cover' src={item.img} alt={item.name} />
          <div className='flex flex-col'>
            <h2 className='text-2xl sm:text-4xl font-semibold'>{item.name}</h2>
            <p className='text-lg mt-5'>SKU: {item.sku}</p>
            <p className='text-2xl font-semibold mt-8'>${item.price}</p>
            <p className='text-lg mt-8'>Quantity</p>
            <div className='flex'>
              <p className='w-20 h-10 border-solid bg-white text-center pt-1 mt-2 border-[2px]'>{qty}</p>
              <div className='flex flex-col ml-3 text-lg'>
                <button onClick={() => setQty((prevQty) => (prevQty < 20 ? prevQty + 1 : prevQty))}>+</button>
                <button onClick={() => setQty((prevQty) => (prevQty > 1 ? prevQty - 1 : 1))}>-</button>
              </div>
            </div>
            <button
              className='w-full sm:w-[150px] h-10 bg-black mt-4 sm:mt-[190px] mb-3 text-white hover:bg-zinc-700'
              onClick={() => addToCart(item)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default ItemsDetails;
