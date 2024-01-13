import React from 'react';

const Text2 = () => {
  return (
    <div className='bg-[#fff7d8]'>
      <h1 className='text-4xl md:text-5xl lg:text-6xl font-normal py-8 md:py-16 text-center'>
        GRAB IT ON THE GO
      </h1>
      <div className='flex flex-col md:flex-row mx-4 md:mx-9 gap-4 md:gap-9 justify-around'>
        <div className='flex flex-col gap-3 pb-8 md:pb-16'>
          <img
            className='w-full md:w-[445px] h-[340px] md:h-[400px]'
            src='https://static.wixstatic.com/media/11062b_e73cf15b828344d39051f24439d9089a~mv2.jpg/v1/fill/w_1158,h_715,al_c,q_85,enc_auto/11062b_e73cf15b828344d39051f24439d9089a~mv2.jpg'
            alt='Espresso'
          />
          <p className='text-xl md:text-3xl font-normal'>Espresso</p>
        </div>
        <div className='flex flex-col gap-3 pb-8 md:pb-16'>
          <img
            className='w-full md:w-[445px] h-[340px] md:h-[400px]'
            src='https://planetpulp.ca/wp-content/uploads/2023/10/pexels-ketut-subiyanto-4349763.jpg'
            alt='Pour-Over'
          />
          <p className='text-xl md:text-3xl font-normal'>Pour-Over</p>
        </div>
        <div className='flex flex-col gap-3 pb-8 md:pb-16'>
          <img
            className='w-full md:w-[445px] h-[340px] md:h-[400px]'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIabLjm-vrRpFgQDq1f1UpvzstP1QJ5AdeJGLfqv3EyYdeIUVq'
            alt='Drip'
          />
          <p className='text-xl md:text-3xl font-normal'>Drip</p>
        </div>
      </div>
      <div className='bg-cover h-[300px] md:h-[600px] bg-[url("https://static.wixstatic.com/media/c837a6_6d76103ea529451fbe00ee270c1f59ea~mv2.jpg/v1/fill/w_1225,h_1105,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c837a6_6d76103ea529451fbe00ee270c1f59ea~mv2.jpg")]'></div>
    </div>
  );
};

export default Text2;
