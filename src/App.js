import React, { createContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import './App.css';
import ContactInfo from './components/ContactInfo';
import ItemsDetails from './components/ItemsDetails';
import Blends from './components/Blends';
import ShopAll from './components/ShopAll';
import Cart from './components/Cart';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import cartReducer from '../src/components/CartSlice';
import Login from './components/Login';

export const ItemsContext = createContext();
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

function App() {
 
  const [items,setItems] = useState ([
    {
      name: 'Blend 01',
      sku: '001',
      price: 85,
      img: 'https://static.wixstatic.com/media/84770f_1cea87595f6c4d37899d07370562089c~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_1cea87595f6c4d37899d07370562089c~mv2.jpg'
    },
    {
      name: 'Blend 02',
      sku: '002',
      price: 85,
      img: 'https://static.wixstatic.com/media/c837a6_1e65da23334f4eb8bafd875a483ef48e~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_1e65da23334f4eb8bafd875a483ef48e~mv2.jpg'
    },
    {
      name: 'Blend 03',
      sku: '003',
      price: 20,
      img: 'https://static.wixstatic.com/media/84770f_c97947e9a07e4991bc824fe6510f9376~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_c97947e9a07e4991bc824fe6510f9376~mv2.jpg'
    },
    {
      name: 'Blend 04',
      sku: '004',
      price: 30,
      img: 'https://static.wixstatic.com/media/c837a6_a846015cd32f428992ec894a73906341~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_a846015cd32f428992ec894a73906341~mv2.jpg'
    },
    {
      name: 'Blend 05',
      sku: '005',
      price: 7.50,
      img: 'https://static.wixstatic.com/media/84770f_141e2ec6209840449c122d2f447d433c~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/84770f_141e2ec6209840449c122d2f447d433c~mv2.jpg'
    },
    {
      name: 'Blend 06',
      sku: '006',
      price: 15,
      img: 'https://static.wixstatic.com/media/c837a6_601e0903e6724acfb1f2826549e1ac53~mv2.jpg/v1/fill/w_625,h_625,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_601e0903e6724acfb1f2826549e1ac53~mv2.jpg'
    }
  ]);
 
  
  return (
    <Provider store={store}> 
    <div className="App">
    <ItemsContext.Provider value={items}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/ContactInfo' element={<ContactInfo/>}/>
        <Route path='/Blends' element={<Blends items={items} />} />
        <Route path='/Blends/:sku' element={<ItemsDetails items={items} />} />
        <Route path='/ShopAll' element={<ShopAll/>}/>
        <Route path='/Cart' element={<Cart/>}/>
        <Route path='/Login' element={<Login/>}/>
      </Routes>
      </ItemsContext.Provider>
    </div>
    </Provider>
  );
}

export default App;
