import React from 'react'
import Header from './Header'
import ContactInfo from './ContactInfo'

const About = () => {
  return (
    <div > 
    <Header/>
    <div className='mt-[60px]'>
    <div className='bg-[#fefbf1] font-normal h-[500px] flex justify-center items-center'>
        <p className='text-3xl text-center max-w-[700px] '>we believe that a great cup of coffee goes beyond flavor – it's about fostering community, promoting fair trade practices, and caring for our planet. Our commitment extends beyond the coffee maker itself; it's a promise to make a positive impact at every step of the journey.</p>
    </div>

    </div>
    <div className='bg-[#fff7d8] '>
        <h1 className='text-5xl font-normal  py-16 text-center '>HOW IT'S MADE</h1>
        <div className='flex mx-9 gap-9  justify-around' >
            <div className='flex flex-col gap-3 pb-[115px]'>
                <img className='w-[445px] h-[340px]' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqou7uNmQ-O_zko9F4CzUJrc68G5ieA8JKpIvmZ55cyf140XAO'></img>
                <p className='text-3xl font-normal' >Community Growth</p>
            </div>
            <div className='flex flex-col gap-3'>
                <img className='w-[445px] h-[340px]' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSY8ShIO3UzhDc3YCMx0WVjKzvBTu811T0s56bE632jqn8FHnla' /> 
                <p className='text-3xl font-normal' >Fair Trade</p>
            </div >
            <div className='flex flex-col gap-3'>
                <img className='w-[445px] h-[340px]' src='https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQYzUUeDVNllYxET_nV7I_wFVCiCwu066lIuOIMfdnKEVn750z7' />
                <p className='text-3xl font-normal' >Fair Trade</p>
            </div>
        </div>
        </div>
        <ContactInfo/>
    </div>

  )
}

export default About