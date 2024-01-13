import React, { useContext } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { ItemsContext } from '../App'

const Blends = () => {
  const items = useContext(ItemsContext);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <div className="flex bg-[#fefbf1] gap-12 flex-col items-center mx-auto py-8">
      <h2 className='text-4xl font-semibold'>DELIVERED FRESH</h2>
      <Slider {...settings} className="w-full md:w-[90%]">
        {items.map((item) => (
          <Link key={item.sku} to={`/Blends/${item.sku}`}>
            <div className="px-6">
              <img src={item.img} alt={item.name} className="mx-auto pb-4 rounded-lg" />
              <p className="text-lg font-semibold">{item.name}</p>
              <p className="text-gray-600">${item.price}</p>
            </div>
          </Link>
        ))}
      </Slider>
      <Link to='/ShopAll'>
        <button className="text-4xl mr-9 my-7 border-black border hover:bg-lime-700 transition duration-1000 hover:text-[#fff7d8] font-semibold ml-9 w-full md:w-[340px] h-[95px] bg-[#fff7d8]">
          Shop All
        </button>
      </Link>
    </div>
  );
};

export default Blends;
