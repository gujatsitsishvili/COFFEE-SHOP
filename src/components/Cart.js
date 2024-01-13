import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, clearCart } from './CartSlice';
import Header from './Header';
import ContactInfo from './ContactInfo';

const Cart = () => {
  const items = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveItem = (sku) => {
    dispatch(removeItem(sku));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const sum = () => {
    return items.reduce((sum, item) => sum + item.qty * item.price, 0);
  };

  return (
    <div className='bg-[#f2f1ed]'>
      <Header />
      <div className='pt-[120px] mb-20 px-4 sm:px-6 md:px-8 lg:px-10 xl:px-16'>
        <h2 className='text-2xl sm:text-4xl font-normal pb-4 sm:pb-8'>Cart</h2>
        {items.map((item) => (
          <div key={item.sku} className='flex flex-col bg-white border-2 shadow-lg mb-4 rounded-lg p-4 sm:p-5 md:p-6 gap-4 sm:gap-7'>
            <img className='rounded-md shadow-lg w-full md:w-[200px] h-[150px] object-cover' src={item.img} alt={item.name} />
            <div className='flex flex-col items-start justify-between'>
              <p className='text-lg sm:text-xl md:w-[300px] font-semibold'>{item.name} - ${item.price}</p>
              <p>Quantity: {item.qty}</p>
              <button className='text-red-700' onClick={() => handleRemoveItem(item.sku)}>
                Remove
              </button>
            </div>
            <p className='text-yellow-500 text-lg font-semibold w-full text-end'>
              Subtotal: $ {item.qty * item.price}
            </p>
          </div>
        ))}
        <div className='flex justify-between mt-3 items-baseline'>
          <button className='w-[150px] sm:w-[200px] ml-2 sm:ml-6 rounded-2xl h-10 bg-black text-white hover:bg-zinc-700' onClick={handleClearCart}>
            Clear Cart
          </button>
          <p className='text-yellow-600 font-bold text-xl'>Total Sum: $ {sum()}</p>
        </div>
      </div>
      <ContactInfo />
    </div>
  );
};

export default Cart;
